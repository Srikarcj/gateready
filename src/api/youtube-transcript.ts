import axios from 'axios';

export async function getYouTubeTranscript(videoId: string) {
  try {
    const response = await axios.get(`https://www.youtube.com/watch?v=${videoId}`);
    const html = response.data;
    
    // Extract transcript data
    const transcriptMatch = html.match(/"captions":\s*({[^}]+})/);
    if (!transcriptMatch) {
      throw new Error('No transcript available');
    }

    const transcriptData = JSON.parse(transcriptMatch[1]);
    const transcript = transcriptData.playerCaptionsTracklistRenderer.captionTracks[0];
    
    if (!transcript) {
      throw new Error('No transcript available');
    }

    // Fetch the actual transcript
    const transcriptResponse = await axios.get(transcript.baseUrl);
    const transcriptText = transcriptResponse.data;
    
    // Parse the transcript XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(transcriptText, 'text/xml');
    const textElements = xmlDoc.getElementsByTagName('text');
    
    return Array.from(textElements)
      .map(el => el.textContent)
      .join(' ');
  } catch (error) {
    console.error('Error fetching transcript:', error);
    throw new Error('Failed to fetch transcript');
  }
} 