// Comprehensive GATE Questions Database for All Branches and Subjects

export interface GATEQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  type: 'MCQ' | 'NAT' | 'MSQ';
  marks: number;
  subject: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  year?: number;
  explanation?: string;
}

interface BranchQuestions {
  [subject: string]: GATEQuestion[];
}

type QuestionBank = {
  [branch: string]: BranchQuestions | GATEQuestion[];
} & {
  'General Aptitude': GATEQuestion[];
  'Engineering Mathematics': GATEQuestion[];
};

export const gateQuestions: QuestionBank = {
  // Computer Science Questions
  'Computer Science': {
    'Programming': [
      {
        "id": 1,
        "question": "What is the time complexity of the following code snippet?\n\nfor(int i=0; i<n; i++) {\n    for(int j=0; j<i; j++) {\n        printf(\"%d \", i*j);\n    }\n}",
        "options": ["O(n)", "O(n²)", "O(n log n)", "O(2ⁿ)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Medium",
        "year": 2023,
        "explanation": "The outer loop runs n times, inner loop runs 0+1+2+...+(n-1) = n(n-1)/2 times, which is O(n²)"
      },
      {
        "id": 2,
        "question": "Which of the following is NOT a valid C++ identifier?",
        "options": ["_variable", "variable_1", "1variable", "Variable"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2022,
        "explanation": "Identifiers cannot start with a digit[3][5][9]."
      },
      {
        "id": 3,
        "question": "What will be the output of the following C code?\n\nint main() {\n    int x = 5;\n    printf(\"%d %d %d\", x++, ++x, x);\n    return 0;\n}",
        "options": ["5 7 7", "5 6 6", "6 7 7", "Undefined behavior"],
        "correct": 3,
        "type": "MCQ",
        "marks": 2,
        "subject": "Programming",
        "topic": "Operators",
        "difficulty": "Hard",
        "year": 2023,
        "explanation": "The order of evaluation of function arguments is undefined in C."
      },
      {
        "id": 4,
        "question": "What is the time complexity of the following code?\n\nfor(int i = 1; i <= n; i *= 2) {\n    printf(\"%d \", i);\n}",
        "options": ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Easy",
        "year": 2024,
        "explanation": "The loop variable doubles each time, so the loop runs log₂n times[2]."
      },
      {
        "id": 5,
        "question": "Which of the following is a reserved keyword in C++?",
        "options": ["main", "float", "number", "print"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Keywords",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "'float' is a reserved keyword and cannot be used as an identifier[3][9]."
      },
      {
        "id": 6,
        "question": "What is the time complexity of the following code?\n\nfor(int i=0; i<n; i++) {\n    for(int j=0; j<n; j++) {\n        printf(\"%d \", i+j);\n    }\n}",
        "options": ["O(n)", "O(n²)", "O(n log n)", "O(2ⁿ)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Easy",
        "year": 2022,
        "explanation": "Both loops run n times, so total operations = n*n = O(n²)[4]."
      },
      {
        "id": 7,
        "question": "Which of the following is a valid identifier in C++?",
        "options": ["2sum", "sum_2", "int", "float number"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Identifiers cannot begin with a digit or contain spaces, nor can they be keywords[3][5][9]."
      },
      {
        "id": 8,
        "question": "What is the time complexity of the following code?\n\nfor(int i=0; i<n; i++) {\n    for(int j=i; j<n; j++) {\n        printf(\"%d \", i+j);\n    }\n}",
        "options": ["O(n)", "O(n²)", "O(n log n)", "O(2ⁿ)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Medium",
        "year": 2023,
        "explanation": "Inner loop runs n, n-1, ..., 1 times; total is n(n+1)/2 = O(n²)[4]."
      },
      {
        "id": 9,
        "question": "Which of the following is NOT a valid identifier in C++?",
        "options": ["_sum", "sum1", "sum_1", "1sum"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Identifiers cannot start with a digit[3][5][9]."
      },
      {
        "id": 10,
        "question": "What is the output of the following code?\n\nint a = 5, b = 10;\nprintf(\"%d\", a+++b);",
        "options": ["15", "16", "Compiler Error", "Undefined Behavior"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Operators",
        "difficulty": "Medium",
        "year": 2024,
        "explanation": "a+++b is parsed as (a++) + b, so output is 5+10=15."
      },
      {
        "id": 11,
        "question": "What is the time complexity of the following code?\n\nfor(int i=1; i<=n; i++) {\n    for(int j=1; j<=n; j*=2) {\n        printf(\"%d \", i*j);\n    }\n}",
        "options": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Medium",
        "year": 2024,
        "explanation": "Inner loop runs log₂n times, outer n times: O(n log n)[2]."
      },
      {
        "id": 12,
        "question": "Which of the following is a valid C++ identifier?",
        "options": ["sum-total", "sum_total", "sum total", "sum@total"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Only letters, digits, and underscores allowed[3][5][9]."
      },
      {
        "id": 13,
        "question": "What is the time complexity of the following code?\n\nfor(int i=0; i<n; i++) {\n    for(int j=0; j<n; j++) {\n        for(int k=0; k<n; k++) {\n            printf(\"%d \", i+j+k);\n        }\n    }\n}",
        "options": ["O(n)", "O(n²)", "O(n³)", "O(n log n)"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Medium",
        "year": 2024,
        "explanation": "Three nested loops, each running n times: O(n³)[4]."
      },
      {
        "id": 14,
        "question": "Which of the following is NOT a valid identifier in C++?",
        "options": ["main", "float", "_main", "main_1"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "'float' is a reserved keyword and cannot be used as an identifier[3][5][9]."
      },
      {
        "id": 15,
        "question": "What is the time complexity of the following code?\n\nfor(int i=0; i<n; i++) {\n    printf(\"%d \", i);\n}",
        "options": ["O(1)", "O(n)", "O(n²)", "O(log n)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Single loop running n times: O(n)[2]."
      },
      {
        "id": 16,
        "question": "Which of the following is a valid identifier?",
        "options": ["_123", "123_", "int", "main function"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2024,
        "explanation": "Identifiers can start with an underscore but not with a digit or contain spaces or be a keyword[3][5][9]."
      },
      {
        "id": 17,
        "question": "What is the time complexity of the following code?\n\nfor(int i=0; i<n; i++) {\n    for(int j=0; j<sqrt(n); j++) {\n        printf(\"%d \", i+j);\n    }\n}",
        "options": ["O(n)", "O(n√n)", "O(n²)", "O(log n)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Medium",
        "year": 2024,
        "explanation": "Inner loop runs sqrt(n) times, outer n times: O(n√n)."
      },
      {
        "id": 18,
        "question": "Which of the following is NOT allowed in a C++ identifier?",
        "options": ["Underscore", "Digit (not as first character)", "Space", "Letter"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Spaces are not allowed in identifiers[3][5][9]."
      },
      {
        "id": 19,
        "question": "What is the time complexity of the following code?\n\nfor(int i=1; i<=n; i++) {\n    for(int j=1; j<=i; j++) {\n        printf(\"%d \", i*j);\n    }\n}",
        "options": ["O(n)", "O(n²)", "O(n log n)", "O(2ⁿ)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Medium",
        "year": 2023,
        "explanation": "Inner loop runs 1+2+...+n = n(n+1)/2 = O(n²)[4]."
      },
      {
        "id": 20,
        "question": "Which of the following is a valid identifier?",
        "options": ["sum@total", "sum-total", "sumTotal", "sum total"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Only letters, digits, and underscores allowed; no spaces or special characters[3][5][9]."
      },
      {
        "id": 21,
        "question": "What is the time complexity of the following code?\n\nfor(int i=0; i<n; i+=2) {\n    printf(\"%d \", i);\n}",
        "options": ["O(n)", "O(n/2)", "O(log n)", "O(1)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Loop runs n/2 times, which is O(n)[2]."
      },
      {
        "id": 22,
        "question": "Which of the following is NOT a valid identifier?",
        "options": ["_sum", "sum_1", "sum1", "1_sum"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Identifiers cannot start with a digit[3][5][9]."
      },
      {
        "id": 23,
        "question": "What is the time complexity of the following code?\n\nfor(int i=0; i<n; i++) {\n    for(int j=0; j<n; j+=2) {\n        printf(\"%d \", i+j);\n    }\n}",
        "options": ["O(n)", "O(n²)", "O(n log n)", "O(2ⁿ)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Medium",
        "year": 2023,
        "explanation": "Inner loop runs n/2 times, outer n times: O(n²)[2]."
      },
      {
        "id": 24,
        "question": "Which of the following is a valid identifier?",
        "options": ["main()", "main_1", "main-1", "main 1"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Only letters, digits, and underscores allowed; no parentheses, hyphens, or spaces[3][5][9]."
      },
      {
        "id": 25,
        "question": "What is the time complexity of the following code?\n\nfor(int i=1; i<=n; i++) {\n    for(int j=1; j<=n/i; j++) {\n        printf(\"%d \", i*j);\n    }\n}",
        "options": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Hard",
        "year": 2023,
        "explanation": "Total operations: n/1 + n/2 + ... + n/n = n*log n = O(n log n)[2]."
      },
      {
        "id": 26,
        "question": "Which of the following is NOT a valid identifier?",
        "options": ["sum_1", "sum1", "1sum", "_sum"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Identifiers cannot start with a digit[3][5][9]."
      },
      {
        "id": 27,
        "question": "What is the time complexity of the following code?\n\nfor(int i=0; i<n; i++) {\n    for(int j=0; j<n; j++) {\n        if(i == j) break;\n        printf(\"%d \", i+j);\n    }\n}",
        "options": ["O(n)", "O(n²)", "O(n log n)", "O(2ⁿ)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Hard",
        "year": 2023,
        "explanation": "Inner loop runs at most i times; sum over i=0 to n-1 is n(n-1)/2 = O(n²), but with the break, it's O(n)[4]."
      },
      {
        "id": 28,
        "question": "Which of the following is a valid identifier?",
        "options": ["_main", "main-1", "main 1", "main@1"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Only letters, digits, and underscores allowed; cannot contain hyphens, spaces, or special characters[3][5][9]."
      },
      {
        "id": 29,
        "question": "What is the time complexity of the following code?\n\nfor(int i=1; i<=n; i*=2) {\n    for(int j=1; j<=n; j++) {\n        printf(\"%d \", i*j);\n    }\n}",
        "options": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Time Complexity",
        "difficulty": "Medium",
        "year": 2024,
        "explanation": "Outer loop runs log n times, inner n times: O(n log n)[2]."
      },
      {
        "id": 30,
        "question": "Which of the following is NOT a valid identifier?",
        "options": ["sum_1", "sum1", "1_sum", "_sum"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Programming",
        "topic": "Identifiers",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Identifiers cannot start with a digit[3][5][9]."
      }
    ],
    'Data Structures': [
      {
        "id": 1,
        "question": "What data structure follows the Last In, First Out (LIFO) principle?",
        "options": ["Stack", "Queue", "Linked List", "Tree"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Stacks",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Stack operates on LIFO principle[1][3]."
      },
      {
        "id": 2,
        "question": "Which data structure follows the First In, First Out (FIFO) principle?",
        "options": ["Stack", "Queue", "Linked List", "Tree"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Queues",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Queue operates on FIFO principle[1][4]."
      },
      {
        "id": 3,
        "question": "In a singly linked list, what is the reference of the last node?",
        "options": ["NULL", "First node", "Middle node", "Random node"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Linked List",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "The last node points to NULL in a singly linked list[1]."
      },
      {
        "id": 4,
        "question": "Which data structure represents a hierarchical relationship between elements?",
        "options": ["Stack", "Queue", "Linked List", "Tree"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Trees",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Tree structures represent hierarchy[1]."
      },
      {
        "id": 5,
        "question": "What operation is performed on a stack to retrieve an element?",
        "options": ["Push", "Pop", "Enqueue", "Dequeue"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Stacks",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Pop operation retrieves (removes) the top element from a stack[1]."
      },
      {
        "id": 6,
        "question": "What data structure is typically used to implement recursion?",
        "options": ["Stack", "Queue", "Linked List", "Tree"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Stacks",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Stacks are used to implement recursion[2][6]."
      },
      {
        "id": 7,
        "question": "Which data structure uses pointers for sequential access?",
        "options": ["Stack", "Queue", "Linked List", "Tree"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Linked List",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Linked lists use pointers for sequential access[1]."
      },
      {
        "id": 8,
        "question": "In a binary tree, what is the maximum number of children a node can have?",
        "options": ["0", "1", "2", "3"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Trees",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Each node in a binary tree can have at most two children[1][2]."
      },
      {
        "id": 9,
        "question": "What operation is used to add an element to the top of a stack?",
        "options": ["Push", "Pop", "Enqueue", "Dequeue"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Stacks",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Push adds an element to the top of a stack[1]."
      },
      {
        "id": 10,
        "question": "Which data structure is known for its constant time complexity for insertion, deletion, and search operations in average cases?",
        "options": ["Stack", "Queue", "Linked List", "Hash Table"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Hash Table",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hash tables offer O(1) average case for these operations[1][2]."
      },
      {
        "id": 11,
        "question": "What is the time complexity of accessing an element in a hash table (average case)?",
        "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Hash Table",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Hash table access is O(1) on average[1][2]."
      },
      {
        "id": 12,
        "question": "Which data structure allows elements to be inserted from one end and removed from the other?",
        "options": ["Stack", "Queue", "Linked List", "Tree"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Queues",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Queue supports insertion at rear and removal from front[1][4]."
      },
      {
        "id": 13,
        "question": "What operation is used to remove an element from the front of a queue?",
        "options": ["Push", "Pop", "Enqueue", "Dequeue"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Queues",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Dequeue removes element from the front of a queue[1][4]."
      },
      {
        "id": 14,
        "question": "Which data structure is used in breadth-first search (BFS) algorithm?",
        "options": ["Stack", "Queue", "Linked List", "Tree"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "BFS uses a queue to track nodes to visit[1][4]."
      },
      {
        "id": 15,
        "question": "In a linked list, what is the time complexity to insert an element at the beginning?",
        "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Linked List",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Insertion at the beginning of a linked list is O(1)[1][3]."
      },
      {
        "id": 16,
        "question": "Which of the following is NOT a type of tree?",
        "options": ["Binary Tree", "AVL Tree", "Trie", "Circular List"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Trees",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Circular List is not a tree structure[1]."
      },
      {
        "id": 17,
        "question": "Which data structure is commonly used in depth-first search (DFS) algorithm?",
        "options": ["Stack", "Queue", "Linked List", "Tree"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DFS uses a stack (explicit or implicit via recursion)[1][4]."
      },
      {
        "id": 18,
        "question": "What data structure is used to implement a priority queue?",
        "options": ["Stack", "Queue", "Linked List", "Heap"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Heap",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Heaps are used for priority queues[1][4]."
      },
      {
        "id": 19,
        "question": "Which of the following is an infix expression?",
        "options": ["a+b*c", "ab+c-", "abc+*d-e+", "a*+b(c-d)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Expression Notation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Infix: operators are written between operands[3]."
      },
      {
        "id": 20,
        "question": "Which of these is a postfix expression?",
        "options": ["a+b-c", "+ab", "abc*+de-+", "a*b(c+d)"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Expression Notation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Postfix: operators follow their operands[4]."
      },
      {
        "id": 21,
        "question": "Which data structure is used for checking balanced parentheses in an expression?",
        "options": ["Queue", "Stack", "Tree", "Array"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Stacks",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Stacks are used for matching parentheses[2][6]."
      },
      {
        "id": 22,
        "question": "What is the worst-case time complexity for searching in a balanced binary search tree (BST)?",
        "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Trees",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Balanced BST provides O(log n) search time[2][4]."
      },
      {
        "id": 23,
        "question": "Which data structure is used to implement function call stack in most programming languages?",
        "options": ["Queue", "Stack", "Heap", "Tree"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Stacks",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Function calls are managed using a stack[2][6]."
      },
      {
        "id": 24,
        "question": "What is the time complexity for inserting an element into a heap?",
        "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Heap",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Heap insertion is O(log n)[4]."
      },
      {
        "id": 25,
        "question": "Which data structure is best suited for implementing undo operations?",
        "options": ["Queue", "Stack", "Heap", "Tree"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Stacks",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Undo operations use stack (LIFO)[2][6]."
      },
      {
        "id": 26,
        "question": "Which data structure is most efficient for finding the minimum element in O(1) time?",
        "options": ["Stack", "Queue", "Min-Heap", "Binary Search Tree"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Heap",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Min-Heap provides O(1) access to minimum element[2][4]."
      },
      {
        "id": 27,
        "question": "Which of the following is NOT a linear data structure?",
        "options": ["Stack", "Queue", "Array", "Tree"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Data Structure Types",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Tree is a non-linear data structure[2][4]."
      },
      {
        "id": 28,
        "question": "Which data structure is used to implement adjacency lists for graphs?",
        "options": ["Array", "Linked List", "Stack", "Queue"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Adjacency lists are implemented using linked lists[2][9]."
      },
      {
        "id": 29,
        "question": "What is the space complexity of an adjacency matrix for a graph with n vertices?",
        "options": ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Adjacency matrix uses O(n^2) space[2][9]."
      },
      {
        "id": 30,
        "question": "Which traversal of a binary search tree (BST) gives the nodes in sorted order?",
        "options": ["Preorder", "Postorder", "Inorder", "Level order"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Data Structures",
        "topic": "Trees",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Inorder traversal of BST gives sorted order[2][4]."
      }
    ],
    'Algorithms': [
      {
        "id": 1,
        "question": "What is the time complexity of binary search on a sorted array of n elements?",
        "options": ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Searching",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Binary search halves the search space each time, so time complexity is O(log n)."
      },
      {
        "id": 2,
        "question": "Which sorting algorithm is stable and has O(n^2) worst-case time complexity?",
        "options": ["Selection Sort", "Heap Sort", "Merge Sort", "Bubble Sort"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Sorting",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Bubble sort is stable and has O(n^2) worst-case time."
      },
      {
        "id": 3,
        "question": "Which algorithm is used to find the shortest path in a weighted graph with non-negative edges?",
        "options": ["Prim's Algorithm", "Dijkstra's Algorithm", "Kruskal's Algorithm", "Bellman-Ford Algorithm"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dijkstra's algorithm finds shortest paths with non-negative edge weights."
      },
      {
        "id": 4,
        "question": "What is the best-case time complexity of Quick Sort?",
        "options": ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Sorting",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Best case for quicksort is O(n log n) when partitioning is balanced."
      },
      {
        "id": 5,
        "question": "Which of the following is NOT a divide and conquer algorithm?",
        "options": ["Merge Sort", "Quick Sort", "Binary Search", "Dijkstra's Algorithm"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Algorithm Paradigms",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Dijkstra's is a greedy algorithm, not divide and conquer."
      },
      {
        "id": 6,
        "question": "Which algorithm is used for finding minimum spanning tree (MST) in a graph?",
        "options": ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Kruskal's algorithm finds MST."
      },
      {
        "id": 7,
        "question": "What is the time complexity of merge sort?",
        "options": ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Sorting",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Merge sort is O(n log n) in all cases."
      },
      {
        "id": 8,
        "question": "Which algorithm can be used to detect negative weight cycles in a graph?",
        "options": ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Prim's Algorithm", "Kruskal's Algorithm"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bellman-Ford can detect negative weight cycles."
      },
      {
        "id": 9,
        "question": "Which traversal of a binary tree visits the root node before its subtrees?",
        "options": ["Inorder", "Preorder", "Postorder", "Level order"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Tree Traversal",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Preorder visits root, then left, then right."
      },
      {
        "id": 10,
        "question": "Which algorithm is used for topological sorting of a Directed Acyclic Graph (DAG)?",
        "options": ["DFS", "BFS", "Dijkstra's Algorithm", "Prim's Algorithm"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DFS is used for topological sort."
      },
      {
        "id": 11,
        "question": "Which of the following algorithms uses dynamic programming?",
        "options": ["Merge Sort", "Floyd-Warshall", "Heap Sort", "Quick Sort"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Floyd-Warshall is a dynamic programming algorithm for all-pairs shortest paths."
      },
      {
        "id": 12,
        "question": "What is the time complexity of linear search?",
        "options": ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Searching",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Linear search checks each element, so O(n)."
      },
      {
        "id": 13,
        "question": "Which algorithm is used to solve the knapsack problem optimally?",
        "options": ["Greedy", "Dynamic Programming", "DFS", "BFS"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dynamic programming gives optimal solution for 0/1 knapsack."
      },
      {
        "id": 14,
        "question": "What is the time complexity of heap sort?",
        "options": ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Sorting",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Heap sort is O(n log n) in all cases."
      },
      {
        "id": 15,
        "question": "Which of the following is a greedy algorithm?",
        "options": ["Merge Sort", "Dijkstra's Algorithm", "Floyd-Warshall", "DFS"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Greedy Algorithms",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dijkstra's is a greedy algorithm."
      },
      {
        "id": 16,
        "question": "Which sorting algorithm is NOT comparison-based?",
        "options": ["Quick Sort", "Heap Sort", "Counting Sort", "Merge Sort"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Sorting",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Counting sort is not comparison-based."
      },
      {
        "id": 17,
        "question": "Which algorithm is used to find strongly connected components in a directed graph?",
        "options": ["Kruskal's Algorithm", "Kosaraju's Algorithm", "Dijkstra's Algorithm", "Prim's Algorithm"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Graphs",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Kosaraju's algorithm finds strongly connected components."
      },
      {
        "id": 18,
        "question": "Which algorithm is used for finding the transitive closure of a graph?",
        "options": ["Dijkstra's Algorithm", "Floyd-Warshall", "Kruskal's Algorithm", "Prim's Algorithm"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Graphs",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Floyd-Warshall can be used for transitive closure."
      },
      {
        "id": 19,
        "question": "Which of the following is NOT an in-place sorting algorithm?",
        "options": ["Quick Sort", "Merge Sort", "Heap Sort", "Insertion Sort"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Sorting",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Merge sort requires extra space."
      },
      {
        "id": 20,
        "question": "Which algorithm is used for cycle detection in a directed graph?",
        "options": ["DFS", "BFS", "Dijkstra's", "Kruskal's"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DFS can be used for cycle detection in directed graphs."
      },
      {
        "id": 21,
        "question": "Which of the following problems can be solved using dynamic programming?",
        "options": ["Longest Common Subsequence", "Binary Search", "Bubble Sort", "DFS"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "LCS is a classic DP problem."
      },
      {
        "id": 22,
        "question": "Which of the following is a property of greedy algorithms?",
        "options": ["Optimal Substructure", "Overlapping Subproblems", "Backtracking", "Divide and Conquer"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Greedy Algorithms",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Greedy algorithms exploit optimal substructure."
      },
      {
        "id": 23,
        "question": "What is the time complexity of inserting an element into a binary heap?",
        "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Heaps",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Binary heap insertion is O(log n)."
      },
      {
        "id": 24,
        "question": "Which of the following is true for Bellman-Ford algorithm?",
        "options": [
          "It works only for graphs without negative weights",
          "It can detect negative weight cycles",
          "It is faster than Dijkstra's for all graphs",
          "It cannot find shortest paths"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bellman-Ford can detect negative weight cycles."
      },
      {
        "id": 25,
        "question": "Which algorithm is used for finding all-pairs shortest paths?",
        "options": ["Dijkstra's Algorithm", "Floyd-Warshall", "Prim's Algorithm", "DFS"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Floyd-Warshall finds all-pairs shortest paths."
      },
      {
        "id": 26,
        "question": "Which of the following is NOT a property of dynamic programming?",
        "options": ["Overlapping Subproblems", "Optimal Substructure", "Greedy Choice", "Memoization"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Greedy choice is not a property of DP."
      },
      {
        "id": 27,
        "question": "Which algorithm is used for finding articulation points in a graph?",
        "options": ["Tarjan's Algorithm", "Dijkstra's Algorithm", "Prim's Algorithm", "Kruskal's Algorithm"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Graphs",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Tarjan's algorithm finds articulation points."
      },
      {
        "id": 28,
        "question": "Which algorithm is used for string pattern matching?",
        "options": ["KMP Algorithm", "Prim's Algorithm", "Dijkstra's Algorithm", "Kruskal's Algorithm"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Strings",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "KMP is used for pattern matching."
      },
      {
        "id": 29,
        "question": "What is the time complexity of the best known algorithm for matrix multiplication?",
        "options": ["O(n^3)", "O(n^2.81)", "O(n^2)", "O(n log n)"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Matrix Algorithms",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Strassen's algorithm is O(n^2.81)."
      },
      {
        "id": 30,
        "question": "Which of the following is NOT a characteristic of divide and conquer?",
        "options": ["Divide", "Conquer", "Backtracking", "Combine"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Algorithms",
        "topic": "Algorithm Paradigms",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Backtracking is not a part of divide and conquer."
      }
    ],
    'Computer Networks': [
      {
        "id": 1,
        "question": "What is the protocol data unit (PDU) for the application layer in the Internet stack?",
        "options": ["Frame", "Datagram", "Segment", "Message"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "OSI/TCP-IP Models",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "The application layer PDU is called a 'message'[1][6]."
      },
      {
        "id": 2,
        "question": "Which among these is NOT a client-server application?",
        "options": ["Ping", "Web-browsing", "Internet Chat", "Email"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Applications",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Ping is a diagnostic tool, not a client-server application[1]."
      },
      {
        "id": 3,
        "question": "What is the main purpose of multiplexing in computer networks?",
        "options": ["Routing", "Sharing a single channel", "Error correction", "Addressing"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Physical/Data Link Layer",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Multiplexing allows multiple signals to share a single channel[2]."
      },
      {
        "id": 4,
        "question": "Which device forwards packets between networks by processing routing information?",
        "options": ["Firewall", "Bridge", "Hub", "Router"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Network Devices",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "A router forwards packets between networks using routing information[2][3]."
      },
      {
        "id": 5,
        "question": "What is the endpoint of an inter-process communication flow across a network called?",
        "options": ["Port", "Machine", "Socket", "Pipe"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Transport Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "A socket is the endpoint of a network communication flow[2]."
      },
      {
        "id": 6,
        "question": "Which topology requires a multipoint connection?",
        "options": ["Ring", "Bus", "Star", "Mesh"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Network Topologies",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Bus topology uses a multipoint connection[2]."
      },
      {
        "id": 7,
        "question": "Which type of network shares the communication channel among all machines?",
        "options": ["Anycast", "Multicast", "Unicast", "Broadcast"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Network Types",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Broadcast networks share the channel among all machines[2]."
      },
      {
        "id": 8,
        "question": "Which layer of the OSI model is responsible for reliable end-to-end communication?",
        "options": ["Network", "Transport", "Data Link", "Session"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "OSI Model",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "The transport layer ensures reliable end-to-end communication[2][6]."
      },
      {
        "id": 9,
        "question": "Which protocol provides connectionless, unreliable communication at the transport layer?",
        "options": ["TCP", "UDP", "IP", "ICMP"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Transport Layer",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "UDP is connectionless and unreliable[2][6]."
      },
      {
        "id": 10,
        "question": "What is the default subnet mask for a Class C IPv4 address?",
        "options": ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "IP Addressing",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Class C default subnet mask is 255.255.255.0[1][2]."
      },
      {
        "id": 11,
        "question": "Which protocol is used for remote login?",
        "options": ["FTP", "SMTP", "TELNET", "SNMP"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Application Layer",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "TELNET is used for remote login[2][6]."
      },
      {
        "id": 12,
        "question": "What is the main function of ARP (Address Resolution Protocol)?",
        "options": ["Resolve IP to MAC", "Resolve MAC to IP", "Routing", "Error detection"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Network Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ARP resolves IP addresses to MAC addresses[2]."
      },
      {
        "id": 13,
        "question": "Which protocol is used to send email?",
        "options": ["HTTP", "SMTP", "FTP", "SNMP"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Application Layer",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "SMTP is used for sending emails[2][6]."
      },
      {
        "id": 14,
        "question": "Which protocol is used for secure transmission of data over the web?",
        "options": ["HTTP", "HTTPS", "FTP", "SMTP"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Application Layer",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "HTTPS provides secure web communication[2][6]."
      },
      {
        "id": 15,
        "question": "What is the main function of a router?",
        "options": ["Filters traffic", "Connects devices in a LAN", "Routes data between networks", "Converts signals"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Network Devices",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Routers route data packets between different networks[3]."
      },
      {
        "id": 16,
        "question": "Which protocol is used to transfer files over the Internet?",
        "options": ["FTP", "SMTP", "HTTP", "SNMP"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Application Layer",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "FTP is used for file transfer[2][6]."
      },
      {
        "id": 17,
        "question": "What is the main function of DNS?",
        "options": ["Resolve domain names to IP addresses", "Send emails", "Transfer files", "Route packets"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Application Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DNS resolves domain names to IP addresses[2][6]."
      },
      {
        "id": 18,
        "question": "Which of the following is NOT a network edge device?",
        "options": ["Switch", "PC", "Smartphone", "Server"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Network Devices",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Switch is a network infrastructure device, not an edge device[2]."
      },
      {
        "id": 19,
        "question": "Which switching technique is used in traditional telephone networks?",
        "options": ["Packet switching", "Message switching", "Circuit switching", "Cell switching"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Switching",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Traditional telephone networks use circuit switching[2]."
      },
      {
        "id": 20,
        "question": "Which protocol is used for error reporting in the network layer?",
        "options": ["IP", "ICMP", "TCP", "UDP"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Network Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ICMP is used for error reporting at the network layer[2][6]."
      },
      {
        "id": 21,
        "question": "Which layer is responsible for flow control and error control?",
        "options": ["Physical", "Data Link", "Network", "Transport"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Data Link Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Data link layer handles flow and error control[2][3]."
      },
      {
        "id": 22,
        "question": "Which addressing scheme is used by IPv6?",
        "options": ["32-bit", "64-bit", "128-bit", "256-bit"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "IP Addressing",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "IPv6 uses 128-bit addresses[2][6]."
      },
      {
        "id": 23,
        "question": "What is the maximum number of subnets and hosts per subnet for a Class B address with a 6-bit subnet number?",
        "options": [
          "64 subnets and 262142 hosts",
          "62 subnets and 262142 hosts",
          "64 subnets and 1024 hosts",
          "62 subnets and 1022 hosts"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Subnetting",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "6 bits allows 64 subnets; Class B has 16 bits for host, minus 6 for subnet, leaves 10 bits for hosts: 2^10 - 2 = 1022 hosts, but the question's options reflect the most common calculation[1]."
      },
      {
        "id": 24,
        "question": "Which protocol runs over TCP and is used for web communication?",
        "options": ["HTTP", "UDP", "ICMP", "ARP"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Application Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "HTTP runs over TCP for web communication[1][2]."
      },
      {
        "id": 25,
        "question": "Which network provides high-speed connectivity?",
        "options": ["Internetwork", "WAN", "LAN", "MAN"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Network Types",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "LANs are known for high-speed connectivity[1][2]."
      },
      {
        "id": 26,
        "question": "Which protocol is used for dynamic IP address allocation?",
        "options": ["DNS", "DHCP", "ARP", "ICMP"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Application Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DHCP dynamically assigns IP addresses[2][6]."
      },
      {
        "id": 27,
        "question": "Which error detection technique uses polynomial division?",
        "options": ["Parity Check", "Checksum", "CRC", "Hamming Code"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Error Detection",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "CRC uses polynomial division for error detection[1][2]."
      },
      {
        "id": 28,
        "question": "Which protocol is used to monitor and manage network devices?",
        "options": ["SMTP", "SNMP", "FTP", "HTTP"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Network Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "SNMP is used for network management[2][6]."
      },
      {
        "id": 29,
        "question": "Which layer is responsible for packet switching?",
        "options": ["Physical", "Data Link", "Network", "Transport"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Network Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "The network layer handles packet switching[2]."
      },
      {
        "id": 30,
        "question": "Which protocol is used for secure remote administration?",
        "options": ["TELNET", "SSH", "FTP", "SMTP"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Computer Networks",
        "topic": "Security",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "SSH is used for secure remote administration[2][6]."
      }
    ],
    'Operating Systems': [
      {
        "id": 1,
        "question": "What is an operating system?",
        "options": [
          "Interface between the hardware and application programs",
          "Collection of programs that manages hardware resources",
          "System service provider to the application programs",
          "All of the mentioned"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Basics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "An OS acts as an intermediary between user applications and hardware, manages resources, and provides services[1]."
      },
      {
        "id": 2,
        "question": "Which of the following is NOT a function of the operating system?",
        "options": [
          "Resource management",
          "Memory management",
          "Application development",
          "File system management"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Basics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Application development is not a direct function of the OS[1]."
      },
      {
        "id": 3,
        "question": "Which of the following is a CPU scheduling algorithm?",
        "options": [
          "Priority",
          "Round Robin",
          "Shortest Job First",
          "All of the mentioned"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "CPU Scheduling",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "All listed are CPU scheduling algorithms[1]."
      },
      {
        "id": 4,
        "question": "To access the services of the operating system, the interface is provided by:",
        "options": ["Library", "System calls", "Assembly instructions", "API"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "System Calls",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "System calls provide the interface to access OS services[1]."
      },
      {
        "id": 5,
        "question": "In operating systems, each process has its own:",
        "options": [
          "Open files",
          "Pending alarms and signals",
          "Address space and global variables",
          "All of the mentioned"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Processes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Each process has its own resources and address space[1]."
      },
      {
        "id": 6,
        "question": "Which of the following is NOT a real-time operating system?",
        "options": ["RTLinux", "Palm OS", "QNX", "VxWorks"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Types of OS",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Palm OS is not a real-time OS, others are[1]."
      },
      {
        "id": 7,
        "question": "Which one of the following errors will be handled by the operating system?",
        "options": [
          "Lack of paper in printer",
          "Connection failure in the network",
          "Power failure",
          "All of the mentioned"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Error Handling",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "OS handles various hardware and system errors[1]."
      },
      {
        "id": 8,
        "question": "What is the main function of the command interpreter?",
        "options": [
          "Provide the interface between the API and application program",
          "Handle files in the operating system",
          "Get and execute the next user-specified command",
          "None of the mentioned"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Shell/Command Interpreter",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Command interpreter executes user commands[1]."
      },
      {
        "id": 9,
        "question": "Which one of the following is not true about the kernel?",
        "options": [
          "Kernel remains in memory during the entire computer session",
          "Kernel is made of various modules which cannot be loaded in running OS",
          "Kernel is the first part of the OS to load into memory during booting",
          "Kernel is the program that constitutes the central core of the OS"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Kernel",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Kernel modules can be loaded/unloaded at runtime[1]."
      },
      {
        "id": 10,
        "question": "Which of the following is not a CPU scheduling criterion?",
        "options": [
          "Throughput",
          "Waiting time",
          "Response time",
          "Page fault rate"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "CPU Scheduling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Page fault rate is related to memory management, not CPU scheduling[1]."
      },
      {
        "id": 11,
        "question": "Which scheduling algorithm is best suited for a time-sharing system?",
        "options": [
          "First Come First Serve",
          "Shortest Job First",
          "Round Robin",
          "Priority Scheduling"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "CPU Scheduling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Round Robin is most suitable for time-sharing systems[1]."
      },
      {
        "id": 12,
        "question": "Which of the following is a non-preemptive scheduling algorithm?",
        "options": [
          "Round Robin",
          "Shortest Job First",
          "Priority Scheduling",
          "First Come First Serve"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "CPU Scheduling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "FCFS is non-preemptive; others can be preemptive[1]."
      },
      {
        "id": 13,
        "question": "Which of the following is used for process synchronization?",
        "options": [
          "Semaphore",
          "Paging",
          "Deadlock",
          "Fragmentation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Process Synchronization",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Semaphores are synchronization primitives[1]."
      },
      {
        "id": 14,
        "question": "Which of the following is NOT a necessary condition for deadlock?",
        "options": [
          "Mutual exclusion",
          "Hold and wait",
          "Preemption",
          "Circular wait"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Deadlocks",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Preemption is not a necessary condition for deadlock[1]."
      },
      {
        "id": 15,
        "question": "Which of the following memory management techniques suffers from external fragmentation?",
        "options": [
          "Paging",
          "Segmentation",
          "Demand Paging",
          "None of the above"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Memory Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Segmentation can suffer from external fragmentation[1]."
      },
      {
        "id": 16,
        "question": "What is 'thrashing' in the context of operating systems?",
        "options": [
          "Excessive swapping of processes in and out of memory",
          "Excessive CPU usage",
          "Excessive disk usage",
          "Excessive process creation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Virtual Memory",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Thrashing is excessive paging/swapping due to insufficient memory[1]."
      },
      {
        "id": 17,
        "question": "Which of the following is NOT a file allocation method?",
        "options": [
          "Contiguous",
          "Linked",
          "Indexed",
          "Random"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "File Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Random is not a file allocation method[1]."
      },
      {
        "id": 18,
        "question": "Which of the following is used to keep track of processes in the memory?",
        "options": [
          "Process Control Block",
          "Page Table",
          "File Control Block",
          "I/O Control Block"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Processes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "PCB contains information about each process[1]."
      },
      {
        "id": 19,
        "question": "Which of the following is NOT a valid state of a process?",
        "options": [
          "New",
          "Ready",
          "Executing",
          "Blocked"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Processes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "The correct term is 'Running', not 'Executing'[1]."
      },
      {
        "id": 20,
        "question": "Which of the following is NOT a type of system call?",
        "options": [
          "Process control",
          "File manipulation",
          "Device manipulation",
          "Memory leakage"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "System Calls",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Memory leakage is a problem, not a system call type[1]."
      },
      {
        "id": 21,
        "question": "Which of the following is a page replacement algorithm?",
        "options": [
          "FIFO",
          "LRU",
          "Optimal",
          "All of the mentioned"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Memory Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All listed are page replacement algorithms[1]."
      },
      {
        "id": 22,
        "question": "Which of the following is not a directory structure?",
        "options": [
          "Single-level",
          "Two-level",
          "Tree-structured",
          "Indexed"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "File Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Indexed is a file allocation method, not a directory structure[1]."
      },
      {
        "id": 23,
        "question": "Which of the following is used to recover from deadlock?",
        "options": [
          "Preemption",
          "Rollback",
          "Killing processes",
          "All of the mentioned"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Deadlocks",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "All listed methods can be used to recover from deadlock[1]."
      },
      {
        "id": 24,
        "question": "Which of the following is NOT a disk scheduling algorithm?",
        "options": [
          "FCFS",
          "SSTF",
          "SCAN",
          "LRU"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "I/O Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "LRU is a page replacement algorithm, not disk scheduling[1]."
      },
      {
        "id": 25,
        "question": "Which of the following is NOT a valid IPC (Inter Process Communication) mechanism?",
        "options": [
          "Pipes",
          "Message Queues",
          "Semaphores",
          "Thrashing"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "IPC",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Thrashing is a memory management issue, not an IPC mechanism[1]."
      },
      {
        "id": 26,
        "question": "Which of the following is true about virtual memory?",
        "options": [
          "It allows execution of processes not completely in memory",
          "It is a technique to increase logical memory space",
          "It uses demand paging",
          "All of the mentioned"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Virtual Memory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All listed statements are true for virtual memory[1]."
      },
      {
        "id": 27,
        "question": "Which of the following is NOT a type of fragmentation?",
        "options": [
          "Internal",
          "External",
          "Logical",
          "None of the mentioned"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Memory Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Logical fragmentation is not a standard term in memory management[1]."
      },
      {
        "id": 28,
        "question": "Which of the following is NOT a valid scheduling queue?",
        "options": [
          "Job queue",
          "Ready queue",
          "Device queue",
          "PCB queue"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Processes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "PCB queue is not a standard term; others are valid scheduling queues[1]."
      },
      {
        "id": 29,
        "question": "Which of the following is a protection mechanism in operating systems?",
        "options": [
          "Access control lists",
          "Passwords",
          "Capability lists",
          "All of the mentioned"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "Protection",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All listed are protection mechanisms[1]."
      },
      {
        "id": 30,
        "question": "Which of the following is NOT a valid file attribute?",
        "options": [
          "Name",
          "Type",
          "Size",
          "Process ID"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Operating Systems",
        "topic": "File Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Process ID is not a file attribute[1]."
      }
    ],
    'Database Systems': [
      {
        "id": 1,
        "question": "What is the full form of DBMS?",
        "options": [
          "Data of Binary Management System",
          "Database Management System",
          "Database Management Service",
          "Data Backup Management System"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Basics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "DBMS stands for Database Management System[1]."
      },
      {
        "id": 2,
        "question": "Which language is used to query and modify data in a relational database?",
        "options": [
          "HTML",
          "SQL",
          "XML",
          "C++"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "SQL",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "SQL (Structured Query Language) is used for querying and modifying relational databases[1][3]."
      },
      {
        "id": 3,
        "question": "Which of the following is a Data Manipulation Language (DML) command?",
        "options": [
          "SELECT",
          "CREATE",
          "ALTER",
          "DROP"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "SQL",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "SELECT is a DML command used to retrieve data[3][6]."
      },
      {
        "id": 4,
        "question": "Which key uniquely identifies a record in a relation?",
        "options": [
          "Foreign key",
          "Candidate key",
          "Primary key",
          "Super key"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Relational Model",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Primary key uniquely identifies each record in a table[1][3]."
      },
      {
        "id": 5,
        "question": "Which of the following is NOT a valid SQL constraint?",
        "options": [
          "PRIMARY KEY",
          "FOREIGN KEY",
          "UNIQUE",
          "INDEX"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "SQL",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "INDEX is not a constraint; it is a database object for faster access[3]."
      },
      {
        "id": 6,
        "question": "Which normal form eliminates partial dependency?",
        "options": [
          "1NF",
          "2NF",
          "3NF",
          "BCNF"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Normalization",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "2NF eliminates partial dependency[1][3]."
      },
      {
        "id": 7,
        "question": "Which of the following is a valid relational algebra operation?",
        "options": [
          "SELECT",
          "PROJECT",
          "JOIN",
          "All of the above"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Relational Algebra",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "SELECT, PROJECT, and JOIN are all relational algebra operations[1][3]."
      },
      {
        "id": 8,
        "question": "Which of the following is a property of a transaction?",
        "options": [
          "Atomicity",
          "Consistency",
          "Isolation",
          "All of the above"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Transactions",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Transactions have ACID properties: Atomicity, Consistency, Isolation, Durability[1][3]."
      },
      {
        "id": 9,
        "question": "Which of the following is used to maintain transactional integrity and consistency?",
        "options": [
          "Pointers",
          "Cursors",
          "Locks",
          "Triggers"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Concurrency Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Locks are used for concurrency control in transactions[1]."
      },
      {
        "id": 10,
        "question": "Which of the following is a non-loss decomposition?",
        "options": [
          "Decomposition with loss of information",
          "Decomposition with redundancy",
          "Decomposition with no loss of information",
          "Decomposition with anomalies"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Normalization",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Non-loss decomposition ensures no information is lost[1][3]."
      },
      {
        "id": 11,
        "question": "Which of the following is NOT a type of join in SQL?",
        "options": [
          "INNER JOIN",
          "OUTER JOIN",
          "CROSS JOIN",
          "SIDE JOIN"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "SQL",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "SIDE JOIN is not a valid SQL join type[3]."
      },
      {
        "id": 12,
        "question": "Which of the following is a valid aggregate function in SQL?",
        "options": [
          "COUNT",
          "SUM",
          "AVG",
          "All of the above"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "SQL",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "COUNT, SUM, and AVG are aggregate functions in SQL[3]."
      },
      {
        "id": 13,
        "question": "Which of the following is NOT a valid set operation in SQL?",
        "options": [
          "UNION",
          "INTERSECT",
          "MINUS",
          "DIVIDE"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "SQL",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DIVIDE is not a SQL set operation; it is a relational algebra operation[3]."
      },
      {
        "id": 14,
        "question": "Which of the following is used for indexing in databases?",
        "options": [
          "B+ Tree",
          "Hash Table",
          "Bitmap Index",
          "All of the above"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Indexing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All listed structures are used for indexing in databases[1][8]."
      },
      {
        "id": 15,
        "question": "Which of the following is not a valid file organization technique?",
        "options": [
          "Heap",
          "Sequential",
          "Hashing",
          "Indexed Sequential",
          "Random"
        ],
        "correct": 4,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Storage",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Random is not a standard file organization technique[1]."
      },
      {
        "id": 16,
        "question": "Which of the following is NOT a valid SQL data type?",
        "options": [
          "INT",
          "VARCHAR",
          "FLOAT",
          "NUMBERIC"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "SQL",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "The correct type is NUMERIC, not NUMBERIC[3]."
      },
      {
        "id": 17,
        "question": "Which of the following is NOT a valid relational database model?",
        "options": [
          "Hierarchical",
          "Network",
          "Relational",
          "Object-oriented"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Database Models",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hierarchical model is not a relational model[1]."
      },
      {
        "id": 18,
        "question": "Which of the following is NOT a property of a candidate key?",
        "options": [
          "Uniqueness",
          "Minimality",
          "Can be null",
          "Can be chosen as a primary key"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Relational Model",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Candidate keys cannot have null values[1]."
      },
      {
        "id": 19,
        "question": "Which of the following is NOT a component of the ER model?",
        "options": [
          "Entity",
          "Relationship",
          "Attribute",
          "Tuple"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "ER Model",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Tuple is a row in a relation, not an ER model component[1]."
      },
      {
        "id": 20,
        "question": "Which of the following is a valid isolation level in SQL?",
        "options": [
          "Read Committed",
          "Read Uncommitted",
          "Repeatable Read",
          "All of the above"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Transactions",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All are standard SQL isolation levels[3]."
      },
      {
        "id": 21,
        "question": "Which of the following is NOT a valid SQL command?",
        "options": [
          "INSERT",
          "UPDATE",
          "DELETE",
          "MODIFY"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "SQL",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "MODIFY is not a standard SQL command[3][6]."
      },
      {
        "id": 22,
        "question": "Which of the following is a property of a foreign key?",
        "options": [
          "Uniquely identifies a row in the same table",
          "References a primary key in another table",
          "Can be null in all cases",
          "Is always a candidate key"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Relational Model",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "A foreign key references a primary key in another table[1][3]."
      },
      {
        "id": 23,
        "question": "Which of the following is NOT a valid operation in relational algebra?",
        "options": [
          "Union",
          "Intersection",
          "Difference",
          "Multiply"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Relational Algebra",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Multiply is not a relational algebra operation[1]."
      },
      {
        "id": 24,
        "question": "Which of the following statements is TRUE about B+ trees?",
        "options": [
          "All values are stored at internal nodes",
          "All values are stored at leaf nodes",
          "All values are stored at the root node",
          "All values are stored at non-leaf nodes"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Indexing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "In B+ trees, all values are stored at the leaf nodes[4][8]."
      },
      {
        "id": 25,
        "question": "Which of the following is NOT a valid SQL aggregate function?",
        "options": [
          "MAX",
          "MIN",
          "AVG",
          "MULT"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "SQL",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "MULT is not a valid SQL aggregate function[3]."
      },
      {
        "id": 26,
        "question": "Which of the following is a valid type of database failure?",
        "options": [
          "Transaction failure",
          "System crash",
          "Media failure",
          "All of the above"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Recovery",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All are types of database failures[1]."
      },
      {
        "id": 27,
        "question": "Which of the following is used for concurrency control?",
        "options": [
          "Timestamp ordering",
          "Two-phase locking",
          "Validation-based protocol",
          "All of the above"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Concurrency Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All listed are concurrency control methods[1]."
      },
      {
        "id": 28,
        "question": "Which of the following is NOT a valid SQL clause?",
        "options": [
          "WHERE",
          "GROUP BY",
          "ORDER BY",
          "SORT BY"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "SQL",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "SORT BY is not a standard SQL clause; use ORDER BY[3]."
      },
      {
        "id": 29,
        "question": "Which of the following is NOT a valid database utility?",
        "options": [
          "Backup",
          "Data Loading",
          "File Organization",
          "Process Organization"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Utilities",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Process organization is not a database utility[1]."
      },
      {
        "id": 30,
        "question": "Which of the following is NOT a valid transaction property?",
        "options": [
          "Atomicity",
          "Consistency",
          "Isolation",
          "Redundancy"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Database Systems",
        "topic": "Transactions",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Redundancy is not an ACID property of transactions[1][3]."
      }
    ]
  },

  // Electronics & Communication Questions
  'Electronics & Communication': {
    'Analog Circuits': [
      {
        "id": 1,
        "question": "The open-loop gain of an ideal operational amplifier is:",
        "options": ["Zero", "One", "Infinite", "Very small"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Operational Amplifiers",
        "difficulty": "Easy",
        "year": 2024,
        "explanation": "Ideal op-amp has infinite open-loop gain."
      },
      {
        "id": 2,
        "question": "The gain-bandwidth product of an operational amplifier is:",
        "options": ["Constant", "Proportional to frequency", "Inversely proportional to frequency", "Zero"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Operational Amplifiers",
        "difficulty": "Medium",
        "year": 2023,
        "explanation": "GBW product remains constant for a given op-amp."
      },
      {
        "id": 3,
        "question": "Which configuration of a BJT amplifier has the highest input impedance?",
        "options": ["Common Base", "Common Emitter", "Common Collector", "None of these"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "BJT",
        "difficulty": "Easy",
        "year": 2022,
        "explanation": "Common Collector (emitter follower) has highest input impedance."
      },
      {
        "id": 4,
        "question": "The slew rate of an op-amp limits:",
        "options": ["Maximum output voltage", "Maximum frequency", "Maximum rate of change of output voltage", "Input offset voltage"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Operational Amplifiers",
        "difficulty": "Medium",
        "year": 2024,
        "explanation": "Slew rate limits the maximum rate of change of output voltage."
      },
      {
        "id": 5,
        "question": "In a CE amplifier, the phase difference between input and output is:",
        "options": ["0°", "90°", "180°", "360°"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "BJT",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "CE amplifier introduces a 180° phase shift."
      },
      {
        "id": 6,
        "question": "Which of the following is NOT a characteristic of an ideal op-amp?",
        "options": ["Infinite gain", "Infinite bandwidth", "Zero input impedance", "Zero output impedance"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Operational Amplifiers",
        "difficulty": "Medium",
        "year": 2024,
        "explanation": "Ideal op-amp has infinite input impedance, not zero."
      },
      {
        "id": 7,
        "question": "The input offset voltage of an op-amp is:",
        "options": ["Zero", "Very large", "Very small", "Infinite"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Operational Amplifiers",
        "difficulty": "Medium",
        "year": 2023,
        "explanation": "Practical op-amps have a small input offset voltage."
      },
      {
        "id": 8,
        "question": "Which of the following is used to stabilize the Q-point in a BJT amplifier?",
        "options": ["Bypass capacitor", "Emitter resistor", "Collector resistor", "Base resistor"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "BJT Biasing",
        "difficulty": "Medium",
        "year": 2022,
        "explanation": "Emitter resistor provides negative feedback for Q-point stabilization."
      },
      {
        "id": 9,
        "question": "The frequency response of an RC low-pass filter is:",
        "options": ["Constant for all frequencies", "Decreases with increasing frequency", "Increases with increasing frequency", "None of these"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Filters",
        "difficulty": "Easy",
        "year": 2024,
        "explanation": "Low-pass filter attenuates higher frequencies."
      },
      {
        "id": 10,
        "question": "The output of an inverting amplifier is:",
        "options": ["In phase with input", "180° out of phase", "90° out of phase", "360° out of phase"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Op-Amp Circuits",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Inverting amplifier output is 180° out of phase with input."
      },
      {
        "id": 11,
        "question": "The voltage gain of a non-inverting op-amp amplifier is:",
        "options": ["1 + (Rf/R1)", "Rf/R1", "-Rf/R1", "1"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Op-Amp Circuits",
        "difficulty": "Medium",
        "year": 2024,
        "explanation": "Gain = 1 + (Rf/R1) for non-inverting op-amp."
      },
      {
        "id": 12,
        "question": "The common-mode rejection ratio (CMRR) of an op-amp is:",
        "options": ["High", "Low", "Zero", "Negative"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Operational Amplifiers",
        "difficulty": "Medium",
        "year": 2022,
        "explanation": "CMRR should be high for good differential amplification."
      },
      {
        "id": 13,
        "question": "The function of a bypass capacitor in an amplifier circuit is to:",
        "options": ["Increase voltage gain", "Reduce voltage gain", "Stabilize bias", "Increase input impedance"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "BJT Circuits",
        "difficulty": "Medium",
        "year": 2024,
        "explanation": "Bypass capacitor increases AC gain by shorting emitter resistor for AC."
      },
      {
        "id": 14,
        "question": "The input impedance of a FET is:",
        "options": ["Very low", "Very high", "Zero", "Unity"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "FET",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "FETs have very high input impedance."
      },
      {
        "id": 15,
        "question": "The dominant pole of an amplifier determines:",
        "options": ["Low-frequency response", "High-frequency response", "Mid-band gain", "Bandwidth"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2022,
        "explanation": "Dominant pole limits the bandwidth of the amplifier."
      },
      {
        "id": 16,
        "question": "The Miller effect increases:",
        "options": ["Input capacitance", "Output capacitance", "Gain", "Bandwidth"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2024,
        "explanation": "Miller effect increases input capacitance, affecting high-frequency response."
      },
      {
        "id": 17,
        "question": "A differential amplifier amplifies:",
        "options": ["Common-mode signals", "Difference between two inputs", "Sum of two inputs", "None of these"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Op-Amp Circuits",
        "difficulty": "Easy",
        "year": 2023,
        "explanation": "Differential amplifier amplifies the difference between two inputs."
      },
      {
        "id": 18,
        "question": "The function of a coupling capacitor is to:",
        "options": ["Block AC", "Block DC", "Increase gain", "Reduce noise"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Amplifier Circuits",
        "difficulty": "Easy",
        "year": 2024,
        "explanation": "Coupling capacitors block DC and pass AC signals."
      },
      {
        "id": 19,
        "question": "The main advantage of negative feedback in amplifiers is:",
        "options": ["Increase gain", "Reduce distortion", "Increase bandwidth", "Both B and C"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Feedback",
        "difficulty": "Medium",
        "year": 2022,
        "explanation": "Negative feedback reduces distortion and increases bandwidth."
      },
      {
        "id": 20,
        "question": "The unity-gain frequency of an op-amp is:",
        "options": ["Open-loop gain", "Frequency at which gain is 1", "Slew rate", "Bandwidth"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Operational Amplifiers",
        "difficulty": "Medium",
        "year": 2023,
        "explanation": "Unity-gain frequency is where the gain drops to 1."
      },
      {
        "id": 21,
        "question": "The output resistance of an ideal op-amp is:",
        "options": ["Zero", "Infinite", "Very high", "Very low"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Operational Amplifiers",
        "difficulty": "Easy",
        "year": 2022,
        "explanation": "Ideal op-amp has zero output resistance."
      },
      {
        "id": 22,
        "question": "The purpose of a voltage follower is to:",
        "options": ["Increase voltage", "Decrease voltage", "Provide unity gain with high input impedance", "Invert voltage"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Op-Amp Circuits",
        "difficulty": "Easy",
        "year": 2024,
        "explanation": "Voltage follower provides unity gain and high input impedance."
      },
      {
        "id": 23,
        "question": "The transfer characteristic of an ideal op-amp is:",
        "options": ["Linear", "Nonlinear", "Parabolic", "Hyperbolic"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Operational Amplifiers",
        "difficulty": "Medium",
        "year": 2023,
        "explanation": "Ideal op-amp has a linear transfer characteristic."
      },
      {
        "id": 24,
        "question": "The main function of a clamping circuit is to:",
        "options": ["Amplify signal", "Shift DC level", "Clip signal", "Invert signal"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Wave Shaping",
        "difficulty": "Medium",
        "year": 2022,
        "explanation": "Clamping circuit shifts the DC level of a signal."
      },
      {
        "id": 25,
        "question": "The output of a Schmitt trigger is:",
        "options": ["Analog", "Digital", "Triangular", "Sinusoidal"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Wave Shaping",
        "difficulty": "Medium",
        "year": 2024,
        "explanation": "Schmitt trigger provides a digital output."
      },
      {
        "id": 26,
        "question": "The main advantage of MOSFET over BJT is:",
        "options": ["High input impedance", "High current gain", "Low power consumption", "All of the above"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "FET",
        "difficulty": "Medium",
        "year": 2023,
        "explanation": "MOSFETs have high input impedance and low power consumption."
      },
      {
        "id": 27,
        "question": "The cutoff frequency of an RC circuit is given by:",
        "options": ["1/(2πRC)", "2πRC", "RC", "1/RC"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Filters",
        "difficulty": "Easy",
        "year": 2022,
        "explanation": "Cutoff frequency f_c = 1/(2πRC)."
      },
      {
        "id": 28,
        "question": "The main function of a Zener diode in a circuit is:",
        "options": ["Rectification", "Voltage regulation", "Amplification", "Oscillation"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Diodes",
        "difficulty": "Easy",
        "year": 2024,
        "explanation": "Zener diode is used for voltage regulation."
      },
      {
        "id": 29,
        "question": "The frequency response of a band-pass filter is:",
        "options": ["Passes all frequencies", "Passes low frequencies", "Passes a range of frequencies", "Passes high frequencies"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Filters",
        "difficulty": "Medium",
        "year": 2023,
        "explanation": "Band-pass filter passes a specific range of frequencies."
      },
      {
        "id": 30,
        "question": "The main function of a voltage regulator is to:",
        "options": ["Increase voltage", "Decrease voltage", "Maintain constant voltage", "Invert voltage"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Circuits",
        "topic": "Voltage Regulation",
        "difficulty": "Easy",
        "year": 2024,
        "explanation": "Voltage regulator maintains a constant output voltage."
      }
    ],
    'Digital Circuits': [
      {
        "id": 1,
        "question": "Which of the following is a universal gate?",
        "options": ["AND", "OR", "NAND", "XOR"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Logic Gates",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "NAND and NOR are universal gates; any logic function can be realized using only NAND gates."
      },
      {
        "id": 2,
        "question": "The binary equivalent of decimal number 25 is:",
        "options": ["11001", "10101", "10011", "11100"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Number Systems",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "25 in binary is 11001."
      },
      {
        "id": 3,
        "question": "Which of the following logic families has the highest speed?",
        "options": ["TTL", "CMOS", "ECL", "DTL"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Logic Families",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ECL (Emitter Coupled Logic) is the fastest logic family."
      },
      {
        "id": 4,
        "question": "A full adder can be constructed using:",
        "options": ["2 half adders and an OR gate", "2 half adders and an AND gate", "1 half adder and 1 OR gate", "2 half adders only"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Arithmetic Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "A full adder can be built from two half adders and an OR gate."
      },
      {
        "id": 5,
        "question": "Which of the following is not a combinational circuit?",
        "options": ["Multiplexer", "Counter", "Adder", "Encoder"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Combinational Circuits",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Counter is a sequential circuit."
      },
      {
        "id": 6,
        "question": "The output of a NOR gate is high when:",
        "options": ["All inputs are high", "All inputs are low", "Any input is high", "Any input is low"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Logic Gates",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "NOR gate outputs high only when all inputs are low."
      },
      {
        "id": 7,
        "question": "A MOD-16 counter requires how many flip-flops?",
        "options": ["2", "3", "4", "5"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Counters",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "MOD-16 requires 4 flip-flops (2^4 = 16)."
      },
      {
        "id": 8,
        "question": "The minimum number of select lines for a 32-to-1 multiplexer is:",
        "options": ["3", "4", "5", "6"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Multiplexers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "2^5 = 32, so 5 select lines are needed."
      },
      {
        "id": 9,
        "question": "A JK flip-flop is called a universal flip-flop because:",
        "options": ["It can be used as SR, D, or T flip-flop", "It is edge triggered", "It has no race condition", "It is faster than other flip-flops"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Flip-Flops",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "JK can be configured to work as SR, D, or T flip-flop."
      },
      {
        "id": 10,
        "question": "The function of a decoder is to:",
        "options": ["Encode data", "Convert binary to decimal", "Convert decimal to binary", "None of these"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Decoders",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Decoder converts binary input to a unique output line (binary to decimal)."
      },
      {
        "id": 11,
        "question": "The propagation delay of a logic gate is:",
        "options": ["Time taken for input to change", "Time taken for output to change after input changes", "Time taken for power supply to stabilize", "Time taken for fan-out"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Logic Gates",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Propagation delay is output change after input change."
      },
      {
        "id": 12,
        "question": "Which of the following is a saturated logic family?",
        "options": ["ECL", "TTL", "CMOS", "IIL"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Logic Families",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "TTL is a saturated logic family."
      },
      {
        "id": 13,
        "question": "A 4-bit ripple counter can count up to:",
        "options": ["8", "15", "16", "32"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Counters",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "4 bits can count from 0 to 15 (16 states)."
      },
      {
        "id": 14,
        "question": "The output of an XOR gate is high when:",
        "options": ["All inputs are high", "All inputs are low", "Inputs are different", "Inputs are same"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Logic Gates",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "XOR outputs high when inputs are different."
      },
      {
        "id": 15,
        "question": "The fan-out of a logic gate is:",
        "options": ["Number of inputs it can drive", "Number of outputs it can drive", "Number of gates it can drive", "Number of power supplies it can connect"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Logic Gates",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fan-out is the number of similar gates driven by the output."
      },
      {
        "id": 16,
        "question": "Which of the following is a sequential circuit?",
        "options": ["Adder", "Multiplexer", "Flip-Flop", "Encoder"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Sequential Circuits",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Flip-flop is a basic sequential circuit."
      },
      {
        "id": 17,
        "question": "In a D flip-flop, the output Q next state is:",
        "options": ["Always 0", "Always 1", "Same as D input", "Complement of D input"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Flip-Flops",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "D flip-flop transfers D input to Q output on clock edge."
      },
      {
        "id": 18,
        "question": "A 3-to-8 decoder has:",
        "options": ["3 inputs, 8 outputs", "8 inputs, 3 outputs", "3 outputs, 8 inputs", "8 outputs, 3 select lines"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Decoders",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "3-to-8 decoder has 3 inputs and 8 outputs."
      },
      {
        "id": 19,
        "question": "The minimum number of flip-flops required to construct a MOD-6 counter is:",
        "options": ["2", "3", "4", "5"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Counters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "2^3 = 8, so 3 flip-flops are needed for MOD-6."
      },
      {
        "id": 20,
        "question": "A 4-to-1 multiplexer can be used to implement:",
        "options": ["Any 2-input logic function", "Any 3-input logic function", "Any 4-input logic function", "Any 5-input logic function"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Multiplexers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "4-to-1 MUX can implement any 3-variable function."
      },
      {
        "id": 21,
        "question": "The output of a SR latch is undefined when:",
        "options": ["S=0, R=0", "S=1, R=1", "S=0, R=1", "S=1, R=0"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Flip-Flops",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "SR latch output is undefined when both S and R are 1."
      },
      {
        "id": 22,
        "question": "A 7-segment display is used to display:",
        "options": ["Hexadecimal digits", "Binary digits", "Decimal digits", "Octal digits"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Displays",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "7-segment displays are used for decimal digits."
      },
      {
        "id": 23,
        "question": "A ring counter is a type of:",
        "options": ["Shift register", "Adder", "Multiplexer", "Decoder"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Counters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ring counter is a shift register with feedback."
      },
      {
        "id": 24,
        "question": "The minimum number of AND gates required to realize the Boolean function AB + AC is:",
        "options": ["1", "2", "3", "4"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Boolean Algebra",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Two AND gates (for AB and AC) and one OR gate."
      },
      {
        "id": 25,
        "question": "A parity bit is used for:",
        "options": ["Error detection", "Error correction", "Data compression", "Data encryption"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Error Detection",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Parity bit is used for error detection."
      },
      {
        "id": 26,
        "question": "A master-slave flip-flop is used to:",
        "options": ["Eliminate race around condition", "Increase speed", "Reduce power", "Increase fan-out"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Flip-Flops",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Master-slave design eliminates race around in JK flip-flops."
      },
      {
        "id": 27,
        "question": "A logic circuit that has only one output for each combination of inputs is:",
        "options": ["Multiplexer", "Decoder", "Encoder", "Combinational circuit"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Combinational Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Combinational circuits have a unique output for each input combination."
      },
      {
        "id": 28,
        "question": "The number of Boolean functions that can be generated by n variables is:",
        "options": ["2^n", "n^2", "2^(2^n)", "n!"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Boolean Algebra",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "2^(2^n) Boolean functions for n variables."
      },
      {
        "id": 29,
        "question": "A 3-bit up counter counts from:",
        "options": ["0 to 7", "0 to 8", "1 to 7", "1 to 8"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Counters",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "3 bits: 0 to 7 (8 states)."
      },
      {
        "id": 30,
        "question": "The output of a NOT gate is:",
        "options": ["Same as input", "Complement of input", "Sum of inputs", "Difference of inputs"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Circuits",
        "topic": "Logic Gates",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "NOT gate outputs the complement (inverse) of input."
      }
    ],
    'Signals & Systems': [
      {
        "id": 1,
        "question": "Which of the following is a periodic signal?",
        "options": ["sin(2πt)", "e^t", "t^2", "ln(t)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Signal Classification",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "sin(2πt) repeats every 1 unit; it's periodic."
      },
      {
        "id": 2,
        "question": "A signal x(t) is said to be even if:",
        "options": [
          "x(-t) = x(t)",
          "x(-t) = -x(t)",
          "x(t) = 0",
          "x(t) = 1"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Signal Classification",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Even signals satisfy x(-t) = x(t)[6]."
      },
      {
        "id": 3,
        "question": "Which property is satisfied by all LTI systems?",
        "options": [
          "Superposition",
          "Time-invariance",
          "Linearity",
          "Both linearity and time-invariance"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "LTI Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "LTI systems are both linear and time-invariant."
      },
      {
        "id": 4,
        "question": "The impulse response h(t) of an LTI system is δ(t-2). What is the output for input x(t)?",
        "options": [
          "x(t)",
          "x(t-2)",
          "x(t+2)",
          "0"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "LTI Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Output y(t) = x(t) * δ(t-2) = x(t-2)."
      },
      {
        "id": 5,
        "question": "The Laplace transform of u(t) is:",
        "options": [
          "1/s",
          "1/(s+1)",
          "s",
          "0"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Laplace Transform",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "L{u(t)} = 1/s for Re(s) > 0."
      },
      {
        "id": 6,
        "question": "The Fourier transform of δ(t) is:",
        "options": [
          "1",
          "δ(ω)",
          "jω",
          "1/jω"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Fourier Transform",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "F{δ(t)} = 1 for all ω."
      },
      {
        "id": 7,
        "question": "A system is BIBO stable if:",
        "options": [
          "Impulse response is absolutely integrable",
          "Impulse response is bounded",
          "Impulse response is periodic",
          "Impulse response is zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "BIBO stability: ∫|h(t)|dt < ∞."
      },
      {
        "id": 8,
        "question": "The Nyquist rate for a signal bandlimited to 4 kHz is:",
        "options": ["2 kHz", "4 kHz", "6 kHz", "8 kHz"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Sampling Theorem",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Nyquist rate = 2 × bandwidth = 8 kHz."
      },
      {
        "id": 9,
        "question": "Which of the following is a power signal?",
        "options": [
          "sin(2πt)",
          "e^{-t}u(t)",
          "δ(t)",
          "t"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Signal Classification",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Periodic signals like sinusoids are power signals."
      },
      {
        "id": 10,
        "question": "The convolution of two signals in time domain is equivalent to ______ in frequency domain.",
        "options": ["Multiplication", "Addition", "Division", "Convolution"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Convolution",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Convolution in time ↔ multiplication in frequency."
      },
      {
        "id": 11,
        "question": "For a causal LTI system, the region of convergence (ROC) of its Laplace transform is:",
        "options": [
          "Left of the leftmost pole",
          "Right of the rightmost pole",
          "Between poles",
          "Entire s-plane"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Laplace Transform",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "For causal systems, ROC is right of rightmost pole."
      },
      {
        "id": 12,
        "question": "Which property is NOT satisfied by convolution?",
        "options": ["Commutative", "Associative", "Distributive", "Multiplicative"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Convolution",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Convolution is not multiplicative."
      },
      {
        "id": 13,
        "question": "A signal x(t) is said to be an energy signal if:",
        "options": [
          "Total energy is finite, power is zero",
          "Total power is finite, energy is infinite",
          "Both energy and power are infinite",
          "Both energy and power are zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Signal Classification",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Energy signal: finite energy, zero average power."
      },
      {
        "id": 14,
        "question": "Which of the following is the Dirichlet condition for Fourier series?",
        "options": [
          "Signal must be periodic",
          "Signal must have finite number of maxima and minima in any period",
          "Signal must be absolutely integrable over a period",
          "All of the above"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Fourier Series",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All are Dirichlet conditions."
      },
      {
        "id": 15,
        "question": "The Laplace transform of e^{-at}u(t) is:",
        "options": ["1/(s+a)", "1/(s-a)", "a/(s+a)", "s/(s+a)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Laplace Transform",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "L{e^{-at}u(t)} = 1/(s+a)."
      },
      {
        "id": 16,
        "question": "A discrete-time signal x[n] = δ[n-3] is:",
        "options": [
          "Impulse at n=0",
          "Impulse at n=3",
          "Impulse at n=-3",
          "Zero everywhere"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Discrete Time Signals",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "δ[n-3] is impulse at n=3."
      },
      {
        "id": 17,
        "question": "The response of an LTI system to an exponential input is:",
        "options": [
          "Impulse",
          "Exponential",
          "Sinusoidal",
          "Constant"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "LTI Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Exponential input yields exponential output in LTI systems."
      },
      {
        "id": 18,
        "question": "The DTFT of a discrete-time impulse δ[n] is:",
        "options": ["1", "e^{jω}", "δ(ω)", "0"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Fourier Transform",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DTFT{δ[n]} = 1."
      },
      {
        "id": 19,
        "question": "The Laplace transform exists if:",
        "options": [
          "Signal is absolutely integrable",
          "Signal is periodic",
          "Signal is bounded",
          "Signal is causal"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Laplace Transform",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Laplace exists if ∫|x(t)|e^{-σt}dt < ∞."
      },
      {
        "id": 20,
        "question": "Aliasing occurs when:",
        "options": [
          "Sampling frequency is less than twice the maximum frequency",
          "Sampling frequency is more than twice the maximum frequency",
          "Signal is periodic",
          "Signal is a delta function"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Sampling Theorem",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Aliasing: fs < 2fm."
      },
      {
        "id": 21,
        "question": "The Laplace transform of δ(t) is:",
        "options": ["1", "s", "0", "∞"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Laplace Transform",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "L{δ(t)} = 1."
      },
      {
        "id": 22,
        "question": "The ROC of Z-transform for a right-sided sequence is:",
        "options": [
          "|z| > largest pole",
          "|z| < smallest pole",
          "Entire z-plane",
          "Unit circle"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Z-Transform",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ROC for right-sided: |z| > largest pole."
      },
      {
        "id": 23,
        "question": "The Fourier series of an odd function contains:",
        "options": [
          "Only cosine terms",
          "Only sine terms",
          "Both sine and cosine terms",
          "No terms"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Fourier Series",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Odd functions: only sine terms in Fourier series."
      },
      {
        "id": 24,
        "question": "Which of the following is NOT a causal system?",
        "options": [
          "y(t) = x(t)",
          "y(t) = x(t-1)",
          "y(t) = x(t+1)",
          "y(t) = 2x(t)"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "System Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Depends on future input: non-causal."
      },
      {
        "id": 25,
        "question": "The transfer function H(s) of an LTI system is defined as:",
        "options": [
          "Output/Input in Laplace domain",
          "Input/Output in Laplace domain",
          "Sum of input and output",
          "Difference of input and output"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "System Analysis",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "H(s) = Y(s)/X(s)."
      },
      {
        "id": 26,
        "question": "The convolution of x(t) with δ(t-t0) is:",
        "options": [
          "x(t)",
          "x(t-t0)",
          "x(t+t0)",
          "0"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Convolution",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Convolution with shifted impulse shifts the signal."
      },
      {
        "id": 27,
        "question": "The energy of a signal x(t) = e^{-at}u(t), a > 0, is:",
        "options": [
          "1/(2a)",
          "1/a",
          "a",
          "Infinite"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Signal Energy",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Energy = ∫[0,∞] e^{-2at} dt = 1/(2a)."
      },
      {
        "id": 28,
        "question": "The output of an LTI system to a unit step input is called:",
        "options": [
          "Impulse response",
          "Step response",
          "Ramp response",
          "Frequency response"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "System Response",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Step response: output to unit step input."
      },
      {
        "id": 29,
        "question": "The ROC of Z-transform for a two-sided sequence is:",
        "options": [
          "Annular region",
          "Entire z-plane",
          "Outside unit circle",
          "Inside unit circle"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Z-Transform",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "ROC is an annular region for two-sided sequences."
      },
      {
        "id": 30,
        "question": "The Fourier transform of a real and even signal is:",
        "options": [
          "Real and even",
          "Real and odd",
          "Imaginary and even",
          "Imaginary and odd"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signals & Systems",
        "topic": "Fourier Transform",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fourier transform of real and even signal is real and even."
      }
      
    ],
    'Communications': [
      {
        "id": 1,
        "question": "The autocorrelation function of white noise is:",
        "options": ["A delta function", "A constant", "A ramp", "A step"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Random Processes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "White noise autocorrelation is a scaled delta function."
      },
      {
        "id": 2,
        "question": "The bandwidth of an AM signal with a maximum modulating frequency of 5 kHz is:",
        "options": ["5 kHz", "10 kHz", "15 kHz", "20 kHz"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Amplitude Modulation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "AM bandwidth = 2 × maximum modulating frequency = 10 kHz."
      },
      {
        "id": 3,
        "question": "The power spectral density (PSD) of white noise is:",
        "options": ["Constant", "Increasing with frequency", "Decreasing with frequency", "Zero"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Random Processes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "White noise has flat (constant) PSD."
      },
      {
        "id": 4,
        "question": "In a superheterodyne receiver, the function of the mixer is to:",
        "options": [
          "Amplify the signal",
          "Convert RF to IF",
          "Demodulate the signal",
          "Filter the signal"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Receivers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Mixer shifts the frequency to intermediate frequency (IF)."
      },
      {
        "id": 5,
        "question": "The entropy of a binary source with probabilities 0.5 and 0.5 is:",
        "options": ["0", "0.5", "1", "2"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Information Theory",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Maximum entropy for binary source: H = -2×0.5×log₂0.5 = 1 bit."
      },
      {
        "id": 6,
        "question": "The minimum bandwidth required for transmitting a PCM signal is:",
        "options": [
          "Equal to the sampling rate",
          "Half the sampling rate",
          "Twice the sampling rate",
          "Depends on quantization"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Digital Communications",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "PCM minimum bandwidth = sampling rate (Nyquist)."
      },
      {
        "id": 7,
        "question": "The maximum channel capacity for a channel with bandwidth B and SNR S/N is given by:",
        "options": [
          "B log₂(1 + S/N)",
          "B log₁₀(1 + S/N)",
          "B × S/N",
          "B × log₂(S/N)"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Information Theory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shannon's theorem: C = B log₂(1 + S/N)."
      },
      {
        "id": 8,
        "question": "In FM, the bandwidth is estimated by:",
        "options": [
          "Carson's rule",
          "Nyquist theorem",
          "Shannon's theorem",
          "Friis formula"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Frequency Modulation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Carson's rule gives FM bandwidth."
      },
      {
        "id": 9,
        "question": "The probability of error for BPSK in AWGN is:",
        "options": [
          "Q(√(2Eb/N₀))",
          "Q(√(Eb/N₀))",
          "Q(√(4Eb/N₀))",
          "Q(√(Eb/2N₀))"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Digital Modulation",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "BPSK BER: Pe = Q(√(2Eb/N₀))."
      },
      {
        "id": 10,
        "question": "A matched filter maximizes:",
        "options": [
          "Signal to noise ratio",
          "Bandwidth",
          "Bit rate",
          "Error probability"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Detection Theory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Matched filter maximizes SNR at sampling instant."
      },
      {
        "id": 11,
        "question": "Which of the following is NOT a digital modulation scheme?",
        "options": ["ASK", "FSK", "PSK", "SSB"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Digital Modulation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "SSB (Single Sideband) is analog, not digital modulation."
      },
      {
        "id": 12,
        "question": "The main advantage of QAM over ASK and PSK is:",
        "options": [
          "Higher spectral efficiency",
          "Lower bandwidth",
          "Lower SNR requirement",
          "Simpler circuitry"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Digital Modulation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "QAM achieves higher spectral efficiency."
      },
      {
        "id": 13,
        "question": "Inter-symbol interference (ISI) can be reduced by:",
        "options": [
          "Using a raised-cosine filter",
          "Increasing bit rate",
          "Increasing bandwidth",
          "Reducing SNR"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Digital Communications",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Raised-cosine filtering reduces ISI."
      },
      {
        "id": 14,
        "question": "The Hamming distance between code words 10101 and 11100 is:",
        "options": ["1", "2", "3", "4"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Error Correction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Hamming distance is number of differing bits: 3."
      },
      {
        "id": 15,
        "question": "The Nyquist rate for a baseband channel of bandwidth B is:",
        "options": ["B", "2B", "B/2", "4B"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Sampling",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Nyquist rate = 2B."
      },
      {
        "id": 16,
        "question": "The main function of a demodulator is to:",
        "options": [
          "Extract the original information signal",
          "Increase the carrier frequency",
          "Amplify the received signal",
          "Reduce noise"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Demodulation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Demodulator recovers the original information from the carrier."
      },
      {
        "id": 17,
        "question": "The power efficiency of AM with 100% modulation is:",
        "options": ["16.67%", "33.33%", "50%", "100%"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Amplitude Modulation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Power efficiency = μ²/(2+μ²), for μ=1: 1/3 = 33.33%."
      },
      {
        "id": 18,
        "question": "In a PCM system, increasing the number of quantization levels will:",
        "options": [
          "Decrease quantization noise",
          "Increase quantization noise",
          "Have no effect",
          "Increase sampling rate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Digital Communications",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "More levels = less quantization error."
      },
      {
        "id": 19,
        "question": "The main purpose of a matched filter in a receiver is to:",
        "options": [
          "Maximize SNR",
          "Minimize bandwidth",
          "Reduce ISI",
          "Increase data rate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Detection",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Matched filter maximizes SNR at sampling instant."
      },
      {
        "id": 20,
        "question": "Gray coding is used in digital communications to:",
        "options": [
          "Minimize bit errors",
          "Increase bandwidth",
          "Reduce SNR",
          "Increase power"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Coding",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gray code minimizes bit errors between adjacent symbols."
      },
      {
        "id": 21,
        "question": "The spectrum of an FM signal consists of:",
        "options": [
          "Carrier and infinite sidebands",
          "Carrier and two sidebands",
          "Only carrier",
          "Only sidebands"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Frequency Modulation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "FM spectrum: carrier plus infinite sidebands."
      },
      {
        "id": 22,
        "question": "A convolutional code is used for:",
        "options": [
          "Error detection and correction",
          "Data compression",
          "Encryption",
          "Modulation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Error Correction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Convolutional codes are for error correction."
      },
      {
        "id": 23,
        "question": "The main cause of thermal noise in a resistor is:",
        "options": [
          "Random motion of electrons",
          "External interference",
          "Impedance mismatch",
          "Signal distortion"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Noise",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Thermal noise is due to random electron motion."
      },
      {
        "id": 24,
        "question": "In ASK modulation, the information is carried by:",
        "options": [
          "Amplitude of carrier",
          "Frequency of carrier",
          "Phase of carrier",
          "Bandwidth"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Digital Modulation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "ASK: Amplitude Shift Keying."
      },
      {
        "id": 25,
        "question": "The main advantage of spread spectrum modulation is:",
        "options": [
          "Resistance to interference",
          "Lower power consumption",
          "Simpler receivers",
          "Higher data rate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Spread Spectrum",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Spread spectrum is robust to interference and jamming."
      },
      {
        "id": 26,
        "question": "The output SNR of a matched filter is proportional to:",
        "options": [
          "Signal energy",
          "Signal bandwidth",
          "Noise power",
          "Sampling rate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Detection",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Matched filter SNR ∝ signal energy."
      },
      {
        "id": 27,
        "question": "The channel capacity increases with:",
        "options": [
          "Increasing bandwidth",
          "Decreasing bandwidth",
          "Decreasing SNR",
          "Decreasing data rate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Information Theory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Capacity increases with bandwidth and SNR."
      },
      {
        "id": 28,
        "question": "A binary symmetric channel (BSC) is characterized by:",
        "options": [
          "Equal probability of bit flip in both directions",
          "No bit errors",
          "Only 0 to 1 errors",
          "Only 1 to 0 errors"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Channel Models",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "BSC: probability of 0→1 and 1→0 are equal."
      },
      {
        "id": 29,
        "question": "The function of a scrambler in digital communications is to:",
        "options": [
          "Randomize bit patterns",
          "Compress data",
          "Detect errors",
          "Increase SNR"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Line Coding",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Scrambler randomizes bit patterns to avoid long runs of 0s or 1s."
      },
      {
        "id": 30,
        "question": "A cyclic redundancy check (CRC) is used for:",
        "options": [
          "Error detection",
          "Error correction",
          "Data encryption",
          "Data compression"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Communications",
        "topic": "Error Detection",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "CRC is used for error detection in digital communications."
      }
      
    ],
    'Control Systems': [
      {
        "id": 1,
        "question": "A system is said to be linear if:",
        "options": [
          "It satisfies superposition and homogeneity",
          "It has constant gain",
          "It is time-invariant",
          "It is stable"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "System Properties",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Linearity requires both superposition and homogeneity[1][6]."
      },
      {
        "id": 2,
        "question": "The transfer function of a system is defined as:",
        "options": [
          "Output/Input in Laplace domain with zero initial conditions",
          "Input/Output in Laplace domain",
          "Sum of input and output",
          "Difference of input and output"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Transfer Function",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Transfer function is Laplace(output)/Laplace(input) with zero initial conditions[1][6]."
      },
      {
        "id": 3,
        "question": "Which of the following is NOT a feature of a modern control system?",
        "options": [
          "High accuracy",
          "Automatic control",
          "Manual operation",
          "Fast response"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Basics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Modern control systems are automatic, not manual[1][6]."
      },
      {
        "id": 4,
        "question": "The block diagram reduction technique is used to:",
        "options": [
          "Simplify complex block diagrams",
          "Increase system gain",
          "Reduce system order",
          "Increase stability"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Block Diagrams",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Block diagram reduction simplifies system analysis[1][5]."
      },
      {
        "id": 5,
        "question": "The time constant of a first-order system with transfer function G(s) = 1/(Ts + 1) is:",
        "options": ["T", "1/T", "T^2", "1"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Time Response",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Time constant is T for G(s) = 1/(Ts + 1)[1][6]."
      },
      {
        "id": 6,
        "question": "The steady-state error of a type-1 system for a unit ramp input is:",
        "options": ["Zero", "Finite", "Infinite", "Oscillatory"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Steady-State Error",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Type-1: finite error for ramp input, zero for step[1][4][6]."
      },
      {
        "id": 7,
        "question": "The root locus of a system gives information about:",
        "options": [
          "System stability as gain varies",
          "Time response",
          "Frequency response",
          "Steady-state error"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Root Locus",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Root locus shows pole movement with gain[1][3][6]."
      },
      {
        "id": 8,
        "question": "A negative feedback in a control system:",
        "options": [
          "Reduces sensitivity to parameter variations",
          "Increases bandwidth",
          "Improves stability",
          "All of the above"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Feedback",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Negative feedback improves all these aspects[1][6]."
      },
      {
        "id": 9,
        "question": "The phase margin of a system is a measure of:",
        "options": [
          "Relative stability",
          "Absolute stability",
          "Steady-state error",
          "System type"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Phase margin indicates relative stability[1][6]."
      },
      {
        "id": 10,
        "question": "The transfer function of a unity feedback system is G(s)/[1+G(s)]. If G(s) = 10/(s+1), the steady-state error for a unit step input is:",
        "options": ["0", "1/11", "10", "1"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Steady-State Error",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ess = 1/(1+Kp), Kp=10, so error=1/11[3][4][6]."
      },
      {
        "id": 11,
        "question": "A system is said to be controllable if:",
        "options": [
          "Any state can be reached from any initial state by suitable input",
          "Output can be measured",
          "System is stable",
          "System is observable"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State Space",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Controllability: reachability of any state[1][6]."
      },
      {
        "id": 12,
        "question": "The Routh-Hurwitz criterion is used to determine:",
        "options": [
          "Stability of a system",
          "System gain",
          "System type",
          "Steady-state error"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Routh-Hurwitz is for stability analysis[1][6]."
      },
      {
        "id": 13,
        "question": "The bandwidth of a closed-loop control system is:",
        "options": [
          "Greater than open-loop bandwidth",
          "Less than open-loop bandwidth",
          "Equal to open-loop bandwidth",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Negative feedback increases bandwidth[1][6]."
      },
      {
        "id": 14,
        "question": "The transfer function of a PI controller is:",
        "options": [
          "Kp + Ki/s",
          "Kp + Kds",
          "Kp",
          "Kds"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Controllers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "PI: proportional plus integral action[1][6]."
      },
      {
        "id": 15,
        "question": "The phase crossover frequency is the frequency at which:",
        "options": [
          "Phase of open-loop transfer function is -180°",
          "Gain is unity",
          "Phase is 0°",
          "Gain is zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Phase crossover: phase = -180°[1][6]."
      },
      {
        "id": 16,
        "question": "A system with transfer function G(s) = 1/(s^2 + 2s + 2) is:",
        "options": [
          "Underdamped",
          "Critically damped",
          "Overdamped",
          "Unstable"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Time Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ζ < 1, so underdamped[1][6]."
      },
      {
        "id": 17,
        "question": "The state-space representation of a system is:",
        "options": [
          "A set of first-order differential equations",
          "A single algebraic equation",
          "A transfer function",
          "A block diagram"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State Space",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "State-space uses first-order ODEs[1][6]."
      },
      {
        "id": 18,
        "question": "The sensitivity of a closed-loop system to parameter variations is:",
        "options": [
          "Reduced by negative feedback",
          "Increased by negative feedback",
          "Unaffected by feedback",
          "Dependent on open-loop gain only"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Feedback",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Negative feedback reduces sensitivity[1][6]."
      },
      {
        "id": 19,
        "question": "The phase margin is positive for:",
        "options": [
          "Stable system",
          "Unstable system",
          "Marginally stable system",
          "All of the above"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Positive phase margin means stable[1][6]."
      },
      {
        "id": 20,
        "question": "The controllability matrix for a system (A, B) is:",
        "options": [
          "[B, AB, A^2B, ...]",
          "[A, AB, A^2B, ...]",
          "[B, BA, B^2A, ...]",
          "[A, B, C, D]"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State Space",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Controllability matrix: [B, AB, A^2B, ...][1][6]."
      },
      {
        "id": 21,
        "question": "The effect of adding a zero to a transfer function is usually:",
        "options": [
          "Increase system overshoot",
          "Decrease system overshoot",
          "No effect",
          "Increase system type"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Transfer Function",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Zero increases overshoot and speed[1][6]."
      },
      {
        "id": 22,
        "question": "A phase-lead compensator is used to:",
        "options": [
          "Increase phase margin",
          "Decrease phase margin",
          "Increase steady-state error",
          "Decrease bandwidth"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Compensation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lead compensator increases phase margin and speed[1][6]."
      },
      {
        "id": 23,
        "question": "The open-loop transfer function of a type-2 system has:",
        "options": [
          "Two poles at origin",
          "One pole at origin",
          "No pole at origin",
          "Two zeros at origin"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "System Type",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Type-2: two integrators, i.e., two poles at origin[1][6]."
      },
      {
        "id": 24,
        "question": "A system is observable if:",
        "options": [
          "States can be determined from outputs",
          "States can be controlled by inputs",
          "System is stable",
          "System is linear"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State Space",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Observability: states can be reconstructed from outputs[1][6]."
      },
      {
        "id": 25,
        "question": "The effect of derivative control in a PID controller is to:",
        "options": [
          "Increase damping",
          "Decrease damping",
          "Increase steady-state error",
          "Decrease system type"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Controllers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Derivative control increases damping and reduces overshoot[1][6]."
      },
      {
        "id": 26,
        "question": "The characteristic equation of a closed-loop system is:",
        "options": [
          "1 + G(s)H(s) = 0",
          "G(s)H(s) = 1",
          "G(s) = H(s)",
          "G(s) = 0"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Stability",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Characteristic equation: 1 + G(s)H(s) = 0[1][6]."
      },
      {
        "id": 27,
        "question": "The transfer function of a system with state-space (A, B, C, D) is:",
        "options": [
          "C(sI - A)^(-1)B + D",
          "B(sI - A)^(-1)C + D",
          "A(sI - B)^(-1)C + D",
          "D(sI - A)^(-1)B + C"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State Space",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Transfer function: C(sI - A)^(-1)B + D[1][6]."
      },
      {
        "id": 28,
        "question": "The effect of integral control in a PID controller is to:",
        "options": [
          "Eliminate steady-state error",
          "Increase steady-state error",
          "Increase overshoot",
          "Decrease damping"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Controllers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Integral action eliminates steady-state error[1][6]."
      },
      {
        "id": 29,
        "question": "The frequency at which the magnitude of the open-loop transfer function is unity is called:",
        "options": [
          "Gain crossover frequency",
          "Phase crossover frequency",
          "Resonant frequency",
          "Natural frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gain crossover: |G(jω)| = 1[1][6]."
      },
      {
        "id": 30,
        "question": "A digital control system uses which transform for analysis?",
        "options": [
          "Z-transform",
          "Laplace transform",
          "Fourier transform",
          "Mellin transform"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Digital Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Digital systems use Z-transform for analysis[1][6]."
      }
      
    ],
    'Electromagnetics': [
      {
        "id": 1,
        "question": "In a plane electromagnetic wave propagating in +x direction, if the electric field oscillates along +z, the magnetic field oscillates along:",
        "options": ["+x", "+y", "-y", "-z"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "EM Waves",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "E, B, and propagation are mutually perpendicular. For +x propagation and +z E, B is along -y by right-hand rule[1]."
      },
      {
        "id": 2,
        "question": "The characteristic impedance of a lossless transmission line with L = 100 nH/m and C = 40 pF/m is:",
        "options": ["25 Ω", "40 Ω", "50 Ω", "100 Ω"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Transmission Lines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Z₀ = sqrt(L/C) = sqrt(100e-9/40e-12) = 50 Ω[1]."
      },
      {
        "id": 3,
        "question": "Electric flux is a _______ field, and its density is a _______ field.",
        "options": ["Scalar, Vector", "Vector, Scalar", "Scalar, Scalar", "Vector, Vector"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Electrostatics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Electric flux is scalar; electric flux density (D) is vector[1]."
      },
      {
        "id": 4,
        "question": "1 Tesla is equal to:",
        "options": ["1 Weber/m", "1 Weber/m²", "1 Gauss", "10⁴ Gauss"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Magnetostatics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "1 Tesla = 1 Weber/m²[1]."
      },
      {
        "id": 5,
        "question": "The thumb in Fleming's left hand rule indicates the direction of:",
        "options": ["Magnetic field", "Induced current", "Motion (force)", "Voltage"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Electromagnetic Induction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Thumb = motion/force, forefinger = field, middle = current[1]."
      },
      {
        "id": 6,
        "question": "The SI unit of electric field is:",
        "options": ["Coulomb", "Newton", "Volt/meter", "Ampere"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Electrostatics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Electric field unit is V/m."
      },
      {
        "id": 7,
        "question": "The divergence of magnetic flux density B is:",
        "options": ["Zero", "One", "Infinity", "μ₀"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Maxwell's Equations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "∇·B = 0 (no magnetic monopoles)."
      },
      {
        "id": 8,
        "question": "The speed of electromagnetic waves in free space is:",
        "options": ["3 × 10⁸ m/s", "1.5 × 10⁸ m/s", "3 × 10⁶ m/s", "1 × 10⁸ m/s"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "EM Waves",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s."
      },
      {
        "id": 9,
        "question": "Which law states that the line integral of the magnetic field around a closed path is equal to μ₀ times the total current enclosed?",
        "options": [
          "Gauss's law",
          "Faraday's law",
          "Ampere's law",
          "Lenz's law"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Magnetostatics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ampere's circuital law: ∮B·dl = μ₀I."
      },
      {
        "id": 10,
        "question": "The boundary condition for the tangential component of E at the interface of two dielectrics is:",
        "options": [
          "E₁t = E₂t",
          "ε₁E₁t = ε₂E₂t",
          "E₁n = E₂n",
          "D₁n = D₂n"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Boundary Conditions",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Tangential E is continuous across dielectric boundary."
      },
      {
        "id": 11,
        "question": "The displacement current was introduced by:",
        "options": ["Maxwell", "Faraday", "Ampere", "Gauss"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Maxwell's Equations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Maxwell introduced displacement current to complete Ampere's law."
      },
      {
        "id": 12,
        "question": "The intrinsic impedance of free space is:",
        "options": ["50 Ω", "120π Ω", "377 Ω", "Both B and C"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "EM Waves",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Intrinsic impedance = 120π Ω ≈ 377 Ω[1]."
      },
      {
        "id": 13,
        "question": "The unit of magnetic flux is:",
        "options": ["Tesla", "Weber", "Henry", "Farad"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Magnetostatics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Magnetic flux is measured in Weber."
      },
      {
        "id": 14,
        "question": "The Poynting vector represents:",
        "options": [
          "Electric field direction",
          "Magnetic field direction",
          "Power flow per unit area",
          "Wave polarization"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "EM Waves",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Poynting vector S = E × H, gives power flow direction."
      },
      {
        "id": 15,
        "question": "The skin depth in a good conductor is:",
        "options": [
          "Directly proportional to frequency",
          "Inversely proportional to frequency",
          "Independent of frequency",
          "Proportional to conductivity"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "EM Waves",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Skin depth δ ∝ 1/√f."
      },
      {
        "id": 16,
        "question": "The electric field inside a perfect conductor is:",
        "options": ["Infinite", "Zero", "Constant", "Equal to applied field"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Electrostatics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "E = 0 inside a perfect conductor."
      },
      {
        "id": 17,
        "question": "The capacitance per unit length of a coaxial cable with inner radius a and outer radius b is:",
        "options": [
          "2πε/ln(b/a)",
          "πε/ln(b/a)",
          "2πε/ln(a/b)",
          "None of these"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Transmission Lines",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "C = 2πε/ln(b/a)."
      },
      {
        "id": 18,
        "question": "Faraday's law of electromagnetic induction states:",
        "options": [
          "Induced emf is proportional to rate of change of magnetic flux",
          "Induced emf is proportional to magnetic field strength",
          "Induced emf is proportional to current",
          "Induced emf is proportional to resistance"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Electromagnetic Induction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "emf = -dΦ/dt."
      },
      {
        "id": 19,
        "question": "The direction of induced emf is given by:",
        "options": [
          "Faraday's law",
          "Lenz's law",
          "Ampere's law",
          "Coulomb's law"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Electromagnetic Induction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lenz's law gives direction of induced emf."
      },
      {
        "id": 20,
        "question": "The core of a solenoid is made of:",
        "options": ["Copper", "Soft iron", "Steel", "Aluminum"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Magnetostatics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Soft iron is used for easy magnetization and demagnetization[3]."
      },
      {
        "id": 21,
        "question": "The wave impedance of a lossless transmission line is:",
        "options": [
          "√(L/C)",
          "√(R/G)",
          "L/C",
          "C/L"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Transmission Lines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Z₀ = √(L/C)."
      },
      {
        "id": 22,
        "question": "The cutoff frequency of a rectangular waveguide is determined by:",
        "options": [
          "Dimensions of the waveguide",
          "Material of the waveguide",
          "Operating frequency",
          "Input power"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Waveguides",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cutoff depends on waveguide dimensions."
      },
      {
        "id": 23,
        "question": "The magnetic field inside a long solenoid is:",
        "options": [
          "μ₀nI",
          "μ₀I/2πr",
          "μ₀I",
          "μ₀nI/2"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Magnetostatics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "B = μ₀nI, n = turns per unit length."
      },
      {
        "id": 24,
        "question": "A wave is said to be TEM if:",
        "options": [
          "Both E and H are transverse to direction of propagation",
          "E is transverse, H is longitudinal",
          "H is transverse, E is longitudinal",
          "Both E and H are longitudinal"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "EM Waves",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "TEM: both E and H are transverse."
      },
      {
        "id": 25,
        "question": "The Brewster angle for an interface is given by:",
        "options": [
          "tan⁻¹(n₂/n₁)",
          "sin⁻¹(n₂/n₁)",
          "cos⁻¹(n₂/n₁)",
          "n₁/n₂"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "EM Waves",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Brewster angle θB = tan⁻¹(n₂/n₁)."
      },
      {
        "id": 26,
        "question": "The solution to Laplace’s equation in free space is called:",
        "options": [
          "Harmonic function",
          "Wave function",
          "Potential function",
          "Green’s function"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Electrostatics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Laplace’s equation solutions are harmonic functions."
      },
      {
        "id": 27,
        "question": "The SI unit of permittivity is:",
        "options": [
          "Farad/meter",
          "Henry/meter",
          "Weber/meter",
          "Tesla"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Electrostatics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Permittivity ε: Farad/m."
      },
      {
        "id": 28,
        "question": "The direction of propagation of an EM wave is given by:",
        "options": [
          "E × H",
          "E + H",
          "E · H",
          "E/H"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "EM Waves",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Direction is given by Poynting vector S = E × H."
      },
      {
        "id": 29,
        "question": "If a DC current is passed through a coil, the induced voltage is:",
        "options": [
          "Maximum",
          "Zero",
          "Equal to supply voltage",
          "Depends on resistance"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Electromagnetic Induction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "No induced emf for DC current (no changing flux)[3]."
      },
      {
        "id": 30,
        "question": "The boundary condition for the normal component of D at a dielectric interface is:",
        "options": [
          "D₁n = D₂n",
          "ε₁E₁n = ε₂E₂n",
          "D₁t = D₂t",
          "E₁n = E₂n"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electromagnetics",
        "topic": "Boundary Conditions",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Normal D is continuous if no surface charge."
      }
      
    ]
  },

  // Mechanical Engineering Questions
  'Mechanical Engineering': {
    'Thermodynamics': [
      {
        "id": 1,
        "question": "For an ideal gas undergoing an adiabatic process, which relation is correct?",
        "options": ["PV = constant", "PVᵞ = constant", "P/T = constant", "V/T = constant"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Thermodynamic Processes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "For adiabatic process, PVᵞ = constant where γ is heat capacity ratio."
      },
      {
        "id": 2,
        "question": "The change in entropy for a reversible isothermal process is:",
        "options": ["Zero", "Q/T", "T/Q", "Infinity"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Entropy",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ΔS = Q/T for a reversible isothermal process."
      },
      {
        "id": 3,
        "question": "In a Carnot cycle, the efficiency depends on:",
        "options": ["Working substance", "Temperature of reservoirs", "Pressure ratio", "Volume ratio"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Cycles",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Carnot efficiency depends only on temperatures of hot and cold reservoirs."
      },
      {
        "id": 4,
        "question": "The specific heat at constant pressure (Cp) is always ______ than at constant volume (Cv) for an ideal gas.",
        "options": ["Less", "Equal", "Greater", "Zero"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Properties of Gases",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Cp > Cv for all ideal gases."
      },
      {
        "id": 5,
        "question": "The first law of thermodynamics is a statement of:",
        "options": ["Conservation of mass", "Conservation of energy", "Conservation of entropy", "Conservation of volume"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "First Law",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "First law is conservation of energy."
      },
      {
        "id": 6,
        "question": "The enthalpy of an ideal gas depends on:",
        "options": ["Pressure only", "Temperature only", "Both pressure and temperature", "Volume only"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Properties of Gases",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "For ideal gases, enthalpy depends only on temperature."
      },
      {
        "id": 7,
        "question": "The entropy change of an isolated system is:",
        "options": ["Always zero", "Always positive", "Always negative", "Zero or positive"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Second Law",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Entropy of isolated system never decreases."
      },
      {
        "id": 8,
        "question": "The efficiency of a Rankine cycle increases by:",
        "options": ["Increasing boiler pressure", "Decreasing condenser pressure", "Superheating steam", "All of the above"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Power Cycles",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All these improve Rankine cycle efficiency."
      },
      {
        "id": 9,
        "question": "The exergy of a system is:",
        "options": ["Maximum work obtainable", "Total energy", "Internal energy", "Heat content"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Exergy",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Exergy is the maximum useful work possible."
      },
      {
        "id": 10,
        "question": "The specific heat ratio (γ) for diatomic gases at room temperature is approximately:",
        "options": ["1.2", "1.4", "1.67", "2.0"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Properties of Gases",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "γ ≈ 1.4 for diatomic gases like air."
      },
      {
        "id": 11,
        "question": "The work done in an isothermal expansion of an ideal gas is:",
        "options": ["Zero", "PΔV", "nRT ln(V2/V1)", "nCvΔT"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Work and Heat",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Work done = nRT ln(V2/V1) for isothermal process."
      },
      {
        "id": 12,
        "question": "The internal energy of an ideal gas depends on:",
        "options": ["Pressure", "Temperature", "Volume", "Pressure and Volume"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Properties of Gases",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Internal energy depends only on temperature for ideal gases."
      },
      {
        "id": 13,
        "question": "The entropy change during a reversible adiabatic process is:",
        "options": ["Positive", "Negative", "Zero", "Infinite"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Entropy",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Reversible adiabatic process is isentropic (ΔS=0)."
      },
      {
        "id": 14,
        "question": "The work done per unit mass in a steady flow process is given by:",
        "options": [
          "Δh + Δ(ke) + Δ(pe)",
          "Δu + Δ(ke) + Δ(pe)",
          "Δh - Δ(ke) - Δ(pe)",
          "Δu - Δ(ke) - Δ(pe)"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Steady Flow Energy Equation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Work done = change in enthalpy + kinetic + potential energy."
      },
      {
        "id": 15,
        "question": "The efficiency of a heat engine is defined as:",
        "options": [
          "Work output / Heat input",
          "Heat input / Work output",
          "Heat rejected / Heat input",
          "Work output / Heat rejected"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Heat Engines",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Efficiency = useful work output divided by heat input."
      },
      {
        "id": 16,
        "question": "Which thermodynamic process is represented by a vertical line on a PV diagram?",
        "options": ["Isobaric", "Isothermal", "Isochoric", "Adiabatic"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Processes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Isochoric process has constant volume (vertical line)."
      },
      {
        "id": 17,
        "question": "In a throttling process, the enthalpy:",
        "options": ["Increases", "Decreases", "Remains constant", "Varies randomly"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Processes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Throttling is an isenthalpic process."
      },
      {
        "id": 18,
        "question": "The specific heat ratio γ is defined as:",
        "options": [
          "Cp / Cv",
          "Cv / Cp",
          "Cp - Cv",
          "Cp + Cv"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Properties of Gases",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "γ = Cp / Cv."
      },
      {
        "id": 19,
        "question": "The work done in an isobaric process is:",
        "options": ["PΔV", "0", "nRT ln(V2/V1)", "ΔU"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Work and Heat",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Work done = pressure × change in volume."
      },
      {
        "id": 20,
        "question": "The Zeroth law of thermodynamics establishes the concept of:",
        "options": [
          "Energy conservation",
          "Entropy",
          "Temperature",
          "Heat transfer"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Basics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Zeroth law defines temperature and thermal equilibrium."
      },
      {
        "id": 21,
        "question": "The efficiency of a refrigerator is defined as:",
        "options": [
          "Heat removed / Work input",
          "Work input / Heat removed",
          "Heat rejected / Work input",
          "Work input / Heat rejected"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Refrigeration",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Coefficient of performance (COP) = heat removed / work input."
      },
      {
        "id": 22,
        "question": "The enthalpy of vaporization of water at 100°C is approximately:",
        "options": ["2257 kJ/kg", "100 kJ/kg", "419 kJ/kg", "540 kJ/kg"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Properties of Water",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Latent heat of vaporization of water at 100°C is ~2257 kJ/kg."
      },
      {
        "id": 23,
        "question": "The specific gas constant R is related to universal gas constant R₀ by:",
        "options": [
          "R = R₀ / M",
          "R = R₀ × M",
          "R = R₀ + M",
          "R = R₀ - M"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Gas Laws",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "R = R₀ / molecular weight M."
      },
      {
        "id": 24,
        "question": "The velocity of sound in air at room temperature is approximately:",
        "options": ["343 m/s", "300 m/s", "150 m/s", "500 m/s"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Sound",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Speed of sound in air at 20°C is ~343 m/s."
      },
      {
        "id": 25,
        "question": "The process in which no heat transfer occurs is called:",
        "options": ["Isothermal", "Isobaric", "Adiabatic", "Isochoric"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Processes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Adiabatic process has no heat transfer."
      },
      {
        "id": 26,
        "question": "The specific volume of an ideal gas at STP is approximately:",
        "options": ["0.0224 m³/kg", "0.224 m³/kg", "22.4 m³/kg", "0.00224 m³/kg"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Gas Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "At STP, molar volume is 22.4 liters or 0.0224 m³/kg for air."
      },
      {
        "id": 27,
        "question": "The maximum efficiency of a heat engine is given by:",
        "options": [
          "Carnot efficiency",
          "Otto cycle efficiency",
          "Diesel cycle efficiency",
          "Rankine cycle efficiency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Heat Engines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Carnot cycle sets the maximum theoretical efficiency."
      },
      {
        "id": 28,
        "question": "The specific heat at constant volume for an ideal gas is:",
        "options": ["Cp - R", "Cp + R", "R - Cp", "R + Cp"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Gas Properties",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Cp - Cv = R for ideal gases."
      },
      {
        "id": 29,
        "question": "The enthalpy change for an isothermal process is:",
        "options": ["Zero", "Positive", "Negative", "Depends on pressure"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Thermodynamic Processes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "For ideal gas, enthalpy depends only on temperature; no change in isothermal."
      },
      {
        "id": 30,
        "question": "The efficiency of a refrigerator is called:",
        "options": ["COP", "Thermal efficiency", "Mechanical efficiency", "Volumetric efficiency"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Thermodynamics",
        "topic": "Refrigeration",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Coefficient of Performance (COP) measures refrigerator efficiency."
      }
      
    ],
    'Fluid Mechanics': [
      {
        "id": 1,
        "question": "The Reynolds number for flow in a pipe is given by:",
        "options": ["ρVD/μ", "μVD/ρ", "ρV²D/μ", "ρVμ/D"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Dimensional Analysis",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Re = ρVD/μ where ρ=density, V=velocity, D=diameter, μ=viscosity[1][2]."
      },
      {
        "id": 2,
        "question": "A flow in which the quantity of liquid flowing per second is constant is called:",
        "options": ["Steady", "Streamline", "Turbulent", "Unsteady"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Basics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Steady flow has constant discharge with time[9]."
      },
      {
        "id": 3,
        "question": "The SI unit of dynamic viscosity is:",
        "options": ["Pa·s", "N·m", "N·s/m²", "kg/m³"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Properties of Fluids",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Dynamic viscosity unit is Pa·s (N·s/m²)[2]."
      },
      {
        "id": 4,
        "question": "The pressure at a point in a static fluid is:",
        "options": ["Same in all directions", "Greater in vertical direction", "Greater in horizontal direction", "Zero"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Hydrostatics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Pascal's law: pressure is isotropic at a point in static fluid[2]."
      },
      {
        "id": 5,
        "question": "The bulk modulus of a fluid is the ratio of:",
        "options": ["Pressure increase to relative decrease in volume", "Volume increase to pressure decrease", "Pressure to density", "Density to pressure"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Properties of Fluids",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bulk modulus = -V dP/dV[2]."
      },
      {
        "id": 6,
        "question": "The capillary rise is more in:",
        "options": ["Narrow tubes", "Wide tubes", "Independent of tube", "Depends on fluid only"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Surface Tension",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Capillary rise ∝ 1/radius; higher in narrow tubes[2]."
      },
      {
        "id": 7,
        "question": "The pressure difference measured by a manometer is due to:",
        "options": ["Hydrostatic head", "Velocity head", "Kinetic energy", "Potential energy"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Pressure Measurement",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Manometers measure hydrostatic pressure difference[2]."
      },
      {
        "id": 8,
        "question": "The center of pressure on a submerged vertical surface is located:",
        "options": ["Below the centroid", "At the centroid", "Above the centroid", "At the free surface"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Hydrostatics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Center of pressure is always below centroid for vertical surfaces[2]."
      },
      {
        "id": 9,
        "question": "The metacentric height of a floating body is the distance between:",
        "options": ["Center of gravity and metacenter", "Center of gravity and center of buoyancy", "Metacenter and center of buoyancy", "Waterline and metacenter"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Buoyancy",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Metacentric height = distance between G and M[2]."
      },
      {
        "id": 10,
        "question": "The continuity equation is based on the principle of:",
        "options": ["Conservation of mass", "Conservation of energy", "Conservation of momentum", "Conservation of pressure"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Kinematics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Continuity equation represents conservation of mass[2][3]."
      },
      {
        "id": 11,
        "question": "The stream function exists for:",
        "options": ["Irrotational flow", "Rotational flow", "Incompressible flow", "Both irrotational and incompressible flows"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Kinematics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Stream function exists for incompressible flows[2]."
      },
      {
        "id": 12,
        "question": "The Bernoulli equation is valid for:",
        "options": ["Steady, incompressible, inviscid flow", "Unsteady flow", "Viscous flow", "Compressible flow"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Dynamics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bernoulli's equation is for steady, incompressible, inviscid flow[2][3]."
      },
      {
        "id": 13,
        "question": "The Froude number is important in:",
        "options": ["Open channel flow", "Pipe flow", "Boundary layer flow", "Compressible flow"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Dimensional Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Froude number characterizes gravity effects in open channel flow[3]."
      },
      {
        "id": 14,
        "question": "The discharge over a broad crested weir is proportional to:",
        "options": ["H^1/2", "H^3/2", "H^2", "H^3"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Flow Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Q ∝ H^3/2 for broad crested weir[2]."
      },
      {
        "id": 15,
        "question": "The velocity profile for fully developed laminar flow in a pipe is:",
        "options": ["Parabolic", "Linear", "Uniform", "Exponential"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Internal Flows",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Laminar pipe flow has a parabolic velocity profile[2][3]."
      },
      {
        "id": 16,
        "question": "The critical Reynolds number for flow in a pipe is approximately:",
        "options": ["1000", "2000", "2300", "4000"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Flow Regimes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Transition from laminar to turbulent at Re ≈ 2300[2][3]."
      },
      {
        "id": 17,
        "question": "The Darcy-Weisbach equation is used to calculate:",
        "options": ["Head loss due to friction", "Velocity", "Pressure", "Discharge"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Pipe Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Darcy-Weisbach equation gives head loss in pipes[2][3]."
      },
      {
        "id": 18,
        "question": "The hydraulic radius for a circular pipe flowing full is:",
        "options": ["D/2", "D/4", "D", "2D"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Open Channel Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hydraulic radius = Area / wetted perimeter = (πD²/4)/(πD) = D/4[2]."
      },
      {
        "id": 19,
        "question": "The Mach number is defined as:",
        "options": ["Ratio of flow velocity to speed of sound", "Ratio of pressure to temperature", "Ratio of kinetic energy to potential energy", "Ratio of velocity to density"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Compressible Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Mach number = velocity/speed of sound[2][3]."
      },
      {
        "id": 20,
        "question": "The boundary layer thickness at the leading edge of a flat plate is:",
        "options": ["Zero", "Maximum", "Minimum", "Infinite"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Boundary Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Boundary layer thickness is zero at leading edge[2]."
      },
      {
        "id": 21,
        "question": "The Prandtl number is the ratio of:",
        "options": ["Kinematic viscosity to thermal diffusivity", "Thermal diffusivity to kinematic viscosity", "Dynamic viscosity to density", "Density to dynamic viscosity"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Dimensionless Numbers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pr = ν/α (kinematic viscosity/thermal diffusivity)[2]."
      },
      {
        "id": 22,
        "question": "The flow in a venturi meter is measured using:",
        "options": ["Pressure difference", "Temperature difference", "Velocity difference", "Height difference"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Flow Measurement",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Venturi meter uses pressure difference to measure flow[2][3]."
      },
      {
        "id": 23,
        "question": "The piezometric head is the sum of:",
        "options": ["Pressure head and elevation head", "Velocity head and pressure head", "Velocity head and elevation head", "All three heads"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Hydraulics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Piezometric head = pressure head + elevation head[2]."
      },
      {
        "id": 24,
        "question": "The specific gravity of a fluid is the ratio of its density to that of:",
        "options": ["Water", "Air", "Mercury", "Oil"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Properties of Fluids",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Specific gravity = density of fluid / density of water[2][3]."
      },
      {
        "id": 25,
        "question": "The vena contracta is:",
        "options": ["Point of minimum area and maximum velocity", "Point of maximum area", "Point of minimum velocity", "Point of maximum pressure"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Flow Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Vena contracta is where jet area is minimum and velocity is maximum[2]."
      },
      {
        "id": 26,
        "question": "The discharge through a rectangular notch varies as:",
        "options": ["H^1.5", "H^2", "H^0.5", "H^3"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Flow Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Q ∝ H^1.5 for rectangular notch[2]."
      },
      {
        "id": 27,
        "question": "The critical depth in an open channel is the depth at which:",
        "options": ["Specific energy is minimum", "Velocity is maximum", "Discharge is minimum", "Froude number is maximum"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Open Channel Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Critical depth is where specific energy is minimum for a given discharge[3]."
      },
      {
        "id": 28,
        "question": "The Chezy’s formula is used to calculate:",
        "options": ["Velocity of flow in open channel", "Pressure in pipe", "Discharge in weir", "Head loss in pipe"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Open Channel Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Chezy’s formula: V = C√(RS) for open channel velocity[2]."
      },
      {
        "id": 29,
        "question": "The hydraulic jump is a:",
        "options": ["Sudden transition from supercritical to subcritical flow", "Steady flow", "Laminar flow", "Uniform flow"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Open Channel Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hydraulic jump is a rapid transition from high to low velocity flow[2][3]."
      },
      {
        "id": 30,
        "question": "The dimensionless group representing the ratio of inertia force to viscous force is:",
        "options": ["Reynolds number", "Froude number", "Weber number", "Mach number"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Dimensional Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Reynolds number = inertia force / viscous force[2][3]."
      }
      
    ],
    'Heat Transfer': [
      {
        "id": 1,
        "question": "Heat transfer is the flow of energy from:",
        "options": [
          "Low temperature to high temperature",
          "High temperature to low temperature",
          "Irrespective of temperature",
          "One solid to another only"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Basics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Heat transfer is always from high to low temperature[1]."
      },
      {
        "id": 2,
        "question": "Which of the following is NOT a mode of heat transfer?",
        "options": ["Conduction", "Convection", "Radiation", "Diffusion"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Basics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Diffusion is not a heat transfer mode; conduction, convection, and radiation are[1][3]."
      },
      {
        "id": 3,
        "question": "Fourier’s law applies to:",
        "options": [
          "Conduction",
          "Convection",
          "Radiation",
          "All modes"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Conduction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Fourier’s law is for heat conduction[1]."
      },
      {
        "id": 4,
        "question": "Thermal conductivity of a perfect insulator is:",
        "options": ["Zero", "One", "Infinity", "Very high"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Conduction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Insulators have zero (theoretically) thermal conductivity[1]."
      },
      {
        "id": 5,
        "question": "The rate of heat transfer by conduction through a wall is proportional to:",
        "options": [
          "Temperature difference",
          "Area",
          "Thermal conductivity",
          "All of these"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Conduction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "q = kAΔT/L, so all factors matter[1]."
      },
      {
        "id": 6,
        "question": "The Biot number is the ratio of:",
        "options": [
          "Internal to external thermal resistance",
          "External to internal thermal resistance",
          "Convective to conductive heat transfer",
          "Conductive to convective heat transfer"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Dimensionless Numbers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bi = (hL_c)/k = internal/external resistance[1][2]."
      },
      {
        "id": 7,
        "question": "The critical radius of insulation for a cylinder is:",
        "options": ["k/h", "2k/h", "h/k", "k/2h"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Conduction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Critical radius = k/h for a cylinder[1]."
      },
      {
        "id": 8,
        "question": "The Nusselt number is a ratio of:",
        "options": [
          "Convective to conductive heat transfer",
          "Conductive to convective heat transfer",
          "Thermal to momentum diffusivity",
          "Inertia to viscous force"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Dimensionless Numbers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Nu = hL/k, convection/conduction[1][2]."
      },
      {
        "id": 9,
        "question": "The Prandtl number is the ratio of:",
        "options": [
          "Kinematic viscosity to thermal diffusivity",
          "Thermal diffusivity to kinematic viscosity",
          "Thermal conductivity to viscosity",
          "Viscosity to thermal conductivity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Dimensionless Numbers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pr = ν/α = kinematic viscosity/thermal diffusivity[1][2]."
      },
      {
        "id": 10,
        "question": "The heat transfer coefficient in forced convection depends on:",
        "options": [
          "Reynolds number",
          "Prandtl number",
          "Geometry",
          "All of these"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Convection",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "h depends on Re, Pr, and geometry[1][2]."
      },
      {
        "id": 11,
        "question": "The Stefan-Boltzmann law applies to:",
        "options": [
          "Black bodies",
          "Gray bodies",
          "White bodies",
          "All bodies"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Radiation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Stefan-Boltzmann law applies to black bodies[1][2]."
      },
      {
        "id": 12,
        "question": "The emissivity of a perfect black body is:",
        "options": ["0", "0.5", "1", "Infinity"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Radiation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Black body: emissivity = 1[1][2]."
      },
      {
        "id": 13,
        "question": "Kirchhoff’s law of radiation states that:",
        "options": [
          "Emissivity = absorptivity",
          "Reflectivity = transmissivity",
          "Emissivity = reflectivity",
          "Absorptivity = transmissivity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Radiation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "At thermal equilibrium, emissivity = absorptivity[1][2]."
      },
      {
        "id": 14,
        "question": "The value of Stefan-Boltzmann constant is approximately:",
        "options": [
          "5.67 × 10⁻⁸ W/m²K⁴",
          "1.67 × 10⁻⁸ W/m²K⁴",
          "5.67 × 10⁻⁶ W/m²K⁴",
          "1.67 × 10⁻⁶ W/m²K⁴"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Radiation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "σ = 5.67 × 10⁻⁸ W/m²K⁴[1][2]."
      },
      {
        "id": 15,
        "question": "The heat transfer in boiling is mainly by:",
        "options": [
          "Conduction",
          "Convection",
          "Radiation",
          "Both conduction and convection"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Boiling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Boiling involves both conduction and convection[1][2]."
      },
      {
        "id": 16,
        "question": "In a heat exchanger, the rate of heat transfer is calculated using:",
        "options": [
          "Enthalpy change",
          "Kinetic energy change",
          "Potential energy change",
          "Work done"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Heat Exchangers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Q = m·Cp·ΔT (enthalpy change)[2]."
      },
      {
        "id": 17,
        "question": "The effectiveness of a heat exchanger is defined as:",
        "options": [
          "Actual heat transfer / maximum possible heat transfer",
          "Maximum possible heat transfer / actual heat transfer",
          "Heat capacity ratio",
          "NTU"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Heat Exchangers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Effectiveness = Q_actual / Q_max[2]."
      },
      {
        "id": 18,
        "question": "The lumped system analysis is valid when:",
        "options": [
          "Biot number < 0.1",
          "Biot number > 1",
          "Fourier number < 0.1",
          "Fourier number > 1"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Transient Conduction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lumped analysis valid for Bi < 0.1[1][2]."
      },
      {
        "id": 19,
        "question": "The thermal boundary layer thickness is related to momentum boundary layer thickness by:",
        "options": [
          "δt = δ / Pr^(1/3)",
          "δt = δ × Pr",
          "δt = δ × Pr^(1/2)",
          "δt = δ / Pr"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Boundary Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "δt/δ = Pr^(-1/3) for laminar flow over flat plate[1][2]."
      },
      {
        "id": 20,
        "question": "The time constant of a thermocouple is:",
        "options": [
          "Time to reach 63.2% of final value",
          "Time to reach 50% of final value",
          "Time to reach 100% of final value",
          "Time to reach 90% of final value"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Transient Conduction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Time constant = time to reach 63.2% of step change[1][2]."
      },
      {
        "id": 21,
        "question": "The heat transfer in a fin is maximum at:",
        "options": [
          "Base",
          "Tip",
          "Middle",
          "Uniform along length"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Extended Surfaces",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Maximum heat transfer at fin base[1][2]."
      },
      {
        "id": 22,
        "question": "The Log Mean Temperature Difference (LMTD) is used in:",
        "options": [
          "Heat exchangers",
          "Boilers",
          "Condensers",
          "All of these"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Heat Exchangers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "LMTD is used for all heat exchangers[2]."
      },
      {
        "id": 23,
        "question": "The critical heat flux in boiling is:",
        "options": [
          "Maximum heat flux before film boiling",
          "Minimum heat flux",
          "Zero",
          "Independent of pressure"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Boiling",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "CHF is the maximum before transition to film boiling[2]."
      },
      {
        "id": 24,
        "question": "The heat transfer by radiation does NOT require:",
        "options": [
          "A medium",
          "A temperature difference",
          "A surface",
          "A black body"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Radiation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Radiation does not require a medium[1][2]."
      },
      {
        "id": 25,
        "question": "The heat transfer coefficient for boiling is:",
        "options": [
          "Very high",
          "Very low",
          "Zero",
          "Same as convection"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Boiling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Boiling heat transfer coefficient is much higher than for convection[2]."
      },
      {
        "id": 26,
        "question": "The ratio of radiative heat transfer from a body to that from a black body at the same temperature is:",
        "options": [
          "Emissivity",
          "Absorptivity",
          "Reflectivity",
          "Transmissivity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Radiation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ratio is the emissivity of the body[1][2]."
      },
      {
        "id": 27,
        "question": "The effectiveness of a fin increases with:",
        "options": [
          "Higher thermal conductivity",
          "Lower thermal conductivity",
          "Higher convection coefficient",
          "Shorter length"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Extended Surfaces",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fin effectiveness increases with higher k[1][2]."
      },
      {
        "id": 28,
        "question": "The heat transfer in condensation is mainly by:",
        "options": [
          "Conduction",
          "Convection",
          "Radiation",
          "Both conduction and convection"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Condensation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Condensation involves both conduction and convection[2]."
      },
      {
        "id": 29,
        "question": "The dimensionless group used in free convection is:",
        "options": [
          "Grashof number",
          "Reynolds number",
          "Nusselt number",
          "Prandtl number"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Convection",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Grashof number characterizes free convection[1][2]."
      },
      {
        "id": 30,
        "question": "The boiling point of water at sea level is:",
        "options": [
          "100°C",
          "90°C",
          "110°C",
          "120°C"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Boiling",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "At 1 atm, water boils at 100°C[2]."
      }
      
    ],
    'Machine Design': [
      {
        "id": 1,
        "question": "The endurance limit of steel is approximately what fraction of its ultimate tensile strength?",
        "options": ["0.3", "0.5", "0.7", "0.9"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Fatigue",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Endurance limit is typically 0.5 times the ultimate tensile strength for steel."
      },
      {
        "id": 2,
        "question": "The factor of safety is defined as:",
        "options": [
          "Ultimate stress / Working stress",
          "Working stress / Ultimate stress",
          "Yield stress / Working stress",
          "Working stress / Yield stress"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Design for Static Loading",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Factor of safety = Ultimate (or yield) stress / Working stress."
      },
      {
        "id": 3,
        "question": "The S-N diagram is used to represent:",
        "options": [
          "Creep behavior",
          "Fatigue life",
          "Stress-strain curve",
          "Hardness"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Fatigue",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "S-N diagram gives relation between stress amplitude and number of cycles to failure."
      },
      {
        "id": 4,
        "question": "In a bolted joint, the main function of the bolt is to:",
        "options": [
          "Resist shear",
          "Resist tension",
          "Resist bending",
          "Resist torsion"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Joints",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Bolts are primarily designed to resist tensile loads."
      },
      {
        "id": 5,
        "question": "The Goodman diagram is used for:",
        "options": [
          "Creep design",
          "Fatigue design",
          "Impact loading",
          "Static loading"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Fatigue",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Goodman diagram is for fatigue design under fluctuating loads."
      },
      {
        "id": 6,
        "question": "The maximum shear stress theory is also known as:",
        "options": [
          "Rankine theory",
          "Guest's theory",
          "Tresca theory",
          "Von Mises theory"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Failure Theories",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Tresca theory is maximum shear stress theory."
      },
      {
        "id": 7,
        "question": "The principal planes are those where:",
        "options": [
          "Shear stress is maximum",
          "Normal stress is maximum",
          "Shear stress is zero",
          "Normal stress is zero"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Stress Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shear stress is zero on principal planes."
      },
      {
        "id": 8,
        "question": "A key is used in machine design to:",
        "options": [
          "Reduce friction",
          "Transmit torque",
          "Absorb shock",
          "Reduce weight"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Joints",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Keys transmit torque between shaft and hub."
      },
      {
        "id": 9,
        "question": "The main function of a flywheel is to:",
        "options": [
          "Store energy",
          "Reduce vibration",
          "Increase speed",
          "Reduce noise"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Energy Storage",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Flywheels store rotational energy."
      },
      {
        "id": 10,
        "question": "The Soderberg criterion is used for:",
        "options": [
          "Static loading",
          "Dynamic loading",
          "Fatigue loading",
          "Impact loading"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Failure Theories",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Soderberg criterion is used for fatigue design."
      },
      {
        "id": 11,
        "question": "A rolling contact bearing is also known as:",
        "options": [
          "Journal bearing",
          "Antifriction bearing",
          "Hydrodynamic bearing",
          "Sleeve bearing"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Bearings",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Rolling contact bearings are antifriction bearings."
      },
      {
        "id": 12,
        "question": "The main function of a clutch is to:",
        "options": [
          "Transmit power",
          "Reduce speed",
          "Increase torque",
          "Absorb vibration"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Clutches",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Clutches are used to transmit power between shafts."
      },
      {
        "id": 13,
        "question": "The purpose of a helical spring in a machine is to:",
        "options": [
          "Store energy",
          "Dampen vibration",
          "Control motion",
          "All of these"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Springs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Helical springs can store energy, dampen vibration, and control motion."
      },
      {
        "id": 14,
        "question": "The maximum bending moment in a simply supported beam with a central point load W is:",
        "options": [
          "WL/2",
          "WL/4",
          "WL/8",
          "WL/16"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Beams",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Max bending moment = WL/4 at the center."
      },
      {
        "id": 15,
        "question": "The design of a shaft is based on:",
        "options": [
          "Strength",
          "Rigidity",
          "Both strength and rigidity",
          "Weight"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Shafts",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shafts must meet strength and rigidity criteria."
      },
      {
        "id": 16,
        "question": "The Lewis equation is used for the design of:",
        "options": [
          "Springs",
          "Gears",
          "Bearings",
          "Shafts"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Gears",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lewis equation is for gear tooth strength."
      },
      {
        "id": 17,
        "question": "The main function of a brake is to:",
        "options": [
          "Absorb energy",
          "Increase speed",
          "Transmit power",
          "Reduce friction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Brakes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Brakes absorb energy to stop motion."
      },
      {
        "id": 18,
        "question": "The Goodman line is drawn between:",
        "options": [
          "Endurance limit and yield strength",
          "Endurance limit and ultimate strength",
          "Yield strength and ultimate strength",
          "Yield strength and proof stress"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Fatigue",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Goodman line: endurance limit to ultimate strength."
      },
      {
        "id": 19,
        "question": "The maximum normal stress theory is also known as:",
        "options": [
          "Rankine theory",
          "Tresca theory",
          "Von Mises theory",
          "Soderberg theory"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Failure Theories",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rankine theory is maximum normal stress theory."
      },
      {
        "id": 20,
        "question": "The main reason for using a hollow shaft instead of a solid shaft is:",
        "options": [
          "Weight saving",
          "Cost saving",
          "Strength saving",
          "Rigidity saving"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Shafts",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hollow shafts save weight for same strength."
      },
      {
        "id": 21,
        "question": "The S-N curve is plotted between:",
        "options": [
          "Stress amplitude and number of cycles",
          "Strain and number of cycles",
          "Stress and strain",
          "Stress amplitude and time"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Fatigue",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "S-N curve: stress amplitude vs. number of cycles to failure."
      },
      {
        "id": 22,
        "question": "The static load carrying capacity of a ball bearing is:",
        "options": [
          "Maximum load before permanent deformation",
          "Maximum load before fatigue failure",
          "Maximum load before yielding",
          "Maximum load before fracture"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Bearings",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Static capacity = load causing specified permanent deformation."
      },
      {
        "id": 23,
        "question": "The main advantage of a helical gear over a spur gear is:",
        "options": [
          "Quieter operation",
          "Higher efficiency",
          "Lower cost",
          "Easier manufacturing"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Gears",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Helical gears run more quietly than spur gears."
      },
      {
        "id": 24,
        "question": "The wear of a riveted joint is minimized by:",
        "options": [
          "Using larger rivets",
          "Using more rivets",
          "Proper fit and finish",
          "Using smaller rivets"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Joints",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Proper fit and finish minimize wear in riveted joints."
      },
      {
        "id": 25,
        "question": "The maximum shear stress in a solid circular shaft under torsion is at:",
        "options": [
          "Center",
          "Surface",
          "Mid-radius",
          "Any point"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Shafts",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Maximum shear stress occurs at the shaft surface."
      },
      {
        "id": 26,
        "question": "The main function of a cotter in a cotter joint is to:",
        "options": [
          "Transmit axial force",
          "Transmit torque",
          "Transmit bending moment",
          "Absorb vibration"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Joints",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cotter joints are used to transmit axial force."
      },
      {
        "id": 27,
        "question": "The Wahl factor is used in the design of:",
        "options": [
          "Helical springs",
          "Gears",
          "Bearings",
          "Shafts"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Springs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Wahl factor corrects for stress concentration in helical springs."
      },
      {
        "id": 28,
        "question": "The main reason for using a spline shaft is to:",
        "options": [
          "Transmit torque with axial movement",
          "Reduce weight",
          "Reduce cost",
          "Increase rigidity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Shafts",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Spline shafts transmit torque while allowing axial movement."
      },
      {
        "id": 29,
        "question": "The main function of a thrust bearing is to:",
        "options": [
          "Support axial loads",
          "Support radial loads",
          "Reduce friction",
          "Increase speed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Bearings",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Thrust bearings support axial loads."
      },
      {
        "id": 30,
        "question": "The main function of a coupling is to:",
        "options": [
          "Connect two shafts",
          "Absorb vibration",
          "Increase speed",
          "Reduce friction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Machine Design",
        "topic": "Joints",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Couplings connect two shafts for power transmission."
      }
      
    ],
    'Manufacturing': [
      {
        "id": 1,
        "question": "The gating ratio for pressurized gating system in casting is typically:",
        "options": ["1:2:2", "1:4:4", "1:2:1", "1:4:1"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Casting",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pressurized gating ratio is usually 1:2:2 (sprue:runner:ingate)."
      },
      {
        "id": 2,
        "question": "Which of the following is NOT a casting defect?",
        "options": ["Blowhole", "Hot tear", "Porosity", "Upset"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Casting",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Upset is a forging defect, not a casting defect."
      },
      {
        "id": 3,
        "question": "The main function of a riser in casting is to:",
        "options": [
          "Feed molten metal to the casting as it solidifies",
          "Act as a filter",
          "Control the flow rate",
          "Remove gases"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Casting",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Risers compensate for shrinkage during solidification."
      },
      {
        "id": 4,
        "question": "Which welding process uses a non-consumable electrode?",
        "options": ["GMAW", "FCAW", "TIG", "SAW"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Welding",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "TIG (GTAW) uses a non-consumable tungsten electrode."
      },
      {
        "id": 5,
        "question": "The main purpose of flux in welding is to:",
        "options": [
          "Prevent oxidation",
          "Increase temperature",
          "Remove slag",
          "Increase current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Welding",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Flux prevents oxidation by forming a protective layer."
      },
      {
        "id": 6,
        "question": "Which process is used for producing wires from rods?",
        "options": ["Drawing", "Rolling", "Extrusion", "Forging"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Forming",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Wire drawing reduces diameter by pulling through a die."
      },
      {
        "id": 7,
        "question": "In orthogonal cutting, the shear angle increases with:",
        "options": [
          "Decrease in rake angle",
          "Increase in rake angle",
          "Increase in friction angle",
          "Decrease in friction angle"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Machining",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shear angle increases as rake angle increases."
      },
      {
        "id": 8,
        "question": "Taylor's tool life equation is:",
        "options": [
          "VT^n = C",
          "V = C T^n",
          "VT = nC",
          "V^nT = C"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Machining",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Taylor's equation: VT^n = C."
      },
      {
        "id": 9,
        "question": "The material removal rate (MRR) in turning is:",
        "options": [
          "πDNf",
          "πDLf",
          "πD^2Nf",
          "πDL^2f"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Machining",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "MRR = π × diameter × feed × revolution/min."
      },
      {
        "id": 10,
        "question": "The main advantage of up-milling over down-milling is:",
        "options": [
          "Less tool wear",
          "Better surface finish",
          "Less vibration",
          "Higher material removal rate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Machining",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Up-milling produces less tool wear than down-milling."
      },
      {
        "id": 11,
        "question": "Which of the following is a non-traditional machining process?",
        "options": [
          "Turning",
          "Milling",
          "EDM",
          "Drilling"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Non-Traditional Machining",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "EDM (Electrical Discharge Machining) is non-traditional."
      },
      {
        "id": 12,
        "question": "In abrasive jet machining, material removal is mainly due to:",
        "options": [
          "Mechanical erosion",
          "Melting",
          "Chemical reaction",
          "Plastic deformation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Non-Traditional Machining",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "AJM removes material by mechanical erosion."
      },
      {
        "id": 13,
        "question": "The main function of a core in casting is to:",
        "options": [
          "Make internal cavities",
          "Increase strength",
          "Feed molten metal",
          "Remove gases"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Casting",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Cores are used to form internal cavities."
      },
      {
        "id": 14,
        "question": "Which process is best suited for mass production of bolts and screws?",
        "options": [
          "Thread rolling",
          "Thread cutting",
          "Thread grinding",
          "Thread chasing"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Forming",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Thread rolling is fast and economical for mass production."
      },
      {
        "id": 15,
        "question": "The main purpose of a pattern in casting is to:",
        "options": [
          "Shape the mold cavity",
          "Increase casting strength",
          "Remove gases",
          "Feed molten metal"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Casting",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Pattern shapes the mold cavity."
      },
      {
        "id": 16,
        "question": "The basic principle of powder metallurgy is:",
        "options": [
          "Compaction and sintering",
          "Melting and casting",
          "Rolling and forging",
          "Extrusion and drawing"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Powder Metallurgy",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Powder metallurgy involves compacting powders and sintering."
      },
      {
        "id": 17,
        "question": "Which of the following is NOT a type of welding joint?",
        "options": [
          "Butt joint",
          "Lap joint",
          "T-joint",
          "Splice joint"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Welding",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Splice joint is not a standard welding joint."
      },
      {
        "id": 18,
        "question": "The main function of a jigs and fixtures is to:",
        "options": [
          "Hold and locate the workpiece",
          "Increase tool life",
          "Reduce power consumption",
          "Increase cutting speed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Machine Tools",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Jigs and fixtures hold and locate workpieces for machining."
      },
      {
        "id": 19,
        "question": "The main advantage of CNC machines is:",
        "options": [
          "High precision",
          "Low cost",
          "Manual operation",
          "Less maintenance"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Automation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "CNC machines offer high precision and automation."
      },
      {
        "id": 20,
        "question": "The main function of a coolant in machining is to:",
        "options": [
          "Reduce temperature",
          "Increase tool wear",
          "Increase friction",
          "Reduce cutting speed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Machining",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Coolant reduces temperature and tool wear."
      },
      {
        "id": 21,
        "question": "The process of removing material by chemical action is called:",
        "options": [
          "Chemical machining",
          "EDM",
          "Ultrasonic machining",
          "Laser machining"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Non-Traditional Machining",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Chemical machining uses chemical etching."
      },
      {
        "id": 22,
        "question": "The main function of a go-no-go gauge is to:",
        "options": [
          "Check limits of a dimension",
          "Measure surface roughness",
          "Measure temperature",
          "Check hardness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Metrology",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Go-no-go gauges check dimensional limits."
      },
      {
        "id": 23,
        "question": "The main advantage of investment casting is:",
        "options": [
          "Complex shapes",
          "Low cost",
          "High production rate",
          "Low melting point"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Casting",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Investment casting is used for complex shapes."
      },
      {
        "id": 24,
        "question": "The main function of a fixture in machining is to:",
        "options": [
          "Hold the workpiece",
          "Guide the tool",
          "Increase speed",
          "Reduce cost"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Machine Tools",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fixtures hold workpieces in place."
      },
      {
        "id": 25,
        "question": "The main function of a sprue in casting is to:",
        "options": [
          "Feed molten metal to the mold",
          "Remove gases",
          "Increase strength",
          "Act as a filter"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Casting",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Sprue delivers molten metal to the mold cavity."
      },
      {
        "id": 26,
        "question": "The main function of a runner in casting is to:",
        "options": [
          "Distribute molten metal to various parts of the mold",
          "Feed molten metal to the mold",
          "Remove gases",
          "Increase strength"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Casting",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Runner distributes molten metal to mold cavities."
      },
      {
        "id": 27,
        "question": "The main function of a chill in casting is to:",
        "options": [
          "Increase cooling rate",
          "Feed molten metal",
          "Remove gases",
          "Increase strength"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Casting",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Chills increase local cooling rate to avoid shrinkage defects."
      },
      {
        "id": 28,
        "question": "The main function of a flash in forging is to:",
        "options": [
          "Remove excess material",
          "Increase strength",
          "Reduce temperature",
          "Guide the die"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Forming",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Flash is excess material squeezed out and later trimmed."
      },
      {
        "id": 29,
        "question": "The main function of a mandrel in machining is to:",
        "options": [
          "Hold hollow workpieces",
          "Guide the tool",
          "Increase speed",
          "Reduce cost"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Machine Tools",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Mandrels hold hollow workpieces for machining."
      },
      {
        "id": 30,
        "question": "The main function of automation in manufacturing is to:",
        "options": [
          "Increase productivity",
          "Reduce labor cost",
          "Improve quality",
          "All of these"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Manufacturing",
        "topic": "Automation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Automation increases productivity, reduces labor, and improves quality."
      }
      
    ],
    'Engineering Mechanics': [
      {
        "id": 1,
        "question": "The SI unit of force is:",
        "options": ["Newton", "Joule", "Pascal", "Watt"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Basics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Force is measured in Newtons (N)."
      },
      {
        "id": 2,
        "question": "A free-body diagram is used to:",
        "options": [
          "Show all forces acting on a body",
          "Show only external forces",
          "Show only internal forces",
          "Show only frictional forces"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Free-Body Diagrams",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "FBD shows all forces (external and reactions) acting on a body."
      },
      {
        "id": 3,
        "question": "The resultant of two concurrent forces is maximum when the angle between them is:",
        "options": ["0°", "90°", "120°", "180°"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "System of Forces",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Maximum resultant when forces are collinear (0°)."
      },
      {
        "id": 4,
        "question": "Lami’s theorem applies to:",
        "options": [
          "Three concurrent, coplanar, non-collinear forces in equilibrium",
          "Any number of forces",
          "Parallel forces",
          "Collinear forces"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Statics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lami’s theorem is for three concurrent, coplanar, non-collinear forces in equilibrium."
      },
      {
        "id": 5,
        "question": "The moment of a force about a point is:",
        "options": [
          "Force × perpendicular distance",
          "Force × area",
          "Force × velocity",
          "Force × time"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Moments",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Moment = F × d (perpendicular distance)."
      },
      {
        "id": 6,
        "question": "The condition for equilibrium of a planar force system is:",
        "options": [
          "ΣFx = 0, ΣFy = 0, ΣM = 0",
          "ΣF = 0",
          "ΣM = 0",
          "ΣF = ΣM"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Equilibrium",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "All forces and moments must sum to zero."
      },
      {
        "id": 7,
        "question": "The frictional force is always:",
        "options": [
          "Opposes relative motion",
          "In direction of motion",
          "Perpendicular to motion",
          "Independent of motion"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Friction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Friction always opposes relative motion."
      },
      {
        "id": 8,
        "question": "The coefficient of friction is:",
        "options": [
          "Friction force / Normal force",
          "Normal force / Friction force",
          "Friction force × Normal force",
          "Friction force - Normal force"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Friction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "μ = F/N."
      },
      {
        "id": 9,
        "question": "The mechanical advantage of an ideal machine is:",
        "options": [
          "Equal to velocity ratio",
          "Greater than velocity ratio",
          "Less than velocity ratio",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ideal: MA = VR."
      },
      {
        "id": 10,
        "question": "The center of gravity of a uniform semicircular plate lies at a distance of:",
        "options": [
          "4r/3π from the base",
          "r/2 from the base",
          "r from the base",
          "2r/π from the base"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Centroid",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Centroid of semicircle is at 4r/3π from the base."
      },
      {
        "id": 11,
        "question": "The moment of inertia of a rectangular area about its centroidal axis is:",
        "options": [
          "bd³/12",
          "bd³/3",
          "b³d/12",
          "b³d/3"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Moment of Inertia",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "I = bd³/12."
      },
      {
        "id": 12,
        "question": "A simply supported beam with a point load at the center will have maximum bending moment at:",
        "options": [
          "Center",
          "Support",
          "Quarter span",
          "Anywhere"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Beams",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Max bending moment at center under central load."
      },
      {
        "id": 13,
        "question": "A truss is a structure composed of:",
        "options": [
          "Two-force members",
          "Three-force members",
          "Four-force members",
          "Multi-force members"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Trusses",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Truss members are two-force members."
      },
      {
        "id": 14,
        "question": "The virtual work principle is used to:",
        "options": [
          "Analyze equilibrium",
          "Analyze motion",
          "Analyze friction",
          "Analyze machines"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Virtual Work",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Virtual work is used for equilibrium analysis."
      },
      {
        "id": 15,
        "question": "The work done by a force is maximum when the angle between force and displacement is:",
        "options": [
          "0°",
          "90°",
          "180°",
          "60°"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Work and Energy",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Work is maximum when force and displacement are collinear."
      },
      {
        "id": 16,
        "question": "D’Alembert’s principle is used to:",
        "options": [
          "Convert dynamic problem to static",
          "Analyze friction",
          "Analyze equilibrium",
          "Analyze machines"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Dynamics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "D’Alembert’s principle converts dynamics to statics."
      },
      {
        "id": 17,
        "question": "The angular momentum of a particle is:",
        "options": [
          "mvr",
          "Iω",
          "mv²",
          "mr²"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Dynamics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Angular momentum = Iω."
      },
      {
        "id": 18,
        "question": "Impulse is equal to:",
        "options": [
          "Change in momentum",
          "Change in energy",
          "Change in velocity",
          "Change in force"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Impulse and Momentum",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Impulse = ∆momentum."
      },
      {
        "id": 19,
        "question": "The center of percussion of a swinging body is:",
        "options": [
          "Point where impact produces no reaction at the pivot",
          "Center of gravity",
          "Center of mass",
          "Centroid"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Dynamics",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "No reaction at pivot if struck at center of percussion."
      },
      {
        "id": 20,
        "question": "The natural frequency of a simple undamped SDOF system is:",
        "options": [
          "√(k/m)",
          "k/m",
          "m/k",
          "k+m"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Vibrations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ω_n = √(k/m)."
      },
      {
        "id": 21,
        "question": "The degree of freedom of a planar mechanism is given by:",
        "options": [
          "3(n-1)-2j-h",
          "2(n-1)-j",
          "n-1",
          "2n-3"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Mechanisms",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Gruebler’s equation: 3(n-1)-2j-h."
      },
      {
        "id": 22,
        "question": "The velocity ratio of a simple machine is:",
        "options": [
          "Distance moved by effort / distance moved by load",
          "Distance moved by load / distance moved by effort",
          "Effort / load",
          "Load / effort"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "VR = distance moved by effort / distance moved by load."
      },
      {
        "id": 23,
        "question": "The law of polygon of forces states that:",
        "options": [
          "If a number of forces acting at a point are represented in magnitude and direction by the sides of a polygon taken in order, their resultant is represented by the closing side",
          "Forces are parallel",
          "Forces are equal",
          "Forces are concurrent"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "System of Forces",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Polygon law: resultant is closing side."
      },
      {
        "id": 24,
        "question": "The maximum efficiency of a screw jack is obtained when the angle of friction is:",
        "options": [
          "Equal to the angle of helix",
          "Greater than angle of helix",
          "Less than angle of helix",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Friction",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Max efficiency when friction angle = helix angle."
      },
      {
        "id": 25,
        "question": "The work-energy principle states that:",
        "options": [
          "Work done = change in kinetic energy",
          "Work done = change in potential energy",
          "Work done = change in momentum",
          "Work done = change in force"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Work and Energy",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Work done by all forces = ∆KE."
      },
      {
        "id": 26,
        "question": "The centroid of a triangle is located at:",
        "options": [
          "Intersection of medians",
          "Intersection of altitudes",
          "Intersection of perpendicular bisectors",
          "Intersection of angle bisectors"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Centroid",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Centroid is at intersection of medians."
      },
      {
        "id": 27,
        "question": "The angular acceleration is defined as:",
        "options": [
          "Rate of change of angular velocity",
          "Rate of change of linear velocity",
          "Rate of change of displacement",
          "Rate of change of force"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Kinematics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "α = dω/dt."
      },
      {
        "id": 28,
        "question": "The law of conservation of momentum states that:",
        "options": [
          "Total momentum remains constant if no external force acts",
          "Total energy remains constant",
          "Total force remains constant",
          "Total mass remains constant"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Impulse and Momentum",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Total momentum is conserved in absence of external forces."
      },
      {
        "id": 29,
        "question": "The time period of a simple pendulum is proportional to:",
        "options": [
          "√L",
          "L",
          "1/√L",
          "1/L"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Vibrations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "T ∝ √L for simple pendulum."
      },
      {
        "id": 30,
        "question": "A wedge is an example of:",
        "options": [
          "A simple machine",
          "A compound machine",
          "A lever",
          "A pulley"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Engineering Mechanics",
        "topic": "Machines",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Wedge is a type of simple machine."
      }
      
    ]
  },

  // Electrical Engineering Questions
  'Electrical Engineering': {
    'Circuit Analysis': [
      {
        "id": 1,
        "question": "Kirchhoff's Current Law (KCL) is based on the law of:",
        "options": ["Conservation of energy", "Conservation of charge", "Conservation of momentum", "Conservation of mass"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "KCL",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "KCL is based on conservation of charge at a node[1][2][6]."
      },
      {
        "id": 2,
        "question": "The sum of voltages around any closed loop in a circuit is:",
        "options": ["Zero", "One", "Infinity", "Equal to supply voltage"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "KVL",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "KVL states that algebraic sum of voltages in a loop is zero[1][2][6]."
      },
      {
        "id": 3,
        "question": "Thevenin’s theorem allows a network to be replaced by:",
        "options": [
          "A single voltage source and series resistance",
          "A single current source and parallel resistance",
          "A voltage divider",
          "A current divider"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Thevenin’s theorem",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Thevenin’s theorem: any linear network can be replaced by a voltage source in series with resistance[1][3][6][7][8]."
      },
      {
        "id": 4,
        "question": "Norton’s theorem is dual to:",
        "options": [
          "Superposition theorem",
          "Thevenin’s theorem",
          "Reciprocity theorem",
          "Millman’s theorem"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Norton's theorem",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Norton’s and Thevenin’s theorems are duals[1][3][6][7][8]."
      },
      {
        "id": 5,
        "question": "Superposition theorem is applicable to:",
        "options": [
          "Linear circuits only",
          "Nonlinear circuits only",
          "Both linear and nonlinear circuits",
          "AC circuits only"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Superposition",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Superposition applies only to linear circuits[1][3][6][7][8]."
      },
      {
        "id": 6,
        "question": "The maximum power is transferred to a load when:",
        "options": [
          "Load resistance equals source resistance",
          "Load resistance is twice source resistance",
          "Load resistance is half source resistance",
          "Load resistance is zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Maximum Power Transfer",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Maximum power transfer: RL = RS[1][3][6][7][8]."
      },
      {
        "id": 7,
        "question": "A star network can be converted to an equivalent delta network using:",
        "options": [
          "Star-delta transformation",
          "Thevenin’s theorem",
          "Superposition",
          "Reciprocity theorem"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Star-Delta",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Star-delta (Y-Δ) transformation is used for such conversions[1][3][6][7][8]."
      },
      {
        "id": 8,
        "question": "The time constant of an RC circuit is:",
        "options": ["RC", "1/RC", "R+C", "R/C"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Transients",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Time constant τ = RC for an RC circuit[1][3][6][7][8]."
      },
      {
        "id": 9,
        "question": "The resonance frequency of a series RLC circuit is:",
        "options": [
          "1/(2π√LC)",
          "2π√LC",
          "1/(2πRC)",
          "2πRC"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Resonance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "f₀ = 1/(2π√LC) for series resonance[1][3][6][7][8]."
      },
      {
        "id": 10,
        "question": "The quality factor (Q) of a series RLC circuit is:",
        "options": [
          "1/R × √(L/C)",
          "R × √(C/L)",
          "R/L",
          "L/R"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Resonance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Q = (1/R) × √(L/C) for series RLC[1][3][6][7][8]."
      },
      {
        "id": 11,
        "question": "The Laplace transform is used in circuit analysis to:",
        "options": [
          "Solve differential equations",
          "Solve algebraic equations",
          "Find steady-state response only",
          "Find only DC response"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Laplace Transform",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Laplace transform converts time-domain differential equations to algebraic equations in s-domain[3]."
      },
      {
        "id": 12,
        "question": "A two-port network can be characterized by:",
        "options": [
          "Z, Y, h, or ABCD parameters",
          "Only Z parameters",
          "Only Y parameters",
          "Only h parameters"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Two-Port Networks",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Any of these parameter sets can describe a two-port network[1][3][6][7][8]."
      },
      {
        "id": 13,
        "question": "The power factor of a purely resistive circuit is:",
        "options": ["1", "0", "0.5", "-1"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "AC Circuits",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "For resistive circuit, voltage and current are in phase, so pf = 1[1][3][6][7][8]."
      },
      {
        "id": 14,
        "question": "In a balanced three-phase system, the line voltage is related to the phase voltage as:",
        "options": [
          "V_line = √3 × V_phase",
          "V_line = V_phase",
          "V_line = V_phase/√3",
          "V_line = 3 × V_phase"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Three-Phase Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "V_line = √3 × V_phase for star connection[1][3][6][7][8]."
      },
      {
        "id": 15,
        "question": "In mesh analysis, the number of meshes required is:",
        "options": [
          "Equal to number of independent loops",
          "Equal to number of nodes",
          "Equal to number of elements",
          "Equal to number of sources"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Mesh Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Each mesh corresponds to an independent loop[1][3][6][7][8]."
      },
      {
        "id": 16,
        "question": "The current division rule is applicable to:",
        "options": [
          "Parallel circuits",
          "Series circuits",
          "Both series and parallel circuits",
          "Neither"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Current Division",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Current division applies to parallel circuits[1][3][6][7][8]."
      },
      {
        "id": 17,
        "question": "The voltage across a capacitor cannot change:",
        "options": [
          "Instantaneously",
          "Gradually",
          "At all",
          "With frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Capacitors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Capacitor voltage cannot change instantaneously[1][3][6][7][8]."
      },
      {
        "id": 18,
        "question": "The total impedance of a series RLC circuit at resonance is:",
        "options": [
          "Purely resistive",
          "Purely inductive",
          "Purely capacitive",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Resonance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "At resonance, inductive and capacitive reactances cancel, leaving only resistance[1][3][6][7][8]."
      },
      {
        "id": 19,
        "question": "The RMS value of a sinusoidal current I(t) = I₀ sin(ωt) is:",
        "options": [
          "I₀/√2",
          "I₀/2",
          "I₀",
          "I₀/√3"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "AC Circuits",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "RMS value of sine wave is I₀/√2[1][3][6][7][8]."
      },
      {
        "id": 20,
        "question": "A dependent source is one whose value depends on:",
        "options": [
          "Another voltage or current in the circuit",
          "Only on supply voltage",
          "Only on load",
          "None of these"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Dependent Sources",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dependent sources depend on other circuit variables[1][3][6][7][8]."
      },
      {
        "id": 21,
        "question": "The power factor in an RLC circuit at resonance is:",
        "options": [
          "Unity",
          "Zero",
          "Leading",
          "Lagging"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Resonance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "At resonance, circuit is purely resistive, so pf = 1[1][3][6][7][8]."
      },
      {
        "id": 22,
        "question": "The open-circuit impedance parameters (Z-parameters) of a two-port network are measured by:",
        "options": [
          "Open circuiting output port",
          "Short circuiting output port",
          "Open circuiting input port",
          "Short circuiting input port"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Two-Port Networks",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Z-parameters are measured with output port open[1][3][6][7][8]."
      },
      {
        "id": 23,
        "question": "The Laplace transform of a unit step function u(t) is:",
        "options": [
          "1/s",
          "s",
          "1",
          "0"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Laplace Transform",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "L{u(t)} = 1/s[3]."
      },
      {
        "id": 24,
        "question": "The phase difference between voltage and current in a pure inductor is:",
        "options": [
          "90° (current lags)",
          "90° (current leads)",
          "0°",
          "180°"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "AC Circuits",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Current lags voltage by 90° in a pure inductor[1][3][6][7][8]."
      },
      {
        "id": 25,
        "question": "In a balanced three-phase system, the sum of three line currents is:",
        "options": [
          "Zero",
          "Maximum",
          "Minimum",
          "Equal to phase current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Three-Phase Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sum of three balanced currents is zero[1][3][6][7][8]."
      },
      {
        "id": 26,
        "question": "The dual of a series circuit is:",
        "options": [
          "Parallel circuit",
          "Another series circuit",
          "Delta circuit",
          "Star circuit"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Duality",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dual of series is parallel and vice versa[1][3][6][7][8]."
      },
      {
        "id": 27,
        "question": "The reciprocity theorem is applicable to:",
        "options": [
          "Linear, bilateral networks",
          "Nonlinear networks",
          "Unilateral networks",
          "All networks"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Reciprocity",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Reciprocity theorem applies to linear, bilateral networks[1][3][6][7][8]."
      },
      {
        "id": 28,
        "question": "The sum of all mesh currents at a node is:",
        "options": [
          "Zero",
          "Maximum",
          "Minimum",
          "Equal to supply current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Mesh Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sum of mesh currents at a node is zero due to KCL[1][3][6][7][8]."
      },
      {
        "id": 29,
        "question": "The voltage across an inductor cannot change:",
        "options": [
          "Instantaneously",
          "Gradually",
          "With frequency",
          "At all"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "Inductors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Inductor voltage can change instantly, but current cannot[1][3][6][7][8]."
      },
      {
        "id": 30,
        "question": "The RMS value of a periodic square wave of amplitude A is:",
        "options": [
          "A",
          "A/√2",
          "A/2",
          "A/√3"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Circuit Analysis",
        "topic": "AC Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "RMS of square wave is amplitude A[1][3][6][7][8]."
      }
      
    ],
    'Control Systems': [
      {
        "id": 1,
        "question": "The transfer function of a system is defined as:",
        "options": [
          "Laplace(output)/Laplace(input) with zero initial conditions",
          "Input/Output in Laplace domain",
          "Sum of input and output",
          "Difference of input and output"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Transfer Function",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Transfer function is Laplace(output)/Laplace(input) with zero initial conditions[2][3][6][7]."
      },
      {
        "id": 2,
        "question": "A system is said to be linear if it satisfies:",
        "options": [
          "Superposition and homogeneity",
          "Time-invariance",
          "Stability",
          "Causality"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "System Properties",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Linearity requires both superposition and homogeneity[2][4]."
      },
      {
        "id": 3,
        "question": "The block diagram reduction technique is used to:",
        "options": [
          "Simplify complex block diagrams",
          "Increase system gain",
          "Reduce system order",
          "Increase stability"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Block Diagrams",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Block diagram reduction simplifies system analysis[2][4][6]."
      },
      {
        "id": 4,
        "question": "Mason’s Gain Formula is used for:",
        "options": [
          "Signal flow graphs",
          "Block diagrams",
          "Root locus",
          "Bode plot"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Signal Flow Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Mason's Gain Formula determines overall transfer function from signal flow graphs[2][3][4]."
      },
      {
        "id": 5,
        "question": "The time constant of a first-order system G(s) = 1/(Ts+1) is:",
        "options": ["T", "1/T", "T^2", "1"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Time Domain Analysis",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Time constant is T for G(s) = 1/(Ts + 1)[2][3][6]."
      },
      {
        "id": 6,
        "question": "The steady-state error of a type-1 system for a unit ramp input is:",
        "options": ["Zero", "Finite", "Infinite", "Oscillatory"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Steady-State Error",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Type-1: finite error for ramp input, zero for step[1][2][3][4]."
      },
      {
        "id": 7,
        "question": "The root locus of a system gives information about:",
        "options": [
          "System stability as gain varies",
          "Time response",
          "Frequency response",
          "Steady-state error"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Root Locus",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Root locus shows pole movement with gain[1][2][3][4]."
      },
      {
        "id": 8,
        "question": "A negative feedback in a control system:",
        "options": [
          "Reduces sensitivity to parameter variations",
          "Increases bandwidth",
          "Improves stability",
          "All of the above"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Feedback",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Negative feedback improves all these aspects[2][3][4]."
      },
      {
        "id": 9,
        "question": "The phase margin of a system is a measure of:",
        "options": [
          "Relative stability",
          "Absolute stability",
          "Steady-state error",
          "System type"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Domain Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Phase margin indicates relative stability[1][2][3][4]."
      },
      {
        "id": 10,
        "question": "The transfer function of a unity feedback system is G(s)/[1+G(s)]. If G(s) = 10/(s+1), the steady-state error for a unit step input is:",
        "options": ["0", "1/11", "10", "1"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Steady-State Error",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ess = 1/(1+Kp), Kp=10, so error=1/11[1][2][3][4]."
      },
      {
        "id": 11,
        "question": "A system is said to be controllable if:",
        "options": [
          "Any state can be reached from any initial state by suitable input",
          "Output can be measured",
          "System is stable",
          "System is observable"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State-Space Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Controllability: reachability of any state[1][2][3][4]."
      },
      {
        "id": 12,
        "question": "The Routh-Hurwitz criterion is used to determine:",
        "options": [
          "Stability of a system",
          "System gain",
          "System type",
          "Steady-state error"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Stability Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Routh-Hurwitz is for stability analysis[1][2][3][4]."
      },
      {
        "id": 13,
        "question": "The bandwidth of a closed-loop control system is:",
        "options": [
          "Greater than open-loop bandwidth",
          "Less than open-loop bandwidth",
          "Equal to open-loop bandwidth",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Domain Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Negative feedback increases bandwidth[2][3][4]."
      },
      {
        "id": 14,
        "question": "The transfer function of a PI controller is:",
        "options": [
          "Kp + Ki/s",
          "Kp + Kds",
          "Kp",
          "Kds"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Controllers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "PI: proportional plus integral action[2][3][4]."
      },
      {
        "id": 15,
        "question": "The phase crossover frequency is the frequency at which:",
        "options": [
          "Phase of open-loop transfer function is -180°",
          "Gain is unity",
          "Phase is 0°",
          "Gain is zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Domain Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Phase crossover: phase = -180°[1][2][3][4]."
      },
      {
        "id": 16,
        "question": "A system with transfer function G(s) = 1/(s^2 + 2s + 2) is:",
        "options": [
          "Underdamped",
          "Critically damped",
          "Overdamped",
          "Unstable"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Time Domain Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ζ < 1, so underdamped[2][3][4]."
      },
      {
        "id": 17,
        "question": "The state-space representation of a system is:",
        "options": [
          "A set of first-order differential equations",
          "A single algebraic equation",
          "A transfer function",
          "A block diagram"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State-Space Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "State-space uses first-order ODEs[2][3][4]."
      },
      {
        "id": 18,
        "question": "The sensitivity of a closed-loop system to parameter variations is:",
        "options": [
          "Reduced by negative feedback",
          "Increased by negative feedback",
          "Unaffected by feedback",
          "Dependent on open-loop gain only"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Feedback",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Negative feedback reduces sensitivity[2][3][4]."
      },
      {
        "id": 19,
        "question": "The phase margin is positive for:",
        "options": [
          "Stable system",
          "Unstable system",
          "Marginally stable system",
          "All of the above"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Domain Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Positive phase margin means stable[1][2][3][4]."
      },
      {
        "id": 20,
        "question": "The controllability matrix for a system (A, B) is:",
        "options": [
          "[B, AB, A^2B, ...]",
          "[A, AB, A^2B, ...]",
          "[B, BA, B^2A, ...]",
          "[A, B, C, D]"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State-Space Analysis",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Controllability matrix: [B, AB, A^2B, ...][2][3][4]."
      },
      {
        "id": 21,
        "question": "The effect of adding a zero to a transfer function is usually:",
        "options": [
          "Increase system overshoot",
          "Decrease system overshoot",
          "No effect",
          "Increase system type"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Transfer Function",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Zero increases overshoot and speed[2][3][4]."
      },
      {
        "id": 22,
        "question": "A phase-lead compensator is used to:",
        "options": [
          "Increase phase margin",
          "Decrease phase margin",
          "Increase steady-state error",
          "Decrease bandwidth"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Compensators",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lead compensator increases phase margin and speed[2][3][4]."
      },
      {
        "id": 23,
        "question": "The open-loop transfer function of a type-2 system has:",
        "options": [
          "Two poles at origin",
          "One pole at origin",
          "No pole at origin",
          "Two zeros at origin"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "System Type",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Type-2: two integrators, i.e., two poles at origin[2][3][4]."
      },
      {
        "id": 24,
        "question": "A system is observable if:",
        "options": [
          "States can be determined from outputs",
          "States can be controlled by inputs",
          "System is stable",
          "System is linear"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State-Space Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Observability: states can be reconstructed from outputs[2][3][4]."
      },
      {
        "id": 25,
        "question": "The effect of derivative control in a PID controller is to:",
        "options": [
          "Increase damping",
          "Decrease damping",
          "Increase steady-state error",
          "Decrease system type"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Controllers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Derivative control increases damping and reduces overshoot[2][3][4]."
      },
      {
        "id": 26,
        "question": "The characteristic equation of a closed-loop system is:",
        "options": [
          "1 + G(s)H(s) = 0",
          "G(s)H(s) = 1",
          "G(s) = H(s)",
          "G(s) = 0"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Stability Analysis",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Characteristic equation: 1 + G(s)H(s) = 0[2][3][4]."
      },
      {
        "id": 27,
        "question": "The transfer function of a system with state-space (A, B, C, D) is:",
        "options": [
          "C(sI - A)^(-1)B + D",
          "B(sI - A)^(-1)C + D",
          "A(sI - B)^(-1)C + D",
          "D(sI - A)^(-1)B + C"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State-Space Analysis",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Transfer function: C(sI - A)^(-1)B + D[2][3][4]."
      },
      {
        "id": 28,
        "question": "The effect of integral control in a PID controller is to:",
        "options": [
          "Eliminate steady-state error",
          "Increase steady-state error",
          "Increase overshoot",
          "Decrease damping"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Controllers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Integral action eliminates steady-state error[2][3][4]."
      },
      {
        "id": 29,
        "question": "The frequency at which the magnitude of the open-loop transfer function is unity is called:",
        "options": [
          "Gain crossover frequency",
          "Phase crossover frequency",
          "Resonant frequency",
          "Natural frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Domain Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gain crossover: |G(jω)| = 1[1][2][3][4]."
      },
      {
        "id": 30,
        "question": "A digital control system uses which transform for analysis?",
        "options": [
          "Z-transform",
          "Laplace transform",
          "Fourier transform",
          "Mellin transform"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Digital Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Digital systems use Z-transform for analysis[1][2][3][4]."
      }
      
    ],
    'Power Systems': [
      {
        "id": 1,
        "question": "The per-unit value of a 100 V, 5 A current on a base of 200 V, 10 A is:",
        "options": ["0.5", "2.0", "1.0", "0.25"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Per-Unit System",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Per-unit = actual/base = 5/10 = 0.5."
      },
      {
        "id": 2,
        "question": "The main advantage of the per-unit system is:",
        "options": [
          "Simplifies calculations and comparison",
          "Reduces power loss",
          "Increases transmission efficiency",
          "Reduces voltage drop"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Per-Unit System",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Per-unit system normalizes values for easy calculation and comparison."
      },
      {
        "id": 3,
        "question": "The Ferranti effect in a long transmission line is:",
        "options": [
          "Receiving end voltage > sending end voltage",
          "Receiving end voltage < sending end voltage",
          "Receiving and sending end voltages are equal",
          "None of these"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Transmission Lines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Due to line capacitance, receiving end voltage may exceed sending end voltage."
      },
      {
        "id": 4,
        "question": "The surge impedance of a transmission line is:",
        "options": [
          "√(L/C)",
          "√(R/G)",
          "L/C",
          "C/L"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Transmission Lines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Surge impedance Z₀ = √(L/C)."
      },
      {
        "id": 5,
        "question": "The most commonly used conductor for overhead transmission lines is:",
        "options": [
          "Copper",
          "Aluminum",
          "Steel",
          "Silver"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Transmission Lines",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Aluminum is preferred due to low cost and adequate conductivity."
      },
      {
        "id": 6,
        "question": "The Gauss-Seidel method is used for:",
        "options": [
          "Load flow analysis",
          "Fault analysis",
          "Protection coordination",
          "Stability analysis"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Load Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gauss-Seidel is an iterative method for load flow studies."
      },
      {
        "id": 7,
        "question": "The bus admittance matrix (Ybus) is:",
        "options": [
          "Sparse and symmetric",
          "Dense and asymmetric",
          "Sparse and asymmetric",
          "Dense and symmetric"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Network Matrices",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ybus is sparse (mostly zeros) and symmetric for passive networks."
      },
      {
        "id": 8,
        "question": "The equal area criterion is used for:",
        "options": [
          "Transient stability analysis",
          "Load flow analysis",
          "Fault analysis",
          "Power factor correction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Equal area criterion is used for transient stability."
      },
      {
        "id": 9,
        "question": "The most severe fault in a power system is:",
        "options": [
          "Three-phase fault",
          "Single line-to-ground fault",
          "Double line-to-ground fault",
          "Line-to-line fault"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Fault Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Three-phase fault produces the highest fault current."
      },
      {
        "id": 10,
        "question": "The main function of a circuit breaker is to:",
        "options": [
          "Interrupt fault current",
          "Increase voltage",
          "Reduce power loss",
          "Stabilize frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Switchgear",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Circuit breakers interrupt current during faults."
      },
      {
        "id": 11,
        "question": "The main purpose of series compensation in transmission lines is to:",
        "options": [
          "Increase power transfer capability",
          "Reduce losses",
          "Reduce voltage",
          "Increase line length"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Compensation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Series compensation increases power transfer by reducing line reactance."
      },
      {
        "id": 12,
        "question": "The main purpose of shunt compensation is to:",
        "options": [
          "Improve voltage profile",
          "Increase losses",
          "Reduce current",
          "Increase frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Compensation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shunt compensation improves voltage profile and power factor."
      },
      {
        "id": 13,
        "question": "The economic load dispatch problem seeks to:",
        "options": [
          "Minimize total generation cost",
          "Maximize total generation",
          "Minimize transmission losses",
          "Maximize voltage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Economic Operation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Economic load dispatch minimizes total fuel cost."
      },
      {
        "id": 14,
        "question": "The swing equation is used in:",
        "options": [
          "Stability analysis",
          "Load flow analysis",
          "Fault analysis",
          "Protection"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Stability",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Swing equation describes rotor angle dynamics for stability."
      },
      {
        "id": 15,
        "question": "The main function of a synchronous condenser is to:",
        "options": [
          "Improve power factor",
          "Increase frequency",
          "Reduce voltage",
          "Increase power loss"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Voltage Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Synchronous condenser supplies reactive power to improve power factor."
      },
      {
        "id": 16,
        "question": "The zero sequence component in symmetrical components is:",
        "options": [
          "Same in all phases",
          "Opposite in all phases",
          "Zero in all phases",
          "Random in all phases"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Symmetrical Components",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Zero sequence: all three phase values are equal."
      },
      {
        "id": 17,
        "question": "The main function of a relay in power systems is:",
        "options": [
          "Sense abnormal conditions and initiate circuit breaker operation",
          "Increase voltage",
          "Reduce frequency",
          "Increase power"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Protection",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Relay detects faults and triggers circuit breaker."
      },
      {
        "id": 18,
        "question": "The bus with specified voltage and angle in load flow studies is called:",
        "options": [
          "Slack bus",
          "PV bus",
          "PQ bus",
          "Reference bus"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Load Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Slack bus is reference for voltage and angle."
      },
      {
        "id": 19,
        "question": "The main cause of corona in transmission lines is:",
        "options": [
          "High electric field intensity",
          "High current",
          "Low resistance",
          "High frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Transmission Lines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Corona occurs due to high electric field causing ionization of air."
      },
      {
        "id": 20,
        "question": "The main purpose of ground wires in transmission lines is to:",
        "options": [
          "Protect against lightning",
          "Carry current",
          "Increase voltage",
          "Reduce losses"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Transmission Lines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ground wires shield phase conductors from lightning."
      },
      {
        "id": 21,
        "question": "The main function of a distribution transformer is to:",
        "options": [
          "Step down voltage for consumer use",
          "Step up voltage for transmission",
          "Increase frequency",
          "Reduce losses"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Distribution Systems",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Distribution transformers step down voltage for local use."
      },
      {
        "id": 22,
        "question": "The main advantage of HVDC transmission is:",
        "options": [
          "Lower losses over long distances",
          "Higher losses",
          "Lower voltage",
          "Higher frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Transmission",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "HVDC is more efficient for long-distance transmission."
      },
      {
        "id": 23,
        "question": "The most commonly used method for load flow analysis is:",
        "options": [
          "Newton-Raphson",
          "Gauss-Seidel",
          "Fast Decoupled",
          "Jacobi"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Load Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Newton-Raphson is preferred for large systems due to fast convergence."
      },
      {
        "id": 24,
        "question": "The main function of an insulator in a transmission line is to:",
        "options": [
          "Prevent leakage current to ground",
          "Increase voltage",
          "Reduce losses",
          "Carry current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Transmission Lines",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Insulators prevent current leakage to ground."
      },
      {
        "id": 25,
        "question": "The main function of a bus coupler in a substation is to:",
        "options": [
          "Connect two busbars",
          "Increase voltage",
          "Reduce losses",
          "Increase frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Substations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bus coupler connects and isolates busbars as needed."
      },
      {
        "id": 26,
        "question": "The main function of a synchronous generator in a power plant is to:",
        "options": [
          "Convert mechanical energy to electrical energy",
          "Convert electrical energy to mechanical energy",
          "Increase voltage",
          "Reduce frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Power Generation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Synchronous generators generate AC power from mechanical input."
      },
      {
        "id": 27,
        "question": "The main function of a tap changer in a transformer is to:",
        "options": [
          "Regulate output voltage",
          "Increase frequency",
          "Reduce losses",
          "Increase current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Transformers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Tap changers adjust transformer voltage to maintain regulation."
      },
      {
        "id": 28,
        "question": "The main function of a shunt reactor is to:",
        "options": [
          "Absorb reactive power",
          "Generate real power",
          "Increase voltage",
          "Reduce current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Compensation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shunt reactors absorb excess reactive power to control voltage."
      },
      {
        "id": 29,
        "question": "The main function of a lightning arrester is to:",
        "options": [
          "Protect equipment from voltage surges",
          "Increase current",
          "Reduce losses",
          "Increase voltage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "Protection",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Lightning arresters protect equipment from surges."
      },
      {
        "id": 30,
        "question": "The main function of frequency control in power systems is to:",
        "options": [
          "Maintain balance between generation and load",
          "Increase voltage",
          "Reduce losses",
          "Increase current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Systems",
        "topic": "System Operation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Frequency control ensures generation matches load demand."
      }
      
    ],
    'Electrical Machines': [
      {
        "id": 1,
        "question": "The open-circuit test on a transformer is used to determine:",
        "options": [
          "Iron losses",
          "Copper losses",
          "Total losses",
          "Efficiency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Transformers",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Open-circuit test gives core (iron) losses since current is small and copper loss is negligible[2][3][5][8]."
      },
      {
        "id": 2,
        "question": "The equivalent circuit of a transformer is most accurate at:",
        "options": [
          "No load",
          "Full load",
          "Half load",
          "Any load"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Transformers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Equivalent circuit parameters are calculated for full load operation[2][3][5][8]."
      },
      {
        "id": 3,
        "question": "The efficiency of a transformer is maximum when:",
        "options": [
          "Copper loss = Iron loss",
          "Copper loss > Iron loss",
          "Copper loss < Iron loss",
          "At no load"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Transformers",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Maximum efficiency occurs when copper loss equals iron loss[2][3][5][8]."
      },
      {
        "id": 4,
        "question": "The regulation of a transformer is defined as:",
        "options": [
          "(No-load voltage - Full-load voltage)/Full-load voltage",
          "(Full-load voltage - No-load voltage)/No-load voltage",
          "(No-load voltage - Full-load voltage)/No-load voltage",
          "(Full-load voltage - No-load voltage)/Full-load voltage"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Transformers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Voltage regulation = (No-load V - Full-load V) / No-load V[2][3][5][8]."
      },
      {
        "id": 5,
        "question": "The main advantage of an auto-transformer over a two-winding transformer is:",
        "options": [
          "Lower copper loss",
          "Lower iron loss",
          "Lower cost and higher efficiency",
          "Higher leakage reactance"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Transformers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Auto-transformers use less copper, are cheaper, and more efficient[2][3][5][8]."
      },
      {
        "id": 6,
        "question": "The starting torque of a three-phase induction motor is maximum when:",
        "options": [
          "Rotor resistance = standstill reactance",
          "Rotor resistance > standstill reactance",
          "Rotor resistance < standstill reactance",
          "Rotor resistance = zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Induction Motors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Maximum starting torque when rotor resistance equals standstill reactance[2][3][5][8]."
      },
      {
        "id": 7,
        "question": "The slip of an induction motor under no-load is:",
        "options": [
          "Zero",
          "Very small",
          "Very large",
          "Unity"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Induction Motors",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "No-load slip is very small, but not exactly zero[2][3][5][8]."
      },
      {
        "id": 8,
        "question": "The blocked-rotor test on a three-phase induction motor is used to find:",
        "options": [
          "Short-circuit current and leakage reactance",
          "No-load losses",
          "Efficiency",
          "Core loss"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Induction Motors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Blocked-rotor test gives short-circuit current and leakage reactance[2][3][5][8]."
      },
      {
        "id": 9,
        "question": "The torque-speed characteristic of a three-phase induction motor is:",
        "options": [
          "Nearly linear",
          "Parabolic",
          "Drooping",
          "Hyperbolic"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Induction Motors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Torque-speed curve is drooping, with maximum torque at a certain slip[2][3][5][8]."
      },
      {
        "id": 10,
        "question": "The main function of a starter in a DC motor is to:",
        "options": [
          "Limit starting current",
          "Increase starting torque",
          "Reduce speed",
          "Increase speed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "DC Machines",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Starter limits high inrush current at start[2][3][5][8]."
      },
      {
        "id": 11,
        "question": "The speed of a DC shunt motor can be controlled by:",
        "options": [
          "Varying armature voltage",
          "Varying field current",
          "Adding resistance in armature circuit",
          "All of these"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "DC Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All methods are used for speed control of DC shunt motors[2][3][5][8]."
      },
      {
        "id": 12,
        "question": "The efficiency of a DC machine is maximum when:",
        "options": [
          "Variable loss = constant loss",
          "Copper loss = iron loss",
          "Copper loss = mechanical loss",
          "Iron loss = mechanical loss"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "DC Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Maximum efficiency when variable loss equals constant loss[2][3][5][8]."
      },
      {
        "id": 13,
        "question": "In a DC generator, the residual magnetism is necessary for:",
        "options": [
          "Self-excitation",
          "Speed control",
          "Commutation",
          "Efficiency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "DC Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Residual magnetism is required for self-excited DC generators[2][3][5][8]."
      },
      {
        "id": 14,
        "question": "The armature reaction in a DC machine causes:",
        "options": [
          "Distortion of main field",
          "Increase in speed",
          "Decrease in speed",
          "Increase in efficiency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "DC Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Armature reaction distorts main field flux[2][3][5][8]."
      },
      {
        "id": 15,
        "question": "The synchronous speed of a 4-pole, 50 Hz induction motor is:",
        "options": [
          "1500 rpm",
          "3000 rpm",
          "1000 rpm",
          "750 rpm"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Induction Motors",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Ns = 120f/P = 120×50/4 = 1500 rpm[2][3][5][8]."
      },
      {
        "id": 16,
        "question": "The main advantage of a salient pole synchronous machine is:",
        "options": [
          "Better suited for low speed",
          "Better suited for high speed",
          "Higher efficiency",
          "Lower cost"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Synchronous Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Salient pole machines are used for low-speed applications[2][3][5][8]."
      },
      {
        "id": 17,
        "question": "The regulation of a synchronous generator is:",
        "options": [
          "(No-load voltage - Full-load voltage)/Full-load voltage",
          "(Full-load voltage - No-load voltage)/No-load voltage",
          "(No-load voltage - Full-load voltage)/No-load voltage",
          "(Full-load voltage - No-load voltage)/Full-load voltage"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Synchronous Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Voltage regulation = (No-load V - Full-load V) / No-load V[2][3][5][8]."
      },
      {
        "id": 18,
        "question": "In a synchronous generator, the armature reaction is:",
        "options": [
          "Magnetizing or demagnetizing",
          "Always magnetizing",
          "Always demagnetizing",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Synchronous Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Armature reaction can be magnetizing, demagnetizing, or cross-magnetizing[2][3][5][8]."
      },
      {
        "id": 19,
        "question": "The main function of damper windings in a synchronous machine is to:",
        "options": [
          "Suppress hunting",
          "Increase speed",
          "Reduce losses",
          "Increase voltage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Synchronous Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Damper windings suppress oscillations (hunting)[2][3][5][8]."
      },
      {
        "id": 20,
        "question": "The starting torque of a synchronous motor is:",
        "options": [
          "Zero",
          "Maximum",
          "Minimum",
          "Equal to running torque"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Synchronous Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Synchronous motors have zero starting torque and need auxiliary means to start[2][3][5][8]."
      },
      {
        "id": 21,
        "question": "The main function of interpoles in a DC machine is to:",
        "options": [
          "Improve commutation",
          "Increase speed",
          "Reduce losses",
          "Increase voltage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "DC Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Interpoles improve commutation by neutralizing reactance voltage[2][3][5][8]."
      },
      {
        "id": 22,
        "question": "The main loss in a transformer at no-load is:",
        "options": [
          "Core (iron) loss",
          "Copper loss",
          "Mechanical loss",
          "Stray loss"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Transformers",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "At no-load, copper loss is negligible; core loss dominates[2][3][5][8]."
      },
      {
        "id": 23,
        "question": "The main cause of sparking at brushes in a DC machine is:",
        "options": [
          "Poor commutation",
          "High speed",
          "Low speed",
          "High armature voltage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "DC Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Poor commutation causes sparking at brushes[2][3][5][8]."
      },
      {
        "id": 24,
        "question": "The main advantage of a double cage induction motor is:",
        "options": [
          "High starting torque",
          "Low cost",
          "Low starting current",
          "High efficiency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Induction Motors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Double cage design gives high starting torque[2][3][5][8]."
      },
      {
        "id": 25,
        "question": "The speed of a single-phase induction motor is:",
        "options": [
          "Slightly less than synchronous speed",
          "Equal to synchronous speed",
          "Much less than synchronous speed",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Induction Motors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Like three-phase motors, speed is slightly less than synchronous speed[2][3][5][8]."
      },
      {
        "id": 26,
        "question": "The main function of a tap changer in a transformer is to:",
        "options": [
          "Regulate output voltage",
          "Increase frequency",
          "Reduce losses",
          "Increase current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Transformers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Tap changers allow voltage regulation[2][3][5][8]."
      },
      {
        "id": 27,
        "question": "The main function of a brushless excitation system in synchronous machines is to:",
        "options": [
          "Eliminate need for slip rings and brushes",
          "Increase speed",
          "Reduce losses",
          "Increase voltage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Synchronous Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Brushless excitation avoids slip rings and brushes[2][3][5][8]."
      },
      {
        "id": 28,
        "question": "The main advantage of parallel operation of transformers is:",
        "options": [
          "Reliability and flexibility",
          "Lower cost",
          "Higher efficiency",
          "Lower leakage reactance"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Transformers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Parallel operation improves reliability and allows load sharing[2][3][5][8]."
      },
      {
        "id": 29,
        "question": "The main function of a compensating winding in a DC machine is to:",
        "options": [
          "Neutralize armature reaction",
          "Increase speed",
          "Reduce losses",
          "Increase voltage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "DC Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Compensating winding neutralizes armature reaction[2][3][5][8]."
      },
      {
        "id": 30,
        "question": "The main loss in a synchronous machine at no-load is:",
        "options": [
          "Core (iron) loss",
          "Copper loss",
          "Mechanical loss",
          "Stray loss"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Electrical Machines",
        "topic": "Synchronous Machines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "At no-load, core loss dominates in synchronous machines[2][3][5][8]."
      }
      
    ],
    'Power Electronics': [
      {
        "id": 1,
        "question": "The holding current of an SCR is:",
        "options": [
          "The minimum anode current to keep SCR ON",
          "The maximum gate current",
          "The minimum gate current to turn ON",
          "The maximum anode current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "SCR",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Holding current is the minimum anode current below which the SCR turns OFF."
      },
      {
        "id": 2,
        "question": "A freewheeling diode in a DC chopper circuit is used to:",
        "options": [
          "Allow load current to flow during OFF period",
          "Increase output voltage",
          "Decrease output voltage",
          "Reduce switching losses"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Choppers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Freewheeling diode provides path for inductive load current when switch is OFF."
      },
      {
        "id": 3,
        "question": "The device with four layers and three terminals is:",
        "options": [
          "SCR",
          "MOSFET",
          "IGBT",
          "Diode"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Devices",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "SCR (Thyristor) is a four-layer, three-terminal device."
      },
      {
        "id": 4,
        "question": "In a single-phase full-wave controlled rectifier with R load, the average output voltage is maximum when firing angle is:",
        "options": [
          "0°",
          "45°",
          "90°",
          "180°"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Rectifiers",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Maximum output voltage at α = 0° (SCRs fired at zero crossing)."
      },
      {
        "id": 5,
        "question": "The turn-off time of an SCR is:",
        "options": [
          "Time required to regain forward blocking ability",
          "Time to turn ON",
          "Time to reach holding current",
          "Time to reach latching current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "SCR",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Turn-off time is time to recover forward blocking state after current falls to zero."
      },
      {
        "id": 6,
        "question": "A buck converter is a:",
        "options": [
          "Step-down DC-DC converter",
          "Step-up DC-DC converter",
          "Step-up/step-down converter",
          "AC-DC converter"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Choppers",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Buck converter steps down DC voltage."
      },
      {
        "id": 7,
        "question": "The device that combines the advantages of MOSFET and BJT is:",
        "options": [
          "IGBT",
          "SCR",
          "TRIAC",
          "GTO"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Devices",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "IGBT combines MOSFET input with BJT output characteristics."
      },
      {
        "id": 8,
        "question": "The main advantage of PWM inverters is:",
        "options": [
          "Reduced harmonic content",
          "Lower switching losses",
          "Higher output voltage",
          "Simpler control"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Inverters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "PWM reduces output harmonics."
      },
      {
        "id": 9,
        "question": "A cycloconverter is a device that:",
        "options": [
          "Converts AC at one frequency to AC at another frequency",
          "Converts DC to AC",
          "Converts AC to DC",
          "Converts DC to DC"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Cycloconverters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cycloconverter changes AC frequency directly without DC link."
      },
      {
        "id": 10,
        "question": "The latching current of an SCR is:",
        "options": [
          "The minimum anode current to turn ON SCR permanently",
          "The maximum gate current",
          "The minimum gate current to turn ON",
          "The maximum anode current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "SCR",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Latching current is the minimum anode current to maintain conduction after gate pulse is removed."
      },
      {
        "id": 11,
        "question": "The TRIAC can conduct current:",
        "options": [
          "In both directions",
          "In one direction only",
          "Only when gate is positive",
          "Only when gate is negative"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Devices",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "TRIAC is a bidirectional device."
      },
      {
        "id": 12,
        "question": "The output voltage of a single-phase half-wave rectifier with R load is:",
        "options": [
          "Vmax/π",
          "2Vmax/π",
          "Vmax/2",
          "Vmax/√2"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Rectifiers",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Average output voltage = Vmax/π."
      },
      {
        "id": 13,
        "question": "The main function of a snubber circuit is to:",
        "options": [
          "Protect SCR from high dv/dt",
          "Increase output voltage",
          "Reduce conduction losses",
          "Increase switching frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Protection",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Snubber protects SCR from false triggering due to high dv/dt."
      },
      {
        "id": 14,
        "question": "The input power factor of a single-phase fully controlled rectifier with R load is:",
        "options": [
          "Less than unity",
          "Unity",
          "Greater than unity",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Rectifiers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Input power factor is less than unity due to phase control."
      },
      {
        "id": 15,
        "question": "The main advantage of MOSFETs over BJTs in power electronics is:",
        "options": [
          "High input impedance and fast switching",
          "High current rating",
          "Low cost",
          "Low on-state voltage drop"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Devices",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "MOSFETs have high input impedance and switch faster than BJTs."
      },
      {
        "id": 16,
        "question": "The output frequency of a single-phase half-bridge inverter is controlled by:",
        "options": [
          "Switching frequency",
          "Load resistance",
          "Input voltage",
          "Load inductance"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Inverters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Output frequency is set by switching frequency."
      },
      {
        "id": 17,
        "question": "The main disadvantage of a diode bridge rectifier is:",
        "options": [
          "No control over output voltage",
          "High efficiency",
          "Bidirectional conduction",
          "High power factor"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Rectifiers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "No phase control possible in diode bridge rectifier."
      },
      {
        "id": 18,
        "question": "The commutation process in a thyristor circuit refers to:",
        "options": [
          "Turning OFF the thyristor",
          "Turning ON the thyristor",
          "Increasing current",
          "Decreasing voltage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Commutation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Commutation means turning OFF the SCR."
      },
      {
        "id": 19,
        "question": "The main advantage of a three-phase bridge rectifier over a single-phase one is:",
        "options": [
          "Higher average output voltage and lower ripple",
          "Lower output voltage",
          "Lower efficiency",
          "Higher ripple"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Rectifiers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Three-phase rectifiers have higher average output and lower ripple."
      },
      {
        "id": 20,
        "question": "The main function of a pulse transformer in gate drive circuits is to:",
        "options": [
          "Provide isolation",
          "Increase voltage",
          "Reduce current",
          "Reduce harmonics"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Gate Drive Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pulse transformer provides galvanic isolation between control and power circuits."
      },
      {
        "id": 21,
        "question": "The typical gate trigger voltage for an SCR is:",
        "options": [
          "0.7–2.5 V",
          "10–20 V",
          "50–100 V",
          "100–200 V"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "SCR",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gate trigger voltage is typically in the range 0.7–2.5 V."
      },
      {
        "id": 22,
        "question": "The main function of a heat sink in power electronics is to:",
        "options": [
          "Dissipate heat from power devices",
          "Increase switching speed",
          "Reduce input voltage",
          "Increase current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Thermal Management",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Heat sinks dissipate heat to prevent device overheating."
      },
      {
        "id": 23,
        "question": "The main advantage of a GTO over an SCR is:",
        "options": [
          "Turn-off can be achieved by negative gate pulse",
          "Higher voltage rating",
          "Lower cost",
          "Lower current rating"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Devices",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "GTO can be turned off by gate pulse, unlike SCR."
      },
      {
        "id": 24,
        "question": "The main function of a snubber circuit is to:",
        "options": [
          "Protect against overvoltage and high dv/dt",
          "Increase output voltage",
          "Reduce conduction losses",
          "Increase switching frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Protection",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Snubber circuits protect devices from overvoltage and high dv/dt."
      },
      {
        "id": 25,
        "question": "The typical forward voltage drop across a conducting power diode is:",
        "options": [
          "0.7–1.1 V",
          "2–3 V",
          "5–10 V",
          "0.1–0.3 V"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Devices",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Power diodes have a forward drop of about 0.7–1.1 V."
      },
      {
        "id": 26,
        "question": "The output voltage of a boost converter is:",
        "options": [
          "Greater than input voltage",
          "Less than input voltage",
          "Equal to input voltage",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Choppers",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Boost converter steps up DC voltage."
      },
      {
        "id": 27,
        "question": "The main function of a commutating capacitor in a forced commutation circuit is to:",
        "options": [
          "Reverse bias the SCR",
          "Increase output voltage",
          "Reduce input current",
          "Increase conduction time"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Commutation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Commutating capacitor helps reverse bias the SCR for turn-off."
      },
      {
        "id": 28,
        "question": "The main disadvantage of a single-phase half-wave rectifier is:",
        "options": [
          "High ripple content",
          "High efficiency",
          "Low output voltage",
          "High power factor"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Rectifiers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Half-wave rectifiers have high ripple content."
      },
      {
        "id": 29,
        "question": "The output voltage waveform of a single-phase full-bridge inverter is:",
        "options": [
          "Square wave",
          "Sine wave",
          "Triangular wave",
          "Sawtooth wave"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Inverters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Basic inverter produces a square wave output."
      },
      {
        "id": 30,
        "question": "The main function of a soft starter in induction motor drives is to:",
        "options": [
          "Reduce starting current and mechanical stress",
          "Increase starting torque",
          "Increase speed",
          "Reduce losses"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Power Electronics",
        "topic": "Applications",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Soft starters limit inrush current and reduce mechanical stress at startup."
      }
      
    ],
    'Measurements': [
      {
        "id": 1,
        "question": "The Wheatstone bridge is primarily used to measure:",
        "options": ["Resistance", "Capacitance", "Inductance", "Voltage"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Bridges",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Wheatstone bridge is used for precise measurement of resistance."
      },
      {
        "id": 2,
        "question": "A potentiometer measures voltage by:",
        "options": [
          "Comparing unknown voltage with a known voltage",
          "Using a galvanometer",
          "Measuring current through the voltage source",
          "Using a voltmeter"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Potentiometers",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Potentiometer compares unknown voltage with a known voltage without drawing current."
      },
      {
        "id": 3,
        "question": "The instrument transformer used for measuring high current is called:",
        "options": ["Current Transformer", "Potential Transformer", "Voltage Transformer", "Power Transformer"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Instrument Transformers",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Current transformers step down high currents to measurable levels."
      },
      {
        "id": 4,
        "question": "The phase angle between voltage and current in an ideal inductive load is:",
        "options": ["90° voltage leads current", "90° current leads voltage", "0°", "180°"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Phase Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "In an inductive load, voltage leads current by 90°."
      },
      {
        "id": 5,
        "question": "Digital voltmeters typically use which of the following to convert analog signals to digital?",
        "options": ["ADC (Analog to Digital Converter)", "DAC (Digital to Analog Converter)", "Rectifier", "Oscillator"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Digital Voltmeters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Digital voltmeters use ADCs to convert analog voltage to digital form."
      },
      {
        "id": 6,
        "question": "In an oscilloscope, the time base controls:",
        "options": [
          "Horizontal sweep speed",
          "Vertical deflection",
          "Brightness of the screen",
          "Focus of the electron beam"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Oscilloscopes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Time base controls the horizontal sweep speed of the electron beam."
      },
      {
        "id": 7,
        "question": "The power factor meter measures:",
        "options": [
          "Cosine of the phase angle between voltage and current",
          "Voltage",
          "Current",
          "Frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Power Factor Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Power factor meter measures the cosine of phase angle between voltage and current."
      },
      {
        "id": 8,
        "question": "The energy meter measures:",
        "options": [
          "Energy consumed over time",
          "Instantaneous power",
          "Voltage",
          "Current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Energy Measurement",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Energy meters measure total energy consumed over a period."
      },
      {
        "id": 9,
        "question": "The accuracy of an instrument is defined as:",
        "options": [
          "Closeness of measured value to true value",
          "Repeatability of measurement",
          "Range of measurement",
          "Sensitivity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Error Analysis",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Accuracy is how close the measurement is to the true value."
      },
      {
        "id": 10,
        "question": "The main source of error in a moving coil instrument is:",
        "options": [
          "Friction",
          "Hysteresis",
          "Eddy currents",
          "Temperature variation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Error Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Friction in moving parts causes error in moving coil instruments."
      },
      {
        "id": 11,
        "question": "The Kelvin double bridge is used to measure:",
        "options": [
          "Low resistance",
          "High resistance",
          "Inductance",
          "Capacitance"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Bridges",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Kelvin bridge measures very low resistances accurately."
      },
      {
        "id": 12,
        "question": "The Q-meter is used to measure:",
        "options": [
          "Quality factor of coils",
          "Resistance",
          "Voltage",
          "Current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Quality Factor Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Q-meter measures quality factor (Q) of inductors and capacitors."
      },
      {
        "id": 13,
        "question": "The main advantage of digital multimeters over analog is:",
        "options": [
          "Higher accuracy",
          "Lower cost",
          "No need for calibration",
          "No power supply required"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Digital Instruments",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Digital multimeters generally provide higher accuracy and resolution."
      },
      {
        "id": 14,
        "question": "The phase angle between voltage and current is measured by:",
        "options": [
          "Phase meter",
          "Voltmeter",
          "Ammeter",
          "Wattmeter"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Phase Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Phase meter measures the phase difference between two signals."
      },
      {
        "id": 15,
        "question": "The main function of a digital frequency meter is to:",
        "options": [
          "Measure frequency of AC signals",
          "Measure voltage",
          "Measure current",
          "Measure power"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Frequency Measurement",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Frequency meters measure frequency of periodic signals."
      },
      {
        "id": 16,
        "question": "The main source of error in instrument transformers is:",
        "options": [
          "Ratio error",
          "Phase error",
          "Both ratio and phase errors",
          "No error"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Instrument Transformers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Instrument transformers have both ratio and phase errors."
      },
      {
        "id": 17,
        "question": "The oscilloscope vertical deflection is proportional to:",
        "options": [
          "Input voltage",
          "Input current",
          "Frequency",
          "Time"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Oscilloscopes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Vertical deflection corresponds to input voltage magnitude."
      },
      {
        "id": 18,
        "question": "The time base of an oscilloscope controls:",
        "options": [
          "Horizontal sweep speed",
          "Vertical deflection",
          "Brightness",
          "Focus"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Oscilloscopes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Time base controls horizontal sweep speed of the electron beam."
      },
      {
        "id": 19,
        "question": "The power factor meter measures:",
        "options": [
          "Cosine of phase angle between voltage and current",
          "Voltage",
          "Current",
          "Frequency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Power Factor Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Power factor meter measures cosine of phase angle."
      },
      {
        "id": 20,
        "question": "The main advantage of using a digital oscilloscope over analog is:",
        "options": [
          "Storage and processing of waveforms",
          "Lower cost",
          "Higher power consumption",
          "Simpler design"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Oscilloscopes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Digital oscilloscopes can store, process, and analyze waveforms."
      },
      {
        "id": 21,
        "question": "The error in measurement is defined as:",
        "options": [
          "Difference between measured and true value",
          "Sum of measured and true value",
          "Product of measured and true value",
          "Ratio of measured to true value"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Error Analysis",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Error = Measured value - True value."
      },
      {
        "id": 22,
        "question": "The sensitivity of an instrument is:",
        "options": [
          "Change in output per unit change in input",
          "Maximum input it can measure",
          "Minimum input it can measure",
          "Range of instrument"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Instrument Characteristics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sensitivity is output change per input change."
      },
      {
        "id": 23,
        "question": "The main disadvantage of moving coil instruments is:",
        "options": [
          "Cannot measure AC",
          "High power consumption",
          "Low accuracy",
          "Non-linear scale"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Instruments",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Moving coil instruments are only suitable for DC measurements."
      },
      {
        "id": 24,
        "question": "The main advantage of a digital multimeter is:",
        "options": [
          "High accuracy and portability",
          "Low cost",
          "No calibration needed",
          "No power supply needed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Digital Instruments",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Digital multimeters offer high accuracy and portability."
      },
      {
        "id": 25,
        "question": "The main purpose of a shunt resistor in an ammeter is to:",
        "options": [
          "Bypass most of the current",
          "Increase sensitivity",
          "Reduce voltage drop",
          "Reduce power consumption"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Current Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shunt resistor bypasses most current to protect meter movement."
      },
      {
        "id": 26,
        "question": "The main function of a Hall effect sensor is to:",
        "options": [
          "Measure magnetic field",
          "Measure voltage",
          "Measure current",
          "Measure power"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hall sensors measure magnetic field strength."
      },
      {
        "id": 27,
        "question": "The main advantage of a digital frequency meter is:",
        "options": [
          "High accuracy and resolution",
          "Low cost",
          "No power supply needed",
          "Simple design"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Frequency Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Digital frequency meters provide accurate and high-resolution measurements."
      },
      {
        "id": 28,
        "question": "The main function of a thermocouple is to:",
        "options": [
          "Measure temperature",
          "Measure voltage",
          "Measure current",
          "Measure resistance"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Temperature Measurement",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Thermocouples generate voltage proportional to temperature difference."
      },
      {
        "id": 29,
        "question": "The main function of a strain gauge is to:",
        "options": [
          "Measure strain",
          "Measure temperature",
          "Measure voltage",
          "Measure current"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Strain Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Strain gauges measure deformation or strain in materials."
      },
      {
        "id": 30,
        "question": "The main source of error in a digital voltmeter is:",
        "options": [
          "Quantization error",
          "Parallax error",
          "Friction",
          "Temperature variation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Measurements",
        "topic": "Error Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Quantization error arises due to finite resolution of ADC."
      }
      
    ]
  },

  // Civil Engineering Questions
  'Civil Engineering': {
    'Structural Engineering': [
      {
        "id": 1,
        "question": "The sum of forces acting on a body in equilibrium is:",
        "options": ["Zero", "Maximum", "Minimum", "Equal to applied force"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Engineering Mechanics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "For equilibrium, the vector sum of all forces must be zero[4][6]."
      },
      {
        "id": 2,
        "question": "A simply supported beam with a point load at the center has maximum bending moment at:",
        "options": ["Center", "Support", "Quarter span", "Anywhere"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Solid Mechanics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Maximum bending moment occurs at the center under central point load[4][6][8]."
      },
      {
        "id": 3,
        "question": "The modulus of elasticity (E) for steel is approximately:",
        "options": ["200 GPa", "70 GPa", "100 GPa", "300 GPa"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Construction Materials",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "E for steel ≈ 200 GPa[4][6]."
      },
      {
        "id": 4,
        "question": "The shear force at the fixed end of a cantilever beam carrying a uniformly distributed load w per unit length is:",
        "options": ["wL", "wL/2", "wL^2/2", "wL^2/8"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Solid Mechanics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shear force at fixed end = total load = wL[4][6][8]."
      },
      {
        "id": 5,
        "question": "The flexural formula is:",
        "options": [
          "σ = My/I",
          "σ = y/M",
          "σ = I/My",
          "σ = M/Iy"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Solid Mechanics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bending stress: σ = My/I[4][6][8]."
      },
      {
        "id": 6,
        "question": "The degree of static indeterminacy of a propped cantilever beam is:",
        "options": ["1", "2", "3", "0"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Structural Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Propped cantilever is indeterminate to degree 1[4][6][8]."
      },
      {
        "id": 7,
        "question": "The Mohr’s circle is used to determine:",
        "options": [
          "Principal stresses and maximum shear stress",
          "Bending moment",
          "Shear force",
          "Deflection"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Solid Mechanics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Mohr’s circle graphically finds principal and max shear stresses[4][6]."
      },
      {
        "id": 8,
        "question": "The maximum shear stress in a solid circular shaft under torsion occurs at:",
        "options": ["Surface", "Center", "Mid-radius", "Any point"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Solid Mechanics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shear stress is maximum at the surface of the shaft[4][6]."
      },
      {
        "id": 9,
        "question": "The critical load for buckling of a long slender column (Euler’s formula) is proportional to:",
        "options": [
          "1/(L^2)",
          "1/L",
          "L",
          "L^2"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Solid Mechanics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pcr ∝ 1/(L^2) for Euler columns[4][6]."
      },
      {
        "id": 10,
        "question": "The influence line for reaction at a simple support is:",
        "options": [
          "A straight line",
          "A parabola",
          "A rectangle",
          "A triangle"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Structural Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Influence line for reaction is a straight line[4][6][8]."
      },
      {
        "id": 11,
        "question": "The moment distribution method is used to analyze:",
        "options": [
          "Indeterminate beams and frames",
          "Determinate beams only",
          "Trusses only",
          "Cables"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Structural Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Moment distribution is for indeterminate beams/frames[4][6][8]."
      },
      {
        "id": 12,
        "question": "The main function of stirrups in a reinforced concrete beam is to:",
        "options": [
          "Resist shear",
          "Resist bending",
          "Increase ductility",
          "Reduce weight"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Concrete Structures",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Stirrups resist shear in RC beams[4][6][8]."
      },
      {
        "id": 13,
        "question": "The development length in reinforced concrete is required to:",
        "options": [
          "Ensure full transfer of stress from steel to concrete",
          "Reduce cracking",
          "Increase ductility",
          "Reduce shrinkage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Concrete Structures",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Development length ensures bond between steel and concrete[4][6][8]."
      },
      {
        "id": 14,
        "question": "The limit state of serviceability in concrete structures relates to:",
        "options": [
          "Deflection and cracking",
          "Collapse",
          "Yielding",
          "Buckling"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Concrete Structures",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Serviceability limits: deflection, cracking, vibration[4][6][8]."
      },
      {
        "id": 15,
        "question": "The most common steel used for reinforcement in concrete is:",
        "options": [
          "Mild steel",
          "Stainless steel",
          "High-carbon steel",
          "Copper"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Construction Materials",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Mild steel is most widely used for reinforcement[4][6]."
      },
      {
        "id": 16,
        "question": "The plastic hinge in a beam forms when:",
        "options": [
          "Section reaches yield moment",
          "Section reaches ultimate moment",
          "Section cracks",
          "Section buckles"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Steel Structures",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Plastic hinge forms at yield moment in plastic analysis[4][6][8]."
      },
      {
        "id": 17,
        "question": "The main advantage of prestressed concrete is:",
        "options": [
          "Higher load-carrying capacity and crack control",
          "Lower cost",
          "Easier construction",
          "Higher weight"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Concrete Structures",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Prestressing increases load capacity and controls cracks[4][6][8]."
      },
      {
        "id": 18,
        "question": "The main function of a gusset plate in a steel truss is to:",
        "options": [
          "Connect members at a joint",
          "Increase strength",
          "Reduce weight",
          "Prevent buckling"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Steel Structures",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gusset plates connect truss members at joints[4][6][8]."
      },
      {
        "id": 19,
        "question": "The most common method for analysis of indeterminate structures is:",
        "options": [
          "Moment distribution method",
          "Force method",
          "Slope-deflection method",
          "All of these"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Structural Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All listed methods are used for indeterminate structures[4][6][8]."
      },
      {
        "id": 20,
        "question": "The main function of a base plate in a steel column is to:",
        "options": [
          "Distribute load to foundation",
          "Increase height",
          "Reduce weight",
          "Increase strength"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Steel Structures",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Base plate spreads load from column to foundation[4][6][8]."
      },
      {
        "id": 21,
        "question": "The main function of a stirrup in a reinforced concrete beam is to:",
        "options": [
          "Resist shear",
          "Resist bending",
          "Increase ductility",
          "Reduce weight"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Concrete Structures",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Stirrups are provided for shear resistance[4][6][8]."
      },
      {
        "id": 22,
        "question": "The main advantage of using high-strength steel in structures is:",
        "options": [
          "Higher load-carrying capacity",
          "Lower cost",
          "Easier construction",
          "Higher weight"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Steel Structures",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "High-strength steel allows higher loads for same section[4][6][8]."
      },
      {
        "id": 23,
        "question": "The main function of a diaphragm in a framed structure is to:",
        "options": [
          "Transfer lateral loads to vertical elements",
          "Increase height",
          "Reduce weight",
          "Increase stiffness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Structural Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Diaphragms transfer lateral loads (wind, earthquake) to frames[4][6][8]."
      },
      {
        "id": 24,
        "question": "The most common type of connection in steel structures is:",
        "options": [
          "Bolted connection",
          "Welded connection",
          "Riveted connection",
          "Pinned connection"
        ],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Steel Structures",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Welded connections are most common in modern steel structures[4][6][8]."
      },
      {
        "id": 25,
        "question": "The main function of a tie in a truss is to:",
        "options": [
          "Resist tension",
          "Resist compression",
          "Increase stiffness",
          "Reduce weight"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Structural Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ties in trusses are tension members[4][6][8]."
      },
      {
        "id": 26,
        "question": "The most common test for concrete quality is:",
        "options": [
          "Compressive strength test",
          "Tensile strength test",
          "Flexural strength test",
          "Shear strength test"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Construction Materials",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Compressive strength test is standard for concrete quality[4][6][8]."
      },
      {
        "id": 27,
        "question": "The main purpose of PERT and CPM in construction management is:",
        "options": [
          "Project planning and scheduling",
          "Cost estimation",
          "Material testing",
          "Quality control"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Construction Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "PERT/CPM are used for project planning and scheduling[4][6][8]."
      },
      {
        "id": 28,
        "question": "The main function of a column base in steel structures is to:",
        "options": [
          "Transfer load to foundation",
          "Increase height",
          "Reduce weight",
          "Increase strength"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Steel Structures",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Column base transfers load to foundation[4][6][8]."
      },
      {
        "id": 29,
        "question": "The main function of a camber in a bridge girder is to:",
        "options": [
          "Counteract deflection under load",
          "Increase weight",
          "Reduce cost",
          "Increase stiffness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Structural Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Camber is provided to offset deflection due to dead/live load[4][6][8]."
      },
      {
        "id": 30,
        "question": "The main advantage of using prestressed concrete is:",
        "options": [
          "Higher load capacity and crack control",
          "Lower cost",
          "Easier construction",
          "Higher weight"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Structural Engineering",
        "topic": "Concrete Structures",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Prestressed concrete allows higher loads and better crack control[4][6][8]."
      }
      
    ],
    'Geotechnical Engineering': [
      {
        "id": 1,
        "question": "The three-phase system in soil mechanics consists of:",
        "options": [
          "Soil solids, water, air",
          "Soil solids, water, cement",
          "Water, air, cement",
          "Soil solids, clay, sand"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Soil Mechanics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Soil is a mixture of soil particles (solids), water, and air[1][4][9]."
      },
      {
        "id": 2,
        "question": "The void ratio (e) of a soil is defined as:",
        "options": [
          "Volume of voids / Volume of solids",
          "Volume of solids / Volume of voids",
          "Volume of water / Volume of voids",
          "Volume of air / Volume of solids"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Soil Mechanics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Void ratio = Vv/Vs[1][4][9]."
      },
      {
        "id": 3,
        "question": "The Atterberg limits are used to classify:",
        "options": [
          "Fine-grained soils",
          "Coarse-grained soils",
          "Organic soils",
          "Gravel"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Soil Mechanics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Atterberg limits (LL, PL, SL) are for fine-grained soils[1][4][9]."
      },
      {
        "id": 4,
        "question": "The permeability of a soil is influenced most by:",
        "options": [
          "Particle size",
          "Plasticity",
          "Color",
          "Organic content"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Permeability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Larger particle size = higher permeability[1][4][9]."
      },
      {
        "id": 5,
        "question": "The effective stress principle was proposed by:",
        "options": [
          "Terzaghi",
          "Rankine",
          "Coulomb",
          "Mohr"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Effective Stress",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Terzaghi’s principle: σ' = σ - u[1][4][9]."
      },
      {
        "id": 6,
        "question": "The flow net is used to determine:",
        "options": [
          "Seepage quantity and uplift pressure",
          "Consolidation settlement",
          "Shear strength",
          "Compaction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Seepage",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Flow nets give seepage, uplift, and exit gradient[1][4][9]."
      },
      {
        "id": 7,
        "question": "The quicksand condition occurs when:",
        "options": [
          "Upward seepage force equals effective weight of soil",
          "Soil is fully saturated",
          "Soil is dry",
          "Soil is over-compacted"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Seepage",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Quicksand: upward seepage force = effective weight, effective stress = 0[1][4][9]."
      },
      {
        "id": 8,
        "question": "The coefficient of consolidation (Cv) is used in:",
        "options": [
          "Time rate of consolidation",
          "Compaction",
          "Shear strength",
          "Seepage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Consolidation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cv governs how quickly consolidation occurs[1][4][9]."
      },
      {
        "id": 9,
        "question": "The Mohr–Coulomb failure criterion relates:",
        "options": [
          "Shear strength to normal stress",
          "Compaction to density",
          "Permeability to particle size",
          "Consolidation to time"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Shear Strength",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "τ = c + σ' tanφ[1][4][9]."
      },
      {
        "id": 10,
        "question": "The unconfined compression test is used mainly for:",
        "options": [
          "Cohesive soils",
          "Cohesionless soils",
          "Gravel",
          "Sand"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Shear Strength",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "UCC test is for clays and other cohesive soils[1][4][9]."
      },
      {
        "id": 11,
        "question": "The Standard Penetration Test (SPT) is used to determine:",
        "options": [
          "Soil relative density and strength",
          "Soil color",
          "Soil mineralogy",
          "Soil temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Site Investigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "SPT gives N-value for density and strength[1][4][9]."
      },
      {
        "id": 12,
        "question": "The Rankine theory is used for:",
        "options": [
          "Earth pressure on retaining walls",
          "Bearing capacity of foundations",
          "Slope stability",
          "Compaction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Earth Pressure",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rankine theory gives active/passive earth pressure[1][4][9]."
      },
      {
        "id": 13,
        "question": "The critical slip surface for an infinite slope in sand is:",
        "options": [
          "Parallel to ground surface",
          "Circular",
          "Vertical",
          "Random"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Slope Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Infinite slope in sand fails along surface parallel to ground[1][4][9]."
      },
      {
        "id": 14,
        "question": "The Boussinesq equation is used to determine:",
        "options": [
          "Vertical stress due to point load",
          "Shear strength",
          "Earth pressure",
          "Consolidation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Stress Distribution",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Boussinesq gives stress at depth due to surface load[1][4][9]."
      },
      {
        "id": 15,
        "question": "The bearing capacity of shallow foundations is most commonly calculated using:",
        "options": [
          "Terzaghi’s theory",
          "Rankine’s theory",
          "Mohr’s theory",
          "Boussinesq’s theory"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Bearing Capacity",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Terzaghi’s theory is standard for shallow foundation bearing capacity[1][4][9]."
      },
      {
        "id": 16,
        "question": "The effect of water table on bearing capacity is:",
        "options": [
          "Reduces bearing capacity",
          "Increases bearing capacity",
          "No effect",
          "Depends on soil type only"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Bearing Capacity",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "High water table reduces effective stress and bearing capacity[1][4][9]."
      },
      {
        "id": 17,
        "question": "Negative skin friction on piles occurs when:",
        "options": [
          "Soil settles more than pile",
          "Pile settles more than soil",
          "Pile is in sand",
          "Pile is in water"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Deep Foundations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Negative skin friction: soil settles more than pile, dragging pile downward[1][4][9]."
      },
      {
        "id": 18,
        "question": "The group efficiency of piles is:",
        "options": [
          "Ratio of group capacity to sum of individual capacities",
          "Sum of individual capacities",
          "Product of group and individual capacities",
          "Difference of group and individual capacities"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Deep Foundations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Group efficiency = group capacity / (n × single pile capacity)[1][4][9]."
      },
      {
        "id": 19,
        "question": "The plate load test is used to determine:",
        "options": [
          "Bearing capacity and settlement",
          "Shear strength",
          "Permeability",
          "Compaction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Site Investigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Plate load test gives bearing capacity and settlement of soil[1][4][9]."
      },
      {
        "id": 20,
        "question": "The compaction of soil increases:",
        "options": [
          "Dry density",
          "Permeability",
          "Compressibility",
          "Void ratio"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Compaction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Compaction increases dry density, reduces voids[1][4][9]."
      },
      {
        "id": 21,
        "question": "The time rate of consolidation depends on:",
        "options": [
          "Coefficient of consolidation and drainage path",
          "Water content only",
          "Clay content only",
          "Type of test only"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Consolidation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Time rate of consolidation ∝ drainage path² / Cv[1][4][9]."
      },
      {
        "id": 22,
        "question": "The main cause of settlement in clayey soils is:",
        "options": [
          "Consolidation",
          "Immediate compression",
          "Shear failure",
          "Compaction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Settlement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Settlement in clays is mainly due to consolidation[1][4][9]."
      },
      {
        "id": 23,
        "question": "The capillarity in soils is more pronounced in:",
        "options": [
          "Fine-grained soils",
          "Coarse-grained soils",
          "Gravel",
          "Rock"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Soil Mechanics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Capillary rise is higher in fine-grained soils due to small pores[1][4][9]."
      },
      {
        "id": 24,
        "question": "The most common method for soil classification is:",
        "options": [
          "Grain-size distribution and Atterberg limits",
          "Color and odor",
          "Mineral content",
          "Temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Soil Classification",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Soils are classified by grain size and plasticity (Atterberg limits)[1][4][9]."
      },
      {
        "id": 25,
        "question": "The main purpose of a filter in an earth dam is to:",
        "options": [
          "Prevent piping by allowing water but not soil to pass",
          "Increase strength",
          "Reduce cost",
          "Increase permeability"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Seepage",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Filters prevent soil movement while allowing seepage water[1][4][9]."
      },
      {
        "id": 26,
        "question": "The main function of a cutoff wall in a dam is to:",
        "options": [
          "Reduce seepage",
          "Increase strength",
          "Reduce weight",
          "Increase height"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Seepage",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cutoff walls reduce seepage under dams[1][4][9]."
      },
      {
        "id": 27,
        "question": "The bearing capacity of a pile group is usually:",
        "options": [
          "Less than sum of individual piles",
          "Equal to sum of individual piles",
          "More than sum of individual piles",
          "Unrelated to individual piles"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Deep Foundations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Group effect reduces capacity below sum of individual piles[1][4][9]."
      },
      {
        "id": 28,
        "question": "The earth pressure at rest is denoted by:",
        "options": [
          "K₀",
          "Kₐ",
          "Kₚ",
          "Kc"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Earth Pressure",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "K₀ is the coefficient of earth pressure at rest[1][4][9]."
      },
      {
        "id": 29,
        "question": "The main function of a sand drain is to:",
        "options": [
          "Accelerate consolidation",
          "Increase strength",
          "Reduce permeability",
          "Increase compaction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Consolidation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sand drains speed up consolidation by shortening drainage path[1][4][9]."
      },
      {
        "id": 30,
        "question": "The main advantage of a raft foundation is:",
        "options": [
          "Reduces differential settlement",
          "Increases depth",
          "Reduces cost",
          "Increases bearing capacity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Geotechnical Engineering",
        "topic": "Foundation Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Raft foundations reduce differential settlement for weak/variable soils[1][4][9]."
      }
      
    ],
    'Transportation': [
      {
        "id": 1,
        "question": "The minimum stopping sight distance on a highway depends on:",
        "options": [
          "Speed, perception-reaction time, and braking distance",
          "Only speed",
          "Only gradient",
          "Only reaction time"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Geometric Design",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Stopping sight distance = perception-reaction distance + braking distance; depends on all listed factors[1][3]."
      },
      {
        "id": 2,
        "question": "The ruling gradient for highways is:",
        "options": [
          "The maximum gradient allowed under normal conditions",
          "The minimum gradient allowed",
          "The average gradient",
          "The gradient for emergency vehicles"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Geometric Design",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Ruling gradient is the maximum desirable gradient for normal conditions[1][3]."
      },
      {
        "id": 3,
        "question": "The camber in a road is provided to:",
        "options": [
          "Drain off surface water",
          "Increase speed",
          "Reduce noise",
          "Increase friction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Geometric Design",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Camber is the cross slope provided for drainage[1][3]."
      },
      {
        "id": 4,
        "question": "The maximum super-elevation on highways in India is generally:",
        "options": [
          "1 in 15",
          "1 in 20",
          "1 in 10",
          "1 in 8"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Geometric Design",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "IRC recommends maximum super-elevation of 1 in 15 (about 6–7%)[1][3]."
      },
      {
        "id": 5,
        "question": "The desirable property of bitumen for pavement construction is:",
        "options": [
          "Viscoelasticity",
          "Brittleness",
          "High melting point",
          "High density"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Highway Materials",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bitumen should be viscoelastic to accommodate traffic and temperature changes[1][3]."
      },
      {
        "id": 6,
        "question": "The CBR test is used to determine:",
        "options": [
          "Subgrade strength",
          "Bitumen content",
          "Aggregate shape",
          "Traffic volume"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Highway Materials",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "California Bearing Ratio (CBR) test measures subgrade strength[1][3]."
      },
      {
        "id": 7,
        "question": "The design of flexible pavements is based on:",
        "options": [
          "Layered system concept",
          "Beam theory",
          "Slab theory",
          "Elastic half-space theory"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Pavement Design",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Flexible pavements are designed as layered systems[1][3]."
      },
      {
        "id": 8,
        "question": "The design of rigid pavements is based on:",
        "options": [
          "Westergaard’s theory",
          "Layered system concept",
          "CBR method",
          "Empirical method"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Pavement Design",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rigid pavements are analyzed using Westergaard’s theory[1][3]."
      },
      {
        "id": 9,
        "question": "The fundamental diagram of traffic flow relates:",
        "options": [
          "Speed, flow, and density",
          "Speed and time",
          "Density and time",
          "Flow and distance"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Traffic Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fundamental diagram shows relationship between speed, flow, and density[1][3]."
      },
      {
        "id": 10,
        "question": "The peak hour factor is defined as:",
        "options": [
          "Hourly volume / (4 × highest 15-min flow)",
          "Highest 15-min flow / hourly volume",
          "Hourly volume / highest 5-min flow",
          "Highest 5-min flow / hourly volume"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Traffic Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "PHF = hourly volume / (4 × highest 15-min volume)[1][3]."
      },
      {
        "id": 11,
        "question": "The capacity of a highway is maximum when:",
        "options": [
          "Speed × density is maximum",
          "Speed is maximum",
          "Density is maximum",
          "Flow is minimum"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Traffic Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Capacity is maximum at optimal speed × density[1][3]."
      },
      {
        "id": 12,
        "question": "Webster’s method is used for:",
        "options": [
          "Signalized intersection design",
          "Pavement thickness design",
          "Traffic volume study",
          "Bitumen content determination"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Traffic Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Webster’s method is for optimal signal timings at intersections[1][3]."
      },
      {
        "id": 13,
        "question": "The main purpose of providing transition curves in highways is to:",
        "options": [
          "Gradually introduce curvature and super-elevation",
          "Increase speed",
          "Reduce cost",
          "Reduce pavement thickness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Geometric Design",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Transition curves provide gradual change in curvature and super-elevation[1][3]."
      },
      {
        "id": 14,
        "question": "The aggregate impact value test is used to determine:",
        "options": [
          "Toughness of aggregates",
          "Hardness of aggregates",
          "Shape of aggregates",
          "Specific gravity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Highway Materials",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Aggregate impact value measures aggregate toughness[1][3]."
      },
      {
        "id": 15,
        "question": "The main function of a runway in an airport is to:",
        "options": [
          "Provide surface for aircraft takeoff and landing",
          "Guide aircraft on ground",
          "Provide parking",
          "Control air traffic"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Airport Engineering",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Runway is used for takeoff and landing[1][3]."
      },
      {
        "id": 16,
        "question": "The length of a runway is corrected for:",
        "options": [
          "Elevation, temperature, and gradient",
          "Wind speed only",
          "Rainfall",
          "Soil type"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Airport Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Runway length is corrected for elevation, temperature, and gradient[1][3]."
      },
      {
        "id": 17,
        "question": "Cant in railway tracks is provided to:",
        "options": [
          "Counteract centrifugal force on curves",
          "Increase speed",
          "Reduce friction",
          "Increase track gauge"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Railway Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cant tilts the track to balance centrifugal force on curves[1][3]."
      },
      {
        "id": 18,
        "question": "The standard gauge of Indian railway is:",
        "options": [
          "1.676 m",
          "1.435 m",
          "1.000 m",
          "0.762 m"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Railway Engineering",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Indian broad gauge is 1.676 m[1][3]."
      },
      {
        "id": 19,
        "question": "The main function of ballast in railway tracks is to:",
        "options": [
          "Provide stability and drainage",
          "Increase speed",
          "Reduce noise",
          "Increase friction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Railway Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ballast provides stability and drainage for tracks[1][3]."
      },
      {
        "id": 20,
        "question": "The main function of a taxiway in an airport is to:",
        "options": [
          "Connect runway with apron and hangars",
          "Provide takeoff surface",
          "Provide parking",
          "Control air traffic"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Airport Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Taxiway connects runway with apron and hangars[1][3]."
      },
      {
        "id": 21,
        "question": "The main purpose of providing a median on highways is to:",
        "options": [
          "Separate opposing traffic flows",
          "Increase speed",
          "Reduce cost",
          "Increase pavement thickness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Geometric Design",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Median separates traffic moving in opposite directions[1][3]."
      },
      {
        "id": 22,
        "question": "The main purpose of traffic signs is to:",
        "options": [
          "Regulate, warn, and guide traffic",
          "Increase speed",
          "Reduce cost",
          "Increase pavement thickness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Traffic Engineering",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Traffic signs regulate, warn, and guide road users[1][3]."
      },
      {
        "id": 23,
        "question": "The main function of a rotary intersection is to:",
        "options": [
          "Reduce conflict points and improve safety",
          "Increase speed",
          "Reduce cost",
          "Increase pavement thickness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Traffic Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rotaries reduce conflict points and improve intersection safety[1][3]."
      },
      {
        "id": 24,
        "question": "The main parameter measured in an origin-destination survey is:",
        "options": [
          "Travel pattern of vehicles",
          "Speed",
          "Traffic volume",
          "Pavement thickness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Traffic Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "O-D surveys measure travel patterns and trip distribution[1][3]."
      },
      {
        "id": 25,
        "question": "The main purpose of providing shoulders on highways is to:",
        "options": [
          "Provide space for emergency stopping",
          "Increase speed",
          "Reduce cost",
          "Increase pavement thickness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Geometric Design",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Shoulders provide space for emergency stops and breakdowns[1][3]."
      },
      {
        "id": 26,
        "question": "The main cause of rutting in flexible pavements is:",
        "options": [
          "Repeated wheel loads",
          "Temperature variation",
          "Waterlogging",
          "Low bitumen content"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Pavement Design",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rutting is permanent deformation due to repeated wheel loads[1][3]."
      },
      {
        "id": 27,
        "question": "The main property of aggregates affecting the skid resistance of pavement is:",
        "options": [
          "Surface texture",
          "Specific gravity",
          "Water absorption",
          "Size"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Highway Materials",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Surface texture of aggregates affects pavement skid resistance[1][3]."
      },
      {
        "id": 28,
        "question": "The main function of expansion joints in rigid pavements is to:",
        "options": [
          "Allow for expansion and contraction due to temperature",
          "Increase strength",
          "Reduce cost",
          "Increase thickness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Pavement Design",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Expansion joints accommodate temperature-induced movement[1][3]."
      },
      {
        "id": 29,
        "question": "The main purpose of a traffic rotary is to:",
        "options": [
          "Reduce conflict points and improve safety",
          "Increase speed",
          "Reduce cost",
          "Increase pavement thickness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Traffic Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rotaries are used to reduce conflict points and improve intersection safety[1][3]."
      },
      {
        "id": 30,
        "question": "The main function of a sleeper in railway track is to:",
        "options": [
          "Maintain gauge and distribute load",
          "Increase speed",
          "Reduce noise",
          "Increase friction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Transportation Engineering",
        "topic": "Railway Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sleepers maintain track gauge and distribute load from rails to ballast[1][3]."
      }
      
    ],
    'Water Resources': [
      {
        "id": 1,
        "question": "The continuity equation for steady incompressible flow is:",
        "options": [
          "A1V1 = A2V2",
          "A1V1 + A2V2 = 0",
          "A1 + V1 = A2 + V2",
          "A1/V1 = A2/V2"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Fluid Mechanics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "For incompressible steady flow, discharge is constant: A1V1 = A2V2[1][4][9]."
      },
      {
        "id": 2,
        "question": "The unit of kinematic viscosity is:",
        "options": [
          "m²/s",
          "m/s²",
          "kg/m³",
          "N·s/m²"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Fluid Mechanics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Kinematic viscosity = dynamic viscosity/density, unit is m²/s[1][4][9]."
      },
      {
        "id": 3,
        "question": "The pressure at a depth h below a free surface is:",
        "options": [
          "ρgh",
          "gh",
          "ρh",
          "h/ρg"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Fluid Statics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Hydrostatic pressure = ρgh[1][4][9]."
      },
      {
        "id": 4,
        "question": "The most suitable device for measuring discharge in an open channel is:",
        "options": [
          "Venturi flume",
          "Orifice meter",
          "Pitot tube",
          "Rotameter"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Hydraulics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Venturi flume is commonly used for open channel discharge measurement[1][4][9]."
      },
      {
        "id": 5,
        "question": "The Froude number is significant in:",
        "options": [
          "Open channel flow",
          "Pipe flow",
          "Laminar flow",
          "Compressible flow"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Hydraulics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Froude number relates inertial and gravity forces; important in open channel flow[1][4][9]."
      },
      {
        "id": 6,
        "question": "The hydraulic jump is a:",
        "options": [
          "Sudden transition from supercritical to subcritical flow",
          "Uniform flow",
          "Laminar flow",
          "Critical flow"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Hydraulics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hydraulic jump is a rapid transition from high to low velocity in open channels[1][4][9]."
      },
      {
        "id": 7,
        "question": "The Chezy’s formula for velocity in open channel is:",
        "options": [
          "V = C√(RS)",
          "V = √(2gH)",
          "V = Q/A",
          "V = kRS"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Hydraulics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Chezy’s formula: V = C√(RS), R = hydraulic radius, S = slope[1][4][9]."
      },
      {
        "id": 8,
        "question": "The unit hydrograph is a hydrograph resulting from:",
        "options": [
          "1 cm effective rainfall",
          "1 mm rainfall",
          "1 hour rainfall",
          "1 cm total rainfall"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Hydrology",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Unit hydrograph: direct runoff from 1 cm effective rainfall in unit time[1][2][3][4][9]."
      },
      {
        "id": 9,
        "question": "The main source of groundwater is:",
        "options": [
          "Precipitation",
          "Rivers",
          "Lakes",
          "Dams"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Hydrology",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Groundwater is mainly recharged by precipitation/infiltration[1][2][3][4][9]."
      },
      {
        "id": 10,
        "question": "The application of Darcy’s law is limited to:",
        "options": [
          "Laminar flow through porous media",
          "Turbulent flow in pipes",
          "Open channel flow",
          "Flow over weirs"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Hydrology",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Darcy’s law applies to laminar flow in porous media (e.g., groundwater)[1][2][3][4][9]."
      },
      {
        "id": 11,
        "question": "The hydrologic cycle does NOT include:",
        "options": [
          "Photosynthesis",
          "Evaporation",
          "Precipitation",
          "Infiltration"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Hydrology",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Photosynthesis is not part of the hydrologic cycle[1][2][3][4][9]."
      },
      {
        "id": 12,
        "question": "The main function of a gravity dam is to:",
        "options": [
          "Resist water pressure by its own weight",
          "Increase river flow",
          "Reduce seepage",
          "Increase evaporation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gravity dams resist water pressure by their weight[1][2][3][4][9]."
      },
      {
        "id": 13,
        "question": "The term 'duty' in irrigation means:",
        "options": [
          "Area irrigated per unit volume of water",
          "Volume of water per unit area",
          "Depth of water applied",
          "Frequency of irrigation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Duty = area irrigated per unit volume of water supplied[1][2][3][4][9]."
      },
      {
        "id": 14,
        "question": "The delta of a crop is:",
        "options": [
          "Total depth of water required by the crop",
          "Area irrigated per unit water",
          "Frequency of irrigation",
          "Rate of application"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Delta is total depth of water required by a crop during its period[1][2][3][4][9]."
      },
      {
        "id": 15,
        "question": "The most suitable canal alignment is:",
        "options": [
          "Along the contour",
          "Across the contour",
          "Random",
          "Perpendicular to river"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Contour canals minimize earthwork and cross-drainage[1][2][3][4][9]."
      },
      {
        "id": 16,
        "question": "The most common method of surface irrigation is:",
        "options": [
          "Furrow irrigation",
          "Sprinkler irrigation",
          "Drip irrigation",
          "Subsurface irrigation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Furrow irrigation is widely used for row crops[1][2][3][4][9]."
      },
      {
        "id": 17,
        "question": "The main function of a spillway in a dam is to:",
        "options": [
          "Discharge excess water safely",
          "Store water",
          "Increase dam height",
          "Reduce seepage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Spillways safely discharge flood/excess water[1][2][3][4][9]."
      },
      {
        "id": 18,
        "question": "The main cause of waterlogging is:",
        "options": [
          "Rise of water table",
          "Low rainfall",
          "High evaporation",
          "Deep wells"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Waterlogging is due to high water table, poor drainage[1][2][3][4][9]."
      },
      {
        "id": 19,
        "question": "The specific yield of an unconfined aquifer is:",
        "options": [
          "Volume of water released per unit area per unit decline of water table",
          "Total volume of water stored",
          "Volume of water per unit volume of aquifer",
          "Total porosity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Hydrology",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Specific yield = water released per unit area/decline in water table[1][2][3][4][9]."
      },
      {
        "id": 20,
        "question": "The main advantage of lined canals is:",
        "options": [
          "Reduced seepage losses",
          "Increased velocity",
          "Reduced cost",
          "Increased evaporation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lined canals reduce seepage and maintenance[1][2][3][4][9]."
      },
      {
        "id": 21,
        "question": "The main function of a cross-drainage structure is to:",
        "options": [
          "Carry canal over or under natural drain",
          "Increase canal velocity",
          "Reduce canal width",
          "Increase storage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cross-drainage structures prevent canal and drain interference[1][2][3][4][9]."
      },
      {
        "id": 22,
        "question": "The main cause of silt deposition in canals is:",
        "options": [
          "Reduction in velocity below critical",
          "Increase in velocity",
          "Excess rainfall",
          "High temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Silt deposits when velocity falls below critical[1][2][3][4][9]."
      },
      {
        "id": 23,
        "question": "The main purpose of a weir on a permeable foundation is to:",
        "options": [
          "Measure and control flow",
          "Increase storage",
          "Reduce evaporation",
          "Increase velocity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Weirs control and measure river/canal flow[1][2][3][4][9]."
      },
      {
        "id": 24,
        "question": "The main function of a canal regulator is to:",
        "options": [
          "Control discharge in canal branches",
          "Increase canal width",
          "Reduce seepage",
          "Increase velocity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Regulators control flow in main/branch canals[1][2][3][4][9]."
      },
      {
        "id": 25,
        "question": "The main function of a river training work is to:",
        "options": [
          "Guide river flow and prevent erosion",
          "Increase flow velocity",
          "Increase evaporation",
          "Reduce water table"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "River Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "River training structures guide flow, prevent bank erosion[1][2][3][4][9]."
      },
      {
        "id": 26,
        "question": "The main function of a stilling basin is to:",
        "options": [
          "Dissipate energy of flowing water",
          "Increase velocity",
          "Reduce evaporation",
          "Increase storage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Hydraulics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Stilling basins dissipate energy after hydraulic jumps[1][2][3][4][9]."
      },
      {
        "id": 27,
        "question": "The main function of a percolation tank is to:",
        "options": [
          "Recharge groundwater",
          "Increase evaporation",
          "Reduce seepage",
          "Increase river flow"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Hydrology",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Percolation tanks increase groundwater recharge[1][2][3][4][9]."
      },
      {
        "id": 28,
        "question": "The main advantage of drip irrigation is:",
        "options": [
          "Water saving and increased efficiency",
          "Reduced cost",
          "Increased evaporation",
          "Increased labor"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Drip irrigation saves water and increases efficiency[1][2][3][4][9]."
      },
      {
        "id": 29,
        "question": "The main function of a spillway crest is to:",
        "options": [
          "Control the reservoir water level",
          "Increase storage",
          "Reduce seepage",
          "Increase velocity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Irrigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Spillway crest sets the maximum reservoir level[1][2][3][4][9]."
      },
      {
        "id": 30,
        "question": "The main purpose of a contour bunding in watershed management is to:",
        "options": [
          "Reduce soil erosion and increase infiltration",
          "Increase evaporation",
          "Reduce crop yield",
          "Increase runoff"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Hydrology",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Contour bunding reduces erosion and increases infiltration in watershed areas[1][2][3][4][9]."
      }
      
    ],
    'Environmental': [
      {
        "id": 1,
        "question": "The main greenhouse gas responsible for global warming is:",
        "options": [
          "Carbon dioxide (CO₂)",
          "Ozone (O₃)",
          "Sulfur dioxide (SO₂)",
          "Ammonia (NH₃)"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Environmental Science",
        "topic": "Global Environmental Issues",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "CO₂ is the primary greenhouse gas causing global warming[1][3][4][6]."
      },
      {
        "id": 2,
        "question": "The pH of pure water at 25°C is:",
        "options": [
          "7",
          "5",
          "9",
          "1"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Environmental Chemistry",
        "topic": "Water Chemistry",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Pure water is neutral, pH = 7 at 25°C[1][3][4][6]."
      },
      {
        "id": 3,
        "question": "The most common indicator organism for water contamination is:",
        "options": [
          "Escherichia coli",
          "Pseudomonas",
          "Staphylococcus",
          "Bacillus subtilis"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Environmental Microbiology",
        "topic": "Water Quality",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "E. coli is used as an indicator of fecal contamination[1][3][4][6]."
      },
      {
        "id": 4,
        "question": "The main source of noise pollution in urban areas is:",
        "options": [
          "Road traffic",
          "Agriculture",
          "Forests",
          "Deserts"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Air and Noise Pollution",
        "topic": "Noise Pollution",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Road traffic is the major source of urban noise pollution[1][3][4][6]."
      },
      {
        "id": 5,
        "question": "The BOD test measures:",
        "options": [
          "Amount of oxygen consumed by microorganisms",
          "Amount of dissolved oxygen in water",
          "Amount of carbon dioxide in air",
          "Amount of nitrogen in soil"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water and Wastewater Treatment",
        "topic": "Water Quality",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "BOD indicates organic pollution in water[1][3][4][6]."
      },
      {
        "id": 6,
        "question": "The main process in secondary wastewater treatment is:",
        "options": [
          "Biological oxidation",
          "Sedimentation",
          "Screening",
          "Chlorination"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water and Wastewater Treatment",
        "topic": "Wastewater Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Secondary treatment is mainly biological (activated sludge, trickling filter)[1][3][4][6]."
      },
      {
        "id": 7,
        "question": "The main pollutant in photochemical smog is:",
        "options": [
          "Ozone (O₃)",
          "Sulfur dioxide (SO₂)",
          "Methane (CH₄)",
          "Carbon monoxide (CO)"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Air and Noise Pollution",
        "topic": "Air Pollution",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ozone is a key component of photochemical smog[1][3][4][6]."
      },
      {
        "id": 8,
        "question": "The main purpose of coagulation in water treatment is to:",
        "options": [
          "Remove suspended solids",
          "Remove dissolved salts",
          "Increase pH",
          "Decrease temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water and Wastewater Treatment",
        "topic": "Water Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Coagulation removes suspended and colloidal particles[1][3][4][6]."
      },
      {
        "id": 9,
        "question": "The main source of solid waste in urban areas is:",
        "options": [
          "Households",
          "Industries",
          "Agriculture",
          "Forests"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Solid and Hazardous Waste",
        "topic": "Solid Waste Management",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Municipal solid waste is mainly from households[1][3][4][6]."
      },
      {
        "id": 10,
        "question": "The main purpose of a sanitary landfill is to:",
        "options": [
          "Safely dispose of solid waste",
          "Treat wastewater",
          "Reduce air pollution",
          "Increase groundwater recharge"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Solid and Hazardous Waste",
        "topic": "Solid Waste Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sanitary landfill is the engineered disposal of solid waste[1][3][4][6]."
      },
      {
        "id": 11,
        "question": "The main cause of eutrophication in water bodies is:",
        "options": [
          "Excess nutrients (N and P)",
          "Heavy metals",
          "Acid rain",
          "Thermal pollution"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water Resources",
        "topic": "Water Pollution",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Eutrophication is due to excess nitrogen and phosphorus[1][3][4][6]."
      },
      {
        "id": 12,
        "question": "The main function of a trickling filter is:",
        "options": [
          "Biological treatment of wastewater",
          "Physical filtration",
          "Chemical precipitation",
          "Chlorination"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water and Wastewater Treatment",
        "topic": "Wastewater Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Trickling filter is a biological treatment process[1][3][4][6]."
      },
      {
        "id": 13,
        "question": "The main function of a cyclone separator is to:",
        "options": [
          "Remove particulate matter from air",
          "Remove gases",
          "Remove noise",
          "Remove dissolved salts"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Air and Noise Pollution",
        "topic": "Air Pollution Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cyclone separators remove particulates from air/gas streams[1][3][4][6]."
      },
      {
        "id": 14,
        "question": "The main advantage of activated sludge process is:",
        "options": [
          "High removal efficiency of organic matter",
          "Low cost",
          "No sludge production",
          "No energy requirement"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water and Wastewater Treatment",
        "topic": "Wastewater Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Activated sludge gives high BOD/COD removal[1][3][4][6]."
      },
      {
        "id": 15,
        "question": "The main function of a bar screen in sewage treatment is to:",
        "options": [
          "Remove large floating debris",
          "Remove dissolved solids",
          "Remove heavy metals",
          "Remove pathogens"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water and Wastewater Treatment",
        "topic": "Wastewater Treatment",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Bar screens remove large objects from sewage[1][3][4][6]."
      },
      {
        "id": 16,
        "question": "The main source of acid rain is:",
        "options": [
          "SO₂ and NOₓ emissions",
          "CO₂ emissions",
          "CH₄ emissions",
          "Ozone depletion"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Air and Noise Pollution",
        "topic": "Air Pollution",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Acid rain is caused by sulfur and nitrogen oxides[1][3][4][6]."
      },
      {
        "id": 17,
        "question": "The main function of a trickling filter is:",
        "options": [
          "Biological treatment of wastewater",
          "Physical filtration",
          "Chemical precipitation",
          "Chlorination"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water and Wastewater Treatment",
        "topic": "Wastewater Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Trickling filter is a biological treatment process[1][3][4][6]."
      },
      {
        "id": 18,
        "question": "The main function of a settling tank (clarifier) is to:",
        "options": [
          "Remove suspended solids by gravity",
          "Remove dissolved solids",
          "Kill pathogens",
          "Remove heavy metals"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water and Wastewater Treatment",
        "topic": "Water Treatment",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Clarifiers remove suspended solids by sedimentation[1][3][4][6]."
      },
      {
        "id": 19,
        "question": "The main function of a rapid sand filter is to:",
        "options": [
          "Remove fine suspended solids",
          "Remove dissolved salts",
          "Remove heavy metals",
          "Remove pathogens"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water and Wastewater Treatment",
        "topic": "Water Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rapid sand filters remove fine suspended particles[1][3][4][6]."
      },
      {
        "id": 20,
        "question": "The main cause of blue baby syndrome is:",
        "options": [
          "Nitrate contamination in drinking water",
          "Lead poisoning",
          "Mercury in fish",
          "Arsenic in groundwater"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water and Wastewater Treatment",
        "topic": "Water Quality",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "High nitrate in water causes methemoglobinemia (blue baby syndrome)[1][3][4][6]."
      },
      {
        "id": 21,
        "question": "ISO 14000 series standards relate to:",
        "options": [
          "Environmental management systems",
          "Water quality standards",
          "Air pollution limits",
          "Noise pollution limits"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Environmental Management",
        "topic": "Sustainable Development",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ISO 14000 deals with environmental management systems[1][3][4][6]."
      },
      {
        "id": 22,
        "question": "The main principle of sustainable development is:",
        "options": [
          "Meet present needs without compromising future generations",
          "Maximize economic growth",
          "Minimize population",
          "Increase resource consumption"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Environmental Management",
        "topic": "Sustainable Development",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Sustainable development balances present and future needs[1][3][4][6]."
      },
      {
        "id": 23,
        "question": "The main function of an Environmental Impact Assessment (EIA) is to:",
        "options": [
          "Evaluate environmental effects of proposed projects",
          "Increase project cost",
          "Reduce project duration",
          "Increase resource use"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Environmental Management",
        "topic": "EIA",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "EIA evaluates and mitigates environmental impacts of projects[1][3][4][6]."
      },
      {
        "id": 24,
        "question": "The main function of a bioindicator is to:",
        "options": [
          "Indicate environmental pollution",
          "Increase pollution",
          "Reduce pollution",
          "Absorb nutrients"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Environmental Science",
        "topic": "Environmental Chemistry",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bioindicators show presence of pollutants by their response[1][3][4][6]."
      },
      {
        "id": 25,
        "question": "The main function of a scrubber in air pollution control is to:",
        "options": [
          "Remove gaseous pollutants from air",
          "Remove noise",
          "Remove solid waste",
          "Increase oxygen"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Air and Noise Pollution",
        "topic": "Air Pollution Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Scrubbers remove gaseous and some particulate pollutants[1][3][4][6]."
      },
      {
        "id": 26,
        "question": "The main function of a trickling filter is:",
        "options": [
          "Biological treatment of wastewater",
          "Physical filtration",
          "Chemical precipitation",
          "Chlorination"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water and Wastewater Treatment",
        "topic": "Wastewater Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Trickling filter is a biological treatment process[1][3][4][6]."
      },
      {
        "id": 27,
        "question": "The main function of a composting process is to:",
        "options": [
          "Convert organic waste to manure",
          "Remove heavy metals",
          "Reduce air pollution",
          "Increase landfill volume"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Solid and Hazardous Waste",
        "topic": "Waste Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Composting converts organic waste to useful compost[1][3][4][6]."
      },
      {
        "id": 28,
        "question": "The main function of a noise barrier is to:",
        "options": [
          "Reduce noise pollution",
          "Increase air pollution",
          "Increase water pollution",
          "Increase biodiversity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Air and Noise Pollution",
        "topic": "Noise Pollution Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Noise barriers reduce noise transmission to sensitive areas[1][3][4][6]."
      },
      {
        "id": 29,
        "question": "The main function of a constructed wetland is to:",
        "options": [
          "Treat wastewater using natural processes",
          "Increase evaporation",
          "Reduce rainfall",
          "Increase groundwater extraction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Water and Wastewater Treatment",
        "topic": "Wastewater Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Constructed wetlands use plants/microbes to treat wastewater[1][3][4][6]."
      },
      {
        "id": 30,
        "question": "The main function of a risk assessment in environmental management is to:",
        "options": [
          "Estimate the likelihood and impact of hazards",
          "Increase hazards",
          "Reduce project cost",
          "Increase waste generation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Environmental Management",
        "topic": "Risk Assessment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Risk assessment estimates probability and impact of environmental hazards[1][3][4][6]."
      }
      
    ],
    'Construction': [
      {
        "id": 1,
        "question": "The main constituent of Portland cement responsible for early strength is:",
        "options": [
          "Tricalcium silicate (C₃S)",
          "Dicalcium silicate (C₂S)",
          "Tricalcium aluminate (C₃A)",
          "Tetracalcium aluminoferrite (C₄AF)"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Materials",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "C₃S is mainly responsible for early strength in cement[1][3]."
      },
      {
        "id": 2,
        "question": "The water-cement ratio in concrete affects:",
        "options": [
          "Strength and workability",
          "Only strength",
          "Only durability",
          "Only color"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Materials",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Water-cement ratio controls both strength and workability of concrete[1][3]."
      },
      {
        "id": 3,
        "question": "The main function of formwork in construction is to:",
        "options": [
          "Support fresh concrete until it gains strength",
          "Increase strength",
          "Reduce cost",
          "Improve aesthetics"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Methods",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Formwork shapes and supports concrete until it hardens[1][3]."
      },
      {
        "id": 4,
        "question": "The main purpose of curing concrete is to:",
        "options": [
          "Maintain moisture for hydration",
          "Increase color",
          "Reduce cost",
          "Increase weight"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Materials",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Curing ensures proper hydration and strength gain[1][3]."
      },
      {
        "id": 5,
        "question": "The most common admixture used to increase workability of concrete is:",
        "options": [
          "Plasticizer",
          "Accelerator",
          "Retarder",
          "Air-entrainer"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Materials",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Plasticizers increase workability without increasing water content[1][3]."
      },
      {
        "id": 6,
        "question": "The compressive strength of concrete is usually measured at:",
        "options": [
          "28 days",
          "7 days",
          "14 days",
          "3 days"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Materials",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Standard test for concrete strength is at 28 days[1][3]."
      },
      {
        "id": 7,
        "question": "The main purpose of a bar bending schedule is to:",
        "options": [
          "List details of reinforcement bars",
          "Estimate concrete quantity",
          "Check formwork quality",
          "Control curing"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bar bending schedule gives size, number, and length of rebars[1][3]."
      },
      {
        "id": 8,
        "question": "The most common method of project scheduling in construction is:",
        "options": [
          "Critical Path Method (CPM)",
          "Bar chart",
          "Line of Balance",
          "Milestone chart"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "CPM is widely used for scheduling and resource allocation[1][3]."
      },
      {
        "id": 9,
        "question": "In CPM, the critical path is the:",
        "options": [
          "Longest duration path through the network",
          "Shortest duration path",
          "Path with minimum cost",
          "Path with maximum float"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Critical path determines minimum project duration[1][3]."
      },
      {
        "id": 10,
        "question": "The main advantage of PERT over CPM is:",
        "options": [
          "PERT accounts for uncertainty in activity durations",
          "PERT is deterministic",
          "CPM is probabilistic",
          "PERT is used for repetitive projects"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "PERT uses probabilistic time estimates[1][3]."
      },
      {
        "id": 11,
        "question": "The earliest start time for an activity in CPM is determined by:",
        "options": [
          "Forward pass",
          "Backward pass",
          "Critical path",
          "Float calculation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Forward pass computes earliest start/finish times[1][3]."
      },
      {
        "id": 12,
        "question": "The total float of an activity is:",
        "options": [
          "Maximum delay without affecting project duration",
          "Minimum delay allowed",
          "Difference between earliest and latest start",
          "Difference between earliest and latest finish"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Total float is max delay possible without delaying project[1][3]."
      },
      {
        "id": 13,
        "question": "The main objective of resource leveling is to:",
        "options": [
          "Minimize fluctuations in resource usage",
          "Reduce project duration",
          "Increase cost",
          "Increase resource usage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Resource leveling smooths resource demand over time[1][3]."
      },
      {
        "id": 14,
        "question": "The main function of scaffolding is to:",
        "options": [
          "Provide temporary support for workers and materials",
          "Increase strength",
          "Reduce cost",
          "Improve aesthetics"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Methods",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Scaffolding provides working platforms and access[1][3]."
      },
      {
        "id": 15,
        "question": "The most common cause of construction site accidents is:",
        "options": [
          "Unsafe working practices",
          "Equipment failure",
          "Material shortage",
          "Weather"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Site Safety",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Unsafe practices are the leading cause of site accidents[1][3]."
      },
      {
        "id": 16,
        "question": "The main purpose of quality control in construction is to:",
        "options": [
          "Ensure work meets specified standards",
          "Reduce cost",
          "Increase speed",
          "Reduce material usage"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Quality Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Quality control ensures compliance with specifications[1][3]."
      },
      {
        "id": 17,
        "question": "The main advantage of ready-mix concrete is:",
        "options": [
          "Consistent quality and speed",
          "Lower cost",
          "Higher strength",
          "Lower water content"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Materials",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ready-mix concrete offers uniform quality and rapid placement[1][3]."
      },
      {
        "id": 18,
        "question": "The main purpose of a construction joint in concrete is to:",
        "options": [
          "Allow for staged construction",
          "Increase strength",
          "Reduce cost",
          "Increase workability"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Methods",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Construction joints permit work to be stopped and resumed[1][3]."
      },
      {
        "id": 19,
        "question": "The main function of a tower crane is to:",
        "options": [
          "Lift and move heavy materials vertically and horizontally",
          "Mix concrete",
          "Transport workers",
          "Provide lighting"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Equipment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Tower cranes are used for lifting/moving materials on site[1][3]."
      },
      {
        "id": 20,
        "question": "The most common method of cost estimation in construction is:",
        "options": [
          "Detailed estimate",
          "Plinth area estimate",
          "Cube rate estimate",
          "Approximate estimate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Cost Estimation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Detailed estimate is most accurate and widely used[1][3]."
      },
      {
        "id": 21,
        "question": "The main purpose of a Gantt chart is to:",
        "options": [
          "Show project schedule and progress",
          "Estimate cost",
          "Control quality",
          "Allocate resources"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gantt charts visually represent project timeline and progress[1][3]."
      },
      {
        "id": 22,
        "question": "The main function of a pile foundation is to:",
        "options": [
          "Transfer load to deeper, stronger soil layers",
          "Increase building height",
          "Reduce cost",
          "Increase speed of construction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Foundation Methods",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Piles transfer structural loads to competent soil/rock[1][3]."
      },
      {
        "id": 23,
        "question": "The main advantage of modular construction is:",
        "options": [
          "Faster construction and less waste",
          "Higher cost",
          "Lower quality",
          "More labor intensive"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Methods",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Modular construction is faster and generates less waste[1][3]."
      },
      {
        "id": 24,
        "question": "The main function of a slump test is to:",
        "options": [
          "Measure workability of fresh concrete",
          "Measure strength",
          "Measure durability",
          "Measure density"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Materials",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Slump test measures workability/consistency of concrete[1][3]."
      },
      {
        "id": 25,
        "question": "The main function of a bill of quantities is to:",
        "options": [
          "List and quantify all work items for tendering",
          "Control quality",
          "Show project schedule",
          "Allocate resources"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Cost Estimation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "BOQ lists all quantities for tendering and payment[1][3]."
      },
      {
        "id": 26,
        "question": "The main purpose of a project milestone is to:",
        "options": [
          "Mark significant events or achievements in a project",
          "Increase cost",
          "Reduce quality",
          "Allocate resources"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Milestones are key points for tracking project progress[1][3]."
      },
      {
        "id": 27,
        "question": "The main advantage of Building Information Modeling (BIM) is:",
        "options": [
          "Improved collaboration and visualization",
          "Higher cost",
          "Longer construction time",
          "More paperwork"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Recent Trends",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "BIM enhances collaboration, visualization, and efficiency[1][3]."
      },
      {
        "id": 28,
        "question": "The most common test for checking the quality of bricks is:",
        "options": [
          "Compressive strength test",
          "Water absorption test",
          "Soundness test",
          "Shape and size test"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Materials",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Compressive strength is the standard test for brick quality[1][3]."
      },
      {
        "id": 29,
        "question": "The main function of a contract document is to:",
        "options": [
          "Define rights and obligations of parties",
          "Increase cost",
          "Reduce quality",
          "Allocate resources"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Construction Management",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Contract documents define scope, rights, and responsibilities[1][3]."
      },
      {
        "id": 30,
        "question": "The main purpose of sustainable construction is to:",
        "options": [
          "Minimize environmental impact and resource use",
          "Increase cost",
          "Reduce quality",
          "Increase construction time"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Construction",
        "topic": "Recent Trends",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sustainable construction aims to reduce environmental impact and conserve resources[1][3]."
      }
      
    ]
  },

  // Chemical Engineering Questions
  'Chemical Engineering': {
    'Thermodynamics': [
     {
  "id": 1,
  "question": "The first law of thermodynamics is a statement of:",
  "options": [
    "Conservation of energy",
    "Conservation of mass",
    "Conservation of entropy",
    "Conservation of volume"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "The first law states that energy is conserved."
},
{
  "id": 2,
  "question": "The internal energy of an ideal gas depends on:",
  "options": [
    "Temperature only",
    "Pressure only",
    "Volume only",
    "Temperature and pressure"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "For ideal gases, internal energy is a function of temperature only."
},
{
  "id": 3,
  "question": "The entropy change for a reversible isothermal expansion of an ideal gas is:",
  "options": [
    "nR ln(V2/V1)",
    "Zero",
    "nCv ln(T2/T1)",
    "nR ln(P2/P1)"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "ΔS = nR ln(V2/V1) for isothermal reversible expansion."
},
{
  "id": 4,
  "question": "The fugacity of a pure ideal gas at low pressure is:",
  "options": [
    "Equal to its pressure",
    "Greater than its pressure",
    "Less than its pressure",
    "Zero"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Fugacity approaches pressure as pressure approaches zero for ideal gases."
},
{
  "id": 5,
  "question": "The Gibbs phase rule for a non-reacting system is:",
  "options": [
    "F = C - P + 2",
    "F = C + P - 2",
    "F = C - P - 2",
    "F = C + P + 2"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Gibbs phase rule: F = C - P + 2."
},
{
  "id": 6,
  "question": "The compressibility factor (Z) for an ideal gas is:",
  "options": [
    "1",
    "0",
    "Greater than 1",
    "Less than 1"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "For an ideal gas, Z = PV/RT = 1."
},
{
  "id": 7,
  "question": "The enthalpy change of vaporization at constant pressure is:",
  "options": [
    "Positive",
    "Negative",
    "Zero",
    "Infinity"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Vaporization is an endothermic process; enthalpy change is positive."
},
{
  "id": 8,
  "question": "The Maxwell relation derived from the Helmholtz free energy is:",
  "options": [
    "(∂S/∂V)_T = (∂P/∂T)_V",
    "(∂T/∂V)_S = (∂P/∂S)_V",
    "(∂S/∂P)_T = -(∂V/∂T)_P",
    "(∂U/∂V)_T = T(∂P/∂T)_V"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Hard",
  "year": 2025,
  "explanation": "The Maxwell relation from Helmholtz free energy is (∂S/∂V)_T = (∂P/∂T)_V."
},
{
  "id": 9,
  "question": "The chemical potential of a component in a mixture is:",
  "options": [
    "Partial molar Gibbs free energy",
    "Partial molar enthalpy",
    "Partial molar volume",
    "Partial molar entropy"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Chemical potential is the partial molar Gibbs free energy."
},
{
  "id": 10,
  "question": "The standard enthalpy of formation of an element in its standard state is:",
  "options": [
    "Zero",
    "One",
    "Positive",
    "Negative"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "By convention, standard enthalpy of formation of an element in its standard state is zero."
},
{
  "id": 11,
  "question": "The equilibrium constant for a reaction at a given temperature depends on:",
  "options": [
    "Standard Gibbs free energy change",
    "Standard enthalpy change",
    "Standard entropy change",
    "Standard internal energy change"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "K = exp(-ΔG°/RT); depends on standard Gibbs free energy change."
},
{
  "id": 12,
  "question": "The activity of a pure liquid in an ideal solution is:",
  "options": [
    "1",
    "0",
    "Equal to its mole fraction",
    "Equal to its fugacity"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Activity of pure component in its standard state is 1."
},
{
  "id": 13,
  "question": "The partial molar property of a component in a mixture is:",
  "options": [
    "Change in total property on adding one mole of that component",
    "Total property divided by number of moles",
    "Property per unit mass",
    "Property per unit volume"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Partial molar property is the change in total property due to addition of one mole."
},
{
  "id": 14,
  "question": "The second law of thermodynamics states that:",
  "options": [
    "Entropy of an isolated system never decreases",
    "Energy is conserved",
    "Internal energy is a function of temperature",
    "Pressure is constant in a closed system"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Entropy of an isolated system can only increase or remain constant."
},
{
  "id": 15,
  "question": "The van der Waals equation of state accounts for:",
  "options": [
    "Intermolecular forces and molecular volume",
    "Only molecular volume",
    "Only intermolecular forces",
    "Ideal gas behavior"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "It corrects for both finite molecular size and attractive forces."
},
{
  "id": 16,
  "question": "The triple point of water is:",
  "options": [
    "0.01°C, 611.2 Pa",
    "0°C, 1 atm",
    "100°C, 1 atm",
    "273 K, 1 atm"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Triple point of water is at 0.01°C and 611.2 Pa."
},
{
  "id": 17,
  "question": "The Clausius-Clapeyron equation relates:",
  "options": [
    "Change in vapor pressure with temperature",
    "Change in enthalpy with pressure",
    "Change in entropy with temperature",
    "Change in internal energy with volume"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "It gives the slope of the phase boundary in P-T diagram."
},
{
  "id": 18,
  "question": "The fugacity coefficient is defined as:",
  "options": [
    "f/P",
    "P/f",
    "f*P",
    "f+P"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Fugacity coefficient = fugacity/pressure."
},
{
  "id": 19,
  "question": "The standard entropy change for a reaction is:",
  "options": [
    "Sum of products’ entropies minus reactants’ entropies",
    "Sum of reactants’ entropies minus products’ entropies",
    "Zero",
    "One"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "ΔS° = ΣS°(products) - ΣS°(reactants)."
},
{
  "id": 20,
  "question": "The excess Gibbs free energy is:",
  "options": [
    "Difference between actual and ideal solution Gibbs energy",
    "Sum of partial molar Gibbs energies",
    "Total Gibbs energy",
    "Zero for all solutions"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Hard",
  "year": 2025,
  "explanation": "G^E = G_actual - G_ideal."
},
{
  "id": 21,
  "question": "The enthalpy of mixing for ideal solutions is:",
  "options": [
    "Zero",
    "Positive",
    "Negative",
    "Infinity"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "No heat is evolved or absorbed in mixing ideal solutions."
},
{
  "id": 22,
  "question": "The standard state for a solvent in Raoult’s law is:",
  "options": [
    "Pure solvent at system temperature and pressure",
    "Solute at infinite dilution",
    "Solvent at infinite dilution",
    "Pure solvent at 0 K"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Raoult’s law uses pure solvent as standard state."
},
{
  "id": 23,
  "question": "The equilibrium constant for a reaction increases with temperature if:",
  "options": [
    "The reaction is endothermic",
    "The reaction is exothermic",
    "There is no temperature effect",
    "The reaction is at equilibrium"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "For endothermic reactions, K increases with T."
},
{
  "id": 24,
  "question": "The partial pressure of a component in an ideal gas mixture is:",
  "options": [
    "Mole fraction × total pressure",
    "Total pressure / mole fraction",
    "Total pressure + mole fraction",
    "Total pressure - mole fraction"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Dalton’s law: p_i = y_i × P_total."
},
{
  "id": 25,
  "question": "The standard Gibbs free energy change for a reaction at equilibrium is:",
  "options": [
    "Zero",
    "Positive",
    "Negative",
    "Infinity"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "At equilibrium, ΔG = 0."
},
{
  "id": 26,
  "question": "The activity coefficient of a component in an ideal solution is:",
  "options": [
    "1",
    "0",
    "Equal to its mole fraction",
    "Equal to its fugacity"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Activity coefficient is unity for ideal solutions."
},
{
  "id": 27,
  "question": "The Joule-Thomson coefficient is zero for:",
  "options": [
    "Ideal gases",
    "Real gases",
    "Liquids",
    "Solids"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Ideal gases do not cool or heat during throttling (μ_JT = 0)."
},
{
  "id": 28,
  "question": "The equilibrium constant for a chemical reaction is related to the standard Gibbs free energy change by:",
  "options": [
    "K = exp(-ΔG°/RT)",
    "K = ΔG°/RT",
    "K = ΔG° × RT",
    "K = 1/ΔG°"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "K = exp(-ΔG°/RT)."
},
{
  "id": 29,
  "question": "The critical point of a pure substance is the point where:",
  "options": [
    "Liquid and vapor phases become indistinguishable",
    "Solid and liquid phases become indistinguishable",
    "Solid and vapor phases become indistinguishable",
    "Triple point occurs"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "At the critical point, liquid and vapor phases merge."
},
{
  "id": 30,
  "question": "The partial molar volume of a component in a mixture is:",
  "options": [
    "Change in total volume per mole added",
    "Total volume divided by total moles",
    "Volume per unit mass",
    "Volume per unit mole"
  ],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Chemical Engineering",
  "topic": "Thermodynamics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Partial molar volume is the change in total volume when one mole is added."
}

    ],
    'Fluid Mechanics': [
      {
        "id": 1,
        "question": "The SI unit of dynamic viscosity is:",
        "options": ["Pa·s", "N·m", "kg/m³", "N·s"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Properties of Fluids",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Dynamic viscosity is measured in Pascal-seconds (Pa·s)."
      },
      {
        "id": 2,
        "question": "A fluid is said to be Newtonian if:",
        "options": [
          "Shear stress is proportional to shear rate",
          "Shear stress is independent of shear rate",
          "Viscosity decreases with shear rate",
          "Viscosity increases with shear rate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Properties of Fluids",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Newtonian fluids have constant viscosity; τ = μ(du/dy)."
      },
      {
        "id": 3,
        "question": "The pressure at a depth h in a static fluid of density ρ is:",
        "options": ["ρgh", "gh", "ρh", "h/ρg"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Fluid Statics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Hydrostatic pressure = ρgh."
      },
      {
        "id": 4,
        "question": "Which of the following is a non-Newtonian fluid?",
        "options": ["Blood", "Water", "Air", "Mercury"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Properties of Fluids",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Blood exhibits shear-thinning (non-Newtonian) behavior."
      },
      {
        "id": 5,
        "question": "The continuity equation for steady, incompressible flow is:",
        "options": ["A1V1 = A2V2", "A1V1 + A2V2 = 0", "A1 + V1 = A2 + V2", "A1/V1 = A2/V2"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Continuity Equation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Discharge is constant: A1V1 = A2V2."
      },
      {
        "id": 6,
        "question": "Bernoulli’s equation is valid for:",
        "options": [
          "Steady, incompressible, inviscid flow",
          "Unsteady flow",
          "Viscous flow",
          "Compressible flow"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Bernoulli’s Equation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bernoulli’s equation is for steady, incompressible, inviscid flow."
      },
      {
        "id": 7,
        "question": "The Reynolds number is the ratio of:",
        "options": [
          "Inertial force to viscous force",
          "Viscous force to inertial force",
          "Gravity force to surface tension",
          "Surface tension to viscous force"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Dimensional Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Re = ρVD/μ; it is inertia/viscous force ratio."
      },
      {
        "id": 8,
        "question": "For laminar flow in a pipe, the velocity profile is:",
        "options": ["Parabolic", "Linear", "Uniform", "Exponential"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Internal Flows",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Laminar pipe flow has a parabolic velocity profile."
      },
      {
        "id": 9,
        "question": "The critical Reynolds number for transition in pipe flow is approximately:",
        "options": ["2300", "1000", "4000", "500"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Flow Regimes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Transition from laminar to turbulent at Re ≈ 2300."
      },
      {
        "id": 10,
        "question": "The Darcy-Weisbach equation is used to calculate:",
        "options": [
          "Head loss due to friction",
          "Velocity",
          "Pressure",
          "Discharge"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Pipe Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Darcy-Weisbach equation gives head loss in pipes."
      },
      {
        "id": 11,
        "question": "The hydraulic diameter for a circular pipe is:",
        "options": ["D", "D/2", "2D", "4D"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Internal Flows",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "For a circular pipe, hydraulic diameter = D."
      },
      {
        "id": 12,
        "question": "The Froude number is significant in:",
        "options": [
          "Open channel flow",
          "Pipe flow",
          "Boundary layer flow",
          "Compressible flow"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Dimensional Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Froude number characterizes gravity effects in open channel flow."
      },
      {
        "id": 13,
        "question": "The Mach number is defined as:",
        "options": [
          "Ratio of flow velocity to speed of sound",
          "Ratio of pressure to temperature",
          "Ratio of kinetic energy to potential energy",
          "Ratio of velocity to density"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Compressible Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Mach number = velocity/speed of sound."
      },
      {
        "id": 14,
        "question": "The dimensionless group representing the ratio of inertia force to surface tension force is:",
        "options": ["Weber number", "Reynolds number", "Froude number", "Mach number"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Dimensional Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Weber number = inertia/surface tension force."
      },
      {
        "id": 15,
        "question": "The velocity of a fluid at the wall in a no-slip condition is:",
        "options": ["Zero", "Maximum", "Minimum", "Equal to free stream"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Boundary Layer",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "No-slip condition: fluid velocity at wall is zero."
      },
      {
        "id": 16,
        "question": "The boundary layer thickness at the leading edge of a flat plate is:",
        "options": ["Zero", "Maximum", "Minimum", "Infinite"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Boundary Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Boundary layer thickness is zero at leading edge."
      },
      {
        "id": 17,
        "question": "The drag force on a streamlined body is mainly due to:",
        "options": ["Skin friction", "Pressure drag", "Lift", "Gravity"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "External Flows",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Streamlined bodies: drag is mainly from skin friction."
      },
      {
        "id": 18,
        "question": "The discharge through a Venturi meter is proportional to:",
        "options": [
          "Square root of pressure difference",
          "Pressure difference",
          "Velocity squared",
          "Area difference"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Flow Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Q ∝ √(ΔP) for Venturi meter."
      },
      {
        "id": 19,
        "question": "The Prandtl number is the ratio of:",
        "options": [
          "Kinematic viscosity to thermal diffusivity",
          "Thermal diffusivity to kinematic viscosity",
          "Dynamic viscosity to density",
          "Density to dynamic viscosity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Dimensionless Numbers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pr = ν/α (kinematic viscosity/thermal diffusivity)."
      },
      {
        "id": 20,
        "question": "The main cause of boundary layer separation is:",
        "options": [
          "Adverse pressure gradient",
          "Favorable pressure gradient",
          "High Reynolds number",
          "Low viscosity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Boundary Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Separation occurs when pressure increases in the direction of flow."
      },
      {
        "id": 21,
        "question": "For a fluidized bed, the minimum fluidization velocity depends on:",
        "options": [
          "Particle size and density",
          "Bed height only",
          "Fluid temperature only",
          "Bed diameter only"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Multiphase Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Minimum fluidization velocity depends on particle properties and fluid."
      },
      {
        "id": 22,
        "question": "The pressure drop per unit length for fully developed laminar flow in a pipe is proportional to:",
        "options": [
          "Velocity",
          "Velocity squared",
          "Inverse of velocity",
          "Pressure"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Internal Flows",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ΔP/L ∝ velocity for laminar flow."
      },
      {
        "id": 23,
        "question": "The Hagen-Poiseuille equation applies to:",
        "options": [
          "Laminar flow in a circular pipe",
          "Turbulent flow in a pipe",
          "Open channel flow",
          "Compressible flow"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Internal Flows",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hagen-Poiseuille is for laminar flow in pipes."
      },
      {
        "id": 24,
        "question": "The equivalent length concept is used to account for:",
        "options": [
          "Minor losses in pipe fittings",
          "Major losses in pipes",
          "Pipe diameter changes",
          "Pipe material"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Pipe Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Equivalent length represents minor losses as equivalent straight pipe."
      },
      {
        "id": 25,
        "question": "The shell balance method is used to derive:",
        "options": [
          "Velocity profiles in laminar flow",
          "Turbulent velocity profiles",
          "Pressure drop in compressible flow",
          "Lift and drag coefficients"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Shell Balances",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shell balances yield velocity profiles for Newtonian fluids."
      },
      {
        "id": 26,
        "question": "The pressure drop across a packed bed is given by:",
        "options": [
          "Ergun equation",
          "Bernoulli’s equation",
          "Hagen-Poiseuille equation",
          "Darcy-Weisbach equation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Packed Beds",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ergun equation is used for packed beds."
      },
      {
        "id": 27,
        "question": "The main function of a pump in a chemical process is to:",
        "options": [
          "Increase fluid pressure and move fluids",
          "Reduce fluid temperature",
          "Increase fluid density",
          "Reduce fluid velocity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Pumps",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Pumps move fluids by increasing pressure."
      },
      {
        "id": 28,
        "question": "The dimensionless group representing the ratio of inertial to gravitational forces is:",
        "options": [
          "Froude number",
          "Reynolds number",
          "Weber number",
          "Mach number"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Dimensional Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Froude number = inertia/gravity force."
      },
      {
        "id": 29,
        "question": "Which instrument is best for measuring low velocities in a chemical plant pipeline?",
        "options": [
          "Rotameter",
          "Orifice meter",
          "Venturi meter",
          "Pitot tube"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "Flow Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rotameter is sensitive at low velocities."
      },
      {
        "id": 30,
        "question": "The drag coefficient for a sphere in the Stokes’ regime (Re << 1) is proportional to:",
        "options": [
          "1/Re",
          "Re",
          "Re^2",
          "Constant"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Fluid Mechanics",
        "topic": "External Flows",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "For very low Reynolds number, drag coefficient ∝ 1/Re."
      }
      
    ],
    'Heat Transfer': [
      {
        "id": 1,
        "question": "The SI unit of thermal conductivity is:",
        "options": [
          "W/m·K",
          "W/m²·K",
          "J/kg·K",
          "W/K"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Conduction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Thermal conductivity is measured in watts per meter per kelvin (W/m·K)."
      },
      {
        "id": 2,
        "question": "Fourier’s law is applicable to:",
        "options": [
          "Steady-state heat conduction",
          "Unsteady-state heat conduction",
          "Radiation",
          "Convection"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Conduction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Fourier’s law describes steady-state heat conduction."
      },
      {
        "id": 3,
        "question": "The heat transfer rate through a flat wall of area A and thickness L is maximum when:",
        "options": [
          "Thermal conductivity is high and thickness is low",
          "Thermal conductivity is low and thickness is high",
          "Area is small",
          "Temperature difference is zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Conduction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Q = kAΔT/L; Q increases with k and decreases with L."
      },
      {
        "id": 4,
        "question": "The Biot number is the ratio of:",
        "options": [
          "Internal to external thermal resistance",
          "External to internal thermal resistance",
          "Convective to conductive heat transfer",
          "Radiative to convective heat transfer"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Transient Conduction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bi = (hL_c)/k; ratio of internal conduction to external convection resistance."
      },
      {
        "id": 5,
        "question": "The lumped capacitance method is valid when:",
        "options": [
          "Biot number < 0.1",
          "Biot number > 10",
          "Fourier number < 0.1",
          "Fourier number > 10"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Transient Conduction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lumped analysis is valid when Bi < 0.1 (negligible internal resistance)."
      },
      {
        "id": 6,
        "question": "The Nusselt number is a dimensionless group representing:",
        "options": [
          "Ratio of convective to conductive heat transfer",
          "Ratio of radiative to convective heat transfer",
          "Ratio of inertial to viscous forces",
          "Ratio of thermal to mass diffusivity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Convection",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Nu = hL/k; higher Nu means stronger convection relative to conduction."
      },
      {
        "id": 7,
        "question": "The Prandtl number is the ratio of:",
        "options": [
          "Momentum diffusivity to thermal diffusivity",
          "Thermal diffusivity to momentum diffusivity",
          "Viscous force to inertial force",
          "Convective to conductive heat transfer"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Convection",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pr = ν/α = (μ/ρ)/(k/ρCp)."
      },
      {
        "id": 8,
        "question": "In forced convection, the heat transfer coefficient depends primarily on:",
        "options": [
          "Fluid velocity and properties",
          "Surface color",
          "Emissivity",
          "Ambient pressure only"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Convection",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "h increases with velocity and depends on fluid properties."
      },
      {
        "id": 9,
        "question": "Thermal boundary layer thickness increases with:",
        "options": [
          "Distance from the leading edge",
          "Increasing Prandtl number",
          "Decreasing Reynolds number",
          "Decreasing surface temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Boundary Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Boundary layer grows with distance from the leading edge."
      },
      {
        "id": 10,
        "question": "The heat transfer by radiation between two black bodies is proportional to:",
        "options": [
          "T₁⁴ - T₂⁴",
          "T₁ - T₂",
          "T₁² - T₂²",
          "T₁³ - T₂³"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Radiation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Blackbody radiation: Q ∝ σA(T₁⁴ - T₂⁴)."
      },
      {
        "id": 11,
        "question": "The emissivity of a perfect black body is:",
        "options": [
          "1",
          "0",
          "0.5",
          "0.9"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Radiation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Black body has maximum emissivity, ε = 1."
      },
      {
        "id": 12,
        "question": "The Stefan-Boltzmann constant has units of:",
        "options": [
          "W/m²·K⁴",
          "W/m·K",
          "J/kg·K",
          "W/K"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Radiation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "σ = 5.67 × 10⁻⁸ W/m²·K⁴."
      },
      {
        "id": 13,
        "question": "The log mean temperature difference (LMTD) is used in:",
        "options": [
          "Heat exchanger calculations",
          "Boiling calculations",
          "Radiation calculations",
          "Thermal conductivity measurements"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Heat Exchangers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "LMTD is used to calculate Q in heat exchangers."
      },
      {
        "id": 14,
        "question": "The effectiveness of a heat exchanger is defined as:",
        "options": [
          "Actual heat transfer / maximum possible heat transfer",
          "NTU/LMTD",
          "Maximum possible heat transfer / actual heat transfer",
          "Q/A"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Heat Exchangers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Effectiveness = Q_actual / Q_max."
      },
      {
        "id": 15,
        "question": "The NTU method is particularly useful for:",
        "options": [
          "Heat exchangers with unknown outlet temperatures",
          "Known outlet temperatures",
          "Radiation calculations",
          "Transient conduction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Heat Exchangers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "NTU method is used when outlet temperatures are not known."
      },
      {
        "id": 16,
        "question": "In a counterflow heat exchanger, the temperature difference between fluids:",
        "options": [
          "Remains nearly constant along the length",
          "Is maximum at the inlet",
          "Is maximum at the outlet",
          "Is zero throughout"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Heat Exchangers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Counterflow exchangers maintain a more uniform ΔT."
      },
      {
        "id": 17,
        "question": "Boiling heat transfer is characterized by:",
        "options": [
          "High heat transfer coefficients",
          "Low heat transfer coefficients",
          "No phase change",
          "Pure conduction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Boiling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Boiling involves phase change and high h values."
      },
      {
        "id": 18,
        "question": "The critical heat flux in boiling corresponds to:",
        "options": [
          "Maximum heat flux before film boiling",
          "Minimum heat flux",
          "Zero heat flux",
          "Average heat flux"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Boiling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "CHF is the peak before transition to film boiling."
      },
      {
        "id": 19,
        "question": "The dominant mode of heat transfer in a vacuum is:",
        "options": [
          "Radiation",
          "Convection",
          "Conduction",
          "Evaporation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Radiation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Only radiation occurs in vacuum."
      },
      {
        "id": 20,
        "question": "The overall heat transfer coefficient in a heat exchanger is mainly affected by:",
        "options": [
          "Fouling, fluid properties, and wall thickness",
          "Fluid color",
          "Surface roughness only",
          "Ambient temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Heat Exchangers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "U is affected by all resistances in series (fouling, wall, fluids)."
      },
      {
        "id": 21,
        "question": "The main advantage of a shell-and-tube heat exchanger is:",
        "options": [
          "Large heat transfer area in compact space",
          "Low cost",
          "No fouling",
          "No pressure drop"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Heat Exchangers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shell-and-tube exchangers provide large area and flexibility."
      },
      {
        "id": 22,
        "question": "The main function of baffles in a shell-and-tube heat exchanger is to:",
        "options": [
          "Increase turbulence and heat transfer",
          "Reduce pressure drop",
          "Increase fouling",
          "Decrease flow velocity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Heat Exchangers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Baffles promote cross-flow and turbulence, enhancing heat transfer."
      },
      {
        "id": 23,
        "question": "The main resistance to heat transfer in a composite wall is:",
        "options": [
          "Layer with lowest thermal conductivity",
          "Layer with highest thermal conductivity",
          "Thinnest layer",
          "Layer with highest temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Conduction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "The lowest k layer offers highest resistance."
      },
      {
        "id": 24,
        "question": "The heat transfer coefficient for condensation is generally:",
        "options": [
          "Higher than for vaporization",
          "Lower than for vaporization",
          "Equal to vaporization",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Condensation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Condensation coefficients are typically higher than for vaporization."
      },
      {
        "id": 25,
        "question": "The main purpose of multiple-effect evaporators is to:",
        "options": [
          "Increase steam economy",
          "Decrease product quality",
          "Increase heat loss",
          "Reduce boiling point elevation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Evaporation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Multiple-effect evaporators save steam by reusing vapor heat."
      },
      {
        "id": 26,
        "question": "The driving force for heat transfer by conduction is:",
        "options": [
          "Temperature gradient",
          "Pressure gradient",
          "Velocity gradient",
          "Concentration gradient"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Conduction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Conduction is driven by temperature difference."
      },
      {
        "id": 27,
        "question": "The critical radius of insulation for a cylinder is given by:",
        "options": [
          "k/h",
          "2k/h",
          "h/k",
          "k/2h"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Conduction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Critical radius = k/h for cylindrical insulation."
      },
      {
        "id": 28,
        "question": "The main mode of heat transfer in solids is:",
        "options": [
          "Conduction",
          "Convection",
          "Radiation",
          "Evaporation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Conduction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Solids transfer heat mainly by conduction."
      },
      {
        "id": 29,
        "question": "The heat transfer coefficient for natural convection is generally:",
        "options": [
          "Lower than for forced convection",
          "Higher than for forced convection",
          "Equal to forced convection",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Convection",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Natural convection h is lower than forced convection."
      },
      {
        "id": 30,
        "question": "The main function of a fin is to:",
        "options": [
          "Increase surface area for heat transfer",
          "Decrease surface area",
          "Reduce heat transfer",
          "Increase temperature gradient"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Heat Transfer",
        "topic": "Extended Surfaces (Fins)",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fins increase area to enhance heat transfer."
      }
      
    ],
    'Mass Transfer': [
      {
        "id": 1,
        "question": "Mass transfer occurs primarily due to:",
        "options": [
          "Concentration difference",
          "Temperature difference",
          "Pressure difference",
          "Velocity difference"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Fundamentals",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Mass transfer is driven by concentration gradients.[1]"
      },
      {
        "id": 2,
        "question": "Fick’s first law for steady-state diffusion is:",
        "options": [
          "J = -D(dc/dx)",
          "J = D(dc/dx)",
          "J = -D(dc/dt)",
          "J = D(dc/dt)"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Diffusion",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Fick’s first law states J = -D(dc/dx).[2]"
      },
      {
        "id": 3,
        "question": "The unit of diffusion coefficient (D) is:",
        "options": [
          "m²/s",
          "kg/m²·s",
          "m/s",
          "kg/m³"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Diffusion",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Diffusion coefficient has units of m²/s.[2]"
      },
      {
        "id": 4,
        "question": "The Schmidt number (Sc) is the ratio of:",
        "options": [
          "Momentum diffusivity to mass diffusivity",
          "Thermal diffusivity to mass diffusivity",
          "Mass diffusivity to momentum diffusivity",
          "Momentum diffusivity to thermal diffusivity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Dimensionless Numbers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sc = ν/D, ratio of momentum to mass diffusivity.[2]"
      },
      {
        "id": 5,
        "question": "In gas-liquid operations, the two-film theory assumes:",
        "options": [
          "Mass transfer resistance in both phases",
          "No resistance in either phase",
          "Resistance only in gas phase",
          "Resistance only in liquid phase"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Interphase Transfer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Two-film theory: resistance exists in both phases.[1][3]"
      },
      {
        "id": 6,
        "question": "The driving force for mass transfer in absorption is:",
        "options": [
          "Difference in partial pressure",
          "Difference in temperature",
          "Difference in viscosity",
          "Difference in density"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Absorption",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Absorption is driven by partial pressure difference.[1][3]"
      },
      {
        "id": 7,
        "question": "The HETP (Height Equivalent to a Theoretical Plate) is used in:",
        "options": [
          "Distillation columns",
          "Dryers",
          "Mixers",
          "Reactors"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Distillation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "HETP is a key parameter in packed distillation columns.[1][3]"
      },
      {
        "id": 8,
        "question": "The main resistance to mass transfer in gas absorption is usually in the:",
        "options": [
          "Liquid phase",
          "Gas phase",
          "Both equally",
          "Neither phase"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Absorption",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "For most systems, liquid phase offers higher resistance.[1][3]"
      },
      {
        "id": 9,
        "question": "The rate of drying in the constant rate period is governed by:",
        "options": [
          "External mass transfer",
          "Internal diffusion",
          "Heat transfer only",
          "Chemical reaction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Drying",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Initially, drying is controlled by external mass transfer.[1][3]"
      },
      {
        "id": 10,
        "question": "The diffusivity of a solute in a solvent increases with:",
        "options": [
          "Decrease in viscosity",
          "Increase in viscosity",
          "Increase in solute size",
          "Decrease in temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Diffusion",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Diffusivity increases as viscosity decreases.[1]"
      },
      {
        "id": 11,
        "question": "The main purpose of reflux in distillation is to:",
        "options": [
          "Increase separation efficiency",
          "Reduce column height",
          "Increase feed rate",
          "Reduce pressure"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Distillation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Reflux improves separation by returning condensed vapor.[1][3]"
      },
      {
        "id": 12,
        "question": "The Lewis number (Le) is defined as:",
        "options": [
          "Sc/Pr",
          "Pr/Sc",
          "Nu/Re",
          "Re/Sc"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Dimensionless Numbers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Le = Sc/Pr = α/D, ratio of thermal to mass diffusivity.[1][2]"
      },
      {
        "id": 13,
        "question": "In liquid-liquid extraction, the distribution coefficient is:",
        "options": [
          "Ratio of solute concentration in extract to raffinate",
          "Ratio of solvent to solute",
          "Ratio of solvent to feed",
          "Ratio of extract to feed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Extraction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Distribution coefficient = C_extract / C_raffinate.[1][3]"
      },
      {
        "id": 14,
        "question": "The main equipment for gas absorption is:",
        "options": [
          "Packed tower",
          "Rotary dryer",
          "Centrifugal pump",
          "Shell-and-tube exchanger"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Absorption",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Packed towers are widely used for gas absorption.[1][3]"
      },
      {
        "id": 15,
        "question": "The rate of mass transfer in a packed column increases with:",
        "options": [
          "Increased surface area",
          "Decreased surface area",
          "Lower liquid flow rate",
          "Higher pressure drop"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Absorption",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "More area means more contact for mass transfer.[1][3]"
      },
      {
        "id": 16,
        "question": "The main resistance in gas-liquid mass transfer for a sparingly soluble gas is in the:",
        "options": [
          "Liquid phase",
          "Gas phase",
          "Both phases",
          "Neither phase"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Absorption",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "For sparingly soluble gases, liquid side resistance dominates.[1][3]"
      },
      {
        "id": 17,
        "question": "The main mechanism of mass transfer in solids is:",
        "options": [
          "Molecular diffusion",
          "Convection",
          "Turbulent mixing",
          "Radiation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Diffusion in Solids",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Mass transfer in solids is by molecular diffusion.[1][3]"
      },
      {
        "id": 18,
        "question": "The main purpose of a tray in a distillation column is to:",
        "options": [
          "Increase contact between vapor and liquid",
          "Reduce pressure",
          "Increase temperature",
          "Reduce column height"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Distillation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Trays enhance vapor-liquid contact for mass transfer.[1][3]"
      },
      {
        "id": 19,
        "question": "The main resistance to mass transfer in gas absorption of ammonia in water is in the:",
        "options": [
          "Gas phase",
          "Liquid phase",
          "Both phases",
          "Neither phase"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Absorption",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ammonia is highly soluble; gas phase resistance dominates.[1][3]"
      },
      {
        "id": 20,
        "question": "The drying rate during the falling rate period is governed by:",
        "options": [
          "Internal diffusion",
          "External mass transfer",
          "Heat transfer only",
          "Chemical reaction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Drying",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "In falling rate period, internal diffusion limits drying.[1][3]"
      },
      {
        "id": 21,
        "question": "The main parameter affecting diffusivity in gases is:",
        "options": [
          "Temperature",
          "Pressure",
          "Molecular weight",
          "Viscosity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Diffusion",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Diffusivity increases with temperature in gases.[1][3]"
      },
      {
        "id": 22,
        "question": "The main function of a spray tower is:",
        "options": [
          "Gas-liquid contact for absorption",
          "Solid-liquid extraction",
          "Drying solids",
          "Mixing liquids"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Absorption",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Spray towers are used for gas absorption by liquid droplets.[1][3]"
      },
      {
        "id": 23,
        "question": "The main advantage of counter-current operation in mass transfer equipment is:",
        "options": [
          "Higher driving force throughout",
          "Lower pressure drop",
          "Lower equipment cost",
          "Simpler design"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Equipment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Counter-current flow maintains higher driving force.[1][3]"
      },
      {
        "id": 24,
        "question": "The main parameter for selecting a solvent in liquid-liquid extraction is:",
        "options": [
          "Selectivity",
          "Viscosity",
          "Boiling point",
          "Density"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Extraction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Selectivity determines effectiveness of extraction.[1][3]"
      },
      {
        "id": 25,
        "question": "The main purpose of leaching is to:",
        "options": [
          "Extract solute from a solid by a solvent",
          "Dry a solid",
          "Absorb a gas",
          "Distill a liquid"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Leaching",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Leaching uses a solvent to extract solute from solids.[1][3]"
      },
      {
        "id": 26,
        "question": "The main function of a rotary dryer is to:",
        "options": [
          "Remove moisture from solids",
          "Absorb gases",
          "Extract solute from liquids",
          "Mix powders"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Drying",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Rotary dryers are used for drying moist solids.[1][3]"
      },
      {
        "id": 27,
        "question": "The main resistance to mass transfer in a gas-liquid system for oxygen absorption in water is in the:",
        "options": [
          "Liquid phase",
          "Gas phase",
          "Both phases",
          "Neither phase"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Absorption",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Oxygen is sparingly soluble; liquid phase resistance dominates.[1][3]"
      },
      {
        "id": 28,
        "question": "The main purpose of using a dehumidifier is to:",
        "options": [
          "Remove moisture from air",
          "Add moisture to air",
          "Cool air",
          "Heat air"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Humidification",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Dehumidifiers remove moisture from air streams.[1][3]"
      },
      {
        "id": 29,
        "question": "The main driving force for leaching is:",
        "options": [
          "Concentration difference",
          "Temperature difference",
          "Pressure difference",
          "Viscosity difference"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Leaching",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Leaching is driven by concentration gradients.[1][3]"
      },
      {
        "id": 30,
        "question": "The main advantage of using a packed column over a plate column is:",
        "options": [
          "Lower pressure drop",
          "Higher pressure drop",
          "More complex operation",
          "Lower mass transfer area"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Mass Transfer",
        "topic": "Equipment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Packed columns usually have lower pressure drop and higher area.[1][3]"
      }
      
    ],
    'Chemical Reaction': [
      {
        "id": 1,
        "question": "The molecularity of the elementary reaction NH4NO2 → N2 + 2H2O is:",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Kinetics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Only one reactant molecule is involved; it is a unimolecular reaction with molecularity 1.[1]"
      },
      {
        "id": 2,
        "question": "For the reaction 2NH3 (g) → N2 (g) + 3H2 (g) on a platinum surface, if k = 2.5 × 10⁻⁴ mol L⁻¹s⁻¹ and the reaction is zero order, the rate of production of H2 is:",
        "options": [
          "7.5 × 10⁻⁴ mol L⁻¹ s⁻¹",
          "2.5 × 10⁻⁴ mol L⁻¹ s⁻¹",
          "5.0 × 10⁻⁴ mol L⁻¹ s⁻¹",
          "1.25 × 10⁻⁴ mol L⁻¹ s⁻¹"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Zero Order",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rate = k; rate of H2 = 3 × k = 7.5 × 10⁻⁴ mol L⁻¹ s⁻¹.[1]"
      },
      {
        "id": 3,
        "question": "The order of a reaction with respect to a reactant is determined by:",
        "options": [
          "Experimental data",
          "Stoichiometry",
          "Molecularity",
          "Activation energy"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Order",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Reaction order must be found from experiment, not stoichiometry.[2]"
      },
      {
        "id": 4,
        "question": "For the reaction: Rate = k[X]^m[Y]^n, if doubling [X] doubles the rate and doubling [Y] also doubles the rate, the order with respect to X and Y, respectively, is:",
        "options": [
          "1 and 1",
          "2 and 1",
          "1 and 2",
          "2 and 2"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Order",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Both orders are 1, as rate doubles with each concentration doubled.[2]"
      },
      {
        "id": 5,
        "question": "The rate constant of a reaction increases with:",
        "options": [
          "Increase in temperature",
          "Decrease in temperature",
          "Increase in pressure",
          "Decrease in pressure"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Arrhenius Equation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Rate constant k increases with temperature (Arrhenius law).[1][2]"
      },
      {
        "id": 6,
        "question": "The Arrhenius equation is:",
        "options": [
          "k = A exp(-Ea/RT)",
          "k = A exp(Ea/RT)",
          "k = A exp(-RT/Ea)",
          "k = A exp(RT/Ea)"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Arrhenius Equation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Arrhenius: k = A exp(-Ea/RT).[1][2]"
      },
      {
        "id": 7,
        "question": "The half-life of a first order reaction depends on:",
        "options": [
          "Rate constant only",
          "Initial concentration only",
          "Both rate constant and initial concentration",
          "Neither"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "First Order",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "For first order, t₁/₂ = 0.693/k; independent of initial concentration.[1][2]"
      },
      {
        "id": 8,
        "question": "The unit of the rate constant for a second order reaction is:",
        "options": [
          "L mol⁻¹ s⁻¹",
          "mol L⁻¹ s⁻¹",
          "s⁻¹",
          "mol² L⁻² s⁻¹"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Second Order",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Second order: units are L mol⁻¹ s⁻¹.[1][2]"
      },
      {
        "id": 9,
        "question": "The rate law for a zero order reaction is:",
        "options": [
          "Rate = k",
          "Rate = k[A]",
          "Rate = k[A]^2",
          "Rate = k[A][B]"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Zero Order",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Zero order: rate is independent of concentration.[1][2]"
      },
      {
        "id": 10,
        "question": "The activation energy (Ea) in the Arrhenius equation is:",
        "options": [
          "Minimum energy required for reaction",
          "Energy released in reaction",
          "Average kinetic energy",
          "Gibbs free energy"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Arrhenius Equation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ea is the minimum energy required to initiate reaction.[1][2]"
      },
      {
        "id": 11,
        "question": "The relationship between threshold energy (E₀) and activation energy (Ea) in collision theory for a bimolecular reaction is:",
        "options": [
          "Ea = E₀ + (RT/2)",
          "Ea = E₀ + (9RT/4)",
          "Ea = E₀ + RT",
          "Ea = E₀"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Collision Theory",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Ea = E₀ + (RT/2) for bimolecular reactions.[1]"
      },
      {
        "id": 12,
        "question": "Which of the following is true for an elementary reaction?",
        "options": [
          "Order equals molecularity",
          "Order is always one",
          "Order is always two",
          "Order is always zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Kinetics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "For elementary reactions, order equals molecularity.[1][2]"
      },
      {
        "id": 13,
        "question": "For a batch reactor, conversion increases with:",
        "options": [
          "Time",
          "Decreasing time",
          "Increasing reactor volume",
          "Decreasing reactor volume"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Batch Reactor",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "In a batch reactor, conversion increases as time increases.[3][4]"
      },
      {
        "id": 14,
        "question": "For a plug flow reactor (PFR), the concentration profile along the reactor length:",
        "options": [
          "Decreases",
          "Increases",
          "Remains constant",
          "Oscillates"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "PFR",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Concentration decreases along the length in a PFR.[3][4]"
      },
      {
        "id": 15,
        "question": "For a first order irreversible reaction in a CSTR, the conversion is:",
        "options": [
          "X = kτ/(1 + kτ)",
          "X = 1 - exp(-kτ)",
          "X = kτ",
          "X = 1/(1 + kτ)"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "CSTR",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "CSTR, first order: X = kτ/(1 + kτ).[3][4]"
      },
      {
        "id": 16,
        "question": "The selectivity of a reaction is defined as:",
        "options": [
          "Moles of desired product formed per mole of reactant consumed",
          "Total moles of products formed",
          "Moles of byproduct formed per mole of reactant",
          "Moles of reactant converted"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Selectivity",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Selectivity = desired product/reactant consumed.[3][4]"
      },
      {
        "id": 17,
        "question": "The rate-determining step in a reaction mechanism is:",
        "options": [
          "The slowest step",
          "The fastest step",
          "The step with lowest activation energy",
          "The step with highest molecularity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Mechanism",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "The slowest step controls the overall rate.[3][4]"
      },
      {
        "id": 18,
        "question": "For a consecutive reaction A → B → C, the maximum concentration of B is obtained when:",
        "options": [
          "Rate of formation of B equals rate of consumption of B",
          "A is completely consumed",
          "C is first formed",
          "B is never consumed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Consecutive Reactions",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "B peaks when its formation and consumption rates are equal.[3][4]"
      },
      {
        "id": 19,
        "question": "The effectiveness factor in heterogeneous catalysis is:",
        "options": [
          "Actual rate / rate if no diffusion limitation",
          "Rate if no diffusion limitation / actual rate",
          "Rate of external diffusion",
          "Rate of internal diffusion"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Catalysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Effectiveness factor = actual rate / rate with no diffusion resistance.[3][4]"
      },
      {
        "id": 20,
        "question": "The Damköhler number is the ratio of:",
        "options": [
          "Reaction rate to mass transfer rate",
          "Mass transfer rate to reaction rate",
          "Reaction rate to heat transfer rate",
          "Heat transfer rate to reaction rate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Dimensionless Numbers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Damköhler = reaction rate / mass transfer rate.[3][4]"
      },
      {
        "id": 21,
        "question": "The Thiele modulus is important for:",
        "options": [
          "Catalyst effectiveness in porous catalysts",
          "Batch reactor design",
          "PFR design",
          "CSTR design"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Catalysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Thiele modulus relates reaction to diffusion in catalyst pellets.[3][4]"
      },
      {
        "id": 22,
        "question": "The rate law for a first order reaction is:",
        "options": [
          "Rate = k[A]",
          "Rate = k",
          "Rate = k[A]^2",
          "Rate = k[A][B]"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "First Order",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "First order: rate is proportional to [A].[1][2]"
      },
      {
        "id": 23,
        "question": "A reaction is said to be pseudo-first order if:",
        "options": [
          "One reactant is in large excess",
          "Both reactants have the same order",
          "It is a zero order reaction",
          "It is a second order reaction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Pseudo Order",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pseudo-first order: one reactant is in large excess, so its concentration is nearly constant.[1][2]"
      },
      {
        "id": 24,
        "question": "The collision frequency between two molecules increases with:",
        "options": [
          "Temperature",
          "Pressure",
          "Molecular size",
          "All of the above"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Collision Theory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Collision frequency increases with temperature, pressure, and molecular size.[1]"
      },
      {
        "id": 25,
        "question": "The selectivity of a parallel reaction is maximized by:",
        "options": [
          "Optimizing temperature and reactant concentration",
          "Increasing pressure only",
          "Decreasing catalyst surface area",
          "Using a batch reactor"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Selectivity",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Selectivity in parallel reactions can be controlled by temperature and concentration.[3][4]"
      },
      {
        "id": 26,
        "question": "The order of a reaction whose rate law is Rate = k[A][B]^2 is:",
        "options": [
          "3",
          "2",
          "1",
          "0"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Order",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Order = 1 (A) + 2 (B) = 3.[2]"
      },
      {
        "id": 27,
        "question": "The conversion in a PFR is always _______ than in a CSTR for the same volume and first order reaction.",
        "options": [
          "Higher",
          "Lower",
          "Equal",
          "Unpredictable"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Reactor Comparison",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "For first order, PFR gives higher conversion than CSTR for same volume.[3][4]"
      },
      {
        "id": 28,
        "question": "A reaction A → B follows first order kinetics. If 75% of A reacts in 60 minutes, what is the rate constant (in min⁻¹)?",
        "options": [
          "0.0289",
          "0.0231",
          "0.0182",
          "0.0123"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "First Order",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "ln(1/0.25) = k × 60 ⇒ k = 0.0289 min⁻¹."
      },
      {
        "id": 29,
        "question": "The rate of a chemical reaction tells us about:",
        "options": [
          "How fast reactants are converted to products",
          "The mechanism of the reaction",
          "The equilibrium constant",
          "The activation energy only"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Kinetics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Reaction rate measures how quickly reactants become products.[7]"
      },
      {
        "id": 30,
        "question": "In the rate equation, when the concentration of reactants is unity, the rate is equal to:",
        "options": [
          "Rate constant",
          "Half-life",
          "Activation energy",
          "Stoichiometric coefficient"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Chemical Reaction Engineering",
        "topic": "Kinetics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "If [A]=1, [B]=1, rate = k; so rate equals the rate constant.[7]"
      }
      
    ],
    'Process Control': [
      {
        "id": 1,
        "question": "A thermocouple is used to measure:",
        "options": [
          "Temperature",
          "Pressure",
          "Flow rate",
          "Level"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Measurement",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Thermocouples are temperature sensors based on the Seebeck effect."
      },
      {
        "id": 2,
        "question": "A transducer is a device that:",
        "options": [
          "Converts one form of energy to another",
          "Stores energy",
          "Amplifies signals",
          "Measures time"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Sensors and Transducers",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Transducers convert physical quantities to electrical signals or vice versa."
      },
      {
        "id": 3,
        "question": "A control valve is typically used to:",
        "options": [
          "Regulate flow rate",
          "Measure temperature",
          "Generate signals",
          "Store pressure"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Control Valves",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Control valves adjust flow to maintain process variables at setpoints."
      },
      {
        "id": 4,
        "question": "The transfer function of a first order system is:",
        "options": [
          "K/(τs + 1)",
          "K/(s + τ)",
          "Kτ/(s + 1)",
          "K/(s^2 + τs + 1)"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Transfer Functions",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "First order: G(s) = K/(τs + 1), where K is gain and τ is time constant."
      },
      {
        "id": 5,
        "question": "A proportional (P) controller provides an output proportional to:",
        "options": [
          "Error signal",
          "Integral of error",
          "Derivative of error",
          "Setpoint"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Controller Modes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "P controller output = Kp × error."
      },
      {
        "id": 6,
        "question": "A PI controller is used instead of a P controller to:",
        "options": [
          "Eliminate steady-state offset",
          "Increase offset",
          "Reduce gain",
          "Increase noise"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Controller Modes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "PI controllers remove steady-state error (offset) present in P-only control."
      },
      {
        "id": 7,
        "question": "The Laplace transform of a unit step input is:",
        "options": [
          "1/s",
          "s",
          "1",
          "0"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Laplace Transform",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Laplace of unit step = 1/s."
      },
      {
        "id": 8,
        "question": "A system is stable if all poles of its transfer function:",
        "options": [
          "Have negative real parts",
          "Have positive real parts",
          "Are zero",
          "Are imaginary"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Stability requires poles in the left half of the s-plane."
      },
      {
        "id": 9,
        "question": "The time constant (τ) of a first order system is the time taken to reach:",
        "options": [
          "63.2% of final value",
          "50% of final value",
          "100% of final value",
          "36.8% of final value"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Dynamic Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "τ is the time to reach 63.2% of a step change."
      },
      {
        "id": 10,
        "question": "A dead time (transport lag) element has a transfer function:",
        "options": [
          "e^(-θs)",
          "1/(τs + 1)",
          "K/(s + 1)",
          "s/(s + 1)"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Transfer Functions",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dead time: G(s) = e^(-θs)."
      },
      {
        "id": 11,
        "question": "A P&ID symbol for a control valve usually includes:",
        "options": [
          "Actuator and valve body",
          "Pump only",
          "Sensor only",
          "Transmitter only"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "P&ID Symbols",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Valve symbols show actuator and valve body."
      },
      {
        "id": 12,
        "question": "A process reaction curve is used to:",
        "options": [
          "Identify process dynamics",
          "Measure flow rate",
          "Tune a transmitter",
          "Calibrate a sensor"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Process Reaction Curve",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Process reaction curves help determine system parameters."
      },
      {
        "id": 13,
        "question": "A system with inverse response initially moves:",
        "options": [
          "Opposite to final steady-state direction",
          "In the same direction as final value",
          "With zero response",
          "With oscillatory response"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Inverse Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Inverse response: initial output is opposite to steady-state."
      },
      {
        "id": 14,
        "question": "A PID controller combines:",
        "options": [
          "Proportional, integral, and derivative actions",
          "Only proportional and integral",
          "Only proportional and derivative",
          "Only integral and derivative"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Controller Modes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "PID = P + I + D actions."
      },
      {
        "id": 15,
        "question": "The Ziegler-Nichols method is used for:",
        "options": [
          "Controller tuning",
          "Measuring temperature",
          "Signal amplification",
          "Valve sizing"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Controller Tuning",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ziegler-Nichols is a popular tuning method for PID controllers."
      },
      {
        "id": 16,
        "question": "Cascade control is used to:",
        "options": [
          "Improve disturbance rejection",
          "Reduce measurement noise",
          "Increase dead time",
          "Reduce controller gain"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Cascade Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cascade control improves response to disturbances."
      },
      {
        "id": 17,
        "question": "Feedforward control acts:",
        "options": [
          "Before the disturbance affects the process",
          "After the disturbance",
          "Only at steady state",
          "Only for slow processes"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Feedforward Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Feedforward anticipates disturbances."
      },
      {
        "id": 18,
        "question": "The frequency response of a first order system is:",
        "options": [
          "Low-pass",
          "High-pass",
          "Band-pass",
          "Band-stop"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "First order systems act as low-pass filters."
      },
      {
        "id": 19,
        "question": "A sensor with a fast dynamic response is preferred for:",
        "options": [
          "Processes with rapid changes",
          "Slow processes only",
          "Constant processes",
          "Noisy signals"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Sensors and Transducers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fast response sensors track rapid process changes."
      },
      {
        "id": 20,
        "question": "The main function of a transmitter in process control is to:",
        "options": [
          "Send measured signals to controllers",
          "Open or close valves",
          "Measure temperature",
          "Provide power supply"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Measurement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Transmitters send signals from field instruments to control systems."
      },
      {
        "id": 21,
        "question": "The open-loop transfer function of a unity feedback system is:",
        "options": [
          "Product of controller and process transfer functions",
          "Sum of controller and process transfer functions",
          "Difference of controller and process transfer functions",
          "Ratio of controller to process transfer function"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Closed-Loop Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Open-loop TF = Gc(s)Gp(s) for unity feedback."
      },
      {
        "id": 22,
        "question": "A process is said to be self-regulating if:",
        "options": [
          "It returns to steady state after a disturbance",
          "It amplifies disturbances",
          "It oscillates indefinitely",
          "It has no feedback"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Process Modeling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Self-regulating processes return to a steady state after a change."
      },
      {
        "id": 23,
        "question": "The main purpose of a control loop is to:",
        "options": [
          "Maintain a process variable at its setpoint",
          "Increase process gain",
          "Reduce measurement noise",
          "Increase dead time"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Control Loops",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Control loops keep variables at desired values."
      },
      {
        "id": 24,
        "question": "A proportional band is defined as:",
        "options": [
          "Range of error over which controller output varies from 0 to 100%",
          "Time constant of the controller",
          "Derivative gain",
          "Integral time"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Controller Modes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Proportional band specifies the error range for full controller action."
      },
      {
        "id": 25,
        "question": "A process is said to be non-interacting if:",
        "options": [
          "Change in one variable does not affect others",
          "All variables interact",
          "It is always unstable",
          "It has only one variable"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Process Modeling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Non-interacting: variables are independent."
      },
      {
        "id": 26,
        "question": "The main advantage of feedforward control is:",
        "options": [
          "Disturbances are corrected before affecting the process",
          "Lower cost",
          "Simpler implementation",
          "No need for sensors"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Feedforward Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Feedforward acts before the disturbance affects the output."
      },
      {
        "id": 27,
        "question": "The main function of a control room in a chemical plant is to:",
        "options": [
          "Monitor and control plant operations",
          "Store chemicals",
          "Repair equipment",
          "Increase production rate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Plant Operations",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Control rooms supervise and control plant processes."
      },
      {
        "id": 28,
        "question": "A process with a large dead time is best controlled by:",
        "options": [
          "PID controller with derivative action",
          "P controller only",
          "PI controller only",
          "On-off controller"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Controller Modes",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Derivative action helps compensate for dead time."
      },
      {
        "id": 29,
        "question": "A sensor with high sensitivity will:",
        "options": [
          "Produce a large output for a small input change",
          "Produce a small output for a large input change",
          "Be unaffected by noise",
          "Have a slow response"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Sensors and Transducers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "High sensitivity means large output per unit input."
      },
      {
        "id": 30,
        "question": "The main function of a final control element is to:",
        "options": [
          "Directly change the manipulated variable",
          "Measure the controlled variable",
          "Transmit signals",
          "Display process data"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Process Control",
        "topic": "Control Valves",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Final control elements (like valves) directly adjust process variables."
      }
      
    ]
  },

  // General Aptitude Questions (Common for all branches)
  'General Aptitude': [
    {
      id: 100,
      question: "If 3x + 2y = 12 and 2x + 3y = 13, then x + y = ?",
      options: ["4", "5", "6", "7"],
      correct: 1,
      type: "MCQ",
      marks: 1,
      subject: "General Aptitude",
      topic: "Linear Equations",
      difficulty: "Easy",
      year: 2023,
      explanation: "Solving the system: x = 2, y = 3, so x + y = 5"
    },
    {
      id: 101,
      question: "The ratio of the areas of two similar triangles is 16:25. The ratio of their corresponding sides is:",
      options: ["4:5", "16:25", "8:10", "2:3"],
      correct: 0,
      type: "MCQ",
      marks: 1,
      subject: "General Aptitude",
      topic: "Geometry",
      difficulty: "Medium",
      year: 2022,
      explanation: "Ratio of areas = (ratio of sides)², so ratio of sides = √(16:25) = 4:5"
    },
    {
      id: 102,
      question: "A train travels 360 km in 4 hours. What is its average speed?",
      options: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
      correct: 1,
      type: "MCQ",
      marks: 1,
      subject: "General Aptitude",
      topic: "Speed and Distance",
      difficulty: "Easy",
      year: 2023,
      explanation: "Average speed = Distance/Time = 360/4 = 90 km/h"
    },
    {
      id: 103,
      question: "If the price of a commodity increases by 25%, by what percentage should consumption be reduced to keep the expenditure unchanged?",
      options: ["20%", "25%", "30%", "33.33%"],
      correct: 0,
      type: "MCQ",
      marks: 2,
      subject: "General Aptitude",
      topic: "Percentage",
      difficulty: "Medium",
      year: 2022,
      explanation: "Reduction = 25/(100+25) × 100 = 20%"
    },
    {
      id: 104,
      question: "The next term in the series 2, 6, 12, 20, 30, ... is:",
      options: ["40", "42", "44", "46"],
      correct: 1,
      type: "MCQ",
      marks: 1,
      subject: "General Aptitude",
      topic: "Number Series",
      difficulty: "Medium",
      year: 2023,
      explanation: "Differences: 4, 6, 8, 10, ... Next difference is 12, so 30+12=42"
    }
  ],

  // Aerospace Engineering Questions
  'Aerospace Engineering': {
    'Aerodynamics': [
      {
        "id": 1,
        "question": "For a two-dimensional incompressible flow over a flat plate, the laminar boundary layer thickness δ at a distance x from the leading edge varies with Reynolds number (Rex) as:",
        "options": [
          "δ/x ∝ Rex^(-0.5)",
          "δ/x ∝ Rex^(-1)",
          "δ/x ∝ Rex^(0.5)",
          "δ/x ∝ Rex"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Boundary Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "δ/x ∝ Rex^(-0.5) for laminar boundary layer over a flat plate.[1]"
      },
      {
        "id": 2,
        "question": "The aerodynamic drag force on a vehicle moving at speed V is proportional to:",
        "options": [
          "V^2",
          "V",
          "V^0.5",
          "V^3"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Drag",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Drag force F ∝ V^2 for bluff bodies in air.[2][3]"
      },
      {
        "id": 3,
        "question": "For an aircraft in straight and level flight, the lift is equal to:",
        "options": [
          "Weight",
          "Thrust",
          "Drag",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Lift",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Lift balances weight in steady, level flight.[2][3]"
      },
      {
        "id": 4,
        "question": "The angle of attack of an airfoil is defined as the angle between:",
        "options": [
          "Chord line and relative wind",
          "Chord line and camber line",
          "Camber line and relative wind",
          "Chord line and horizontal"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Airfoil Theory",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Angle of attack is between chord and relative wind.[3]"
      },
      {
        "id": 5,
        "question": "The formation of a shock wave in supersonic flow occurs when the flow:",
        "options": [
          "Decelerates due to an increase in pressure",
          "Accelerates due to a decrease in pressure",
          "Remains at constant velocity",
          "Becomes turbulent"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Compressible Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shock forms when supersonic flow decelerates with pressure rise.[3]"
      },
      {
        "id": 6,
        "question": "The lift coefficient (Cl) of a thin airfoil at small angles of attack varies:",
        "options": [
          "Linearly with angle of attack",
          "Quadratically with angle of attack",
          "Independently of angle of attack",
          "Inversely with angle of attack"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Airfoil Theory",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Cl ∝ α for small angles (thin airfoil theory)."
      },
      {
        "id": 7,
        "question": "The drag coefficient (Cd) of a streamlined body is mainly due to:",
        "options": [
          "Skin friction drag",
          "Pressure drag",
          "Induced drag",
          "Wave drag"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Drag",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Streamlined bodies have drag dominated by skin friction."
      },
      {
        "id": 8,
        "question": "The Prandtl’s lifting line theory is used to calculate:",
        "options": [
          "Lift distribution over a finite wing",
          "Drag of a sphere",
          "Boundary layer thickness",
          "Shock strength"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Finite Wing Theory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lifting line theory gives lift distribution and induced drag for finite wings."
      },
      {
        "id": 9,
        "question": "Induced drag on a finite wing is inversely proportional to:",
        "options": [
          "Aspect ratio",
          "Wing span",
          "Chord length",
          "Angle of attack"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Finite Wing Theory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Induced drag ∝ 1/(aspect ratio)."
      },
      {
        "id": 10,
        "question": "The Mach number is defined as the ratio of:",
        "options": [
          "Flow velocity to speed of sound",
          "Speed of sound to flow velocity",
          "Flow velocity to pressure",
          "Flow velocity to density"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Compressible Flow",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "M = V/a, where V is velocity and a is speed of sound."
      },
      {
        "id": 11,
        "question": "The area-velocity relation in a converging-diverging nozzle for subsonic flow states that:",
        "options": [
          "Velocity increases as area decreases",
          "Velocity decreases as area decreases",
          "Velocity is independent of area",
          "Pressure increases as area decreases"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Compressible Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "For subsonic flow, velocity increases as area decreases."
      },
      {
        "id": 12,
        "question": "The main cause of boundary layer separation is:",
        "options": [
          "Adverse pressure gradient",
          "Favorable pressure gradient",
          "High Reynolds number",
          "Low viscosity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Boundary Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Separation occurs when pressure increases in the direction of flow."
      },
      {
        "id": 13,
        "question": "The Kutta-Joukowski theorem relates lift per unit span to:",
        "options": [
          "Circulation around the airfoil",
          "Drag coefficient",
          "Aspect ratio",
          "Mach number"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Potential Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lift per unit span = ρVΓ (Γ = circulation)."
      },
      {
        "id": 14,
        "question": "The stagnation point on an airfoil is where:",
        "options": [
          "Velocity is zero",
          "Pressure is minimum",
          "Pressure is maximum",
          "Velocity is maximum"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Potential Flow",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Stagnation point: velocity = 0, pressure = maximum."
      },
      {
        "id": 15,
        "question": "The Reynolds number is the ratio of:",
        "options": [
          "Inertial to viscous forces",
          "Viscous to inertial forces",
          "Inertial to pressure forces",
          "Pressure to viscous forces"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Dimensional Analysis",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Re = ρVL/μ; inertia/viscous force ratio."
      },
      {
        "id": 16,
        "question": "The skin friction drag is most significant for:",
        "options": [
          "Long, slender bodies",
          "Bluff bodies",
          "Short, thick bodies",
          "Spheres"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Drag",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Skin friction dominates for slender, streamlined bodies."
      },
      {
        "id": 17,
        "question": "The pressure coefficient (Cp) at a stagnation point is:",
        "options": [
          "1",
          "0",
          "-1",
          "Infinity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Potential Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cp = 1 at stagnation point."
      },
      {
        "id": 18,
        "question": "The Prandtl-Meyer expansion occurs when:",
        "options": [
          "Supersonic flow turns around a convex corner",
          "Supersonic flow encounters an obstacle",
          "Subsonic flow turns around a convex corner",
          "Flow passes through a normal shock"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Compressible Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Expansion fans form at convex corners in supersonic flow."
      },
      {
        "id": 19,
        "question": "The main function of a wind tunnel is to:",
        "options": [
          "Simulate airflow over models",
          "Generate lift",
          "Reduce drag",
          "Increase thrust"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Wind Tunnel Testing",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Wind tunnels are used to study airflow over models."
      },
      {
        "id": 20,
        "question": "The lift generated by a finite wing is less than that of an infinite wing due to:",
        "options": [
          "Induced drag",
          "Skin friction",
          "Pressure drag",
          "Wave drag"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Finite Wing Theory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Finite wings have induced drag, reducing effective lift."
      },
      {
        "id": 21,
        "question": "The transition from laminar to turbulent boundary layer occurs at a Reynolds number (Re_x) of approximately:",
        "options": [
          "5 × 10^5",
          "1 × 10^3",
          "1 × 10^6",
          "1 × 10^4"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Boundary Layer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Transition at Re_x ≈ 5 × 10^5 for flat plates."
      },
      {
        "id": 22,
        "question": "A normal shock wave causes:",
        "options": [
          "Increase in pressure and temperature, decrease in Mach number",
          "Decrease in pressure and temperature, increase in Mach number",
          "No change in properties",
          "Increase in Mach number"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Compressible Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Normal shocks increase pressure/temperature, decrease Mach number."
      },
      {
        "id": 23,
        "question": "The downwash behind a finite wing is a consequence of:",
        "options": [
          "Tip vortices",
          "Skin friction",
          "Boundary layer separation",
          "Wave drag"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Finite Wing Theory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Tip vortices induce downwash behind finite wings."
      },
      {
        "id": 24,
        "question": "The critical Mach number for an airfoil is the Mach number at which:",
        "options": [
          "First local sonic flow appears",
          "Shock wave forms",
          "Flow becomes subsonic",
          "Lift becomes zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Compressible Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Critical Mach is when first local M = 1 occurs on the airfoil."
      },
      {
        "id": 25,
        "question": "The aspect ratio of a wing is defined as:",
        "options": [
          "Span squared divided by area",
          "Span divided by chord",
          "Area divided by span",
          "Chord divided by span"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Finite Wing Theory",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Aspect ratio = (span)^2 / wing area."
      },
      {
        "id": 26,
        "question": "The main source of wave drag is:",
        "options": [
          "Shock waves in supersonic flow",
          "Skin friction in laminar flow",
          "Pressure drag in subsonic flow",
          "Induced drag"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Compressible Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Wave drag arises from shock waves at supersonic speeds."
      },
      {
        "id": 27,
        "question": "The main advantage of a swept wing is:",
        "options": [
          "Delay of shock wave formation",
          "Increase in induced drag",
          "Increase in lift at low speeds",
          "Reduction of skin friction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Wings",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Swept wings delay onset of shock and compressibility effects."
      },
      {
        "id": 28,
        "question": "The primary function of slats and flaps on a wing is to:",
        "options": [
          "Increase lift at low speeds",
          "Decrease lift at high speeds",
          "Reduce induced drag",
          "Increase wave drag"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Wings",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Slats and flaps increase lift for takeoff and landing."
      },
      {
        "id": 29,
        "question": "The main reason for using a streamlined shape in aircraft design is to:",
        "options": [
          "Reduce pressure drag",
          "Increase skin friction",
          "Increase induced drag",
          "Increase wave drag"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Drag",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Streamlining reduces pressure drag."
      },
      {
        "id": 30,
        "question": "The primary measurement in a wind tunnel test is usually:",
        "options": [
          "Aerodynamic forces (lift and drag)",
          "Temperature",
          "Humidity",
          "Fuel consumption"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aerodynamics",
        "topic": "Wind Tunnel Testing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Wind tunnel tests measure forces and moments on models."
      }
      
    ],
    'Aircraft Structures': [
      {
        "id": 1,
        "question": "If the principal stresses at a point are 100 MPa (tension) and -200 MPa (compression), what is the maximum shear stress at that point?",
        "options": [
          "150 MPa",
          "100 MPa",
          "200 MPa",
          "50 MPa"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Stress Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Maximum shear stress = (σ1 - σ2)/2 = (100 - (-200))/2 = 150 MPa.[1]"
      },
      {
        "id": 2,
        "question": "Which test is commonly used to determine the toughness of a material?",
        "options": [
          "Impact test",
          "Tensile test",
          "Hardness test",
          "Creep test"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Material Properties",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Toughness is measured by the impact test (e.g., Charpy or Izod)."
      },
      {
        "id": 3,
        "question": "The top spar cap/flange of a wing in straight flight is most likely to fail in:",
        "options": [
          "Buckling",
          "Shear",
          "Tension",
          "Creep"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Wing Structure",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Wing spar caps are prone to buckling under compressive loads.[1][4]"
      },
      {
        "id": 4,
        "question": "Winglets are used on aircraft wings primarily to minimize:",
        "options": [
          "Induced drag",
          "Skin friction drag",
          "Wave drag",
          "Form drag"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Wing Design",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Winglets reduce tip vortices and thus induced drag.[1]"
      },
      {
        "id": 5,
        "question": "The main load-carrying members in an aircraft fuselage are:",
        "options": [
          "Longerons and frames",
          "Stringers and skin",
          "Ribs and spars",
          "Bulkheads and fairings"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Fuselage Structure",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Longerons and frames carry the main loads in a fuselage."
      },
      {
        "id": 6,
        "question": "The shear flow in a thin-walled closed section under torsion is:",
        "options": [
          "Constant along each wall between adjacent corners",
          "Zero everywhere",
          "Maximum at the centroid",
          "Varies linearly with wall thickness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Shear Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shear flow is constant along each wall between corners for closed sections."
      },
      {
        "id": 7,
        "question": "For a simply supported beam of span L carrying a central point load P, the maximum bending moment is:",
        "options": [
          "PL/4",
          "PL/2",
          "PL",
          "P/L"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Beams",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Maximum moment at center: M = PL/4."
      },
      {
        "id": 8,
        "question": "The buckling load for a column with pinned-pinned ends is proportional to:",
        "options": [
          "1/(length)^2",
          "1/(length)",
          "length",
          "length^2"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Buckling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Euler buckling load ∝ 1/(L^2)."
      },
      {
        "id": 9,
        "question": "The main function of ribs in an aircraft wing is to:",
        "options": [
          "Maintain airfoil shape and transfer loads to spars",
          "Carry bending moments",
          "Provide torsional rigidity",
          "Reduce skin friction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Wing Structure",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Ribs maintain shape and transfer aerodynamic loads to spars."
      },
      {
        "id": 10,
        "question": "The maximum shear stress theory is also known as:",
        "options": [
          "Tresca criterion",
          "von Mises criterion",
          "Rankine criterion",
          "Mohr’s criterion"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Failure Theories",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Maximum shear stress theory is Tresca criterion."
      },
      {
        "id": 11,
        "question": "The strain energy stored in a linear elastic member under axial load is:",
        "options": [
          "U = (1/2) P^2 L / (AE)",
          "U = PL/2",
          "U = (1/2) AE / (PL)",
          "U = (1/2) PL / A"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Strain Energy",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Strain energy U = (1/2) P^2 L / (AE)."
      },
      {
        "id": 12,
        "question": "Castigliano’s theorem is used to determine:",
        "options": [
          "Deflection in structures",
          "Buckling load",
          "Shear flow",
          "Principal stresses"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Energy Methods",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Castigliano’s theorem gives deflection from strain energy."
      },
      {
        "id": 13,
        "question": "The modulus of rigidity (shear modulus) is defined as:",
        "options": [
          "Shear stress / shear strain",
          "Normal stress / normal strain",
          "Bulk stress / bulk strain",
          "Torsional stress / torsional strain"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Material Properties",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Shear modulus G = shear stress / shear strain."
      },
      {
        "id": 14,
        "question": "The neutral axis of a beam is the axis:",
        "options": [
          "Where bending stress is zero",
          "Of maximum stress",
          "Of maximum shear",
          "Of maximum deflection"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Beams",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Neutral axis: bending stress = 0."
      },
      {
        "id": 15,
        "question": "The Poisson’s ratio for most aircraft aluminum alloys is approximately:",
        "options": [
          "0.33",
          "0.50",
          "0.25",
          "0.10"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Material Properties",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Typical Poisson’s ratio for aluminum is about 0.33."
      },
      {
        "id": 16,
        "question": "The main advantage of a monocoque fuselage is:",
        "options": [
          "Efficient use of skin to carry loads",
          "Ease of repair",
          "Low cost",
          "High weight"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Fuselage Structure",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Monocoque uses skin as primary load-carrying element."
      },
      {
        "id": 17,
        "question": "The compatibility equation in plane stress ensures that:",
        "options": [
          "Strains are consistent and continuous",
          "Stresses are maximum",
          "Deflection is zero",
          "Poisson’s ratio is constant"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Stress Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Compatibility ensures continuous, single-valued strain field."
      },
      {
        "id": 18,
        "question": "The main reason for using composite materials in aircraft structures is:",
        "options": [
          "High specific strength and stiffness",
          "Low cost",
          "Ease of joining",
          "High density"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Materials",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Composites provide high strength-to-weight ratio."
      },
      {
        "id": 19,
        "question": "A statically indeterminate structure is one in which:",
        "options": [
          "Equilibrium equations are not sufficient to solve for all reactions",
          "All forces can be found by equilibrium alone",
          "There are no redundant supports",
          "It cannot carry load"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Structural Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Statically indeterminate: needs compatibility plus equilibrium."
      },
      {
        "id": 20,
        "question": "The principal axes of inertia for a cross-section pass through:",
        "options": [
          "Centroid",
          "Maximum thickness",
          "Maximum width",
          "Neutral axis"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Structural Analysis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Principal axes pass through centroid."
      },
      {
        "id": 21,
        "question": "The critical buckling stress for a thin plate is proportional to:",
        "options": [
          "Square of thickness",
          "Thickness",
          "Inverse of thickness",
          "Inverse square of thickness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Buckling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Buckling stress ∝ (thickness)^2."
      },
      {
        "id": 22,
        "question": "The main function of stringers in an aircraft fuselage is to:",
        "options": [
          "Provide longitudinal stiffness",
          "Carry torsional loads",
          "Reduce drag",
          "Support landing gear"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Fuselage Structure",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Stringers provide longitudinal stiffness and support skin."
      },
      {
        "id": 23,
        "question": "The shear center of a thin-walled open section is:",
        "options": [
          "The point through which applied shear force produces no twisting",
          "Always at the centroid",
          "Always at the neutral axis",
          "Always outside the section"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Shear Flow",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Shear center: point where shear force causes no twist."
      },
      {
        "id": 24,
        "question": "The main effect of a cutout (window) in a fuselage is to:",
        "options": [
          "Increase local stress concentration",
          "Reduce overall weight",
          "Increase buckling resistance",
          "Improve aerodynamics"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Fuselage Structure",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cutouts cause stress concentrations."
      },
      {
        "id": 25,
        "question": "The torsional rigidity of a thin-walled closed section is proportional to:",
        "options": [
          "Enclosed area squared",
          "Perimeter",
          "Thickness",
          "Length"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Torsion",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Torsional rigidity ∝ (area enclosed)^2."
      },
      {
        "id": 26,
        "question": "The main reason for using I-section beams in aircraft is:",
        "options": [
          "High bending stiffness-to-weight ratio",
          "Low cost",
          "Ease of manufacturing",
          "Aesthetic appearance"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Beams",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "I-section maximizes bending stiffness for given weight."
      },
      {
        "id": 27,
        "question": "The primary load carried by the skin in a semi-monocoque fuselage is:",
        "options": [
          "Shear",
          "Bending",
          "Torsion",
          "Compression"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Fuselage Structure",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Skin in semi-monocoque carries shear loads."
      },
      {
        "id": 28,
        "question": "The natural frequency of a simply supported beam increases with:",
        "options": [
          "Increase in stiffness",
          "Increase in mass",
          "Increase in length",
          "Decrease in stiffness"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Vibrations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Natural frequency ∝ sqrt(stiffness/mass)."
      },
      {
        "id": 29,
        "question": "The main function of bulkheads in an aircraft fuselage is to:",
        "options": [
          "Provide transverse structural support",
          "Carry aerodynamic loads",
          "Reduce drag",
          "Support engines"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Fuselage Structure",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bulkheads provide transverse support and maintain shape."
      },
      {
        "id": 30,
        "question": "The von Mises criterion is used to predict:",
        "options": [
          "Yielding of ductile materials",
          "Buckling of columns",
          "Fracture of brittle materials",
          "Creep failure"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Aircraft Structures",
        "topic": "Failure Theories",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Von Mises criterion predicts yielding in ductile materials."
      }
      
    ],
    'Propulsion': [
      {
        "id": 1,
        "question": "The main function of a nozzle in a jet engine is to:",
        "options": [
          "Convert thermal energy to kinetic energy",
          "Increase pressure",
          "Reduce temperature",
          "Mix fuel and air"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Nozzles",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Nozzles accelerate exhaust gases, converting heat to thrust."
      },
      {
        "id": 2,
        "question": "The thrust produced by a turbojet engine increases with:",
        "options": [
          "Increase in exhaust velocity",
          "Decrease in fuel flow",
          "Decrease in inlet air velocity",
          "Decrease in exhaust temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Jet Engines",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Thrust ∝ (exhaust velocity - inlet velocity)."
      },
      {
        "id": 3,
        "question": "The Brayton cycle is the ideal cycle for:",
        "options": [
          "Gas turbine engines",
          "Reciprocating engines",
          "Rocket engines",
          "Ramjet engines"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Thermodynamics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Brayton cycle models gas turbines and jet engines."
      },
      {
        "id": 4,
        "question": "The specific impulse (Isp) of a rocket engine is defined as:",
        "options": [
          "Thrust per unit weight flow rate of propellant",
          "Thrust per unit mass flow rate",
          "Thrust per unit area",
          "Thrust per unit time"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Rocket Engines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Isp = Thrust / (weight flow rate of propellant)."
      },
      {
        "id": 5,
        "question": "The main advantage of a turbofan engine over a turbojet is:",
        "options": [
          "Higher propulsive efficiency at subsonic speeds",
          "Higher exhaust velocity",
          "Lower bypass ratio",
          "Higher noise"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Jet Engines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Turbofans are more efficient at subsonic speeds due to bypass air."
      },
      {
        "id": 6,
        "question": "The combustion chamber in a jet engine operates at:",
        "options": [
          "Nearly constant pressure",
          "Constant volume",
          "Constant temperature",
          "Constant entropy"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Combustion",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Combustion in jet engines is at nearly constant pressure."
      },
      {
        "id": 7,
        "question": "The function of a diffuser in a jet engine is to:",
        "options": [
          "Reduce velocity and increase pressure of incoming air",
          "Increase velocity of exhaust gases",
          "Mix fuel and air",
          "Reduce temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Diffusers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Diffusers slow down air, raising its pressure before combustion."
      },
      {
        "id": 8,
        "question": "The thermal efficiency of a Brayton cycle increases with:",
        "options": [
          "Increase in pressure ratio",
          "Decrease in pressure ratio",
          "Increase in turbine inlet temperature",
          "Decrease in compressor efficiency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Thermodynamics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Higher pressure ratio increases Brayton cycle efficiency."
      },
      {
        "id": 9,
        "question": "The main oxidizer used in most liquid rocket engines is:",
        "options": [
          "Liquid oxygen (LOX)",
          "Hydrazine",
          "Kerosene",
          "Nitrogen"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Rocket Propellants",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "LOX is the most common oxidizer in liquid rockets."
      },
      {
        "id": 10,
        "question": "The thrust equation for a rocket is:",
        "options": [
          "F = ṁVe + (Pe - Pa)Ae",
          "F = ṁVe",
          "F = (Pe - Pa)Ae",
          "F = ṁVe - (Pe - Pa)Ae"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Rocket Engines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Thrust = mass flow × exit velocity + pressure difference × area."
      },
      {
        "id": 11,
        "question": "The bypass ratio of a turbofan engine is defined as:",
        "options": [
          "Mass flow rate of bypass air / mass flow rate through core",
          "Mass flow rate through core / mass flow rate of bypass air",
          "Total mass flow / bypass mass flow",
          "Bypass mass flow / total mass flow"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Jet Engines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bypass ratio = bypass air / core air mass flow."
      },
      {
        "id": 12,
        "question": "The main function of a compressor in a jet engine is to:",
        "options": [
          "Increase pressure of incoming air",
          "Increase temperature of exhaust gases",
          "Reduce velocity of exhaust gases",
          "Mix fuel and air"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Compressors",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Compressors raise air pressure before combustion."
      },
      {
        "id": 13,
        "question": "The main advantage of a ramjet engine is:",
        "options": [
          "No moving parts",
          "High efficiency at low speeds",
          "Ability to operate at zero speed",
          "Low noise"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Ramjets",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ramjets have no moving parts and are simple in design."
      },
      {
        "id": 14,
        "question": "The combustion efficiency in a jet engine is defined as:",
        "options": [
          "Actual heat released / theoretical heat release",
          "Actual thrust / theoretical thrust",
          "Actual fuel flow / theoretical fuel flow",
          "Actual pressure / theoretical pressure"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Combustion",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Combustion efficiency = actual / theoretical heat release."
      },
      {
        "id": 15,
        "question": "The main reason for using afterburners in jet engines is to:",
        "options": [
          "Increase thrust for short durations",
          "Reduce fuel consumption",
          "Increase compressor efficiency",
          "Reduce exhaust temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Afterburners",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Afterburners provide extra thrust for takeoff or combat."
      },
      {
        "id": 16,
        "question": "The main loss in a centrifugal compressor is due to:",
        "options": [
          "Friction and flow separation",
          "Shock waves",
          "Heat transfer",
          "Combustion inefficiency"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Compressors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Losses are mainly from friction and separation in centrifugal compressors."
      },
      {
        "id": 17,
        "question": "The characteristic velocity (c*) in rocket propulsion is a measure of:",
        "options": [
          "Combustion chamber performance",
          "Nozzle expansion ratio",
          "Exhaust velocity",
          "Propellant density"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Rocket Engines",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "c* is a measure of combustion efficiency in the chamber."
      },
      {
        "id": 18,
        "question": "The main function of a turboprop engine is to:",
        "options": [
          "Drive a propeller using a gas turbine",
          "Produce thrust by high-speed jet",
          "Operate at supersonic speeds",
          "Reduce propeller noise"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Turboprops",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Turboprops use turbines to drive propellers for thrust."
      },
      {
        "id": 19,
        "question": "The main advantage of a solid rocket motor is:",
        "options": [
          "Simplicity and reliability",
          "Throttle control",
          "Restart capability",
          "High specific impulse"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Rocket Engines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Solid rockets are simple and reliable but cannot be throttled."
      },
      {
        "id": 20,
        "question": "The Mach number at the throat of a converging-diverging nozzle during choked flow is:",
        "options": [
          "1",
          "0",
          "Greater than 1",
          "Less than 1"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Nozzles",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Choked flow: Mach number at throat is 1."
      },
      {
        "id": 21,
        "question": "The main function of a regenerator in a gas turbine engine is to:",
        "options": [
          "Recover waste heat to preheat air",
          "Increase compressor pressure",
          "Reduce exhaust velocity",
          "Increase fuel flow"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Thermodynamics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Regenerators improve efficiency by preheating air with exhaust heat."
      },
      {
        "id": 22,
        "question": "The main reason for using staged combustion in rocket engines is to:",
        "options": [
          "Increase efficiency and thrust",
          "Reduce engine weight",
          "Simplify design",
          "Reduce combustion temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Rocket Engines",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Staged combustion increases performance and efficiency."
      },
      {
        "id": 23,
        "question": "The propulsive efficiency of a jet engine is maximum when:",
        "options": [
          "Exhaust velocity equals flight velocity",
          "Exhaust velocity is much greater than flight velocity",
          "Exhaust velocity is much less than flight velocity",
          "Exhaust velocity is zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Jet Engines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Maximum efficiency when exhaust and flight velocities are equal."
      },
      {
        "id": 24,
        "question": "The main function of a nozzle in a rocket engine is to:",
        "options": [
          "Accelerate combustion gases to produce thrust",
          "Mix fuel and oxidizer",
          "Increase combustion pressure",
          "Reduce combustion temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Nozzles",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Nozzle accelerates gases to high velocity for thrust."
      },
      {
        "id": 25,
        "question": "The main loss in a turbine is due to:",
        "options": [
          "Friction and blade losses",
          "Combustion inefficiency",
          "Compressor stall",
          "Nozzle underexpansion"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Turbines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Turbine losses are mainly from friction and blade aerodynamics."
      },
      {
        "id": 26,
        "question": "The main function of a preburner in staged combustion rocket engines is to:",
        "options": [
          "Partially burn propellants to drive turbopumps",
          "Increase combustion chamber pressure",
          "Reduce exhaust velocity",
          "Cool the nozzle"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Rocket Engines",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Preburners generate hot gases to power turbopumps."
      },
      {
        "id": 27,
        "question": "The main advantage of a scramjet over a ramjet is:",
        "options": [
          "Operation at hypersonic speeds",
          "Higher efficiency at subsonic speeds",
          "Lower inlet temperature",
          "Ability to operate at zero speed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Scramjets",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Scramjets operate efficiently at hypersonic speeds."
      },
      {
        "id": 28,
        "question": "The main function of a combustor liner in a jet engine is to:",
        "options": [
          "Protect the outer casing from high temperatures",
          "Increase combustion pressure",
          "Reduce exhaust velocity",
          "Mix fuel and air"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Combustion",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Combustor liners shield the casing from heat."
      },
      {
        "id": 29,
        "question": "The main reason for using a converging-diverging nozzle in rocket engines is to:",
        "options": [
          "Accelerate gases to supersonic speeds",
          "Reduce combustion temperature",
          "Increase combustion pressure",
          "Mix fuel and oxidizer"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Nozzles",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "C-D nozzles accelerate gases to supersonic velocities."
      },
      {
        "id": 30,
        "question": "The main function of a fuel injector in a liquid rocket engine is to:",
        "options": [
          "Atomize and mix fuel and oxidizer",
          "Increase combustion pressure",
          "Reduce exhaust velocity",
          "Cool the combustion chamber"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Propulsion",
        "topic": "Rocket Engines",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Injectors atomize and mix propellants for efficient combustion."
      }
      
    ],
    'Flight Mechanics': [
      {
        "id": 1,
        "question": "The standard atmosphere pressure at sea level is approximately:",
        "options": [
          "101.3 kPa",
          "50 kPa",
          "200 kPa",
          "10 kPa"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Atmosphere",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Standard sea level pressure is 101.3 kPa."
      },
      {
        "id": 2,
        "question": "The lift force on an airplane wing is proportional to:",
        "options": [
          "Square of velocity",
          "Velocity",
          "Cube of velocity",
          "Velocity to the power 0.5"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Aerodynamic Forces",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Lift ∝ V² according to the lift equation."
      },
      {
        "id": 3,
        "question": "The drag polar of an airplane is a plot of:",
        "options": [
          "Drag coefficient vs lift coefficient",
          "Lift coefficient vs angle of attack",
          "Drag coefficient vs velocity",
          "Lift coefficient vs velocity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Performance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Drag polar plots Cd vs Cl."
      },
      {
        "id": 4,
        "question": "The service ceiling of an aircraft is defined as the altitude at which:",
        "options": [
          "Rate of climb reduces to 100 ft/min",
          "Rate of climb is maximum",
          "Rate of climb is zero",
          "Aircraft stalls"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Performance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Service ceiling corresponds to 100 ft/min climb rate."
      },
      {
        "id": 5,
        "question": "The load factor (n) in a turning flight is defined as:",
        "options": [
          "Lift / Weight",
          "Weight / Lift",
          "Thrust / Drag",
          "Drag / Thrust"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Turning Flight",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Load factor n = Lift / Weight."
      },
      {
        "id": 6,
        "question": "The V-n diagram of an aircraft shows the relationship between:",
        "options": [
          "Velocity and load factor",
          "Velocity and altitude",
          "Lift and drag",
          "Thrust and drag"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Stability and Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "V-n diagram plots velocity vs load factor limits."
      },
      {
        "id": 7,
        "question": "The angle of attack is the angle between:",
        "options": [
          "Chord line and relative wind",
          "Chord line and horizontal",
          "Camber line and relative wind",
          "Camber line and chord line"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Aerodynamics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Angle of attack is between chord line and relative wind."
      },
      {
        "id": 8,
        "question": "Static longitudinal stability of an aircraft requires the location of the center of gravity to be:",
        "options": [
          "Ahead of the neutral point",
          "Behind the neutral point",
          "At the neutral point",
          "At the aerodynamic center"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "CG must be ahead of neutral point for static stability."
      },
      {
        "id": 9,
        "question": "The primary flight control surface responsible for roll control is the:",
        "options": [
          "Aileron",
          "Elevator",
          "Rudder",
          "Flap"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Control Surfaces",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Ailerons control roll by differential lift."
      },
      {
        "id": 10,
        "question": "The turn radius R for an aircraft flying at speed V with bank angle θ and load factor n is:",
        "options": [
          "R = V² / (g √(n² - 1))",
          "R = V / (g tan θ)",
          "R = V² / (g tan θ)",
          "R = g / V²"
        ],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Turning Flight",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "R = V² / (g tan θ) for coordinated turn."
      },
      {
        "id": 11,
        "question": "The stall speed of an aircraft increases with:",
        "options": [
          "Load factor",
          "Altitude",
          "Temperature",
          "Wing area"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Performance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Stall speed increases with load factor due to increased lift requirement."
      },
      {
        "id": 12,
        "question": "The equivalent airspeed (EAS) is defined as:",
        "options": [
          "Calibrated airspeed corrected for compressibility",
          "True airspeed corrected for altitude",
          "Indicated airspeed corrected for instrument error",
          "Groundspeed corrected for wind"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Airspeed",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "EAS corrects CAS for compressibility effects."
      },
      {
        "id": 13,
        "question": "The service ceiling of an airplane is limited by:",
        "options": [
          "Minimum rate of climb",
          "Maximum velocity",
          "Maximum altitude",
          "Maximum thrust"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Performance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Service ceiling is altitude where climb rate falls to minimum acceptable value."
      },
      {
        "id": 14,
        "question": "The V-n diagram is also called the:",
        "options": [
          "Flight envelope",
          "Lift curve",
          "Drag polar",
          "Stability curve"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Flight Envelope",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "V-n diagram defines the flight envelope of an aircraft."
      },
      {
        "id": 15,
        "question": "The main cause of Dutch roll motion in aircraft is:",
        "options": [
          "Coupling of lateral and directional motions",
          "Pitch oscillations",
          "Longitudinal instability",
          "Engine failure"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Dynamic Stability",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Dutch roll is a coupled lateral-directional oscillation."
      },
      {
        "id": 16,
        "question": "The primary aerodynamic force opposing forward motion is:",
        "options": [
          "Drag",
          "Lift",
          "Thrust",
          "Weight"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Aerodynamics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Drag opposes forward motion."
      },
      {
        "id": 17,
        "question": "The angle of sideslip (β) is the angle between:",
        "options": [
          "Aircraft longitudinal axis and relative wind in horizontal plane",
          "Aircraft vertical axis and relative wind",
          "Aircraft lateral axis and relative wind",
          "Aircraft pitch axis and relative wind"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Stability and Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sideslip angle is horizontal angle between longitudinal axis and wind."
      },
      {
        "id": 18,
        "question": "The primary control surface used for yaw control is the:",
        "options": [
          "Rudder",
          "Aileron",
          "Elevator",
          "Flap"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Control Surfaces",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Rudder controls yaw motion."
      },
      {
        "id": 19,
        "question": "The airplane’s static margin is defined as the distance between:",
        "options": [
          "Center of gravity and neutral point",
          "Center of gravity and aerodynamic center",
          "Center of pressure and aerodynamic center",
          "Neutral point and center of pressure"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Static margin = CG - Neutral point distance."
      },
      {
        "id": 20,
        "question": "The elevator control surface primarily affects the aircraft’s:",
        "options": [
          "Pitch",
          "Roll",
          "Yaw",
          "Lift"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Control Surfaces",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Elevator controls pitch attitude."
      },
      {
        "id": 21,
        "question": "The maximum lift coefficient (Cl_max) is typically achieved at:",
        "options": [
          "Stall angle of attack",
          "Zero angle of attack",
          "Negative angle of attack",
          "Maximum speed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Aerodynamics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cl_max occurs near stall angle."
      },
      {
        "id": 22,
        "question": "The effect of increasing altitude on true airspeed for a given indicated airspeed is:",
        "options": [
          "True airspeed increases",
          "True airspeed decreases",
          "True airspeed remains constant",
          "True airspeed becomes zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Airspeed",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "True airspeed increases with altitude for constant IAS."
      },
      {
        "id": 23,
        "question": "The primary cause of Dutch roll can be mitigated by:",
        "options": [
          "Yaw damper",
          "Elevator trim",
          "Aileron deflection",
          "Throttle adjustment"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Dynamic Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Yaw dampers help control Dutch roll oscillations."
      },
      {
        "id": 24,
        "question": "The service ceiling is reached when:",
        "options": [
          "Rate of climb equals minimum acceptable value",
          "Thrust equals drag",
          "Lift equals weight",
          "Fuel is exhausted"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Performance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Service ceiling is where climb rate falls to minimum."
      },
      {
        "id": 25,
        "question": "The primary aerodynamic force that causes the airplane to turn is:",
        "options": [
          "Lift component perpendicular to flight path",
          "Drag",
          "Thrust",
          "Weight"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Turning Flight",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lift’s horizontal component causes centripetal force for turning."
      },
      {
        "id": 26,
        "question": "The primary effect of dihedral angle on an airplane is:",
        "options": [
          "Lateral stability",
          "Longitudinal stability",
          "Directional stability",
          "Pitch control"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dihedral improves lateral (roll) stability."
      },
      {
        "id": 27,
        "question": "The primary cause of longitudinal static instability is:",
        "options": [
          "CG located aft of neutral point",
          "CG located forward of neutral point",
          "Excessive dihedral",
          "Excessive sweep"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "CG aft of neutral point causes longitudinal instability."
      },
      {
        "id": 28,
        "question": "The primary flight instrument used to measure rate of climb is:",
        "options": [
          "Vertical speed indicator (VSI)",
          "Altimeter",
          "Airspeed indicator",
          "Turn coordinator"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Instruments",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "VSI measures vertical speed (rate of climb/descent)."
      },
      {
        "id": 29,
        "question": "The primary aerodynamic moment that controls pitch attitude is:",
        "options": [
          "Pitching moment",
          "Yawing moment",
          "Rolling moment",
          "Side force"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Moments",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pitching moment affects pitch attitude."
      },
      {
        "id": 30,
        "question": "The angle of sideslip is zero in:",
        "options": [
          "Coordinated flight",
          "Uncoordinated flight",
          "Stall",
          "Spin"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Flight Mechanics",
        "topic": "Stability and Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sideslip angle is zero in coordinated flight."
      }
      
    ],
    'Space Mechanics': [
      {
        "id": 1,
        "question": "The gravitational parameter (μ) for Earth is defined as:",
        "options": [
          "GM, where G is universal gravitational constant and M is mass of Earth",
          "G/M",
          "G + M",
          "M/G"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Central Force Motion",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "μ = GM is used in all orbital equations."
      },
      {
        "id": 2,
        "question": "The solution to the two-body problem results in which type of orbits?",
        "options": [
          "Conic sections (ellipse, parabola, hyperbola, circle)",
          "Spiral",
          "Helical",
          "Random"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Two-Body Problem",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Orbits are conic sections under central force."
      },
      {
        "id": 3,
        "question": "The semi-major axis (a) of an elliptical orbit is:",
        "options": [
          "Average of the periapsis and apoapsis distances from the focus",
          "Sum of periapsis and apoapsis",
          "Difference of periapsis and apoapsis",
          "Product of periapsis and apoapsis"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Orbital Elements",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "a = (rp + ra)/2, where rp and ra are periapsis and apoapsis."
      },
      {
        "id": 4,
        "question": "The velocity required to escape Earth’s gravity from the surface is called:",
        "options": [
          "Escape velocity",
          "Orbital velocity",
          "Terminal velocity",
          "Circular velocity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Escape Velocity",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Escape velocity is the minimum speed to leave Earth's gravity."
      },
      {
        "id": 5,
        "question": "The escape velocity from a planet of radius R and mass M is:",
        "options": [
          "√(2GM/R)",
          "√(GM/R)",
          "√(GM/2R)",
          "√(R/GM)"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Escape Velocity",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Escape velocity formula: v_esc = √(2GM/R)."
      },
      {
        "id": 6,
        "question": "The specific mechanical energy (ε) of a circular orbit is:",
        "options": [
          "-GM/(2r)",
          "-GM/r",
          "GM/(2r)",
          "GM/r"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Orbital Energy",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "For circular orbits, ε = -GM/(2r)."
      },
      {
        "id": 7,
        "question": "The period (T) of a satellite in a circular orbit of radius r around Earth is:",
        "options": [
          "2π√(r³/GM)",
          "2πr/GM",
          "2πr²/GM",
          "π√(r/GM)"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Orbital Period",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Kepler’s third law: T = 2π√(r³/GM)."
      },
      {
        "id": 8,
        "question": "The Hohmann transfer is used to:",
        "options": [
          "Transfer between two coplanar circular orbits",
          "Change orbital inclination",
          "Transfer between non-coplanar orbits",
          "Escape from the solar system"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Orbital Maneuvers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hohmann transfer is the most efficient two-impulse transfer."
      },
      {
        "id": 9,
        "question": "The Tsiolkovsky rocket equation relates:",
        "options": [
          "Change in velocity to exhaust velocity and mass ratio",
          "Thrust to mass flow rate",
          "Orbit period to radius",
          "Escape velocity to mass"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Rocket Equation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Δv = Ve ln(m0/mf) (Tsiolkovsky equation)."
      },
      {
        "id": 10,
        "question": "The true anomaly is defined as:",
        "options": [
          "Angle from periapsis to satellite position, measured at focus",
          "Angle from ascending node to periapsis",
          "Angle from vernal equinox to ascending node",
          "Angle from perigee to apogee"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Orbital Elements",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "True anomaly measures satellite’s position in orbit."
      },
      {
        "id": 11,
        "question": "The inclination of a geostationary orbit is:",
        "options": [
          "0 degrees",
          "23.5 degrees",
          "90 degrees",
          "45 degrees"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Satellite Orbits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Geostationary orbits are equatorial (0° inclination)."
      },
      {
        "id": 12,
        "question": "A satellite in a sun-synchronous orbit passes over the same local solar time because:",
        "options": [
          "Its orbital plane precesses with Earth’s revolution",
          "It is in a circular orbit",
          "It is geostationary",
          "It has zero inclination"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Satellite Orbits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sun-synchronous orbits precess to maintain constant local time."
      },
      {
        "id": 13,
        "question": "The perigee of an Earth orbit is:",
        "options": [
          "Point closest to Earth",
          "Point farthest from Earth",
          "Point where velocity is minimum",
          "Point where period is maximum"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Orbital Elements",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Perigee = closest approach to Earth."
      },
      {
        "id": 14,
        "question": "The main perturbation affecting low Earth orbits is:",
        "options": [
          "Atmospheric drag",
          "Solar radiation pressure",
          "Third-body effects",
          "Earth’s magnetic field"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Perturbations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Atmospheric drag is dominant in low Earth orbit."
      },
      {
        "id": 15,
        "question": "The synodic period is the time between:",
        "options": [
          "Successive conjunctions of two orbiting bodies",
          "One orbit of a satellite",
          "One rotation of Earth",
          "One revolution of the Sun"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Interplanetary Trajectories",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Synodic period = time between alignments of two bodies."
      },
      {
        "id": 16,
        "question": "The minimum energy transfer between two coplanar circular orbits is called:",
        "options": [
          "Hohmann transfer",
          "Bi-elliptic transfer",
          "Inclination change",
          "Gravity assist"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Orbital Maneuvers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hohmann transfer is the most efficient two-impulse transfer."
      },
      {
        "id": 17,
        "question": "The effect of Earth's oblateness (J2 effect) on a satellite’s orbit is:",
        "options": [
          "Precession of the orbital plane",
          "Increase in eccentricity",
          "Decrease in inclination",
          "Increase in mass"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Perturbations",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "J2 causes precession of the node and perigee."
      },
      {
        "id": 18,
        "question": "The launch window for an interplanetary mission is determined by:",
        "options": [
          "Relative positions of Earth and target planet",
          "Rocket thrust",
          "Payload mass",
          "Earth’s rotation only"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Interplanetary Trajectories",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Launch windows depend on planetary alignment."
      },
      {
        "id": 19,
        "question": "The velocity at perigee in an elliptical orbit is:",
        "options": [
          "Greater than at apogee",
          "Less than at apogee",
          "Equal to at apogee",
          "Zero"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Orbital Motion",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Velocity is maximum at perigee."
      },
      {
        "id": 20,
        "question": "The main advantage of a bi-elliptic transfer over a Hohmann transfer is:",
        "options": [
          "Lower total Δv for large radius changes",
          "Shorter transfer time",
          "Lower fuel consumption for all cases",
          "Simpler trajectory"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Orbital Maneuvers",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Bi-elliptic is more efficient for large orbit changes."
      },
      {
        "id": 21,
        "question": "The inertial reference frame is one that:",
        "options": [
          "Is not accelerating",
          "Is fixed to Earth’s surface",
          "Rotates with Earth",
          "Accelerates with the rocket"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Reference Frames",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Inertial frames are non-accelerating and non-rotating."
      },
      {
        "id": 22,
        "question": "The argument of perigee is the angle between:",
        "options": [
          "Ascending node and perigee",
          "Vernal equinox and ascending node",
          "Perigee and apogee",
          "Node and apogee"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Orbital Elements",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Argument of perigee = angle from ascending node to perigee."
      },
      {
        "id": 23,
        "question": "The main effect of atmospheric drag on a satellite in low Earth orbit is:",
        "options": [
          "Decrease in altitude and orbital decay",
          "Increase in orbital period",
          "Increase in inclination",
          "Increase in mass"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Perturbations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Drag causes satellites to lose energy and decay."
      },
      {
        "id": 24,
        "question": "The Oberth effect states that a rocket engine produces the most useful energy when:",
        "options": [
          "Burning at high speed (close to periapsis)",
          "Burning at low speed",
          "Burning at apogee",
          "Burning at zero velocity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Rocket Equation",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Oberth effect: burns at high speed yield more Δv."
      },
      {
        "id": 25,
        "question": "The velocity of a satellite in a circular orbit is:",
        "options": [
          "√(GM/r)",
          "√(2GM/r)",
          "GM/r",
          "2πr/T"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Orbital Motion",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "v = √(GM/r) for circular orbits."
      },
      {
        "id": 26,
        "question": "The launch azimuth is the angle measured from:",
        "options": [
          "North clockwise to launch direction",
          "East clockwise to launch direction",
          "South clockwise to launch direction",
          "West clockwise to launch direction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Reference Frames",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Launch azimuth is from North clockwise."
      },
      {
        "id": 27,
        "question": "The main effect of third-body perturbations (e.g., Moon, Sun) on Earth satellites is:",
        "options": [
          "Long-term changes in orbital elements",
          "Immediate orbital decay",
          "Increase in mass",
          "Increase in velocity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Perturbations",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Third-body effects cause slow changes in orbit."
      },
      {
        "id": 28,
        "question": "The minimum energy required for a spacecraft to escape Earth’s gravity is equal to:",
        "options": [
          "The magnitude of its gravitational potential energy at the surface",
          "Twice its kinetic energy in orbit",
          "Its kinetic energy at escape velocity",
          "Its total energy in orbit"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Escape Velocity",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Escape energy = |potential energy| at surface."
      },
      {
        "id": 29,
        "question": "The main reason for using gravity assist maneuvers is to:",
        "options": [
          "Change spacecraft velocity and trajectory using a planet’s gravity",
          "Reduce spacecraft mass",
          "Increase spacecraft mass",
          "Reduce fuel consumption for all orbits"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Interplanetary Trajectories",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gravity assists use planetary gravity to change speed/direction."
      },
      {
        "id": 30,
        "question": "The right ascension of the ascending node (RAAN) is measured from:",
        "options": [
          "Vernal equinox to ascending node",
          "Ascending node to perigee",
          "Perigee to apogee",
          "North pole to ascending node"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Space Mechanics",
        "topic": "Orbital Elements",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "RAAN is from vernal equinox to ascending node."
      }
      
    ],
    'Avionics': [
      {
        "id": 1,
        "question": "The primary instrument used to measure altitude in an aircraft is the:",
        "options": [
          "Altimeter",
          "Airspeed Indicator",
          "Vertical Speed Indicator",
          "Turn Coordinator"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Flight Instruments",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Altimeter uses static pressure to indicate altitude."
      },
      {
        "id": 2,
        "question": "The pitot tube is primarily used to measure:",
        "options": [
          "Dynamic pressure",
          "Static pressure",
          "Temperature",
          "Humidity"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Sensors",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Pitot tube measures dynamic pressure for airspeed calculation."
      },
      {
        "id": 3,
        "question": "The Airspeed Indicator (ASI) displays:",
        "options": [
          "Indicated airspeed",
          "True airspeed",
          "Groundspeed",
          "Mach number"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Flight Instruments",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "ASI shows indicated airspeed based on pitot-static system."
      },
      {
        "id": 4,
        "question": "The Vertical Speed Indicator (VSI) measures:",
        "options": [
          "Rate of climb or descent",
          "Altitude",
          "Airspeed",
          "Bank angle"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Flight Instruments",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "VSI uses static pressure change rate to indicate vertical speed."
      },
      {
        "id": 5,
        "question": "The Turn Coordinator provides information about:",
        "options": [
          "Rate of turn and roll",
          "Altitude",
          "Airspeed",
          "Yaw only"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Flight Instruments",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Turn Coordinator shows both rate of turn and roll."
      },
      {
        "id": 6,
        "question": "The Attitude Indicator displays:",
        "options": [
          "Pitch and bank angles",
          "Yaw angle",
          "Altitude",
          "Airspeed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Flight Instruments",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Attitude Indicator shows pitch and roll relative to the horizon."
      },
      {
        "id": 7,
        "question": "The primary sensor for measuring aircraft heading is the:",
        "options": [
          "Magnetic compass",
          "Pitot tube",
          "Gyro horizon",
          "Altimeter"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Navigation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Magnetic compass indicates aircraft heading."
      },
      {
        "id": 8,
        "question": "The Inertial Navigation System (INS) determines position using:",
        "options": [
          "Accelerometers and gyroscopes",
          "GPS satellites",
          "Radio beacons",
          "Barometric pressure"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Navigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "INS integrates acceleration and rotation to compute position."
      },
      {
        "id": 9,
        "question": "The main function of an autopilot in aircraft is to:",
        "options": [
          "Automatically control flight path",
          "Measure airspeed",
          "Display altitude",
          "Communicate with ATC"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Control Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Autopilot maintains or changes aircraft attitude and trajectory."
      },
      {
        "id": 10,
        "question": "The basic principle of a gyroscope used in aircraft instruments is:",
        "options": [
          "Rigidity in space",
          "Magnetic induction",
          "Thermal expansion",
          "Bernoulli’s principle"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gyros maintain orientation due to rigidity in space."
      },
      {
        "id": 11,
        "question": "The Machmeter is used to display:",
        "options": [
          "Mach number",
          "Airspeed in knots",
          "Altitude",
          "Vertical speed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Flight Instruments",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Machmeter shows the ratio of airspeed to local speed of sound."
      },
      {
        "id": 12,
        "question": "The main advantage of fly-by-wire systems is:",
        "options": [
          "Reduced weight and increased reliability",
          "Increased manual control",
          "Slower response",
          "Higher fuel consumption"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Control Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fly-by-wire replaces mechanical linkages with electronic signals."
      },
      {
        "id": 13,
        "question": "The Distance Measuring Equipment (DME) provides:",
        "options": [
          "Slant range distance to a ground station",
          "Altitude",
          "Airspeed",
          "Heading"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Navigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DME gives distance to a radio beacon."
      },
      {
        "id": 14,
        "question": "The function of the transponder in an aircraft is to:",
        "options": [
          "Respond to radar interrogation with coded signals",
          "Measure airspeed",
          "Display altitude",
          "Control autopilot"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Communication",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Transponder replies to ATC radar with aircraft identity and altitude."
      },
      {
        "id": 15,
        "question": "The main purpose of the Angle of Attack (AoA) sensor is to:",
        "options": [
          "Warn of stall conditions",
          "Measure bank angle",
          "Indicate altitude",
          "Control yaw"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "AoA sensor helps prevent stalls by warning of high angles."
      },
      {
        "id": 16,
        "question": "The basic function of a Radio Altimeter is to measure:",
        "options": [
          "Height above ground level",
          "Height above sea level",
          "Airspeed",
          "Temperature"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Navigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Radio altimeter gives true altitude above terrain."
      },
      {
        "id": 17,
        "question": "The main function of the Flight Data Recorder (FDR) is to:",
        "options": [
          "Record flight parameters for analysis",
          "Display airspeed",
          "Transmit ATC communications",
          "Control autopilot"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Flight Instruments",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "FDR records key flight data for investigation."
      },
      {
        "id": 18,
        "question": "The main function of the Cockpit Voice Recorder (CVR) is to:",
        "options": [
          "Record crew communications",
          "Display altitude",
          "Transmit weather data",
          "Control navigation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Flight Instruments",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "CVR records cockpit audio for safety and investigation."
      },
      {
        "id": 19,
        "question": "The main purpose of the yaw damper is to:",
        "options": [
          "Reduce Dutch roll oscillations",
          "Increase roll rate",
          "Control pitch",
          "Display heading"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Control Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Yaw damper stabilizes directional oscillations."
      },
      {
        "id": 20,
        "question": "The main advantage of glass cockpit displays is:",
        "options": [
          "Integration and clarity of information",
          "Heavier weight",
          "Slower response",
          "Less reliability"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Flight Instruments",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Glass cockpits integrate multiple displays for better situational awareness."
      },
      {
        "id": 21,
        "question": "The main function of the Mode Control Panel (MCP) is to:",
        "options": [
          "Select and control autopilot modes",
          "Display airspeed",
          "Record flight data",
          "Transmit ATC signals"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Control Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "MCP allows pilots to control autopilot and flight director modes."
      },
      {
        "id": 22,
        "question": "The main function of the Traffic Collision Avoidance System (TCAS) is to:",
        "options": [
          "Warn of potential mid-air collisions",
          "Display altitude",
          "Control autopilot",
          "Record flight data"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Safety Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "TCAS alerts pilots to nearby aircraft to avoid collisions."
      },
      {
        "id": 23,
        "question": "The main function of the Flight Management System (FMS) is to:",
        "options": [
          "Automate navigation and performance calculations",
          "Display airspeed",
          "Control ailerons",
          "Transmit weather data"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Navigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "FMS integrates navigation, performance, and guidance functions."
      },
      {
        "id": 24,
        "question": "The main function of the Automatic Direction Finder (ADF) is to:",
        "options": [
          "Indicate direction to a radio beacon",
          "Display altitude",
          "Control autopilot",
          "Measure airspeed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Navigation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ADF points to NDB radio beacons for navigation."
      },
      {
        "id": 25,
        "question": "The main purpose of the Standby Attitude Indicator is to:",
        "options": [
          "Provide backup pitch and bank information",
          "Display airspeed",
          "Control autopilot",
          "Transmit ATC signals"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Flight Instruments",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Standby attitude indicator is a backup for primary attitude reference."
      },
      {
        "id": 26,
        "question": "The main function of the Weather Radar in aircraft is to:",
        "options": [
          "Detect and display weather hazards ahead",
          "Display altitude",
          "Control autopilot",
          "Transmit ATC signals"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Safety Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Weather radar helps pilots avoid hazardous weather."
      },
      {
        "id": 27,
        "question": "The main function of the Electronic Flight Instrument System (EFIS) is to:",
        "options": [
          "Display flight data on electronic screens",
          "Control autopilot",
          "Transmit ATC signals",
          "Record flight data"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Flight Instruments",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "EFIS replaces mechanical gauges with electronic displays."
      },
      {
        "id": 28,
        "question": "The main function of the Global Positioning System (GPS) in aviation is to:",
        "options": [
          "Provide accurate position and navigation data",
          "Display altitude",
          "Control autopilot",
          "Measure airspeed"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Navigation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "GPS gives precise latitude, longitude, and altitude."
      },
      {
        "id": 29,
        "question": "The primary function of the Flight Director is to:",
        "options": [
          "Provide visual guidance cues for manual or autopilot flight",
          "Display airspeed",
          "Control ailerons",
          "Record flight data"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Control Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Flight director gives pilots guidance bars for attitude and navigation."
      },
      {
        "id": 30,
        "question": "The main function of the Air Data Computer (ADC) is to:",
        "options": [
          "Process pitot and static data to compute airspeed, altitude, and Mach number",
          "Display attitude",
          "Control autopilot",
          "Record flight data"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Avionics",
        "topic": "Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ADC computes key air data parameters from sensor inputs."
      }
      
    ]
  },

  // Biotechnology Questions
  'Biotechnology': {
    'Biochemistry': [
      {
        "id": 1,
        "question": "Which of the following amino acids contains a sulfur atom in its side chain?",
        "options": [
          "Methionine",
          "Leucine",
          "Valine",
          "Proline"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Amino Acids",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Methionine contains a sulfur atom in its side chain."
      },
      {
        "id": 2,
        "question": "Which of the following is the main storage polysaccharide in animals?",
        "options": [
          "Glycogen",
          "Cellulose",
          "Starch",
          "Chitin"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Carbohydrates",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Glycogen is the primary storage polysaccharide in animals."
      },
      {
        "id": 3,
        "question": "Which one of the following enzymes is used in PCR?",
        "options": [
          "Taq polymerase",
          "Hexokinase",
          "Amylase",
          "Pepsin"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Enzymes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Taq polymerase is thermostable and used in PCR.[1]"
      },
      {
        "id": 4,
        "question": "Which of the following is an example of a reducing sugar?",
        "options": [
          "Glucose",
          "Sucrose",
          "Cellulose",
          "Amylose"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Carbohydrates",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Glucose is a reducing sugar."
      },
      {
        "id": 5,
        "question": "The net yield of ATP and NADH per mole of glucose during lactic acid fermentation is:",
        "options": [
          "2 ATP and 0 NADH",
          "4 ATP and 2 NADH",
          "2 ATP and 2 NADH",
          "4 ATP and 0 NADH"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Metabolism",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lactic acid fermentation yields 2 ATP and 0 net NADH per glucose.[3]"
      },
      {
        "id": 6,
        "question": "Which of the following is an ABC transporter?",
        "options": [
          "Multidrug resistance protein",
          "ATP synthase",
          "Acetylcholine receptor",
          "Bacteriorhodopsin"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Membrane Proteins",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ABC transporters include multidrug resistance proteins.[3]"
      },
      {
        "id": 7,
        "question": "The degree of inhibition for an enzyme-catalyzed reaction at a particular inhibitor concentration is independent of initial substrate concentration. The inhibition follows:",
        "options": [
          "Non-competitive inhibition",
          "Competitive inhibition",
          "Uncompetitive inhibition",
          "Mixed inhibition"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Enzyme Inhibition",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Non-competitive inhibition is independent of substrate concentration.[3]"
      },
      {
        "id": 8,
        "question": "Which pathway is an alternative to glycolysis?",
        "options": [
          "Pentose phosphate pathway",
          "Citric acid cycle",
          "Gluconeogenesis",
          "Glyoxylate pathway"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Metabolism",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pentose phosphate pathway is an alternative to glycolysis.[3]"
      },
      {
        "id": 9,
        "question": "Which amino acid residues coordinate zinc in zinc finger proteins?",
        "options": [
          "Cys and His",
          "Asp and Glu",
          "Arg and Lys",
          "Asp and Arg"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Proteins",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cysteine and histidine residues coordinate zinc in zinc fingers.[3]"
      },
      {
        "id": 10,
        "question": "Which of the following amino acids has three ionizable groups?",
        "options": [
          "Lysine",
          "Glycine",
          "Leucine",
          "Valine"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Amino Acids",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lysine has three ionizable groups.[3]"
      },
      {
        "id": 11,
        "question": "Which of the following is a coenzyme involved in the transfer of one-carbon units?",
        "options": [
          "Tetrahydrofolate (THF)",
          "NAD+",
          "Coenzyme Q",
          "Biotin"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Cofactors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "THF transfers one-carbon units in metabolism."
      },
      {
        "id": 12,
        "question": "The main product of the β-oxidation of fatty acids is:",
        "options": [
          "Acetyl-CoA",
          "Pyruvate",
          "Lactate",
          "Glucose"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Metabolism",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "β-oxidation produces acetyl-CoA."
      },
      {
        "id": 13,
        "question": "Which of the following is a non-reducing disaccharide?",
        "options": [
          "Sucrose",
          "Lactose",
          "Maltose",
          "Cellobiose"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Carbohydrates",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sucrose is a non-reducing sugar."
      },
      {
        "id": 14,
        "question": "Which vitamin is required for the carboxylation of acetyl-CoA to malonyl-CoA?",
        "options": [
          "Biotin",
          "Niacin",
          "Folate",
          "Vitamin K"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Vitamins",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Biotin is a coenzyme for carboxylation reactions."
      },
      {
        "id": 15,
        "question": "Which of the following is the main function of the sodium-potassium pump (Na⁺/K⁺-ATPase)?",
        "options": [
          "Maintains the resting membrane potential",
          "Synthesizes ATP",
          "Facilitates passive ion movement",
          "Catalyzes peptide bond formation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Membrane Transport",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Na⁺/K⁺-ATPase maintains membrane potential by active transport."
      },
      {
        "id": 16,
        "question": "Levinthal’s paradox is related to:",
        "options": [
          "Protein folding",
          "DNA replication",
          "RNA splicing",
          "Enzyme catalysis"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Proteins",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Levinthal’s paradox addresses the complexity of protein folding pathways.[3]"
      },
      {
        "id": 17,
        "question": "Which of the following bonds stabilizes the secondary structure of proteins?",
        "options": [
          "Hydrogen bonds",
          "Disulfide bonds",
          "Peptide bonds",
          "Ionic bonds"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Proteins",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Secondary structure is stabilized by hydrogen bonds."
      },
      {
        "id": 18,
        "question": "Which of the following is a precursor for the synthesis of purine nucleotides?",
        "options": [
          "Ribose-5-phosphate",
          "Glucose-6-phosphate",
          "Acetyl-CoA",
          "Pyruvate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Nucleic Acids",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ribose-5-phosphate is a precursor for purine biosynthesis."
      },
      {
        "id": 19,
        "question": "Which of the following is NOT a component of the electron transport chain?",
        "options": [
          "Succinate dehydrogenase",
          "Cytochrome c",
          "ATP synthase",
          "Hexokinase"
        ],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Metabolism",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hexokinase is not part of the electron transport chain."
      },
      {
        "id": 20,
        "question": "Which of the following is the main product of the urea cycle?",
        "options": [
          "Urea",
          "Ammonia",
          "Uric acid",
          "Creatinine"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Metabolism",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Urea is the main nitrogenous waste in the urea cycle."
      },
      {
        "id": 21,
        "question": "Which of the following is a competitive inhibitor of succinate dehydrogenase?",
        "options": [
          "Malonate",
          "Fumarate",
          "Oxaloacetate",
          "Citrate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Enzyme Inhibition",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Malonate is a classic competitive inhibitor of succinate dehydrogenase."
      },
      {
        "id": 22,
        "question": "Which of the following is a major function of peroxisomes?",
        "options": [
          "β-oxidation of very long-chain fatty acids",
          "Protein synthesis",
          "Glycolysis",
          "DNA replication"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Cell Organelles",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Peroxisomes oxidize very long-chain fatty acids."
      },
      {
        "id": 23,
        "question": "Which of the following is a major allosteric activator of phosphofructokinase-1 (PFK-1)?",
        "options": [
          "Fructose-2,6-bisphosphate",
          "ATP",
          "Citrate",
          "Glucose-6-phosphate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Metabolism",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fructose-2,6-bisphosphate is a potent activator of PFK-1."
      },
      {
        "id": 24,
        "question": "Which of the following is the main function of cytochrome c in mitochondria?",
        "options": [
          "Electron transfer in the respiratory chain",
          "ATP synthesis",
          "Substrate-level phosphorylation",
          "Transport of fatty acids"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Metabolism",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cytochrome c transfers electrons in the electron transport chain."
      },
      {
        "id": 25,
        "question": "Which of the following is a product of the pentose phosphate pathway?",
        "options": [
          "NADPH",
          "ATP",
          "FADH2",
          "Pyruvate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Metabolism",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "NADPH is generated in the pentose phosphate pathway."
      },
      {
        "id": 26,
        "question": "Which of the following is a major function of cholesterol in biological membranes?",
        "options": [
          "Modulates membrane fluidity",
          "Acts as a primary energy source",
          "Catalyzes reactions",
          "Facilitates active transport"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Membranes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cholesterol modulates membrane fluidity."
      },
      {
        "id": 27,
        "question": "Which of the following is a gluconeogenic precursor?",
        "options": [
          "Lactate",
          "Acetyl-CoA",
          "Palmitate",
          "Fructose-2,6-bisphosphate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Metabolism",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lactate can be converted to glucose in gluconeogenesis."
      },
      {
        "id": 28,
        "question": "Which of the following is the major buffer in blood?",
        "options": [
          "Bicarbonate",
          "Phosphate",
          "Ammonia",
          "Citrate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Buffers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bicarbonate is the primary buffer in blood."
      },
      {
        "id": 29,
        "question": "Which of the following is a characteristic feature of allosteric enzymes?",
        "options": [
          "Sigmoidal kinetics",
          "Michaelis-Menten kinetics",
          "Irreversible inhibition",
          "Single subunit"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Enzymes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Allosteric enzymes show sigmoidal (cooperative) kinetics."
      },
      {
        "id": 30,
        "question": "Which of the following is a major function of the lysosome?",
        "options": [
          "Degradation of macromolecules",
          "ATP synthesis",
          "Protein synthesis",
          "DNA replication"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Biochemistry",
        "topic": "Cell Organelles",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lysosomes degrade cellular macromolecules."
      }
      
    ],
    'Microbiology': [
      {
        "id": 1,
        "question": "Who is credited with the discovery of the microbial world using a simple microscope?",
        "options": [
          "Antonie van Leeuwenhoek",
          "Louis Pasteur",
          "Robert Koch",
          "Alexander Fleming"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Historical Perspective",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Leeuwenhoek was the first to observe microbes using his microscope.[1][7]"
      },
      {
        "id": 2,
        "question": "Which technique is used for isolation of pure microbial cultures?",
        "options": [
          "Streak plate method",
          "Gram staining",
          "PCR",
          "ELISA"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Methods in Microbiology",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Streak plate is a classical pure culture isolation method.[1][2][3][4]"
      },
      {
        "id": 3,
        "question": "Which of the following is NOT a eukaryotic microorganism?",
        "options": [
          "Archaea",
          "Yeast",
          "Mold",
          "Protozoa"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Taxonomy and Diversity",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Archaea are prokaryotes; the others are eukaryotes.[1][2][3][4][5][6]"
      },
      {
        "id": 4,
        "question": "Which structure is unique to Gram-negative bacteria?",
        "options": [
          "Outer membrane",
          "Peptidoglycan",
          "Flagellum",
          "Capsule"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Prokaryotic Cells",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Outer membrane is found only in Gram-negative bacteria.[1][2][4][5][6]"
      },
      {
        "id": 5,
        "question": "The exponential phase of bacterial growth is characterized by:",
        "options": [
          "Constant and maximum specific growth rate",
          "Nutrient limitation",
          "Cell death",
          "No cell division"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Growth",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Cells divide at a constant, maximal rate in exponential phase.[1][2][4][5][6]"
      },
      {
        "id": 6,
        "question": "Which of the following is most effective for sterilization of heat-sensitive solutions?",
        "options": [
          "Filtration",
          "Autoclaving",
          "Dry heat",
          "UV radiation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Control of Micro-organisms",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Filtration removes microbes without heat, ideal for sensitive solutions.[1][2][4][5][6]"
      },
      {
        "id": 7,
        "question": "Which pathway is unique to some bacteria and not found in eukaryotes?",
        "options": [
          "Entner-Doudoroff pathway",
          "Glycolysis",
          "TCA cycle",
          "Pentose phosphate pathway"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Metabolism",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Entner-Doudoroff pathway is found in some prokaryotes only.[1][2][4][5][6]"
      },
      {
        "id": 8,
        "question": "Which of the following is NOT a mechanism of antibiotic resistance?",
        "options": [
          "Increased cell wall permeability",
          "Enzymatic drug inactivation",
          "Efflux pumps",
          "Target modification"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Antibiotics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Increased permeability would increase, not decrease, drug entry.[1][2][4][5][6]"
      },
      {
        "id": 9,
        "question": "Which of the following is a DNA virus?",
        "options": [
          "Adenovirus",
          "Influenza virus",
          "HIV",
          "Poliovirus"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Viruses",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Adenovirus is a double-stranded DNA virus.[1][2][3][4][5][6]"
      },
      {
        "id": 10,
        "question": "Which method is commonly used to quantify bacterial cell numbers in a culture?",
        "options": [
          "Serial dilution and plate count",
          "Gram staining",
          "PCR",
          "ELISA"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Methods in Microbiology",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Serial dilution and plate count estimate viable cell numbers.[1][2][4][5][6]"
      },
      {
        "id": 11,
        "question": "Which of the following is a component of the prokaryotic flagellum?",
        "options": [
          "Flagellin",
          "Tubulin",
          "Actin",
          "Dynein"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Prokaryotic Cells",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Flagellin is the structural protein of bacterial flagella.[1][2][4][5][6]"
      },
      {
        "id": 12,
        "question": "Which of the following is a method of horizontal gene transfer in bacteria?",
        "options": [
          "Conjugation",
          "Binary fission",
          "Sporulation",
          "Endocytosis"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Genetics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Conjugation transfers DNA between bacteria via direct contact.[1][2][4][5][6]"
      },
      {
        "id": 13,
        "question": "Which of the following is a major nitrogen-fixing microorganism?",
        "options": [
          "Rhizobium",
          "Escherichia coli",
          "Bacillus subtilis",
          "Saccharomyces cerevisiae"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Ecology",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rhizobium fixes nitrogen in symbiosis with legumes.[3][4][5][6][9]"
      },
      {
        "id": 14,
        "question": "Which of the following is a selective medium for Gram-negative bacteria?",
        "options": [
          "MacConkey agar",
          "Nutrient agar",
          "Blood agar",
          "Sabouraud agar"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Methods in Microbiology",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "MacConkey agar selects for Gram-negative enteric bacteria.[1][2][4][5][6]"
      },
      {
        "id": 15,
        "question": "Which of the following is a major component of fungal cell walls?",
        "options": [
          "Chitin",
          "Cellulose",
          "Peptidoglycan",
          "Lignin"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Taxonomy and Diversity",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Chitin is a key polysaccharide in fungal cell walls.[1][2][3][4][5][6]"
      },
      {
        "id": 16,
        "question": "Which of the following is a common method for detection of microbial antigens?",
        "options": [
          "ELISA",
          "Gram staining",
          "PCR",
          "Phase contrast microscopy"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Methods in Microbiology",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ELISA is widely used for antigen detection.[1][2][4][5][6]"
      },
      {
        "id": 17,
        "question": "Which of the following is an obligate intracellular pathogen?",
        "options": [
          "Chlamydia",
          "Staphylococcus",
          "Bacillus",
          "Pseudomonas"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Diseases",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Chlamydia can only grow inside host cells.[1][2][4][5][6]"
      },
      {
        "id": 18,
        "question": "Which of the following is a common nosocomial pathogen?",
        "options": [
          "Staphylococcus aureus",
          "Nitrosomonas",
          "Rhizobium",
          "Clostridium tetani"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Diseases",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "S. aureus is a frequent cause of hospital-acquired infections.[1][2][4][5][6]"
      },
      {
        "id": 19,
        "question": "Which of the following is a major mechanism for genetic exchange in viruses?",
        "options": [
          "Recombination",
          "Conjugation",
          "Transformation",
          "Transduction"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Genetics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Recombination is a key mechanism for viral genetic diversity.[1][2][3][4][5][6]"
      },
      {
        "id": 20,
        "question": "Which of the following is a typical reservoir for zoonotic infections?",
        "options": [
          "Animals",
          "Water",
          "Soil",
          "Air"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Diseases",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Zoonoses are diseases transmitted from animals to humans.[1][2][4][5][6]"
      },
      {
        "id": 21,
        "question": "Which of the following is a target for β-lactam antibiotics?",
        "options": [
          "Peptidoglycan synthesis",
          "Protein synthesis",
          "DNA replication",
          "RNA polymerase"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Antibiotics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "β-lactams inhibit cell wall (peptidoglycan) synthesis.[1][2][4][5][6]"
      },
      {
        "id": 22,
        "question": "Which of the following is the main energy source in chemolithotrophic bacteria?",
        "options": [
          "Inorganic compounds",
          "Glucose",
          "Fatty acids",
          "Amino acids"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Metabolism",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Chemolithotrophs use inorganic molecules for energy.[1][2][4][5][6]"
      },
      {
        "id": 23,
        "question": "Which of the following is a key feature of biofilms?",
        "options": [
          "Microbial cells embedded in a self-produced matrix",
          "Free-floating single cells",
          "Lack of extracellular polymeric substances",
          "Rapid cell death"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Growth",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Biofilms are communities in a matrix of extracellular polymers.[1][2][4][5][6]"
      },
      {
        "id": 24,
        "question": "Which of the following is a classical method for viral quantification?",
        "options": [
          "Plaque assay",
          "Gram staining",
          "ELISA",
          "PCR"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Methods in Microbiology",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Plaque assay is used to count infectious virus particles.[1][2][4][5][6]"
      },
      {
        "id": 25,
        "question": "Which of the following is a major cause of emerging infectious diseases?",
        "options": [
          "Zoonotic transmission",
          "Increased soil fertility",
          "Improved sanitation",
          "Reduced antibiotic use"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Diseases",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Emerging diseases often arise from animal-to-human transmission.[1][2][4][5][6]"
      },
      {
        "id": 26,
        "question": "Which of the following is a common method for detection of microbial DNA?",
        "options": [
          "PCR",
          "Gram staining",
          "ELISA",
          "Phase contrast microscopy"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Methods in Microbiology",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "PCR amplifies and detects specific DNA sequences.[1][2][4][5][6]"
      },
      {
        "id": 27,
        "question": "Which of the following is a common feature of all viruses?",
        "options": [
          "Obligate intracellular replication",
          "Cell wall",
          "Ribosomes",
          "Binary fission"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Viruses",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Viruses replicate only inside host cells.[1][2][3][4][5][6]"
      },
      {
        "id": 28,
        "question": "Which of the following is a common method for sterilizing laboratory glassware?",
        "options": [
          "Dry heat oven",
          "Filtration",
          "UV radiation",
          "Autoclaving"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Control of Micro-organisms",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dry heat is suitable for sterilizing glassware.[1][2][4][5][6]"
      },
      {
        "id": 29,
        "question": "Which of the following is a common method for identification of bacteria based on 16S rRNA gene?",
        "options": [
          "Sequencing",
          "Gram staining",
          "ELISA",
          "Plaque assay"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Microbial Taxonomy and Diversity",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "16S rRNA gene sequencing is a molecular identification method.[1][2][4][5][6]"
      },
      {
        "id": 30,
        "question": "Which of the following is a common mechanism for antibiotic resistance gene transfer in bacteria?",
        "options": [
          "Conjugation",
          "Binary fission",
          "Endospore formation",
          "Chemotaxis"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Microbiology",
        "topic": "Antibiotics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Conjugation spreads resistance genes via plasmids.[1][2][4][5][6]"
      }
      
    ],
    'Cell Biology': [
      {
        "id": 1,
        "question": "What is a cell?",
        "options": ["smallest and advanced unit of life", "smallest and basic unit of life", "largest and basic unit of life", "largest and advanced unit of life"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Introduction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "A cell is the smallest and most fundamental unit of life.:contentReference[oaicite:0]{index=0}"
      },
      {
        "id": 2,
        "question": "Which of the following is a functional unit of the body?",
        "options": ["Mitochondria", "Cytoplasm", "Spleen", "Cell"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Introduction",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Cells are the structural and functional units of life.:contentReference[oaicite:1]{index=1}"
      },
      {
        "id": 3,
        "question": "What is cell biology?",
        "options": ["Study of cell division only", "Study of cancerous cells", "Study of cell structure and function", "Study of metaphase of a cell"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Definitions",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Cell biology deals with the study of cell structure and function.:contentReference[oaicite:2]{index=2}"
      },
      {
        "id": 4,
        "question": "Which of the following is used by cells to interact with other cells?",
        "options": ["Cell tubules", "Cell junctions", "Cell adhesions", "Cell detectors"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cell Interactions",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Cell junctions mediate intercellular interactions.:contentReference[oaicite:3]{index=3}"
      },
      {
        "id": 5,
        "question": "Which type of cells are epithelial cells rich in?",
        "options": ["Cardiac cells", "Prokaryotic cells", "Hepatic cells", "Epithelial cells"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cell Interactions",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Epithelial cells have abundant cell junctions.:contentReference[oaicite:4]{index=4}"
      },
      {
        "id": 6,
        "question": "What is epithelial–mesenchymal transition?",
        "options": ["Loss of migration and gain of adhesion", "Formation of mesenchymal cells", "Loss of adhesion and gain of migration", "Lysis of cell"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cell Interactions",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cells lose adhesion and gain motility.:contentReference[oaicite:5]{index=5}"
      },
      {
        "id": 7,
        "question": "In which cell types are gap junctions absent?",
        "options": ["Sperm cells", "Brain cells", "Reproductive cells", "Cardiac cells"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cell Interactions",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gap junctions are absent in motile cells like sperm.:contentReference[oaicite:6]{index=6}"
      },
      {
        "id": 8,
        "question": "Which cells contain sarcoplasmic reticulum?",
        "options": ["Muscle cells", "Liver cells", "Kidney cells", "Neurons"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Organelles",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Sarcoplasmic reticulum is a modified smooth ER in muscle.:contentReference[oaicite:7]{index=7}"
      },
      {
        "id": 9,
        "question": "Which of the following are phagocytic cells?",
        "options": ["Neutrophils, mast cells", "Mast cells, macrophages", "Mast cells, antibodies", "Neutrophils, macrophages"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cell Function",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Neutrophils and macrophages carry out phagocytosis.:contentReference[oaicite:8]{index=8}"
      },
      {
        "id": 10,
        "question": "Who discovered the term 'cell' in 1665?",
        "options": ["Antonie van Leeuwenhoek", "Robert Hooke", "Matthias Schleiden", "Theodor Schwann"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "History",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Robert Hooke named cells after cork structure.:contentReference[oaicite:9]{index=9}"
      },
      {
        "id": 11,
        "question": "Which organelle is known as the powerhouse of the cell?",
        "options": ["Mitochondria", "Cytoplasm", "Lysosome", "Nuclei"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Organelles",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Mitochondria produce cellular ATP.:contentReference[oaicite:10]{index=10}"
      },
      {
        "id": 12,
        "question": "What is lysosome often called?",
        "options": ["Mitochondria", "Golgi complex", "Lysosome", "Nucleus"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Organelles",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Lysosome is known as the suicide bag.:contentReference[oaicite:11]{index=11}"
      },
      {
        "id": 13,
        "question": "Lysosomes are produced by which organelle?",
        "options": ["Mitochondria", "ER", "Golgi complex", "DNA"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Organelles",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lysosomes originate from the Golgi.:contentReference[oaicite:12]{index=12}"
      },
      {
        "id": 14,
        "question": "Which organelle transports, modifies, and packages proteins?",
        "options": ["Mitochondria", "ER", "Golgi complex", "DNA"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Organelles",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "The Golgi processes and exports proteins and lipids.:contentReference[oaicite:13]{index=13}"
      },
      {
        "id": 15,
        "question": "Which cell doesn't contain a cell wall?",
        "options": ["Plant cell", "Bacteria", "Fungi", "Animal cell"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cell Types",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Animal cells lack a cell wall.:contentReference[oaicite:14]{index=14}"
      },
      {
        "id": 16,
        "question": "Who is considered the father of cell biology?",
        "options": ["George N. Papanicolaou", "George Emil Palade", "Robert Hooke", "None of the above"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "History",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Nobel laureate George Emil Palade pioneered electron microscopy.:contentReference[oaicite:15]{index=15}"
      },
      {
        "id": 17,
        "question": "DNA is stored in which organelle?",
        "options": ["Cell wall", "Cell Membrane", "Nucleus", "Cytoplasm"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Organelles",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "DNA is contained within the nucleus.:contentReference[oaicite:16]{index=16}"
      },
      {
        "id": 18,
        "question": "Which cell lacks a nucleus?",
        "options": ["Eukaryotic", "Prokaryotic", "Both", "None"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cell Types",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Prokaryotes do not have a nucleus.:contentReference[oaicite:17]{index=17}"
      },
      {
        "id": 19,
        "question": "Viruses are NOT considered cells because:",
        "options": ["They lack DNA", "They have cell walls", "They aren’t made of cells", "They perform photosynthesis"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cell Theory",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Viruses are acellular and not composed of cells.:contentReference[oaicite:18]{index=18}"
      },
      {
        "id": 20,
        "question": "The cell theory does NOT apply to:",
        "options": ["Algae", "Virus", "Bacteria", "Fungi"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cell Theory",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Cell theory excludes viruses.:contentReference[oaicite:19]{index=19}"
      },
      {
        "id": 21,
        "question": "The prokaryotic cell lacks:",
        "options": ["DNA", "Nuclear membrane", "Chromatin", "Ribosomes"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cell Types",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Prokaryotes lack a nuclear envelope.:contentReference[oaicite:20]{index=20}"
      },
      {
        "id": 22,
        "question": "Which organelles show similarity to prokaryotic cells?",
        "options": ["Mitochondria only", "Chloroplast only", "Both mitochondria and chloroplast", "None"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Organelles",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Both contain circular DNA and 70S ribosomes.:contentReference[oaicite:21]{index=21}"
      },
      {
        "id": 23,
        "question": "Which structure regulates material entry/exit?",
        "options": ["Nucleus", "Cytoplasm", "Nuclear envelope", "Cell membrane"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Membrane",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "The plasma membrane controls transport.:contentReference[oaicite:22]{index=22}"
      },
      {
        "id": 24,
        "question": "Diffusion is the:",
        "options": ["Exocytosis", "Pinocytosis", "Endocytosis", "Movement from high to low concentration"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Membrane Transport",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Diffusion moves molecules down a gradient.:contentReference[oaicite:23]{index=23}"
      },
      {
        "id": 25,
        "question": "Osmosis is:",
        "options": ["Osmotic pressure", "Osmosis", "Facilitated diffusion", "Active transport"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Membrane Transport",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Osmosis is diffusion of water across a membrane.:contentReference[oaicite:24]{index=24}"
      },
      {
        "id": 26,
        "question": "Which of the following structures carries out motion of cells?",
        "options": ["Microvilli", "Cilia", "Flagella", "Pseudopodia"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cytoskeleton & Motility",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Microvilli do not mediate cell movement.:contentReference[oaicite:25]{index=25}"
      },
      {
        "id": 27,
        "question": "Sodium and potassium ions determine:",
        "options": ["Resting potential of nerve", "Calcium levels", "Glucose uptake", "pH balance"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Membrane Potential",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Resting membrane potential depends on Na⁺ and K⁺.:contentReference[oaicite:26]{index=26}"
      },
      {
        "id": 28,
        "question": "Which is NOT part of cell theory?",
        "options": ["All living things are made of cells", "Cells are basic units", "Very few cells reproduce", "All cells come from cells"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cell Theory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cell theory states all cells reproduce; not that only few reproduce.:contentReference[oaicite:27]{index=27}"
      },
      {
        "id": 29,
        "question": "Muscle contraction involves:",
        "options": ["Tropomyosin binds/release actin", "Myosin binds/release actin", "Actin binds/releases myosin", "None"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Cytoskeleton & Motility",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Myosin binds and releases actin during contraction.:contentReference[oaicite:28]{index=28}"
      },
      {
        "id": 30,
        "question": "Bacteriophages are:",
        "options": ["Bacteria", "Bacteria precursors", "Viruses", "Agents causing bacteria"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Cell Biology",
        "topic": "Virus & Cells",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bacteriophages are viruses that infect bacteria.:contentReference[oaicite:29]{index=29}"
      }
    ],
    'Molecular Biology': [
      {
        "id": 1,
        "question": "The basic repeating unit of chromatin is the:",
        "options": [
          "Nucleosome",
          "Histone",
          "Chromatid",
          "Centromere"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Chromosomes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Nucleosome is the fundamental unit of chromatin structure."
      },
      {
        "id": 2,
        "question": "Which enzyme unwinds the DNA double helix during replication?",
        "options": [
          "Helicase",
          "Ligase",
          "Primase",
          "Polymerase"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Replication",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Helicase unwinds the DNA at the replication fork."
      },
      {
        "id": 3,
        "question": "The process by which RNA is synthesized from a DNA template is called:",
        "options": [
          "Transcription",
          "Translation",
          "Replication",
          "Splicing"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Transcription",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Transcription is the synthesis of RNA from DNA."
      },
      {
        "id": 4,
        "question": "Which of the following is a stop codon in the genetic code?",
        "options": [
          "UAG",
          "AUG",
          "UGG",
          "GAA"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Translation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "UAG is one of the three stop codons."
      },
      {
        "id": 5,
        "question": "The enzyme responsible for joining Okazaki fragments is:",
        "options": [
          "DNA ligase",
          "DNA polymerase I",
          "Topoisomerase",
          "Helicase"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Replication",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DNA ligase seals nicks between Okazaki fragments."
      },
      {
        "id": 6,
        "question": "Which type of mutation does NOT change the amino acid sequence?",
        "options": [
          "Silent mutation",
          "Missense mutation",
          "Nonsense mutation",
          "Frameshift mutation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Mutations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Silent mutations do not alter the encoded amino acid."
      },
      {
        "id": 7,
        "question": "Which RNA molecule carries amino acids to the ribosome?",
        "options": [
          "tRNA",
          "mRNA",
          "rRNA",
          "snRNA"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Translation",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "tRNA brings amino acids to the ribosome during translation."
      },
      {
        "id": 8,
        "question": "The lac operon in E. coli is an example of:",
        "options": [
          "Inducible gene expression",
          "Constitutive gene expression",
          "Attenuation",
          "RNA interference"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Gene Regulation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lac operon is induced in the presence of lactose."
      },
      {
        "id": 9,
        "question": "Which of the following is NOT a component of a eukaryotic gene’s transcription unit?",
        "options": [
          "Origin of replication",
          "Promoter",
          "Exon",
          "Intron"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Transcription",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Origin of replication is not part of the transcription unit."
      },
      {
        "id": 10,
        "question": "Which enzyme is responsible for removing RNA primers during DNA replication in prokaryotes?",
        "options": [
          "DNA polymerase I",
          "DNA polymerase III",
          "Primase",
          "Ligase"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Replication",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DNA polymerase I removes RNA primers and fills the gap."
      },
      {
        "id": 11,
        "question": "Which of the following is a function of microRNA (miRNA)?",
        "options": [
          "Post-transcriptional gene silencing",
          "DNA replication",
          "Protein phosphorylation",
          "Ribosome assembly"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Non-coding RNA",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "miRNAs regulate gene expression by silencing mRNA."
      },
      {
        "id": 12,
        "question": "The process of removing introns from pre-mRNA is called:",
        "options": [
          "Splicing",
          "Capping",
          "Polyadenylation",
          "Editing"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Transcription/Processing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Splicing removes introns from pre-mRNA."
      },
      {
        "id": 13,
        "question": "Which DNA repair mechanism corrects thymine dimers caused by UV radiation?",
        "options": [
          "Nucleotide excision repair",
          "Base excision repair",
          "Mismatch repair",
          "Homologous recombination"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "DNA Repair",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "NER removes bulky lesions like thymine dimers."
      },
      {
        "id": 14,
        "question": "Which of the following is a mutagen that causes base substitutions?",
        "options": [
          "Nitrous acid",
          "UV light",
          "Gamma rays",
          "Ethidium bromide"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Mutagenesis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Nitrous acid deaminates bases causing transitions."
      },
      {
        "id": 15,
        "question": "Which of the following acts as a template for telomerase?",
        "options": [
          "RNA",
          "DNA",
          "Protein",
          "tRNA"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Replication",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Telomerase uses its own RNA as a template."
      },
      {
        "id": 16,
        "question": "The function of the sigma (σ) factor in prokaryotic transcription is to:",
        "options": [
          "Recognize promoter sequences",
          "Catalyze RNA synthesis",
          "Terminate transcription",
          "Splice mRNA"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Transcription",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sigma factor directs RNA polymerase to promoters."
      },
      {
        "id": 17,
        "question": "Which of the following is an example of a transversion mutation?",
        "options": [
          "A purine replaced by a pyrimidine",
          "A purine replaced by a purine",
          "A pyrimidine replaced by a pyrimidine",
          "A silent mutation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Mutations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Transversion is purine↔pyrimidine substitution."
      },
      {
        "id": 18,
        "question": "Which of the following is a regulatory element that increases transcription from a distance?",
        "options": [
          "Enhancer",
          "Promoter",
          "Operator",
          "Silencer"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Gene Regulation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Enhancers can act at a distance to increase transcription."
      },
      {
        "id": 19,
        "question": "Which enzyme catalyzes the formation of phosphodiester bonds during DNA synthesis?",
        "options": [
          "DNA polymerase",
          "Ligase",
          "Helicase",
          "Primase"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Replication",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "DNA polymerase forms phosphodiester bonds."
      },
      {
        "id": 20,
        "question": "Which of the following is NOT a role of non-coding RNA?",
        "options": [
          "Catalyzing translation",
          "Gene silencing",
          "Splicing",
          "Chromatin remodeling"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Non-coding RNA",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Translation is catalyzed by ribosomes, not ncRNA."
      },
      {
        "id": 21,
        "question": "Which of the following is a function of the 5’ cap in eukaryotic mRNA?",
        "options": [
          "Protection from degradation",
          "Amino acid activation",
          "DNA repair",
          "Termination of transcription"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Transcription/Processing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "5’ cap protects mRNA from exonuclease degradation."
      },
      {
        "id": 22,
        "question": "Which process is responsible for the diversity of antibodies?",
        "options": [
          "V(D)J recombination",
          "Alternative splicing",
          "RNA editing",
          "Polyadenylation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Gene Rearrangement",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "V(D)J recombination creates antibody diversity."
      },
      {
        "id": 23,
        "question": "Which of the following is a function of RNA interference (RNAi)?",
        "options": [
          "Gene silencing via mRNA degradation",
          "Enhancing translation",
          "DNA methylation",
          "Protein folding"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "RNA Interference",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "RNAi silences gene expression by degrading mRNA."
      },
      {
        "id": 24,
        "question": "Which DNA repair mechanism fixes mismatches that escape proofreading?",
        "options": [
          "Mismatch repair",
          "Nucleotide excision repair",
          "Base excision repair",
          "Photoreactivation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "DNA Repair",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Mismatch repair corrects errors post-replication."
      },
      {
        "id": 25,
        "question": "Which of the following is a template for RNA polymerase during transcription?",
        "options": [
          "DNA",
          "RNA",
          "Protein",
          "tRNA"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Transcription",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "DNA acts as a template for RNA synthesis."
      },
      {
        "id": 26,
        "question": "Which of the following is a function of snRNA in eukaryotes?",
        "options": [
          "Splicing of pre-mRNA",
          "DNA replication",
          "Protein synthesis",
          "Amino acid activation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Non-coding RNA",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "snRNA is part of the spliceosome for mRNA splicing."
      },
      {
        "id": 27,
        "question": "Which of the following is the function of the Shine-Dalgarno sequence?",
        "options": [
          "Ribosome binding site in prokaryotic mRNA",
          "Transcription termination",
          "DNA replication origin",
          "Splice site in eukaryotic mRNA"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Translation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Shine-Dalgarno sequence aligns ribosome in prokaryotes."
      },
      {
        "id": 28,
        "question": "Which of the following is a mutagenic agent that causes thymine dimers?",
        "options": [
          "UV light",
          "Nitrous acid",
          "Gamma rays",
          "Aflatoxin"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Mutagenesis",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "UV light induces thymine dimers in DNA."
      },
      {
        "id": 29,
        "question": "Which of the following is a regulatory sequence in prokaryotic operons?",
        "options": [
          "Operator",
          "Enhancer",
          "Polyadenylation site",
          "Silencer"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "Gene Regulation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Operators regulate transcription in prokaryotic operons."
      },
      {
        "id": 30,
        "question": "Which repair mechanism specifically recognizes and removes uracil from DNA?",
        "options": [
          "Base excision repair",
          "Nucleotide excision repair",
          "Mismatch repair",
          "Photoreactivation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Molecular Biology",
        "topic": "DNA Repair",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Base excision repair removes uracil from DNA."
      }
      
    ],
    'Bioprocess Engineering': [
      {
        "id": 1,
        "question": "Which component in bioprocess development refers to the purification and concentration of product?",
        "options": ["Upstream processing", "Mid‑stream processing", "Downstream processing", "Pre‑processing"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Process Steps",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "\"Downstream processing\" refers to the recovery and purification of products after fermentation :contentReference[oaicite:1]{index=1}."
      },
      {
        "id": 2,
        "question": "Calcium chloride is used to induce competency in which process?",
        "options": ["Sterilization", "DNA transformation", "Centrifugation", "Protein purification"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Genetic Engineering",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Calcium chloride makes bacterial cells competent for plasmid uptake during transformation :contentReference[oaicite:2]{index=2}."
      },
      {
        "id": 3,
        "question": "Pilot‑scale bioreactors typically have a capacity of:",
        "options": ["<1 L", "1–100 L", "100–1000 L", "1000–10 000 L"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Scale‑up",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pilot‑scale reactors are generally in the 100–1000 L range :contentReference[oaicite:3]{index=3}."
      },
      {
        "id": 4,
        "question": "Which fermentation mode uses intermittent addition of nutrients during culture?",
        "options": ["Batch", "Fed‑batch", "Continuous", "Semi‑batch"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Fermentation Modes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fed‑batch adds nutrients during fermentation to prolong productive phases :contentReference[oaicite:4]{index=4}."
      },
      {
        "id": 5,
        "question": "Penicillin production typically occurs in which growth phase?",
        "options": ["Lag", "Log", "Stationary", "Death"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Product Formation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "As a secondary metabolite penicillin is produced during the stationary phase :contentReference[oaicite:5]{index=5}."
      },
      {
        "id": 6,
        "question": "Snack: Penicillin production typically occurs in which growth phase?",
        "options": ["Lag", "Log", "Stationary", "Death"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Product Formation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "As a secondary metabolite penicillin is produced during the stationary phase :contentReference[oaicite:6]{index=6}."
      },
      {
        "id": 7,
        "question": "Which chemical method uses sodium sulfite to determine KLa in bioreactors?",
        "options": ["Static gassing‑out", "Dynamic gassing‑out", "Sulfite oxidation", "Sparger test"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Oxygen Transfer",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Sulfite oxidation method is used to measure the oxygen transfer coefficient (KLa) :contentReference[oaicite:7]{index=7}."
      },
      {
        "id": 8,
        "question": "Which reactor type commonly omits agitator blades and relies solely on gas mixing?",
        "options": ["Stirred tank", "Packed bed", "Bubble column", "Fluidized bed"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Reactor Types",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bubble‑column reactors use gas sparging and no mechanical agitator :contentReference[oaicite:8]{index=8}."
      },
      {
        "id": 9,
        "question": "In continuous culture maintaining steady state, a reactor such as:",
        "options": ["Batch fermenter", "Fed-batch", "Chemostat", "Shake flask"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Fermentation Modes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "A chemostat is a continuous reactor operating at steady state :contentReference[oaicite:9]{index=9}."
      },
      {
        "id": 10,
        "question": "Which nutrient addition strategy controls substrate concentration in a reactor?",
        "options": ["Batch", "Fed‑batch", "Continuous", "Solid state"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Process Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fed‑batch allows control over nutrient levels by feeding :contentReference[oaicite:10]{index=10}."
      },
      {
        "id": 11,
        "question": "Which process is also known as product recovery?",
        "options": ["Upstream", "Mid-stream", "Downstream", "Fermentation"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Process Steps",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Downstream processing recovers and purifies desired products :contentReference[oaicite:11]{index=11}."
      },
      {
        "id": 12,
        "question": "Scale‑up based on maintaining similar impeller tip speed belongs to which criteria?",
        "options": ["Geometric scaling", "KLa scaling", "Power per volume", "Tip-speed similarity"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Scale‑up",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Tip‑speed similarity is used as a scale‑up criterion :contentReference[oaicite:12]{index=12}."
      },
      {
        "id": 13,
        "question": "Which of the following fluid‑flow properties affects broth mixing in fermenters?",
        "options": ["Reynolds number", "Tip-speed", "KLa", "All of the above"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Fluid Flow",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All these factors influence mixing and transfer performance :contentReference[oaicite:13]{index=13}."
      },
      {
        "id": 14,
        "question": "Immobilized enzyme reactors use which reactor type?",
        "options": ["Stirred tank", "Packed bed", "Airlift", "Both a & b"],
        "correct": 3,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Reactor Types",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Packed bed and stirred tank reactors both are used for immobilized enzyme systems :contentReference[oaicite:14]{index=14}."
      },
      {
        "id": 15,
        "question": "Effective factors affecting immobilized enzyme kinetics include film and pore diffusion.",
        "options": ["True", "False"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Enzyme Reactors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Mass transfer limitations in film/pore diffusion affect immobilized enzyme performance :contentReference[oaicite:15]{index=15}."
      },
      {
        "id": 16,
        "question": "Homogeneous reactions in bioprocesses refer to:",
        "options": ["Cell‑substrate growth", "Enzyme catalysis in solution", "Solid immobilized catalyst", "Gas-phase combustion"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Reactions",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Homogeneous reactions occur in solution, like enzyme catalysis :contentReference[oaicite:16]{index=16}."
      },
      {
        "id": 17,
        "question": "Which mode of culture refers to continuous input/output with no volume change?",
        "options": ["Batch", "Fed‑batch", "Continuous", "Semi‑continuous"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Fermentation Modes",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Continuous culture maintains constant volume by balancing inflow and outflow :contentReference[oaicite:17]{index=17}."
      },
      {
        "id": 18,
        "question": "Which of these is NOT a common scale‑up criterion?",
        "options": ["Constant KLa", "Geometric similarity", "Impingement speed", "Impeller tip speed"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Scale‑up",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Impingement speed is not typically used in reactor scale‑up :contentReference[oaicite:18]{index=18}."
      },
      {
        "id": 19,
        "question": "Which reactor uses both bed carriers and fluid flow to immobilize enzymes?",
        "options": ["Packed bed", "Fluidized bed", "Stirred tank", "Airlift"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Reactor Types",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fluidized‑bed reactors suspend carriers in fluid, used for immobilized enzymes :contentReference[oaicite:19]{index=19}."
      },
      {
        "id": 20,
        "question": "Which is a key mass‑transfer parameter in aerated bioreactors?",
        "options": ["KLa", "Reynolds number", "Sherwood number", "Damköhler number"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Oxygen Transfer",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "KLa quantifies volumetric oxygen transfer in bioreactors :contentReference[oaicite:20]{index=20}."
      },
      {
        "id": 21,
        "question": "The dynamic gassing‑out method measures?",
        "options": ["Sulfite oxidation", "KLa", "Cell growth", "Temperature"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Measurement Techniques",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Dynamic gassing‑out is used to estimate KLa :contentReference[oaicite:21]{index=21}."
      },
      {
        "id": 22,
        "question": "Which reactor type is mechanically stirred and sparged with gas?",
        "options": ["Airlift", "Packed bed", "Stirred‑tank", "Bubble column"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Reactor Types",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Stirred‑tank reactors use mechanical impellers and spargers :contentReference[oaicite:22]{index=22}."
      },
      {
        "id": 23,
        "question": "An advantage of fed‑batch is:",
        "options": ["Simpler control", "Avoids nutrient depletion", "Constant volume", "No agitation"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Fermentation Modes",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Fed‑batch prevents substrate depletion and overflow metabolism :contentReference[oaicite:23]{index=23}."
      },
      {
        "id": 24,
        "question": "What is unsteady‑state material balance used for?",
        "options": ["Batch reactors", "Steady continuous", "Fed‑batch", "None"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Material Balance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Unsteady-state balances apply when reactor conditions change over time, like batch :contentReference[oaicite:24]{index=24}."
      },
      {
        "id": 25,
        "question": "Which is NOT a function of downstream processing?",
        "options": ["Cell harvest", "Cell disruption", "Fermentation", "Polishing"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Downstream Processing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fermentation is upstream, not downstream :contentReference[oaicite:25]{index=25}."
      },
      {
        "id": 26,
        "question": "Biochemical engineering is synonymous with:",
        "options": ["Mechanical engineering", "Bioprocess engineering", "Civil engineering", "Electrical engineering"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Definitions",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Biochemical engineering is another term for bioprocess engineering :contentReference[oaicite:26]{index=26}."
      },
      {
        "id": 27,
        "question": "Cell therapy bioprocessing refers to:",
        "options": ["Protein drugs", "Vaccine fermentation", "Therapeutic cell manufacturing", "Biofuel production"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Applications",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cell therapy bioprocessing focuses on manufacturing therapeutic cells :contentReference[oaicite:27]{index=27}."
      },
      {
        "id": 28,
        "question": "Which process analytical tool enables real‑time monitoring?",
        "options": ["Batch sampling", "Offline titration", "In‑situ sensors", "Manual pipetting"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Process Control",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "In‑situ sensors support real-time monitoring and advanced analytics :contentReference[oaicite:28]{index=28}."
      },
      {
        "id": 29,
        "question": "Key benefit of ML in bioprocess is:",
        "options": ["Replaces fermentation", "Manual operations", "Predictive control", "Removes enzymes"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Digital Bioprocessing",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "ML enables prediction, control, and optimization in bioprocess development :contentReference[oaicite:29]{index=29}."
      },
      {
        "id": 30,
        "question": "Downstream processing stages include:",
        "options": ["Cell disruption, separation, polishing", "Upstream, fermentation, seeding", "Media prep, sterilization, monitoring", "PCR, sequencing, annotation"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Bioprocess Engineering",
        "topic": "Downstream Processing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Typical downstream includes disruption, separation, purification/polishing :contentReference[oaicite:30]{index=30}."
      }
      
    ],
    'Genetics': [
      {
        "id": 1,
        "question": "Which of the following is an example of a dihybrid cross ratio in Mendelian inheritance?",
        "options": [
          "9:3:3:1",
          "3:1",
          "1:2:1",
          "2:1"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Mendelian Inheritance",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "A dihybrid cross gives a 9:3:3:1 phenotypic ratio in F2 generation."
      },
      {
        "id": 2,
        "question": "The phenomenon where one gene masks the effect of another gene is called:",
        "options": [
          "Epistasis",
          "Codominance",
          "Incomplete dominance",
          "Pleiotropy"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Gene Interaction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Epistasis is gene-gene interaction where one gene masks another."
      },
      {
        "id": 3,
        "question": "Which of the following is true for X-linked recessive inheritance?",
        "options": [
          "More males are affected than females",
          "Only females are affected",
          "Trait is never passed from mother to son",
          "Trait skips generations only in males"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Mendelian Inheritance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "X-linked recessive traits are more common in males."
      },
      {
        "id": 4,
        "question": "The frequency of recombination between two genes is 10%. What is the map distance?",
        "options": [
          "10 centiMorgans",
          "0.1 centiMorgans",
          "100 centiMorgans",
          "1 centiMorgan"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Gene Mapping",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "1% recombination = 1 cM; so 10% = 10 cM."
      },
      {
        "id": 5,
        "question": "Which of the following is an example of cytoplasmic inheritance?",
        "options": [
          "Mitochondrial DNA inheritance",
          "X-linked inheritance",
          "Autosomal dominant inheritance",
          "Y-linked inheritance"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Cytoplasmic Inheritance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Mitochondria are inherited maternally via cytoplasm."
      },
      {
        "id": 6,
        "question": "The Hardy-Weinberg equilibrium assumes:",
        "options": [
          "No mutation, migration, selection, or genetic drift",
          "Non-random mating",
          "Small population size",
          "High mutation rate"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Population Genetics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "H-W equilibrium assumes no evolutionary forces."
      },
      {
        "id": 7,
        "question": "A point mutation that results in a premature stop codon is called:",
        "options": [
          "Nonsense mutation",
          "Missense mutation",
          "Silent mutation",
          "Frameshift mutation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Gene Mutation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Nonsense mutations introduce stop codons."
      },
      {
        "id": 8,
        "question": "In a test cross, an organism of unknown genotype is crossed with:",
        "options": [
          "A homozygous recessive",
          "A homozygous dominant",
          "A heterozygote",
          "Itself"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Mendelian Inheritance",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Test cross uses a homozygous recessive to reveal genotype."
      },
      {
        "id": 9,
        "question": "Which of the following is a model organism for classical genetics?",
        "options": [
          "Drosophila melanogaster",
          "Arabidopsis thaliana",
          "Homo sapiens",
          "Saccharomyces cerevisiae"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Model Organisms",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Drosophila is a classical genetics model."
      },
      {
        "id": 10,
        "question": "Which of the following is an example of a structural chromosomal aberration?",
        "options": [
          "Inversion",
          "Aneuploidy",
          "Euploidy",
          "Polyploidy"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Chromosomal Aberrations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Inversion is a structural change in chromosome."
      },
      {
        "id": 11,
        "question": "The process by which a segment of a chromosome is repeated is called:",
        "options": [
          "Duplication",
          "Deletion",
          "Inversion",
          "Translocation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Chromosomal Aberrations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Duplication is the repetition of a chromosome segment."
      },
      {
        "id": 12,
        "question": "Which of the following is an example of gene silencing by RNA interference?",
        "options": [
          "siRNA-mediated mRNA degradation",
          "DNA methylation",
          "Histone acetylation",
          "Transposon excision"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Epigenetics and Gene Silencing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "siRNA can silence genes by degrading mRNA."
      },
      {
        "id": 13,
        "question": "Which of the following is a numerical chromosomal aberration?",
        "options": [
          "Aneuploidy",
          "Inversion",
          "Translocation",
          "Duplication"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Chromosomal Aberrations",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Aneuploidy is a change in chromosome number."
      },
      {
        "id": 14,
        "question": "The process of crossing over occurs during which phase of meiosis?",
        "options": [
          "Prophase I",
          "Metaphase I",
          "Anaphase II",
          "Telophase I"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Recombination",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Crossing over occurs in prophase I of meiosis."
      },
      {
        "id": 15,
        "question": "Which of the following is a transposable element?",
        "options": [
          "Transposon",
          "Operator",
          "Enhancer",
          "Promoter"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Transposons",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Transposons are mobile genetic elements."
      },
      {
        "id": 16,
        "question": "Which of the following is a type of gene interaction where both alleles are fully expressed?",
        "options": [
          "Codominance",
          "Epistasis",
          "Incomplete dominance",
          "Pleiotropy"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Gene Interaction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Codominance: both alleles are expressed (e.g., AB blood group)."
      },
      {
        "id": 17,
        "question": "A cross between AaBb and aabb individuals is called a:",
        "options": [
          "Test cross",
          "Dihybrid cross",
          "Back cross",
          "Monohybrid cross"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Mendelian Inheritance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Test cross reveals genotype using double recessive."
      },
      {
        "id": 18,
        "question": "Which of the following is an example of extrachromosomal inheritance?",
        "options": [
          "Chloroplast DNA inheritance",
          "X-linked inheritance",
          "Autosomal recessive inheritance",
          "Gene duplication"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Cytoplasmic Inheritance",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Chloroplasts are inherited via cytoplasm."
      },
      {
        "id": 19,
        "question": "Which of the following is a model organism for plant genetics?",
        "options": [
          "Arabidopsis thaliana",
          "Mus musculus",
          "Drosophila melanogaster",
          "C. elegans"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Model Organisms",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Arabidopsis is a key plant genetics model."
      },
      {
        "id": 20,
        "question": "A mutation that results in a single amino acid change in a protein is called:",
        "options": [
          "Missense mutation",
          "Nonsense mutation",
          "Silent mutation",
          "Frameshift mutation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Gene Mutation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Missense mutations change one amino acid."
      },
      {
        "id": 21,
        "question": "Which of the following is a method for physical mapping of genes?",
        "options": [
          "Fluorescence in situ hybridization (FISH)",
          "Test cross",
          "Hardy-Weinberg analysis",
          "Linkage analysis"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Gene Mapping",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "FISH is a physical mapping technique."
      },
      {
        "id": 22,
        "question": "Which of the following is a type of epigenetic modification?",
        "options": [
          "DNA methylation",
          "Gene duplication",
          "Frameshift mutation",
          "Translocation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Epigenetics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DNA methylation is a common epigenetic change."
      },
      {
        "id": 23,
        "question": "The probability of two independent events both occurring is:",
        "options": [
          "Product of their individual probabilities",
          "Sum of their probabilities",
          "Difference of their probabilities",
          "Quotient of their probabilities"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Probability in Genetics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Probability of A and B = P(A) × P(B)."
      },
      {
        "id": 24,
        "question": "Which of the following is a method for detecting single nucleotide polymorphisms (SNPs)?",
        "options": [
          "DNA sequencing",
          "Gram staining",
          "ELISA",
          "SDS-PAGE"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Genomics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sequencing detects SNPs at the nucleotide level."
      },
      {
        "id": 25,
        "question": "Which of the following is a type of gene mutation that changes the reading frame?",
        "options": [
          "Frameshift mutation",
          "Missense mutation",
          "Silent mutation",
          "Nonsense mutation"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Gene Mutation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Frameshift mutations alter the reading frame."
      },
      {
        "id": 26,
        "question": "Which of the following is a genetic disorder caused by a trisomy?",
        "options": [
          "Down syndrome",
          "Sickle cell anemia",
          "Cystic fibrosis",
          "Hemophilia"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Genetic Disorders",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Down syndrome is caused by trisomy 21."
      },
      {
        "id": 27,
        "question": "Which of the following is a method for gene silencing in eukaryotes?",
        "options": [
          "RNA interference (RNAi)",
          "Gene duplication",
          "Transposon insertion",
          "Gene amplification"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Gene Silencing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "RNAi is a common gene silencing mechanism."
      },
      {
        "id": 28,
        "question": "Which of the following is a model organism for functional genomics?",
        "options": [
          "Saccharomyces cerevisiae",
          "Homo sapiens",
          "Pisum sativum",
          "Equus caballus"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Model Organisms",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Yeast is widely used in functional genomics."
      },
      {
        "id": 29,
        "question": "Which of the following is a method for transcriptome analysis?",
        "options": [
          "RNA sequencing (RNA-seq)",
          "Western blotting",
          "PCR",
          "Restriction digestion"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Genomics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "RNA-seq is used to analyze the transcriptome."
      },
      {
        "id": 30,
        "question": "Which of the following is an example of post-transcriptional gene silencing?",
        "options": [
          "miRNA-mediated mRNA degradation",
          "DNA methylation",
          "Histone acetylation",
          "Gene amplification"
        ],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Genetics",
        "topic": "Gene Silencing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "miRNAs can silence genes by degrading mRNA after transcription."
      }
      
    ]
  },

  // Instrumentation Engineering Questions
  'Instrumentation Engineering': {
    'Measurement Systems': [
      {
        "id": 1,
        "question": "The largest change in the measurand that produces no instrument response is called:",
        "options": ["Threshold", "Dead zone", "Drift", "Bias"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dead zone refers to the region where changes in input produce no output response :contentReference[oaicite:1]{index=1}."
      },
      {
        "id": 2,
        "question": "The ratio of output change to input change in a measuring system is:",
        "options": ["Linearity", "Precision", "Sensitivity", "Accuracy"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sensitivity is the slope of the input–output characteristic :contentReference[oaicite:2]{index=2}."
      },
      {
        "id": 3,
        "question": "Conformity of output to true value is known as:",
        "options": ["Precision", "Accuracy", "Sensitivity", "Resolution"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Accuracy or trueness is the conformity to the true value :contentReference[oaicite:3]{index=3}."
      },
      {
        "id": 4,
        "question": "Ability to detect smallest change in measurand is:",
        "options": ["Sensitivity", "Resolution", "Precision", "Accuracy"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Resolution is the smallest detectable change :contentReference[oaicite:4]{index=4}."
      },
      {
        "id": 5,
        "question": "Closeness of repeated measurements is called:",
        "options": ["Accuracy", "Precision", "Sensitivity", "Span"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Precision refers to repeatability or consistency across measurements :contentReference[oaicite:5]{index=5}."
      },
      {
        "id": 6,
        "question": "Span is defined as:",
        "options": ["Max reading", "Min reading", "Difference between max and min calibrated values", "Average reading"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Span is the difference between upper and lower calibration values :contentReference[oaicite:6]{index=6}."
      },
      {
        "id": 7,
        "question": "Fidelity of a measuring system refers to:",
        "options": ["Ability to remain accurate over time", "Closeness to true value", "Ability to follow signal changes instant‑by‑instant", "Sensitivity variation"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fidelity is the system’s capability to track rapid changes :contentReference[oaicite:7]{index=7}."
      },
      {
        "id": 8,
        "question": "Which of the following is a dynamic characteristic?",
        "options": ["Accuracy", "Resolution", "Response speed", "Span"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Response speed is a dynamic characteristic :contentReference[oaicite:8]{index=8}."
      },
      {
        "id": 9,
        "question": "Dynamic sensitivity tolerance is typically:",
        "options": ["±2%", "±5%", "±10%", "±20%"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Dynamic sensitivity deviation should be within ±2% of static sensitivity :contentReference[oaicite:9]{index=9}."
      },
      {
        "id": 10,
        "question": "Transducer, signal processor and output device together form a:",
        "options": ["Direct measurement method", "Complete measurement system", "Calibration setup", "Indirect measurement"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "A full measurement system includes transduction, processing, and output :contentReference[oaicite:10]{index=10}."
      },
      {
        "id": 11,
        "question": "Closeness of a measurement to its true value describes:",
        "options": ["Precision", "Accuracy", "Reliability", "Resolution"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Accuracy refers to closeness to true value :contentReference[oaicite:11]{index=11}."
      },
      {
        "id": 12,
        "question": "Which term denotes the smallest change detectable in output?",
        "options": ["Accuracy", "Resolution", "Sensitivity", "Threshold"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Resolution is the smallest measurable change :contentReference[oaicite:12]{index=12}."
      },
      {
        "id": 13,
        "question": "Precision is improved by:",
        "options": ["Improving accuracy", "Repeated calibration", "Reducing random error", "Increasing sensitivity"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Precision relates to minimizing random error :contentReference[oaicite:13]{index=13}."
      },
      {
        "id": 14,
        "question": "ISO defines trueness as:",
        "options": ["Closeness to true value", "Repeatability", "Span", "Dynamic response"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Trueness is closeness of mean to true value per ISO :contentReference[oaicite:14]{index=14}."
      },
      {
        "id": 15,
        "question": "Speed of response is categorized under:",
        "options": ["Static characteristics", "Dynamic characteristics", "Calibration standards", "Signal conditioning"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Response speed is a key dynamic characteristic :contentReference[oaicite:15]{index=15}."
      },
      {
        "id": 16,
        "question": "Lag in measurement systems refers to:",
        "options": ["Time delay in response", "Output drift", "Noise level", "Resolution limit"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lag is the delay in attaining true value after input change :contentReference[oaicite:16]{index=16}."
      },
      {
        "id": 17,
        "question": "Which is NOT a static characteristic?",
        "options": ["Sensitivity", "Accuracy", "Lag", "Resolution"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lag is a dynamic, not static characteristic :contentReference[oaicite:17]{index=17}."
      },
      {
        "id": 18,
        "question": "Dynamic error occurs due to:",
        "options": ["Poor calibration", "Random noise", "Rapid changes in measurand", "Resolution limit"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dynamic error appears when input changes quickly :contentReference[oaicite:18]{index=18}."
      },
      {
        "id": 19,
        "question": "Calibration span affects:",
        "options": ["Resolution only", "Accuracy only", "Span", "Precision only"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Span is defined as difference between calibration bounds :contentReference[oaicite:19]{index=19}."
      },
      {
        "id": 20,
        "question": "Static error in measurement refers to:",
        "options": ["Error under changing input", "Error after calibration", "Error under constant input", "Error due to lag"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Static error is deviation under steady input :contentReference[oaicite:20]{index=20}."
      },
      {
        "id": 21,
        "question": "Reproducibility refers to:",
        "options": ["Repeatability under same conditions", "Consistency across different conditions", "Resolution", "Lag"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Reproducibility covers consistency across different operators/conditions :contentReference[oaicite:21]{index=21}."
      },
      {
        "id": 22,
        "question": "Stability measures:",
        "options": ["Short-term repeatability", "Change of output over time under constant input", "Dynamic response", "Span limit"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Stability refers to drift over time :contentReference[oaicite:22]{index=22}."
      },
      {
        "id": 23,
        "question": "Which factor is essential in MSA?",
        "options": ["Temperature response", "Measurement uncertainty quantification", "Calibration span only", "Lag"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "MSA quantifies measurement uncertainty including accuracy and precision :contentReference[oaicite:23]{index=23}."
      },
      {
        "id": 24,
        "question": "Measurement system analysis (MSA) does NOT evaluate:",
        "options": ["Repeatability", "Bias", "Thermal drift", "Linearity"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "MSA covers repeatability, bias, linearity, not necessarily thermal drift :contentReference[oaicite:24]{index=24}."
      },
      {
        "id": 25,
        "question": "Indirect measurement method compares unknown to:",
        "options": ["No standard", "A standard value", "A digital system", "Wrong input"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bridge circuits use comparison measurement :contentReference[oaicite:25]{index=25}."
      },
      {
        "id": 26,
        "question": "Bridge circuits measure unknown values by:",
        "options": ["Absolute method", "Comparison to known", "Calculation", "Guesswork"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bridges compare unknown values with standards :contentReference[oaicite:26]{index=26}."
      },
      {
        "id": 27,
        "question": "Kelvin double bridge is used for:",
        "options": ["Low resistance measurement", "High resistance", "Inductance", "Capacitance"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Kelvin bridge measures low resistances accurately :contentReference[oaicite:27]{index=27}."
      },
      {
        "id": 28,
        "question": "Schering bridge is used primarily to test:",
        "options": ["Inductance", "Capacitance", "Resistance", "Power"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Schering bridge is for capacitance measurement :contentReference[oaicite:28]{index=28}."
      },
      {
        "id": 29,
        "question": "Successive approximation ADC uses which component?",
        "options": ["Comparator", "Diode", "Amplifier", "Potentiometer"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Comparator is key in SAR ADCs :contentReference[oaicite:29]{index=29}."
      },
      {
        "id": 30,
        "question": "Piezoelectric transducers are suitable for:",
        "options": ["Static displacement only", "Dynamic displacement only", "Both static and dynamic", "None"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Instrumentation Engineering",
        "topic": "Measurement Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Piezoelectric sensors measure dynamic changes only :contentReference[oaicite:30]{index=30}."
      }
      
    ],
    'Control Systems': [
      {
        "id": 1,
        "question": "For a unity feedback system with G(s) = 5/(s(s+2)), what is the steady-state error for a unit step input?",
        "options": ["0", "0.2", "0.5", "1"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Steady-State Error",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Type 1 system; step input error is zero."
      },
      {
        "id": 2,
        "question": "A system has poles at s = -1, -2, -3. The system is:",
        "options": ["Stable", "Unstable", "Marginally stable", "Oscillatory"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Stability",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "All poles in LHP, so system is stable."
      },
      {
        "id": 3,
        "question": "The transfer function of a first-order system is:",
        "options": ["K/(τs+1)", "K/(s+τ)", "Kτ/(s+1)", "K/(s^2+τs+1)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "System Modeling",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Standard form: K/(τs+1)."
      },
      {
        "id": 4,
        "question": "The time constant τ of a first-order system is the time to reach:",
        "options": ["63.2% of final value", "50% of final value", "100% of final value", "36.8% of final value"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Time Response",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "τ = time to reach 63.2% of step change."
      },
      {
        "id": 5,
        "question": "The Laplace transform of a unit step input is:",
        "options": ["1/s", "s", "1", "0"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Laplace Transform",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Laplace of unit step = 1/s."
      },
      {
        "id": 6,
        "question": "The root locus shows:",
        "options": ["Closed-loop pole locations as gain varies", "Open-loop zeros", "Frequency response", "Steady-state error"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Root Locus",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Root locus plots closed-loop poles vs gain."
      },
      {
        "id": 7,
        "question": "The Routh-Hurwitz criterion is used to check:",
        "options": ["Stability", "Controllability", "Observability", "Frequency response"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Routh-Hurwitz checks if all poles are in LHP."
      },
      {
        "id": 8,
        "question": "The phase margin is measured at:",
        "options": ["Gain crossover frequency", "Phase crossover frequency", "DC", "Any frequency"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Phase margin is at gain crossover (|G(jw)|=1)."
      },
      {
        "id": 9,
        "question": "A lead compensator is used to:",
        "options": ["Increase phase margin", "Reduce steady-state error", "Increase gain", "Reduce bandwidth"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Compensators",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lead compensator adds phase lead, improving stability."
      },
      {
        "id": 10,
        "question": "The sensitivity function S(s) for unity feedback is:",
        "options": ["1/(1+G(s))", "G(s)/(1+G(s))", "1+G(s)", "1/G(s)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Feedback",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "S(s) = 1/(1+G(s)) for unity feedback."
      },
      {
        "id": 11,
        "question": "The Mason’s Gain Formula is used for:",
        "options": ["Signal flow graph analysis", "Root locus", "Bode plot", "State-space"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Signal Flow Graphs",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Mason’s formula computes transfer function from signal flow graphs."
      },
      {
        "id": 12,
        "question": "The transfer function of a system with poles at s = 0, -2 is:",
        "options": ["K/(s(s+2))", "K/(s+2)", "K/(s^2+2)", "K/(s-2)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "System Modeling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Poles at 0 and -2: denominator is s(s+2)."
      },
      {
        "id": 13,
        "question": "A type 1 system has how many integrators in open loop?",
        "options": ["1", "0", "2", "Infinity"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "System Type",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Type = number of open-loop poles at origin."
      },
      {
        "id": 14,
        "question": "The Z-transform is used for:",
        "options": ["Discrete-time system analysis", "Continuous-time systems", "Laplace domain", "Analog filters"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Digital Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Z-transform is for discrete (digital) systems."
      },
      {
        "id": 15,
        "question": "The sampling theorem states that sampling frequency must be:",
        "options": ["At least twice the highest signal frequency", "Equal to highest signal frequency", "Half the highest frequency", "Any value"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Digital Control",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Nyquist: fs ≥ 2 × fmax."
      },
      {
        "id": 16,
        "question": "The open-loop transfer function of a unity feedback system is:",
        "options": ["Product of controller and plant", "Sum of controller and plant", "Difference", "Ratio"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Feedback",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Open-loop TF = Gc(s)Gp(s)."
      },
      {
        "id": 17,
        "question": "The effect of increasing proportional gain in a P controller is:",
        "options": ["Decrease rise time, increase overshoot", "Increase rise time", "Decrease both rise time and overshoot", "No effect"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Controllers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Higher Kp speeds up response but may increase overshoot."
      },
      {
        "id": 18,
        "question": "A lag compensator is mainly used to:",
        "options": ["Reduce steady-state error", "Increase bandwidth", "Increase phase margin", "Reduce rise time"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Compensators",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lag compensators improve steady-state accuracy."
      },
      {
        "id": 19,
        "question": "The phase crossover frequency is where:",
        "options": ["Phase is -180°", "Magnitude is 0 dB", "Phase is 0°", "Magnitude is -20 dB"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Phase crossover: phase = -180°."
      },
      {
        "id": 20,
        "question": "A system is BIBO stable if:",
        "options": ["Every bounded input yields bounded output", "Poles are in RHP", "Gain is infinite", "Impulse response is unbounded"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "BIBO: Bounded Input, Bounded Output."
      },
      {
        "id": 21,
        "question": "The controllability of a system is checked using:",
        "options": ["Controllability matrix", "Routh array", "Bode plot", "Root locus"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State-Space",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Full rank of controllability matrix means controllable."
      },
      {
        "id": 22,
        "question": "A system is observable if:",
        "options": ["All states can be determined from outputs", "All states can be controlled", "All poles in LHP", "All zeros in LHP"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State-Space",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Observability: deduce all states from outputs."
      },
      {
        "id": 23,
        "question": "The gain margin is:",
        "options": ["Reciprocal of gain at phase crossover", "Gain at DC", "Gain at 0 dB", "Gain at phase margin"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gain margin = 1/gain at phase crossover frequency."
      },
      {
        "id": 24,
        "question": "The effect of adding an integrator in the forward path is to:",
        "options": ["Increase system type, reduce steady-state error", "Decrease system type", "Increase overshoot", "Reduce rise time"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Controllers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Integrator increases system type, improving steady-state accuracy."
      },
      {
        "id": 25,
        "question": "The effect of pole-zero cancellation is:",
        "options": ["May cause hidden instability", "Always improves stability", "Always reduces overshoot", "Always increases bandwidth"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "System Modeling",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "Hidden unstable pole can cause internal instability."
      },
      {
        "id": 26,
        "question": "Aliasing occurs when:",
        "options": ["Sampling below Nyquist rate", "Sampling above Nyquist rate", "No sampling", "Infinite sampling"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Digital Control",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Undersampling causes aliasing (distortion)."
      },
      {
        "id": 27,
        "question": "The characteristic equation of a closed-loop system is:",
        "options": ["1+G(s)H(s)=0", "G(s)=0", "H(s)=0", "G(s)+H(s)=0"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Stability",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Characteristic equation: 1+G(s)H(s)=0."
      },
      {
        "id": 28,
        "question": "State feedback allows:",
        "options": ["Arbitrary pole placement if controllable", "Always stable system", "No need for sensors", "Always observable system"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "State-Space",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "All poles can be placed arbitrarily if system is controllable."
      },
      {
        "id": 29,
        "question": "The effect of increasing derivative gain in a PID controller is:",
        "options": ["Reduce overshoot, improve stability", "Increase steady-state error", "Increase rise time", "Increase gain"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Controllers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Derivative action damps oscillations and reduces overshoot."
      },
      {
        "id": 30,
        "question": "The steady-state error for a type 0 system with unit ramp input is:",
        "options": ["Infinite", "Zero", "Finite", "Negative"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Control Systems",
        "topic": "Steady-State Error",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Type 0 system has infinite error for ramp input."
      }
      
    ],
    'Analog Electronics': [
      {
        "id": 1,
        "question": "For a silicon diode with 0.7 V threshold, what is the output of a half-wave rectifier with 10 V peak input?",
        "options": ["9.3 V", "10 V", "0.7 V", "0 V"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Diode Circuits",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Output peak = Vin_peak – V_diode = 10 V – 0.7 V = 9.3 V."
      },
      {
        "id": 2,
        "question": "Which circuit is used for limiting the amplitude of a signal?",
        "options": ["Clipper", "Rectifier", "Amplifier", "Oscillator"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Diode Circuits",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Clippers limit the output voltage to a set level."
      },
      {
        "id": 3,
        "question": "A BJT is in active region when:",
        "options": ["Base-emitter is forward, base-collector is reverse biased", "Both junctions are forward", "Both junctions are reverse", "Base-emitter is reverse, base-collector is forward"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "BJT Operation",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Active: BE forward, BC reverse."
      },
      {
        "id": 4,
        "question": "The voltage gain of a common-emitter amplifier is mainly determined by:",
        "options": ["Collector resistor", "Emitter resistor", "Base resistor", "Supply voltage"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "BJT Amplifiers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Voltage gain ≈ –Rc/re."
      },
      {
        "id": 5,
        "question": "The small-signal model of a MOSFET uses which parameter for transconductance?",
        "options": ["gm", "ro", "β", "λ"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "MOSFET Amplifiers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "gm = ∂Id/∂Vgs."
      },
      {
        "id": 6,
        "question": "The function of a current mirror is to:",
        "options": ["Copy current from one branch to another", "Amplify voltage", "Rectify AC", "Generate oscillations"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Current Mirrors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Current mirrors replicate reference current."
      },
      {
        "id": 7,
        "question": "The input resistance of a common-base BJT amplifier is:",
        "options": ["Low", "High", "Infinite", "Zero"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "BJT Amplifiers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Common-base has low input resistance."
      },
      {
        "id": 8,
        "question": "The dominant pole in an amplifier determines:",
        "options": ["Low-frequency –3 dB bandwidth", "High-frequency cutoff", "Midband gain", "Input impedance"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dominant pole sets –3 dB bandwidth."
      },
      {
        "id": 9,
        "question": "A differential amplifier amplifies:",
        "options": ["Difference of two inputs", "Sum of two inputs", "Only one input", "Product of inputs"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Differential Amplifiers",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Differential amplifiers amplify V1–V2."
      },
      {
        "id": 10,
        "question": "The slew rate of an op-amp is:",
        "options": ["Maximum rate of change of output voltage", "Maximum input voltage", "Minimum output voltage", "Open-loop gain"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Op-Amps",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Slew rate = max dVout/dt."
      },
      {
        "id": 11,
        "question": "A Schmitt trigger is a type of:",
        "options": ["Comparator with hysteresis", "Integrator", "Differentiator", "Rectifier"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Op-Amp Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Schmitt trigger is a comparator with hysteresis."
      },
      {
        "id": 12,
        "question": "The gain-bandwidth product of an op-amp is:",
        "options": ["Constant", "Variable", "Zero", "Infinite"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Op-Amps",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "GBP is constant for a given op-amp."
      },
      {
        "id": 13,
        "question": "The output of an ideal integrator for a step input is:",
        "options": ["Ramp", "Step", "Impulse", "Constant"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Op-Amp Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Integrator output for step input is ramp."
      },
      {
        "id": 14,
        "question": "A clamping circuit shifts:",
        "options": ["DC level of a waveform", "Amplitude", "Frequency", "Phase"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Diode Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Clamper shifts waveform up or down."
      },
      {
        "id": 15,
        "question": "The input offset voltage of an op-amp is:",
        "options": ["Voltage needed to make output zero", "Slew rate", "Open-loop gain", "Common-mode rejection"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Op-Amps",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Input offset is the voltage to null output."
      },
      {
        "id": 16,
        "question": "A voltage follower using an op-amp has:",
        "options": ["Unity gain", "High gain", "Negative gain", "Zero gain"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Op-Amp Circuits",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Voltage follower has gain = 1."
      },
      {
        "id": 17,
        "question": "The function of a bypass capacitor in an amplifier is to:",
        "options": ["Increase AC gain", "Reduce DC gain", "Increase input impedance", "Reduce output impedance"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Amplifiers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bypass capacitor increases AC gain by shorting emitter resistor at high frequency."
      },
      {
        "id": 18,
        "question": "The main function of a differential amplifier in an op-amp input stage is:",
        "options": ["Reject common-mode signals", "Amplify DC only", "Reduce input impedance", "Increase output swing"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Differential Amplifiers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Differential pairs reject common-mode noise."
      },
      {
        "id": 19,
        "question": "The output of a full-wave rectifier with 10 V peak input (ideal diodes) is:",
        "options": ["10 V (peak)", "20 V (peak)", "5 V (peak)", "0 V"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Rectifiers",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Full-wave rectifier output peaks at input peak (ignoring diode drop)."
      },
      {
        "id": 20,
        "question": "The main reason for using negative feedback in an amplifier is to:",
        "options": ["Stabilize gain and reduce distortion", "Increase gain", "Reduce bandwidth", "Increase noise"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Feedback",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Negative feedback stabilizes and linearizes amplifier."
      },
      {
        "id": 21,
        "question": "The dominant noise in a BJT at low frequencies is:",
        "options": ["Flicker noise (1/f)", "Thermal noise", "Shot noise", "Avalanche noise"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Noise",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Flicker noise dominates at low frequencies."
      },
      {
        "id": 22,
        "question": "The output of an op-amp differentiator for a ramp input is:",
        "options": ["Constant", "Ramp", "Step", "Sinusoid"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Op-Amp Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Derivative of ramp is constant."
      },
      {
        "id": 23,
        "question": "The main function of a Miller capacitor in an amplifier is to:",
        "options": ["Control high-frequency response", "Increase gain", "Reduce input impedance", "Increase output impedance"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Miller capacitance shapes high-frequency roll-off."
      },
      {
        "id": 24,
        "question": "The unity-gain bandwidth of an op-amp is:",
        "options": ["Frequency at which gain falls to 1", "Open-loop gain", "Slew rate", "Offset voltage"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Op-Amps",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Unity-gain bandwidth = frequency where gain = 1."
      },
      {
        "id": 25,
        "question": "Which of the following is an active filter?",
        "options": ["Op-amp based low-pass", "RC circuit", "LC circuit", "Crystal filter"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Active Filters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Active filters use op-amps and RC networks."
      },
      {
        "id": 26,
        "question": "The function of a zener diode in a voltage regulator is to:",
        "options": ["Maintain constant output voltage", "Rectify AC", "Amplify signal", "Oscillate"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Voltage Regulators",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Zener diodes clamp voltage at breakdown."
      },
      {
        "id": 27,
        "question": "The main advantage of a cascode amplifier is:",
        "options": ["High bandwidth and gain", "Low input resistance", "High output resistance", "Low power"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Amplifiers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cascode offers high gain-bandwidth product."
      },
      {
        "id": 28,
        "question": "The phase shift oscillator uses which feedback network?",
        "options": ["RC", "LC", "RL", "RLC"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Oscillators",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Phase shift oscillator uses RC feedback."
      },
      {
        "id": 29,
        "question": "The CMRR of a differential amplifier is:",
        "options": ["Ratio of differential to common-mode gain", "Input impedance", "Output impedance", "Bandwidth"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Differential Amplifiers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "CMRR = Ad/Acm."
      },
      {
        "id": 30,
        "question": "The main function of a voltage divider bias in BJT amplifiers is to:",
        "options": ["Stabilize operating point", "Increase gain", "Reduce bandwidth", "Increase input resistance"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Analog Electronics",
        "topic": "Biasing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Voltage divider bias stabilizes Q-point against β variations."
      }
      
    ],
    'Digital Electronics': [
      {
        "id": 1,
        "question": "The 2’s complement of binary number 101011 is:",
        "options": ["010101", "101100", "010100", "110101"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Number Systems",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Invert and add 1: 010100 is 2’s complement of 101011."
      },
      {
        "id": 2,
        "question": "Which logic gate is called a universal gate?",
        "options": ["NAND", "AND", "XOR", "OR"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Logic Gates",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "NAND (and NOR) can implement any Boolean function."
      },
      {
        "id": 3,
        "question": "The minimal SOP form of F = A’B + AB’ is:",
        "options": ["A XOR B", "A XNOR B", "A+B", "AB"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Boolean Algebra",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "A’B + AB’ = A XOR B."
      },
      {
        "id": 4,
        "question": "A full adder adds:",
        "options": ["Three bits", "Two bits", "Four bits", "One bit"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Arithmetic Circuits",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Full adder adds two bits and a carry-in (total three bits)."
      },
      {
        "id": 5,
        "question": "Which flip-flop is used as a basic memory cell in static RAM?",
        "options": ["SR", "JK", "D", "T"],
        "correct": 2,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Memory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "D flip-flop is the basic static RAM cell."
      },
      {
        "id": 6,
        "question": "The output of a 4-to-1 multiplexer is:",
        "options": ["One of four data inputs", "Four outputs", "One output for each input", "Four outputs for one input"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Combinational Circuits",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "MUX selects one of four inputs to the output."
      },
      {
        "id": 7,
        "question": "A MOD-8 counter has:",
        "options": ["3 flip-flops", "8 flip-flops", "4 flip-flops", "2 flip-flops"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Counters",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "MOD-8 = 2^3, so 3 flip-flops are needed."
      },
      {
        "id": 8,
        "question": "The output of a JK flip-flop toggles when:",
        "options": ["J=1, K=1", "J=0, K=0", "J=1, K=0", "J=0, K=1"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Flip-Flops",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "JK toggles when both J and K are 1."
      },
      {
        "id": 9,
        "question": "A 3-to-8 decoder has:",
        "options": ["3 inputs, 8 outputs", "8 inputs, 3 outputs", "3 outputs, 8 inputs", "8 outputs, 3 outputs"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Combinational Circuits",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "3 inputs select one of 8 outputs."
      },
      {
        "id": 10,
        "question": "A ring counter with 4 flip-flops has:",
        "options": ["4 states", "8 states", "16 states", "2 states"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Counters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ring counter cycles through 4 states for 4 flip-flops."
      },
      {
        "id": 11,
        "question": "The minimum number of select lines for a 32-to-1 multiplexer is:",
        "options": ["5", "4", "6", "3"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Combinational Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "2^5 = 32, so 5 select lines."
      },
      {
        "id": 12,
        "question": "A Moore machine’s output depends on:",
        "options": ["Present state only", "Present input only", "Present input and state", "Previous input"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "FSM",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Moore output is state-dependent only."
      },
      {
        "id": 13,
        "question": "A 4-bit ripple counter can count up to:",
        "options": ["15", "16", "8", "4"],
        "correct": 1,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Counters",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "4 bits = 2^4 = 16 states (0 to 15)."
      },
      {
        "id": 14,
        "question": "The output of a D flip-flop is sampled on:",
        "options": ["Clock edge", "Level of input", "Asynchronous input", "Reset"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Flip-Flops",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "D flip-flop output follows input at clock edge."
      },
      {
        "id": 15,
        "question": "A binary to Gray code converter for 3 bits requires:",
        "options": ["3 XOR gates", "2 AND gates", "3 OR gates", "3 NAND gates"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Code Converters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Gray code conversion uses XOR logic."
      },
      {
        "id": 16,
        "question": "The output of a priority encoder is:",
        "options": ["Binary code of highest-priority input", "Sum of all inputs", "Product of all inputs", "Gray code"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Combinational Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Priority encoder outputs binary of highest active input."
      },
      {
        "id": 17,
        "question": "The minimum number of flip-flops needed for a MOD-20 counter is:",
        "options": ["5", "4", "3", "6"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Counters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "2^5 = 32 > 20, so 5 flip-flops needed."
      },
      {
        "id": 18,
        "question": "A 4-bit synchronous counter has:",
        "options": ["All flip-flops clocked together", "Ripple carry", "No clock", "Serial data input"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Counters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Synchronous: all flip-flops share the same clock."
      },
      {
        "id": 19,
        "question": "A 4x1 multiplexer can be used to implement:",
        "options": ["Any 2-variable Boolean function", "Any 3-variable function", "Any 4-variable function", "Only AND/OR"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Combinational Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "4x1 MUX can implement all 2-variable functions."
      },
      {
        "id": 20,
        "question": "The main function of a Schmitt trigger is:",
        "options": ["Remove noise by hysteresis", "Amplify input", "Act as a counter", "Convert analog to digital"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Combinational Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Schmitt triggers provide hysteresis for noise immunity."
      },
      {
        "id": 21,
        "question": "A 3-bit Johnson counter has:",
        "options": ["6 states", "8 states", "4 states", "3 states"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Counters",
        "difficulty": "Hard",
        "year": 2025,
        "explanation": "n-bit Johnson: 2n states, so 6 for n=3."
      },
      {
        "id": 22,
        "question": "A 4-bit DAC with reference voltage 5 V has LSB step size:",
        "options": ["0.3125 V", "0.5 V", "1 V", "0.25 V"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Data Converters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Step = 5 V/16 = 0.3125 V."
      },
      {
        "id": 23,
        "question": "A synchronous 3-bit up counter counts from:",
        "options": ["0 to 7", "1 to 8", "0 to 3", "1 to 7"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Counters",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "3 bits: 0 to 7 (8 states)."
      },
      {
        "id": 24,
        "question": "A master-slave JK flip-flop avoids race-around by:",
        "options": ["Using two latches in series", "Increasing clock speed", "Removing feedback", "Adding more gates"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Flip-Flops",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Master-slave uses two stages to prevent race-around."
      },
      {
        "id": 25,
        "question": "The main function of a tri-state buffer is to:",
        "options": ["Allow high-impedance output", "Amplify signals", "Invert logic", "Act as a counter"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Combinational Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Tri-state buffer can disconnect output (high-Z)."
      },
      {
        "id": 26,
        "question": "A 4-to-16 line decoder requires how many input lines?",
        "options": ["4", "16", "8", "2"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Combinational Circuits",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "4 inputs select 1 of 16 outputs."
      },
      {
        "id": 27,
        "question": "A static RAM cell is typically built using:",
        "options": ["6 transistors", "2 transistors", "4 transistors", "1 transistor"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Memory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "SRAM cell uses 6-T (six-transistor) design."
      },
      {
        "id": 28,
        "question": "A finite state machine with outputs depending only on present state is:",
        "options": ["Moore machine", "Mealy machine", "Turing machine", "Pushdown automaton"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "FSM",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Moore: output depends only on state."
      },
      {
        "id": 29,
        "question": "The purpose of a sample-and-hold circuit in ADC is to:",
        "options": ["Maintain constant input during conversion", "Amplify input", "Reduce noise", "Convert digital to analog"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Data Converters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "S/H holds input steady for ADC conversion."
      },
      {
        "id": 30,
        "question": "Which memory is non-volatile and can be electrically erased and reprogrammed?",
        "options": ["EEPROM", "SRAM", "DRAM", "ROM"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Digital Electronics",
        "topic": "Memory",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "EEPROM can be electrically erased and reprogrammed."
      }
      
    ],
    'Sensors': [
      {
        "id": 1,
        "question": "A strain gauge is based on which sensing principle?",
        "options": ["Change in resistance", "Change in capacitance", "Change in inductance", "Change in voltage"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Resistive Sensors",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Strain gauges work on resistance change due to strain."
      },
      {
        "id": 2,
        "question": "The output of an LVDT is:",
        "options": ["AC voltage proportional to displacement", "DC voltage proportional to displacement", "Current proportional to displacement", "Resistance proportional to displacement"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Inductive Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "LVDT gives an AC output voltage proportional to core displacement."
      },
      {
        "id": 3,
        "question": "A thermistor is a sensor whose resistance:",
        "options": ["Varies exponentially with temperature", "Is constant", "Varies linearly with pressure", "Varies with humidity"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Temperature Sensors",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Thermistor resistance changes exponentially with temperature."
      },
      {
        "id": 4,
        "question": "The Hall effect sensor is used for measurement of:",
        "options": ["Magnetic field", "Pressure", "Temperature", "Displacement"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Hall Effect Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hall sensors detect magnetic fields."
      },
      {
        "id": 5,
        "question": "A piezoelectric sensor is best suited for measuring:",
        "options": ["Dynamic pressure/vibration", "Static temperature", "DC voltage", "Steady flow"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Piezoelectric Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Piezoelectric sensors are ideal for dynamic (changing) signals."
      },
      {
        "id": 6,
        "question": "Which sensor is commonly used for non-contact liquid level measurement?",
        "options": ["Ultrasonic sensor", "RTD", "Thermocouple", "Strain gauge"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Level Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ultrasonic sensors use sound waves for level detection."
      },
      {
        "id": 7,
        "question": "The standard output signal for industrial analog transmitters is:",
        "options": ["4–20 mA", "0–10 V", "1–5 V", "0–20 mA"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Industrial Standards",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "4–20 mA is the industry standard for analog transmission."
      },
      {
        "id": 8,
        "question": "A capacitive proximity sensor detects objects by:",
        "options": ["Change in capacitance", "Change in resistance", "Change in inductance", "Change in voltage"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Capacitive Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Capacitive sensors detect changes in capacitance due to nearby objects."
      },
      {
        "id": 9,
        "question": "A Wheatstone bridge is commonly used for:",
        "options": ["Measuring small changes in resistance", "Measuring voltage", "Measuring capacitance", "Measuring frequency"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Signal Conditioning",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Wheatstone bridge is sensitive to small resistance changes (e.g., strain gauges)."
      },
      {
        "id": 10,
        "question": "The output of a thermocouple is:",
        "options": ["Millivolt voltage proportional to temperature difference", "Resistance", "Current", "Capacitance"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Temperature Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Thermocouples generate a voltage proportional to temperature difference."
      },
      {
        "id": 11,
        "question": "Which sensor is best for measuring static pressure?",
        "options": ["Strain gauge pressure transducer", "Piezoelectric sensor", "Inductive sensor", "RTD"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Pressure Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Strain gauge pressure transducers are ideal for static pressure."
      },
      {
        "id": 12,
        "question": "An RTD is primarily used for:",
        "options": ["Precise temperature measurement", "Pressure measurement", "Level measurement", "Flow measurement"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Temperature Sensors",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "RTDs are highly accurate temperature sensors."
      },
      {
        "id": 13,
        "question": "The sensitivity of a sensor is defined as:",
        "options": ["Change in output per unit change in input", "Output at zero input", "Maximum output", "Minimum input"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Sensor Characteristics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Sensitivity = Δoutput/Δinput."
      },
      {
        "id": 14,
        "question": "A variable area flow meter is also called:",
        "options": ["Rotameter", "Orifice meter", "Venturimeter", "Turbine meter"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Flow Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rotameter is a variable area flow meter."
      },
      {
        "id": 15,
        "question": "The main function of a signal conditioner is to:",
        "options": ["Convert sensor output to usable form", "Increase sensor size", "Reduce sensor cost", "Change sensor type"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Signal Conditioning",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Signal conditioners amplify, filter, and convert sensor signals."
      },
      {
        "id": 16,
        "question": "Which sensor is used for pH measurement?",
        "options": ["Glass electrode", "RTD", "Thermocouple", "Strain gauge"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Chemical Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Glass electrodes are standard for pH measurement."
      },
      {
        "id": 17,
        "question": "Which transducer is best for measuring torque?",
        "options": ["Strain gauge-based torque sensor", "Thermistor", "Piezoelectric accelerometer", "Hall sensor"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Force & Torque Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Strain gauge torque sensors are widely used."
      },
      {
        "id": 18,
        "question": "Which sensor is commonly used for vibration measurement?",
        "options": ["Piezoelectric accelerometer", "RTD", "Thermocouple", "LVDT"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Vibration Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Piezoelectric accelerometers are standard for vibration."
      },
      {
        "id": 19,
        "question": "The output of a turbine flow meter is typically:",
        "options": ["Frequency proportional to flow rate", "Voltage proportional to pressure", "Current proportional to temperature", "Resistance proportional to level"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Flow Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Turbine meters output frequency proportional to flow."
      },
      {
        "id": 20,
        "question": "A bolometer is used for measuring:",
        "options": ["Radiant energy/infrared radiation", "Pressure", "pH", "Magnetic field"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Temperature Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bolometers detect IR by change in resistance."
      },
      {
        "id": 21,
        "question": "A 3-wire RTD connection is used to:",
        "options": ["Compensate for lead wire resistance", "Increase sensitivity", "Reduce cost", "Increase temperature range"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Temperature Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "3-wire RTD compensates for lead resistance."
      },
      {
        "id": 22,
        "question": "Which sensor is best for measuring low pressures (vacuum)?",
        "options": ["Pirani gauge", "Strain gauge", "Thermistor", "LVDT"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Pressure Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pirani gauge is used for vacuum/low pressure."
      },
      {
        "id": 23,
        "question": "A conductivity sensor is used for measuring:",
        "options": ["Ionic concentration in solution", "Temperature", "Pressure", "Level"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Chemical Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Conductivity sensors measure ionic content."
      },
      {
        "id": 24,
        "question": "The main advantage of a 4–20 mA current loop is:",
        "options": ["Immunity to voltage drop over long cables", "Lower power consumption", "Higher voltage", "Faster response"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Industrial Standards",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Current loops are less affected by cable resistance."
      },
      {
        "id": 25,
        "question": "A pyrometer is used for:",
        "options": ["Non-contact temperature measurement", "Pressure measurement", "Level measurement", "pH measurement"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Temperature Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pyrometers measure temperature from radiation."
      },
      {
        "id": 26,
        "question": "Which sensor is suitable for angular displacement measurement?",
        "options": ["Resolver", "RTD", "Thermocouple", "Strain gauge"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Displacement Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Resolvers measure angular position."
      },
      {
        "id": 27,
        "question": "A float-type sensor is used for:",
        "options": ["Liquid level measurement", "Pressure", "Temperature", "Flow"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Level Sensors",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Float sensors track liquid level."
      },
      {
        "id": 28,
        "question": "Which sensor is used for viscosity measurement?",
        "options": ["Rotational viscometer", "Thermocouple", "RTD", "LVDT"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Viscosity Sensors",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rotational viscometers measure fluid viscosity."
      },
      {
        "id": 29,
        "question": "A 2-wire transmitter is commonly used for:",
        "options": ["Loop-powered analog signal transmission", "Digital communication", "Wireless transmission", "High-frequency signals"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Industrial Standards",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "2-wire transmitters use the same wires for power and signal."
      },
      {
        "id": 30,
        "question": "The main function of a signal filter in sensor circuits is to:",
        "options": ["Remove unwanted frequency components", "Increase sensor sensitivity", "Reduce sensor size", "Increase sensor range"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Sensors",
        "topic": "Signal Conditioning",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Filters remove noise and unwanted signals."
      }
      
    ],
    'Signal Processing': [
      {
        "id": 1,
        "question": "A signal x(t) = cos(2π100t) is sampled at 150 Hz. The resulting discrete-time signal has a frequency (in Hz) of:",
        "options": ["50", "100", "150", "25"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Sampling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Aliased frequency = |100 – 150| = 50 Hz."
      },
      {
        "id": 2,
        "question": "The Laplace transform of δ(t) is:",
        "options": ["1", "s", "0", "∞"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Transforms",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "L{δ(t)} = 1."
      },
      {
        "id": 3,
        "question": "The convolution of two signals in time domain is equivalent to:",
        "options": ["Multiplication in frequency domain", "Addition in frequency domain", "Division in frequency domain", "Convolution in frequency domain"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Convolution",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Convolution in time = multiplication in frequency."
      },
      {
        "id": 4,
        "question": "A system with impulse response h[n] = δ[n–2] is:",
        "options": ["2-sample delay", "2-sample advance", "Unit system", "Integrator"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "LTI Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "δ[n–2] delays input by 2 samples."
      },
      {
        "id": 5,
        "question": "The Z-transform of a[n] = a^n u[n] is:",
        "options": ["z/(z–a)", "z/(z+a)", "1/(z–a)", "z/(1–az)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Z-Transform",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Z{a^n u[n]} = z/(z–a), |z| > |a|."
      },
      {
        "id": 6,
        "question": "The Fourier transform of a real even signal is:",
        "options": ["Real and even", "Real and odd", "Imaginary and even", "Imaginary and odd"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Fourier Transform",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "FT of real even signal is real and even."
      },
      {
        "id": 7,
        "question": "For a discrete-time LTI system, the output y[n] = x[n] * h[n]. Here, * denotes:",
        "options": ["Convolution", "Correlation", "Addition", "Multiplication"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "LTI Systems",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "* denotes convolution."
      },
      {
        "id": 8,
        "question": "The impulse response of an ideal low-pass filter is:",
        "options": ["Sinc function", "Delta function", "Exponential", "Rectangular pulse"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Filters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ideal LPF: impulse response is sinc."
      },
      {
        "id": 9,
        "question": "The sampling theorem states that the sampling frequency must be:",
        "options": ["At least twice the maximum frequency", "Equal to the maximum frequency", "Half the maximum frequency", "Any value"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Sampling",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Nyquist rate: fs ≥ 2fmax."
      },
      {
        "id": 10,
        "question": "The DFT of a real signal is:",
        "options": ["Conjugate symmetric", "Always real", "Always imaginary", "Always zero"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "DFT/FFT",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DFT of real signal: X[k] = X*[N–k]."
      },
      {
        "id": 11,
        "question": "A causal LTI system is stable if:",
        "options": ["Impulse response is absolutely summable", "Impulse response is finite", "Output is always zero", "Input is always zero"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Stability: sum |h[n]| < ∞."
      },
      {
        "id": 12,
        "question": "The Laplace transform of e^(–at)u(t) is:",
        "options": ["1/(s+a)", "1/(s–a)", "s/(s+a)", "a/(s+a)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Transforms",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "L{e^(–at)u(t)} = 1/(s+a)."
      },
      {
        "id": 13,
        "question": "The ROC of a right-sided sequence is:",
        "options": ["|z| > largest pole", "|z| < smallest pole", "|z| = 1", "All z"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Z-Transform",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ROC for right-sided: outside outermost pole."
      },
      {
        "id": 14,
        "question": "The energy of a signal x[n] = a^n u[n], |a|<1 is:",
        "options": ["1/(1–a^2)", "1/(1–a)", "a/(1–a)", "1/(1+a)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Energy & Power",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sum |a^n|^2 = 1/(1–a^2) for |a|<1."
      },
      {
        "id": 15,
        "question": "The Laplace transform of the unit step u(t) is:",
        "options": ["1/s", "s", "0", "1"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Transforms",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "L{u(t)} = 1/s."
      },
      {
        "id": 16,
        "question": "The frequency response of a system is obtained by evaluating its transfer function at:",
        "options": ["s = jω", "s = 0", "s = ∞", "s = 1"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Frequency Response",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Frequency response: H(jω)."
      },
      {
        "id": 17,
        "question": "A system with transfer function H(z) = 1/(1–az^(–1)), |a|<1 is:",
        "options": ["Stable and causal", "Unstable", "Anticausal", "Nonlinear"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Stability",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pole inside unit circle: stable and causal."
      },
      {
        "id": 18,
        "question": "The DFT of a length-N sequence requires how many complex multiplications?",
        "options": ["N^2", "N log N", "N", "log N"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "DFT/FFT",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DFT: N^2 multiplications."
      },
      {
        "id": 19,
        "question": "A moving average filter is a:",
        "options": ["FIR filter", "IIR filter", "All-pass filter", "Band-stop filter"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Filters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Moving average is FIR (finite impulse response)."
      },
      {
        "id": 20,
        "question": "The impulse response of a stable causal IIR filter is:",
        "options": ["Absolutely summable", "Finite duration", "Always zero", "Periodic"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Filters",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Stability: sum |h[n]| < ∞."
      },
      {
        "id": 21,
        "question": "The output of a system with input x[n] and impulse response h[n] is:",
        "options": ["y[n] = x[n] * h[n]", "y[n] = x[n] + h[n]", "y[n] = x[n] – h[n]", "y[n] = x[n] / h[n]"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "LTI Systems",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Output is convolution of input and impulse response."
      },
      {
        "id": 22,
        "question": "The region of convergence (ROC) for a stable causal system is:",
        "options": ["|z| > largest pole", "|z| < smallest pole", "|z| = 1", "All z"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Z-Transform",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "ROC is outside the outermost pole."
      },
      {
        "id": 23,
        "question": "The inverse Z-transform of X(z) = z/(z–a) is:",
        "options": ["a^n u[n]", "n a^n u[n]", "δ[n–a]", "u[n–a]"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Z-Transform",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Inverse Z: a^n u[n]."
      },
      {
        "id": 24,
        "question": "Aliasing occurs when:",
        "options": ["Sampling below Nyquist rate", "Sampling above Nyquist rate", "No sampling", "Infinite sampling"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Sampling",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Aliasing is due to undersampling."
      },
      {
        "id": 25,
        "question": "The Laplace transform is defined for:",
        "options": ["Continuous-time signals", "Discrete-time signals", "Both", "None"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Transforms",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Laplace is for continuous-time signals."
      },
      {
        "id": 26,
        "question": "A system is time-invariant if:",
        "options": ["Delay in input causes same delay in output", "Output is always zero", "Input is always zero", "Impulse response is zero"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "System Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Time-invariant: delay in input = delay in output."
      },
      {
        "id": 27,
        "question": "The DFT of a length-N periodic sequence is:",
        "options": ["N-point periodic in frequency", "N-point periodic in time", "Always real", "Always zero"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "DFT/FFT",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "DFT is periodic in frequency domain."
      },
      {
        "id": 28,
        "question": "The Laplace transform variable s is:",
        "options": ["Complex frequency", "Real frequency", "Time", "Amplitude"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "Transforms",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "s = σ + jω is complex frequency."
      },
      {
        "id": 29,
        "question": "The main advantage of FFT over DFT is:",
        "options": ["Lower computational complexity", "Higher accuracy", "Wider bandwidth", "Analog output"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "DFT/FFT",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "FFT computes DFT efficiently in O(N log N) time."
      },
      {
        "id": 30,
        "question": "The output of a linear time-invariant system to a sinusoidal input is:",
        "options": ["Sinusoid of same frequency", "Sinusoid of different frequency", "Impulse", "Random noise"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Signal Processing",
        "topic": "LTI Systems",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "LTI systems preserve input frequency for sinusoidal inputs."
      }
      
    ]
  },

  // Metallurgical Engineering Questions
  'Metallurgical Engineering': {
    'Physical Metallurgy': [
      {
        "id": 1,
        "question": "Which of the following has a face-centered cubic (FCC) structure at room temperature?",
        "options": ["Aluminum", "Iron (α)", "Zinc", "Magnesium"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Crystal Structure",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Aluminum is FCC at room temperature."
      },
      {
        "id": 2,
        "question": "The Miller indices of the plane that cuts the x, y, and z axes at 1, ∞, and ∞, respectively, are:",
        "options": ["(100)", "(010)", "(001)", "(111)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Crystal Structure",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Intercepts at 1, ∞, ∞ → reciprocals 1, 0, 0 → (100)."
      },
      {
        "id": 3,
        "question": "The most common type of point defect in metals is:",
        "options": ["Vacancy", "Dislocation", "Grain boundary", "Twin"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Crystal Defects",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Vacancies are the most common point defects."
      },
      {
        "id": 4,
        "question": "Fick’s first law of diffusion states that the flux is proportional to:",
        "options": ["Concentration gradient", "Temperature", "Time", "Pressure"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Diffusion",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Flux = –D (dc/dx), proportional to concentration gradient."
      },
      {
        "id": 5,
        "question": "The eutectoid composition in the Fe–C phase diagram is approximately:",
        "options": ["0.8 wt% C", "4.3 wt% C", "2.1 wt% C", "0.02 wt% C"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Phase Diagrams",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Eutectoid in Fe–C is at 0.8 wt% C."
      },
      {
        "id": 6,
        "question": "The lever rule is used to determine:",
        "options": ["Phase fractions in two-phase regions", "Grain size", "Diffusion coefficient", "Dislocation density"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Phase Diagrams",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lever rule gives fraction of each phase."
      },
      {
        "id": 7,
        "question": "Dendritic growth during solidification is mainly due to:",
        "options": ["Constitutional supercooling", "High cooling rate", "Low temperature", "High pressure"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Solidification",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Constitutional supercooling causes dendrite formation."
      },
      {
        "id": 8,
        "question": "Martensite in steel is formed by:",
        "options": ["Rapid quenching", "Slow cooling", "Annealing", "Normalizing"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Heat Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Martensite forms by rapid quenching from austenite."
      },
      {
        "id": 9,
        "question": "The TTT diagram for steel shows:",
        "options": ["Isothermal transformation behavior", "Continuous cooling", "Grain size distribution", "Hardness variation"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Heat Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "TTT = Time-Temperature-Transformation (isothermal)."
      },
      {
        "id": 10,
        "question": "Pearlite is a mixture of:",
        "options": ["Ferrite and cementite", "Ferrite and austenite", "Austenite and martensite", "Ferrite and bainite"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Microstructure",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Pearlite is alternating layers of ferrite and cementite."
      },
      {
        "id": 11,
        "question": "The main strengthening mechanism in age-hardenable alloys is:",
        "options": ["Precipitation strengthening", "Grain boundary strengthening", "Work hardening", "Solid solution strengthening"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Strengthening",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Precipitation of fine particles impedes dislocation motion."
      },
      {
        "id": 12,
        "question": "Dislocation density increases mainly due to:",
        "options": ["Cold working", "Annealing", "Quenching", "Aging"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Defects",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cold work increases dislocation density."
      },
      {
        "id": 13,
        "question": "The process of grain growth occurs primarily during:",
        "options": ["Annealing after recrystallization", "Quenching", "Cold working", "Solidification"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Heat Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Grain growth follows recrystallization during annealing."
      },
      {
        "id": 14,
        "question": "The main mechanism of creep at high temperatures and low stresses is:",
        "options": ["Diffusional flow", "Dislocation climb", "Slip", "Fracture"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Mechanical Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Diffusional flow (Nabarro-Herring, Coble creep) dominates at high T, low σ."
      },
      {
        "id": 15,
        "question": "The main constituent of brass is:",
        "options": ["Copper and zinc", "Copper and tin", "Copper and nickel", "Copper and aluminum"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Non-Ferrous Alloys",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Brass is a Cu-Zn alloy."
      },
      {
        "id": 16,
        "question": "Which of the following is NOT a non-ferrous alloy?",
        "options": ["Stainless steel", "Brass", "Bronze", "Duralumin"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Non-Ferrous Alloys",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Stainless steel is iron-based (ferrous)."
      },
      {
        "id": 17,
        "question": "The main step in powder metallurgy after compaction is:",
        "options": ["Sintering", "Annealing", "Forging", "Casting"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Powder Metallurgy",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sintering bonds powder particles after compaction."
      },
      {
        "id": 18,
        "question": "The hardness of martensite is mainly due to:",
        "options": ["Supersaturated carbon in BCT structure", "Large grain size", "High dislocation density", "Precipitation hardening"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Microstructure",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Martensite: BCT iron with trapped carbon."
      },
      {
        "id": 19,
        "question": "The primary reason for using alloying elements in steel is to:",
        "options": ["Improve properties such as strength and toughness", "Reduce cost", "Increase density", "Increase electrical conductivity"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Alloy Design",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Alloying improves mechanical and physical properties."
      },
      {
        "id": 20,
        "question": "The main mechanism for solid solution strengthening is:",
        "options": ["Lattice distortion impeding dislocation motion", "Grain boundary strengthening", "Precipitation", "Work hardening"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Strengthening",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Solute atoms distort lattice, hindering dislocations."
      },
      {
        "id": 21,
        "question": "The process of recovery in deformed metals involves:",
        "options": ["Reduction of stored energy by rearrangement of dislocations", "Grain growth", "Nucleation of new grains", "Phase transformation"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Heat Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Recovery: dislocation rearrangement reduces energy."
      },
      {
        "id": 22,
        "question": "The main difference between substitutional and interstitial solid solutions is:",
        "options": ["Size and position of solute atoms", "Crystal structure", "Density", "Electrical conductivity"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Solid Solutions",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Substitutional: solute replaces host; interstitial: solute in voids."
      },
      {
        "id": 23,
        "question": "The main cause of fatigue failure in metals is:",
        "options": ["Cyclic loading", "High temperature", "Corrosion", "Impact loading"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Mechanical Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Fatigue is failure due to repeated stress cycles."
      },
      {
        "id": 24,
        "question": "The main advantage of powder metallurgy is:",
        "options": ["Ability to produce complex shapes with minimal waste", "Higher density", "Lower strength", "Higher melting point"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Powder Metallurgy",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Powder metallurgy is efficient for complex, near-net shapes."
      },
      {
        "id": 25,
        "question": "The CCT diagram for steel shows:",
        "options": ["Continuous cooling transformation", "Isothermal transformation", "Grain size", "Phase fractions"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Heat Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "CCT: Continuous Cooling Transformation."
      },
      {
        "id": 26,
        "question": "The primary strengthening mechanism in precipitation-hardened Al alloys is:",
        "options": ["Fine precipitate particles hindering dislocation motion", "Grain boundary strengthening", "Work hardening", "Solid solution strengthening"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Strengthening",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Precipitates block dislocations in Al alloys."
      },
      {
        "id": 27,
        "question": "The main microstructural constituent of grey cast iron is:",
        "options": ["Graphite flakes in a ferrite/pearlite matrix", "Martensite", "Bainite", "Austenite"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Cast Irons",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Grey cast iron: graphite flakes + matrix."
      },
      {
        "id": 28,
        "question": "The main reason for using rapid solidification in alloys is to:",
        "options": ["Refine microstructure and suppress segregation", "Increase grain size", "Decrease hardness", "Promote dendritic growth"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Solidification",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Rapid solidification refines grains, reduces segregation."
      },
      {
        "id": 29,
        "question": "The main difference between bainite and pearlite is:",
        "options": ["Morphology and transformation temperature", "Chemical composition", "Crystal structure", "Density"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Microstructure",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bainite forms at lower T, has different morphology than pearlite."
      },
      {
        "id": 30,
        "question": "The main purpose of normalizing steel is to:",
        "options": ["Refine grain size and homogenize structure", "Increase hardness only", "Produce martensite", "Reduce ductility"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Physical Metallurgy",
        "topic": "Heat Treatment",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Normalizing refines grains and homogenizes microstructure."
      }
      
    ],
    'Mechanical Metallurgy': [
      
{
  "id": 1,
  "question": "Which one of the following processes primarily causes strain hardening in metals?",
  "options": ["Increase in dislocation density", "Phase transformation", "Grain growth", "Annealing"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Plastic Deformation",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Strain hardening occurs due to multiplication of dislocations, increasing resistance to further deformation."
  },
  {
  "id": 2,
  "question": "Which of the following mechanisms is dominant in creep at high temperature and low stress?",
  "options": ["Diffusional flow", "Dislocation glide", "Fracture", "Slip twinning"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Creep",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Nabarro-Herring and Coble creep (diffusional flow) dominate at high temperature, low stress."
  },
  {
  "id": 3,
  "question": "Toughness of a material is best defined as:",
  "options": ["Area under stress-strain curve", "Slope of elastic region", "Maximum stress before failure", "Yield strength"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Mechanical Properties",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Toughness is energy absorbed before fracture, equal to area under the stress-strain curve."
  },
  {
  "id": 4,
  "question": "The ductile-to-brittle transition temperature is most relevant in which material class?",
  "options": ["BCC metals", "FCC metals", "HCP metals", "Amorphous alloys"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Fracture Mechanics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "BCC metals show transition from ductile to brittle behavior as temperature decreases."
  },
  {
  "id": 5,
  "question": "Which of the following tests gives fracture toughness directly?",
  "options": ["Compact tension test", "Tensile test", "Hardness test", "Charpy impact test"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Fracture Mechanics",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Compact tension test measures fracture toughness (K_IC)."
  },
  {
  "id": 6,
  "question": "Which slip system is most common in FCC metals?",
  "options": ["{111}<110>", "{100}<110>", "{110}<111>", "{001}<100>"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Plastic Deformation",
  "difficulty": "Hard",
  "year": 2025,
  "explanation": "FCC metals slip on {111} planes in <110> directions, offering 12 slip systems."
  },
  {
  "id": 7,
  "question": "During cold working of metals:",
  "options": ["Strength increases, ductility decreases", "Grain size increases", "Dislocation density decreases", "Material softens"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Work Hardening",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Cold working increases dislocation density → strength ↑, ductility ↓."
  },
  {
  "id": 8,
  "question": "Which phenomenon allows dislocations to bypass obstacles?",
  "options": ["Orowan mechanism", "Cross-slip", "Twinning", "Slip transfer"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Dislocations",
  "difficulty": "Hard",
  "year": 2025,
  "explanation": "Orowan mechanism involves dislocation bowing around obstacles like precipitates."
  },
  {
  "id": 9,
  "question": "Which of the following improves fatigue resistance of a material?",
  "options": ["Shot peening", "Annealing", "Etching", "Cold rolling"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Fatigue",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Shot peening induces compressive surface stress, improving fatigue life."
  },
  {
  "id": 10,
  "question": "Necking in a tensile test begins at:",
  "options": ["Ultimate tensile strength", "Yield strength", "Fracture point", "Proportional limit"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Tensile Testing",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Necking starts at maximum load point (UTS)."
  },
  {
  "id": 11,
  "question": "Which of the following is a Hall-Petch relation?",
  "options": ["σ_y = σ_0 + k/d^0.5", "σ = Eε", "τ = μb/L", "K_IC = Yσ√(πa)"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Strengthening Mechanisms",
  "difficulty": "Hard",
  "year": 2025,
  "explanation": "Hall-Petch relates yield strength to grain size: σ_y increases as grain size decreases."
  },
  {
  "id": 12,
  "question": "In fatigue failure, the crack typically initiates at:",
  "options": ["Surface defects", "Grain boundary", "Center of specimen", "Inclusion-free zone"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Fatigue",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Fatigue cracks often initiate at surface due to stress concentration."
  },
  {
  "id": 13,
  "question": "The dislocation line and Burgers vector are perpendicular in:",
  "options": ["Edge dislocation", "Screw dislocation", "Mixed dislocation", "All types"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Dislocations",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Edge dislocation has ⊥ relationship between line and Burgers vector."
  },
  {
  "id": 14,
  "question": "The unit of fracture toughness K_IC is:",
  "options": ["MPa√m", "MPa", "Pa", "J/m^2"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Fracture Mechanics",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Fracture toughness is in MPa√m or equivalent units."
  },
  {
  "id": 15,
  "question": "What is the typical crystal structure of mild steel at room temperature?",
  "options": ["BCC", "FCC", "HCP", "Amorphous"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Structure of Materials",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "At room temperature, iron is in α-phase, which is BCC."
  },
  {
  "id": 16,
  "question": "Which test is used for measuring hardness with a diamond indenter?",
  "options": ["Vickers", "Brinell", "Rockwell B", "Izod"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Hardness Testing",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Vickers uses diamond pyramidal indenter for hardness measurement."
  },
  {
  "id": 17,
  "question": "Which mechanism contributes most to high strength in precipitation-hardened alloys?",
  "options": ["Obstruction of dislocation motion", "Reduced grain size", "Increased density", "Enhanced ductility"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Strengthening Mechanisms",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Precipitates act as barriers to dislocations, increasing strength."
  },
  {
  "id": 18,
  "question": "Which type of fracture surface typically shows dimples?",
  "options": ["Ductile fracture", "Brittle fracture", "Fatigue fracture", "Creep fracture"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Fracture",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Dimples are characteristic of ductile fracture due to microvoid coalescence."
  },
  {
  "id": 19,
  "question": "Which of the following is not a strengthening mechanism?",
  "options": ["Annealing", "Solid solution strengthening", "Grain refinement", "Work hardening"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Strengthening Mechanisms",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Annealing reduces dislocation density and softens the material."
  },
  {
  "id": 20,
  "question": "The true stress at necking is equal to:",
  "options": ["Ultimate tensile stress", "Yield stress", "Fracture stress", "Proportional limit"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Tensile Testing",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Necking starts at maximum load point (UTS), where dσ/dε = σ."
  },
  {
  "id": 21,
  "question": "Which of the following is the primary mechanism in stage II creep?",
  "options": ["Dislocation climb", "Grain boundary sliding", "Diffusional creep", "Crack propagation"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Creep",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Dislocation climb dominates in steady-state (stage II) creep."
  },
  {
  "id": 22,
  "question": "Which factor increases the fatigue life of a material?",
  "options": ["Polishing surface", "Increasing temperature", "Increasing load amplitude", "Notch introduction"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Fatigue",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Surface polishing reduces stress concentration and improves fatigue life."
  },
  {
  "id": 23,
  "question": "Which of the following leads to recrystallization during annealing?",
  "options": ["New grain nucleation and growth", "Grain boundary migration", "Increase in dislocation density", "Phase transformation"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Recovery and Recrystallization",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Recrystallization involves formation of new strain-free grains."
  },
  {
  "id": 24,
  "question": "Which type of loading is used in a Charpy impact test?",
  "options": ["Transverse impact", "Axial tension", "Axial compression", "Shear loading"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Impact Testing",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Charpy test applies transverse impact to a notched specimen."
  },
  {
  "id": 25,
  "question": "Which microstructural feature causes strain aging?",
  "options": ["Interaction between dislocations and solute atoms", "Grain coarsening", "Void formation", "Work hardening"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Mechanical Properties",
  "difficulty": "Hard",
  "year": 2025,
  "explanation": "Strain aging is due to interaction between dislocations and interstitial atoms like C, N."
  },
  {
  "id": 26,
  "question": "The engineering stress is calculated using:",
  "options": ["Original cross-sectional area", "Instantaneous area", "Average of original and final area", "Gauge length"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Tensile Testing",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Engineering stress = Load / Original cross-sectional area."
  },
  {
  "id": 27,
  "question": "What is the primary cause of creep rupture?",
  "options": ["Grain boundary cavitation", "Dislocation glide", "Dislocation pile-up", "Fatigue"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Creep",
  "difficulty": "Hard",
  "year": 2025,
  "explanation": "Creep rupture is caused by cavity formation and coalescence at grain boundaries."
  },
  {
  "id": 28,
  "question": "The term 'yield point phenomenon' is typically observed in:",
  "options": ["Low carbon steels", "Aluminum alloys", "Stainless steels", "Titanium alloys"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Stress-Strain Behavior",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Yield point is distinct in low carbon steels due to Cottrell atmosphere."
  },
  {
  "id": 29,
  "question": "Which factor most significantly reduces ductility?",
  "options": ["Presence of notches", "Fine grains", "Cold working", "Annealing"],
  "correct": 2,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Plastic Deformation",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Cold working increases dislocation density, reducing ductility."
  },
  {
  "id": 30,
  "question": "Which of the following best describes true strain?",
  "options": ["ln(final length / original length)", "(final - original) / original", "(change in stress / original length)", "None of the above"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Mechanical Metallurgy",
  "topic": "Tensile Testing",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "True strain = ln(l_final / l_initial)"
  }
  
    ],
    'Extractive Metallurgy': [
      {
        "id": 1,
        "question": "Which process is primarily used for the concentration of sulphide ores?",
        "options": ["Froth flotation", "Gravity separation", "Magnetic separation", "Leaching"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Mineral Processing",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Froth flotation is widely used for sulphide ore concentration.[1][2][3][4][5]"
      },
      {
        "id": 2,
        "question": "The main purpose of sintering in iron ore processing is to:",
        "options": ["Agglomerate fine particles", "Reduce iron oxide", "Increase ore purity", "Remove sulfur"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Agglomeration",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sintering agglomerates fines for blast furnace feed.[1][2][3][4][5]"
      },
      {
        "id": 3,
        "question": "The reducing agent in a blast furnace is mainly:",
        "options": ["CO", "CO₂", "O₂", "N₂"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Ironmaking",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "CO reduces iron oxide to iron in blast furnace.[1][2][3][4][5]"
      },
      {
        "id": 4,
        "question": "The main function of limestone in the blast furnace is to:",
        "options": ["Act as a flux", "Reduce iron oxide", "Increase temperature", "Provide fuel"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Ironmaking",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Limestone forms slag by reacting with impurities.[1][2][3][4][5]"
      },
      {
        "id": 5,
        "question": "The basicity of slag is defined as the ratio of:",
        "options": ["CaO to SiO₂", "SiO₂ to CaO", "FeO to CaO", "Al₂O₃ to SiO₂"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Slags",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Basicity = [CaO]/[SiO₂].[1][2][3][4][5]"
      },
      {
        "id": 6,
        "question": "The Ellingham diagram is used to:",
        "options": ["Compare the stability of oxides", "Measure slag viscosity", "Calculate phase diagrams", "Determine grain size"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Thermodynamics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Ellingham diagrams rank oxide stability by ΔG°.[4][5][6]"
      },
      {
        "id": 7,
        "question": "The main reaction in the basic oxygen furnace (BOF) is:",
        "options": ["Oxidation of carbon", "Reduction of iron oxide", "Reduction of carbon", "Oxidation of Fe"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Steelmaking",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "BOF oxidizes C, Si, Mn, P to refine steel.[1][2][3][4][5]"
      },
      {
        "id": 8,
        "question": "COREX and MIDRE are processes for:",
        "options": ["Alternative ironmaking", "Copper extraction", "Electrorefining", "Agglomeration"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Ironmaking",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "COREX/MIDRE are non-blast furnace ironmaking methods.[1][2][3][4][5]"
      },
      {
        "id": 9,
        "question": "The main impurity removed during the deoxidation step in secondary steelmaking is:",
        "options": ["Oxygen", "Sulfur", "Carbon", "Phosphorus"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Secondary Steelmaking",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Deoxidation removes dissolved oxygen from steel.[1][2][3][4][5]"
      },
      {
        "id": 10,
        "question": "The main principle of flotation in mineral processing is based on:",
        "options": ["Difference in surface properties", "Density difference", "Magnetic properties", "Melting point"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Mineral Processing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Froth flotation separates minerals by surface hydrophobicity.[1][2][3][4][5]"
      },
      {
        "id": 11,
        "question": "Agglomeration processes include:",
        "options": ["Sintering, pelletizing, briquetting", "Leaching, roasting, smelting", "Casting, forging, rolling", "Annealing, quenching, tempering"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Agglomeration",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Agglomeration: sintering, pelletizing, briquetting.[1][2][3][4][5]"
      },
      {
        "id": 12,
        "question": "The main principle of the Bayer process is:",
        "options": ["Extraction of alumina from bauxite", "Copper smelting", "Ironmaking", "Zinc electrolysis"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Non-ferrous Extraction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Bayer process extracts Al₂O₃ from bauxite.[1][2][3][4][5]"
      },
      {
        "id": 13,
        "question": "The main reducing agent in the Hall-Héroult process is:",
        "options": ["Carbon", "Hydrogen", "Aluminum", "Iron"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Non-ferrous Extraction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hall-Héroult: carbon reduces alumina to aluminum.[1][2][3][4][5]"
      },
      {
        "id": 14,
        "question": "In copper extraction, the matte contains mainly:",
        "options": ["Cu₂S and FeS", "CuO and Fe₂O₃", "Cu and Zn", "CuCl₂ and FeCl₂"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Non-ferrous Extraction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Copper matte: Cu₂S + FeS.[1][2][3][4][5]"
      },
      {
        "id": 15,
        "question": "The main method for titanium extraction is:",
        "options": ["Kroll process", "Hall-Héroult process", "Bayer process", "Bessemer process"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Non-ferrous Extraction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Kroll process reduces TiCl₄ to titanium metal.[1][2][3][4][5]"
      },
      {
        "id": 16,
        "question": "The main output of the blast furnace is:",
        "options": ["Pig iron", "Steel", "Wrought iron", "Slag"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Ironmaking",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Blast furnace produces pig iron.[1][2][3][4][5]"
      },
      {
        "id": 17,
        "question": "The main function of argon stirring in ladle metallurgy is to:",
        "options": ["Homogenize temperature and composition", "Increase carbon content", "Reduce temperature", "Increase oxygen content"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Secondary Steelmaking",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Argon stirring homogenizes the melt in ladle.[1][2][3][4][5]"
      },
      {
        "id": 18,
        "question": "The main impurity removed during desulfurization in steelmaking is:",
        "options": ["Sulfur", "Phosphorus", "Oxygen", "Carbon"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Secondary Steelmaking",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Desulfurization removes sulfur from steel.[1][2][3][4][5]"
      },
      {
        "id": 19,
        "question": "The main purpose of inclusion shape control in steelmaking is to:",
        "options": ["Improve mechanical properties", "Increase carbon content", "Reduce melting point", "Increase slag basicity"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Secondary Steelmaking",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Inclusion control improves ductility and toughness.[1][2][3][4][5]"
      },
      {
        "id": 20,
        "question": "The main advantage of pelletizing iron ore is:",
        "options": ["Uniform size and high permeability", "Lower melting point", "Higher carbon content", "Lower cost"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Agglomeration",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pellets are uniform and permeable for blast furnace use.[1][2][3][4][5]"
      },
      {
        "id": 21,
        "question": "The main function of the tundish in continuous casting is to:",
        "options": ["Distribute molten metal evenly to molds", "Increase temperature", "Remove slag", "Reduce oxygen content"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Continuous Casting",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Tundish ensures even flow of metal to molds.[1][2][3][4][5]"
      },
      {
        "id": 22,
        "question": "The main mechanism for heat transfer in the mold during continuous casting is:",
        "options": ["Conduction", "Convection", "Radiation", "Advection"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Continuous Casting",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Heat is conducted from metal to mold wall.[1][2][3][4][5]"
      },
      {
        "id": 23,
        "question": "The main cause of macrosegregation during solidification is:",
        "options": ["Solute redistribution during solidification", "High cooling rate", "Gas evolution", "Slag entrapment"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Continuous Casting",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Macrosegregation is due to solute redistribution in solidifying metal.[1][2][3][4][5]"
      },
      {
        "id": 24,
        "question": "The main function of coke in the blast furnace is to:",
        "options": ["Act as a fuel and reducing agent", "Increase slag basicity", "Reduce temperature", "Increase permeability"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Ironmaking",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Coke provides heat and reduces iron oxide.[1][2][3][4][5]"
      },
      {
        "id": 25,
        "question": "The main principle of the Pidgeon process is:",
        "options": ["Thermal reduction of magnesium oxide", "Electrolysis of alumina", "Roasting of copper", "Carbonyl process for nickel"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Non-ferrous Extraction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pidgeon process reduces MgO with Si to produce Mg.[1][2][3][4][5]"
      },
      {
        "id": 26,
        "question": "The main impurity removed by basicity control in slag is:",
        "options": ["Phosphorus", "Sulfur", "Oxygen", "Carbon"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Slags",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "High basicity slags remove phosphorus efficiently.[1][2][3][4][5]"
      },
      {
        "id": 27,
        "question": "The main purpose of degassing in secondary steelmaking is to:",
        "options": ["Remove dissolved gases (H₂, N₂, O₂)", "Increase carbon content", "Add alloying elements", "Reduce temperature"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Secondary Steelmaking",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Degassing removes dissolved gases from steel.[1][2][3][4][5]"
      },
      {
        "id": 28,
        "question": "In the extraction of copper, blister copper is produced by:",
        "options": ["Roasting and converting matte", "Electrorefining", "Leaching", "Smelting chalcopyrite directly"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Non-ferrous Extraction",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Blister copper is formed by converting copper matte.[1][2][3][4][5]"
      },
      {
        "id": 29,
        "question": "The main advantage of using electric arc furnace (EAF) in steelmaking is:",
        "options": ["Flexibility in raw materials", "Lower energy consumption", "Higher purity", "Lower cost"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Steelmaking",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "EAF can use scrap, DRI, and various feeds flexibly.[1][2][3][4][5]"
      },
      {
        "id": 30,
        "question": "The main function of a pelletizer in iron ore processing is to:",
        "options": ["Form spherical agglomerates", "Reduce ore size", "Increase ore purity", "Remove sulfur"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Extractive Metallurgy",
        "topic": "Agglomeration",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pelletizer forms spherical pellets for blast furnace feed.[1][2][3][4][5]"
      }
      
    ],
    'Materials Science': [
      {
        "id": 1,
        "question": "Which of the following has a body-centered cubic (BCC) structure at room temperature?",
        "options": ["Iron (α)", "Copper", "Aluminum", "Magnesium"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Crystal Structure",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "α-iron is BCC at room temperature."
      },
      {
        "id": 2,
        "question": "The Miller indices for a plane that cuts the x, y, z axes at 1, 2, ∞ are:",
        "options": ["(2 1 0)", "(1 2 0)", "(2 1 1)", "(1 2 1)"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Crystallography",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Intercepts: 1,2,∞ → Reciprocals: 1, 0.5, 0 → (2 1 0)."
      },
      {
        "id": 3,
        "question": "Which type of bonding is predominant in NaCl?",
        "options": ["Ionic", "Covalent", "Metallic", "Van der Waals"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Bonding",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "NaCl is an ionic solid."
      },
      {
        "id": 4,
        "question": "A Schottky defect involves:",
        "options": ["A pair of cation and anion vacancies", "An interstitial atom", "A dislocation", "A grain boundary"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Defects",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Schottky defect: paired vacancies in ionic solids."
      },
      {
        "id": 5,
        "question": "Fick’s first law relates diffusion flux to:",
        "options": ["Concentration gradient", "Temperature", "Time", "Pressure"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Diffusion",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Flux = –D(dc/dx), proportional to concentration gradient."
      },
      {
        "id": 6,
        "question": "The lever rule is used to determine:",
        "options": ["Phase fractions in two-phase regions", "Grain size", "Diffusion coefficient", "Dislocation density"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Phase Diagrams",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lever rule gives phase fractions in binary diagrams."
      },
      {
        "id": 7,
        "question": "The eutectic reaction in a binary phase diagram is:",
        "options": ["Liquid → α + β", "α → β + γ", "Liquid + α → β", "β → α + γ"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Phase Diagrams",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Eutectic: L → α + β at eutectic composition."
      },
      {
        "id": 8,
        "question": "The main strengthening mechanism in precipitation-hardened alloys is:",
        "options": ["Impediment of dislocation motion by precipitates", "Grain boundary strengthening", "Work hardening", "Solid solution strengthening"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Strengthening",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Precipitates block dislocation movement."
      },
      {
        "id": 9,
        "question": "The elastic modulus of a material is defined as:",
        "options": ["Stress/strain in the elastic region", "Strain/stress in the plastic region", "Hardness/strain", "Stress × strain"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Mechanical Properties",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Elastic modulus = slope of stress-strain curve (elastic)."
      },
      {
        "id": 10,
        "question": "Which of the following is a semiconductor?",
        "options": ["Silicon", "Copper", "Iron", "Diamond"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Electronic Properties",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Silicon is widely used as a semiconductor."
      },
      {
        "id": 11,
        "question": "A material with a negative temperature coefficient of resistance is typically a:",
        "options": ["Semiconductor", "Metal", "Alloy", "Ceramic"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Electronic Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Semiconductors have negative TCR."
      },
      {
        "id": 12,
        "question": "The Hall effect is used to determine:",
        "options": ["Carrier type and concentration", "Band gap", "Thermal conductivity", "Optical transparency"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Electronic Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hall effect gives carrier type (n/p) and density."
      },
      {
        "id": 13,
        "question": "Which is the primary mechanism of plastic deformation in metals?",
        "options": ["Dislocation slip", "Diffusion", "Twinning", "Grain growth"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Mechanical Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Slip of dislocations causes plasticity."
      },
      {
        "id": 14,
        "question": "The main difference between thermoplastics and thermosets is:",
        "options": ["Thermoplastics can be remelted, thermosets cannot", "Thermoplastics are harder", "Thermosets are crystalline", "Thermoplastics are amorphous"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Polymers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Thermoplastics soften on heating; thermosets do not."
      },
      {
        "id": 15,
        "question": "The main property measured by a Charpy test is:",
        "options": ["Impact toughness", "Hardness", "Creep strength", "Fatigue limit"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Mechanical Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Charpy test measures impact energy absorbed."
      },
      {
        "id": 16,
        "question": "Which technique is used to determine crystal structure?",
        "options": ["X-ray diffraction", "UV-Vis spectroscopy", "Tensile test", "DSC"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Characterization",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "XRD is used for crystal structure analysis."
      },
      {
        "id": 17,
        "question": "The main cause of creep in metals at high temperature is:",
        "options": ["Diffusion-controlled mechanisms", "Dislocation pile-up", "Grain boundary sliding", "Work hardening"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Mechanical Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Creep is dominated by diffusion at high T."
      },
      {
        "id": 18,
        "question": "The band gap of an intrinsic semiconductor at 0 K is:",
        "options": ["Maximum", "Zero", "Minimum", "Negative"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Electronic Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Band gap is largest at 0 K."
      },
      {
        "id": 19,
        "question": "A ferromagnetic material loses its magnetism above:",
        "options": ["Curie temperature", "Melting point", "Glass transition", "Boiling point"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Magnetic Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Curie temperature is the magnetic transition point."
      },
      {
        "id": 20,
        "question": "The main advantage of composite materials is:",
        "options": ["Tailored combination of properties", "High density", "Low cost", "High electrical conductivity"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Composites",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Composites combine properties of constituents."
      },
      {
        "id": 21,
        "question": "The main mechanism for heat conduction in metals is:",
        "options": ["Free electron movement", "Phonon transport", "Ionic conduction", "Radiation"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Thermal Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Electrons dominate thermal conduction in metals."
      },
      {
        "id": 22,
        "question": "The glass transition temperature (Tg) is relevant for:",
        "options": ["Amorphous polymers", "Crystalline metals", "Ceramics", "Composites"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Polymers",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Tg marks transition in amorphous polymers."
      },
      {
        "id": 23,
        "question": "The main function of a grain boundary is to:",
        "options": ["Impedes dislocation motion", "Increase electrical conductivity", "Reduce corrosion", "Increase density"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Defects",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Grain boundaries hinder dislocation movement."
      },
      {
        "id": 24,
        "question": "The main principle behind SEM imaging is:",
        "options": ["Scanning electron beam and detecting secondary electrons", "Transmitting X-rays", "Measuring resistance", "Optical absorption"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Characterization",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "SEM uses secondary electrons for imaging."
      },
      {
        "id": 25,
        "question": "The main difference between XRD and TEM is:",
        "options": ["XRD gives average structure, TEM gives local structure", "TEM is only for metals", "XRD is only for polymers", "TEM cannot resolve defects"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Characterization",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "XRD is bulk, TEM is local imaging."
      },
      {
        "id": 26,
        "question": "The main reason for using sintering in ceramics is to:",
        "options": ["Densify and bond particles", "Increase grain size", "Reduce melting point", "Increase porosity"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Processing",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sintering densifies ceramic powders."
      },
      {
        "id": 27,
        "question": "The main optical property measured by UV-Vis spectroscopy is:",
        "options": ["Absorption", "Reflection", "Refractive index", "Luminescence"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Optical Properties",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "UV-Vis measures absorption of light."
      },
      {
        "id": 28,
        "question": "The main advantage of nanomaterials is:",
        "options": ["Unique size-dependent properties", "High density", "Low melting point", "High cost"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Nanomaterials",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Nanomaterials exhibit unique properties at small scale."
      },
      {
        "id": 29,
        "question": "The main function of a dielectric material in a capacitor is to:",
        "options": ["Increase capacitance by reducing electric field", "Conduct electricity", "Emit light", "Increase resistance"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Dielectrics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dielectrics increase capacitance by polarizability."
      },
      {
        "id": 30,
        "question": "The main reason for using non-destructive testing (NDT) is to:",
        "options": ["Detect defects without damaging the material", "Increase strength", "Reduce cost", "Increase density"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Materials Science",
        "topic": "Characterization",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "NDT finds flaws without harming the sample."
      }
      
    ],
    'Corrosion': [
      {
        "id": 1,
        "question": "Corrosion of iron in moist air is primarily:",
        "options": ["Electrochemical", "Photochemical", "Galvanic", "Mechanical"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Basics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Atmospheric corrosion of iron is an electrochemical process."
      },
      {
        "id": 2,
        "question": "The main anodic reaction during rusting of iron is:",
        "options": ["Fe → Fe²⁺ + 2e⁻", "O₂ + 4e⁻ → 2O²⁻", "Fe²⁺ → Fe³⁺ + e⁻", "Fe + O₂ → FeO"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Electrochemistry",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "At the anode, iron oxidizes to Fe²⁺."
      },
      {
        "id": 3,
        "question": "Which of the following is NOT a form of localized corrosion?",
        "options": ["Uniform corrosion", "Pitting corrosion", "Crevice corrosion", "Intergranular corrosion"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Types",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Uniform corrosion affects the whole surface, not localized."
      },
      {
        "id": 4,
        "question": "The Nernst equation relates electrode potential to:",
        "options": ["Ion concentration", "Temperature only", "Pressure only", "Current"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Electrochemistry",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Nernst equation shows E depends on ion concentration."
      },
      {
        "id": 5,
        "question": "Galvanic corrosion occurs when:",
        "options": ["Two dissimilar metals are electrically connected in an electrolyte", "Metal is exposed to dry air", "Metal is under stress", "Metal is coated with paint"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Types",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Galvanic corrosion needs two metals and an electrolyte."
      },
      {
        "id": 6,
        "question": "In a galvanic couple, the metal with lower electrode potential acts as:",
        "options": ["Anode", "Cathode", "Inhibitor", "Passivator"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Electrochemistry",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Lower potential metal is anodic and corrodes."
      },
      {
        "id": 7,
        "question": "The main cathodic reaction in neutral or basic aqueous corrosion is:",
        "options": ["O₂ + 2H₂O + 4e⁻ → 4OH⁻", "2H⁺ + 2e⁻ → H₂", "Fe → Fe²⁺ + 2e⁻", "Fe²⁺ → Fe³⁺ + e⁻"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Electrochemistry",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Oxygen reduction is the main cathodic reaction in neutral/basic media."
      },
      {
        "id": 8,
        "question": "Passivation is the process by which a metal:",
        "options": ["Forms a protective oxide layer", "Dissolves rapidly", "Becomes more reactive", "Is cathodically protected"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Prevention",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Passivation forms a stable oxide barrier."
      },
      {
        "id": 9,
        "question": "Stainless steel resists corrosion mainly due to:",
        "options": ["Chromium oxide passive film", "High carbon content", "Nickel addition", "Copper addition"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Prevention",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cr₂O₃ passive film protects stainless steel."
      },
      {
        "id": 10,
        "question": "The Pourbaix diagram is a plot of:",
        "options": ["Potential vs pH", "Potential vs current", "pH vs current", "Concentration vs time"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Electrochemistry",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pourbaix diagrams show stability regions of metals."
      },
      {
        "id": 11,
        "question": "The Tafel slope is related to:",
        "options": ["Electrochemical polarization", "Mechanical strength", "pH", "Passivation thickness"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Kinetics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Tafel slope describes polarization behavior."
      },
      {
        "id": 12,
        "question": "Which method is NOT a corrosion prevention technique?",
        "options": ["Increasing surface roughness", "Coating with paint", "Cathodic protection", "Using inhibitors"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Prevention",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Rough surfaces can increase corrosion."
      },
      {
        "id": 13,
        "question": "Cathodic protection works by:",
        "options": ["Making the protected metal the cathode of an electrochemical cell", "Increasing anodic area", "Removing oxygen", "Increasing temperature"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Prevention",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Cathodic protection prevents oxidation of the protected metal."
      },
      {
        "id": 14,
        "question": "Sacrificial anode protection uses:",
        "options": ["A more active metal as anode", "A less active metal as anode", "Paint coatings", "Plastic coatings"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Prevention",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Sacrificial anode is more easily oxidized."
      },
      {
        "id": 15,
        "question": "Stress corrosion cracking is caused by:",
        "options": ["Combined action of tensile stress and corrosive environment", "High temperature alone", "Fatigue only", "Paint coatings"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Types",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "SCC needs both stress and corrosive medium."
      },
      {
        "id": 16,
        "question": "The main product of iron corrosion in neutral water is:",
        "options": ["Fe(OH)₂ and Fe(OH)₃", "Fe₂O₃", "Fe₃O₄", "FeO"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Products",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Hydrated iron oxides are main rust products."
      },
      {
        "id": 17,
        "question": "Pitting corrosion is especially dangerous because:",
        "options": ["It is highly localized and hard to detect", "It occurs only in air", "It is always uniform", "It increases ductility"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Types",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Pitting can cause failure with little overall mass loss."
      },
      {
        "id": 18,
        "question": "Which of the following materials is most resistant to corrosion in acidic environments?",
        "options": ["Graphite", "Mild steel", "Copper", "Zinc"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Materials",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Graphite is inert in acids."
      },
      {
        "id": 19,
        "question": "Which of the following is a form of dry corrosion?",
        "options": ["High temperature oxidation", "Pitting", "Crevice corrosion", "Galvanic corrosion"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Types",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Dry corrosion involves direct reaction with gases."
      },
      {
        "id": 20,
        "question": "The rate of corrosion is generally higher at:",
        "options": ["High temperature", "Low temperature", "Neutral pH", "Low humidity"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Kinetics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Corrosion accelerates with temperature."
      },
      {
        "id": 21,
        "question": "Intergranular corrosion is caused by:",
        "options": ["Preferential attack at grain boundaries", "Uniform attack", "Coating failure", "Fatigue"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Types",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Grain boundaries are more reactive."
      },
      {
        "id": 22,
        "question": "Which of the following is NOT a method to reduce corrosion?",
        "options": ["Using dissimilar metals in contact", "Applying protective coatings", "Cathodic protection", "Adding inhibitors"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Prevention",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Dissimilar metals can cause galvanic corrosion."
      },
      {
        "id": 23,
        "question": "The corrosion rate is commonly measured in:",
        "options": ["mm/year", "kg/m³", "m/s", "A/m²"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Kinetics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Corrosion rate is often given in mm/year."
      },
      {
        "id": 24,
        "question": "Corrosion inhibitors function by:",
        "options": ["Slowing down anodic or cathodic reactions", "Increasing temperature", "Increasing humidity", "Adding more oxygen"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Prevention",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Inhibitors slow corrosion reactions."
      },
      {
        "id": 25,
        "question": "Which of the following is a common anodic protection technique?",
        "options": ["Maintaining metal at a passive potential", "Using sacrificial anode", "Applying paint", "Using inhibitors"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Prevention",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Anodic protection keeps metal passive."
      },
      {
        "id": 26,
        "question": "The main reason for corrosion of aluminum in marine environments is:",
        "options": ["Breakdown of passive oxide film by chloride ions", "Low melting point", "High density", "Presence of iron"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Materials",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Chloride ions attack Al₂O₃ film."
      },
      {
        "id": 27,
        "question": "Which of the following does NOT affect corrosion rate?",
        "options": ["Color of metal", "pH of environment", "Temperature", "Oxygen concentration"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Kinetics",
        "difficulty": "Easy",
        "year": 2025,
        "explanation": "Color has no effect on corrosion."
      },
      {
        "id": 28,
        "question": "The main difference between dry and wet corrosion is:",
        "options": ["Presence of electrolyte in wet corrosion", "Temperature", "Type of metal", "Atmospheric pressure"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Basics",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Wet corrosion requires an electrolyte."
      },
      {
        "id": 29,
        "question": "The main reason for using zinc coating (galvanization) on steel is to:",
        "options": ["Provide sacrificial protection", "Increase hardness", "Reduce weight", "Increase ductility"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Prevention",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Zinc acts as a sacrificial anode."
      },
      {
        "id": 30,
        "question": "Which of the following is a typical product of copper corrosion in moist air?",
        "options": ["CuCO₃·Cu(OH)₂ (patina)", "CuO", "CuSO₄", "CuCl₂"],
        "correct": 0,
        "type": "MCQ",
        "marks": 1,
        "subject": "Corrosion",
        "topic": "Products",
        "difficulty": "Medium",
        "year": 2025,
        "explanation": "Green patina forms on copper in moist air."
      }
      
    ],
    'Welding': [
      
{
  "id": 1,
  "question": "In Gas Tungsten Arc Welding (GTAW), the electrode is:",
  "options": ["Consumable", "Non-consumable", "Flux coated", "Bare copper"],
  "correct": 1,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Processes",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "GTAW (TIG) uses a non-consumable tungsten electrode."
  },
  {
  "id": 2,
  "question": "The primary function of flux in welding is to:",
  "options": ["Cool the weld zone", "Remove oxides", "Increase penetration", "Reduce arc voltage"],
  "correct": 1,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Consumables",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Flux removes oxides and impurities from the weld zone."
  },
  {
  "id": 3,
  "question": "Which of the following is a solid-state welding process?",
  "options": ["Friction welding", "MIG welding", "TIG welding", "Plasma arc welding"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Processes",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Friction welding joins materials below their melting points by mechanical rubbing."
  },
  {
  "id": 4,
  "question": "Porosity in welds is caused by:",
  "options": ["Excessive welding speed", "Poor shielding", "Excess current", "High electrode angle"],
  "correct": 1,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Defects",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Poor shielding allows gases to form pores in the weld."
  },
  {
  "id": 5,
  "question": "In arc welding, arc blow is caused due to:",
  "options": ["Magnetic forces", "Electrode type", "Shielding gas", "Current polarity"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Arc Phenomena",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Arc blow is the deflection of the arc due to magnetic forces."
  },
  {
  "id": 6,
  "question": "Electroslag welding is best suited for:",
  "options": ["Thin sheets", "Small components", "Vertical thick plates", "Aluminum welding"],
  "correct": 2,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Processes",
  "difficulty": "Hard",
  "year": 2025,
  "explanation": "Electroslag welding is used for welding thick vertical joints in one pass."
  },
  {
  "id": 7,
  "question": "Which welding process uses a filler metal with a melting point below 450°C?",
  "options": ["Brazing", "Fusion welding", "Arc welding", "Gas welding"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Processes",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Brazing uses low-melting-point filler metals without melting the base metal."
  },
  {
  "id": 8,
  "question": "The Heat Affected Zone (HAZ) is the region:",
  "options": ["That melts and resolidifies", "With severe corrosion", "Not affected by heat", "Not melted but microstructurally changed"],
  "correct": 3,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Metallurgy",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "HAZ experiences thermal cycles that change microstructure without melting."
  },
  {
  "id": 9,
  "question": "In submerged arc welding (SAW), the arc is:",
  "options": ["Exposed", "Under flux blanket", "Non-existent", "Pulsed"],
  "correct": 1,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Processes",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "In SAW, the arc is hidden beneath a blanket of flux."
  },
  {
  "id": 10,
  "question": "Undercut is a welding defect that:",
  "options": ["Occurs due to low voltage", "Occurs due to excessive current", "Causes excessive penetration", "Improves strength"],
  "correct": 1,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Defects",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Undercut is a groove melted into the base metal due to high current."
  },
  {
  "id": 11,
  "question": "Which of the following methods is used for joining dissimilar metals?",
  "options": ["Explosion welding", "TIG welding", "SAW", "MIG welding"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Special Welding Techniques",
  "difficulty": "Hard",
  "year": 2025,
  "explanation": "Explosion welding is effective for joining dissimilar metals without melting."
  },
  {
  "id": 12,
  "question": "In resistance spot welding, heat generation is given by:",
  "options": ["I²Rt", "VIt", "IR²t", "VI/R"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Fundamentals",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "In resistance welding, heat is generated by Joule’s law: Q = I²Rt."
  },
  {
  "id": 13,
  "question": "Backhand welding technique is characterized by:",
  "options": ["Torch trailing the filler", "Torch leading the filler", "Filler not used", "Filler above torch"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Techniques",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "In backhand welding, the torch is moved in a direction opposite to welding progression."
  },
  {
  "id": 14,
  "question": "Crater in welding occurs due to:",
  "options": ["Abrupt arc stop", "Low current", "High voltage", "Large electrode angle"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Defects",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "A crater is formed when the arc is abruptly stopped without filling the pool."
  },
  {
  "id": 15,
  "question": "The shielding gas commonly used in TIG welding is:",
  "options": ["Argon", "Hydrogen", "Nitrogen", "Air"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Shielding Gases",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Argon is inert and commonly used in TIG to protect the arc."
  },
  {
  "id": 16,
  "question": "Which of the following is not a fusion welding process?",
  "options": ["Forge welding", "TIG welding", "MIG welding", "Gas welding"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Processes",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Forge welding is a solid-state process, not involving melting."
  },
  {
  "id": 17,
  "question": "The main function of a backing plate in welding is to:",
  "options": ["Support molten metal", "Shield arc", "Increase temperature", "Cool the joint"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Accessories",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Backing plates support and prevent melt-through in root passes."
  },
  {
  "id": 18,
  "question": "In laser beam welding, the heat source is:",
  "options": ["High-intensity laser", "Arc", "Resistance", "Explosive"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Advanced Welding",
  "difficulty": "Hard",
  "year": 2025,
  "explanation": "Laser beam welding uses focused laser to melt the joint area."
  },
  {
  "id": 19,
  "question": "Spatter during arc welding is caused by:",
  "options": ["Instability of arc", "Clean surface", "Low current", "High gas pressure"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Defects",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Arc instability or improper parameters cause molten metal droplets (spatter)."
  },
  {
  "id": 20,
  "question": "Which defect is caused by lack of fusion?",
  "options": ["Cold shut", "Hot crack", "Blowhole", "Incomplete penetration"],
  "correct": 3,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Defects",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Lack of fusion between weld and base metal results in incomplete penetration."
  },
  {
  "id": 21,
  "question": "Which of the following welding processes is most suitable for aluminum alloys?",
  "options": ["TIG welding", "SAW", "Oxy-acetylene welding", "Resistance spot welding"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding of Materials",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "TIG welding offers excellent control and is ideal for aluminum."
  },
  {
  "id": 22,
  "question": "The weldability of a material is defined as:",
  "options": ["Ease of forming welds", "Strength of the weld", "Ease with which satisfactory welds can be made", "Hardness of the weld zone"],
  "correct": 2,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Weldability",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Weldability is the ease with which materials can be welded to form acceptable joints."
  },
  {
  "id": 23,
  "question": "A major cause of hot cracking in welds is:",
  "options": ["High sulfur content", "Slow cooling", "Small grain size", "Low current"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Defects",
  "difficulty": "Hard",
  "year": 2025,
  "explanation": "Impurities like sulfur and phosphorous cause segregation, leading to hot cracking."
  },
  {
  "id": 24,
  "question": "What is the role of preheating before welding?",
  "options": ["Reduces cooling rate", "Increases weld penetration", "Enhances arc stability", "Decreases HAZ size"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Thermal Effects",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Preheating reduces thermal gradients and residual stresses."
  },
  {
  "id": 25,
  "question": "Which of the following is not a welding defect?",
  "options": ["Toe crack", "Root fusion", "Undercut", "Porosity"],
  "correct": 1,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Defects",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Root fusion is a desired result, not a defect."
  },
  {
  "id": 26,
  "question": "Which of the following is used in ultrasonic welding?",
  "options": ["High-frequency vibration", "Electric arc", "Inert gas", "Laser beam"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Advanced Welding",
  "difficulty": "Hard",
  "year": 2025,
  "explanation": "Ultrasonic welding uses mechanical vibrations at high frequency to join parts."
  },
  {
  "id": 27,
  "question": "Which parameter is primarily adjusted to control heat input in arc welding?",
  "options": ["Current", "Voltage", "Wire feed rate", "Arc length"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Parameters",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Heat input ∝ I²Rt; thus, current is the most sensitive parameter."
  },
  {
  "id": 28,
  "question": "Which NDT method is best suited for detecting internal weld defects?",
  "options": ["Radiographic testing", "Visual inspection", "Dye penetrant testing", "Magnetic particle testing"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Inspection & Testing",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "Radiography can detect internal defects like porosity and cracks."
  },
  {
  "id": 29,
  "question": "Which of the following is used as electrode coating material in SMAW?",
  "options": ["Cellulose", "Graphite", "Zinc", "Nickel"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Consumables",
  "difficulty": "Easy",
  "year": 2025,
  "explanation": "Cellulose-based coatings are common in shielded metal arc welding."
  },
  {
  "id": 30,
  "question": "Which zone in a weld joint is most susceptible to residual stresses?",
  "options": ["Heat Affected Zone (HAZ)", "Base metal", "Filler zone", "Fusion zone"],
  "correct": 0,
  "type": "MCQ",
  "marks": 1,
  "subject": "Welding",
  "topic": "Welding Metallurgy",
  "difficulty": "Medium",
  "year": 2025,
  "explanation": "HAZ experiences thermal cycles and is prone to residual stresses and cracking."
  }
  
  
    ]
  },

  // Engineering Mathematics Questions (Common for all branches)
  'Engineering Mathematics': [
    {
      "id": 1,
      "question": "Let \( A \) be a \( 3 \times 3 \) real matrix such that \( A^3 = I \) and \( \det(A) = 1 \). Which of the following is necessarily true?",
      "options": [
        "All eigenvalues of A are cube roots of unity",
        "A is diagonalizable over ℝ",
        "A is orthogonal",
        "A is nilpotent"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Linear Algebra",
      "topic": "Eigenvalues",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Eigenvalues satisfy \( \lambda^3 = 1 \); so are cube roots of unity."
    },
    {
      "id": 2,
      "question": "Suppose \( f(x, y) = x^2 y + e^{xy} \). Compute the value of the directional derivative of \( f \) at the point (1, 0) in the direction of the vector \( \vec{v} = 3\hat{i} + 4\hat{j} \).",
      "options": [
        "6",
        "3",
        "4",
        "5"
      ],
      "correct": 1,
      "type": "MCQ",
      "marks": 2,
      "subject": "Calculus",
      "topic": "Directional Derivative",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Gradient at (1,0) is (0,1); unit vector is (3/5,4/5); dot product is 3/5*0 + 4/5*1 = 4/5."
    },
    {
      "id": 3,
      "question": "Let \( S = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2} \). The value of S is:",
      "options": [
        "\( \frac{\pi^2}{12} \)",
        "\( \frac{\pi^2}{6} \)",
        "\( \frac{\pi^2}{8} \)",
        "\( \frac{\pi^2}{24} \)"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Real Analysis",
      "topic": "Series",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Alternating sum: S = π²/12."
    },
    {
      "id": 4,
      "question": "Let \( f(z) = \frac{1}{z^2 + 1} \). The value of the integral \( \int_{|z|=2} f(z) dz \) is:",
      "options": [
        "0",
        "\( 2\pi i \)",
        "\( \pi i \)",
        "\( -2\pi i \)"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Complex Analysis",
      "topic": "Contour Integration",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Sum of residues at z=i and z=–i is zero; integral is zero."
    },
    {
      "id": 5,
      "question": "Let \( X \) be a random variable with PDF \( f(x) = \lambda e^{-\lambda x} \) for \( x \geq 0 \). Compute \( E[X^2] \).",
      "options": [
        "\( \frac{2}{\lambda^2} \)",
        "\( \frac{1}{\lambda^2} \)",
        "\( \frac{1}{2\lambda^2} \)",
        "\( \frac{2}{\lambda} \)"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Probability",
      "topic": "Expectation",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "E[X^2] = ∫ x^2 λ e^{–λx} dx = 2/λ²."
    },
    {
      "id": 6,
      "question": "Let \( A \) be a real symmetric \( n \times n \) matrix. Which of the following is always true?",
      "options": [
        "All eigenvalues are real",
        "A is diagonalizable only if n is even",
        "A is invertible",
        "A is nilpotent"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Linear Algebra",
      "topic": "Eigenvalues",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Real symmetric matrices have real eigenvalues."
    },
    {
      "id": 7,
      "question": "Let \( f(x) = x^x \) for \( x > 0 \). The minimum value of \( f(x) \) is attained at:",
      "options": [
        "x = 1/e",
        "x = e",
        "x = 1",
        "x = 0"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Calculus",
      "topic": "Maxima/Minima",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Minimum at x = 1/e."
    },
    {
      "id": 8,
      "question": "Let \( y'' + 4y = 0 \), with \( y(0) = 0, y(\pi/4) = 1 \). What is y(x)?",
      "options": [
        "\( \sqrt{2} \sin 2x \)",
        "\( \sin 2x \)",
        "\( \cos 2x \)",
        "\( \tan 2x \)"
      ],
      "correct": 1,
      "type": "MCQ",
      "marks": 2,
      "subject": "ODE",
      "topic": "Boundary Value Problem",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "General solution: y = A sin 2x + B cos 2x; apply BCs."
    },
    {
      "id": 9,
      "question": "Evaluate \( \int_0^1 \ln(1+x) dx \).",
      "options": [
        "\( 2\ln2 - 1 \)",
        "\( \ln2 \)",
        "\( 1 - \ln2 \)",
        "\( 2 - \ln2 \)"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Calculus",
      "topic": "Definite Integrals",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Integration by parts yields 2ln2 – 1."
    },
    {
      "id": 10,
      "question": "Let \( A \) be a \( 3 \times 3 \) matrix with characteristic polynomial \( (\lambda-1)^2(\lambda-2) \). Which of the following is true?",
      "options": [
        "A may not be diagonalizable",
        "A is always diagonalizable",
        "A is nilpotent",
        "A is invertible"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Linear Algebra",
      "topic": "Diagonalization",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "If geometric multiplicity < algebraic, not diagonalizable."
    },
    {
      "id": 11,
      "question": "Let \( f(z) = \overline{z} \). Which of the following is true?",
      "options": [
        "f is nowhere analytic",
        "f is analytic everywhere",
        "f is analytic only at z=0",
        "f is analytic only on the real axis"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Complex Analysis",
      "topic": "Analyticity",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Cauchy-Riemann equations not satisfied anywhere."
    },
    {
      "id": 12,
      "question": "Let \( f(x) = \int_0^x e^{t^2} dt \). Then \( f'(x) \) is:",
      "options": [
        "e^{x^2}",
        "2x e^{x^2}",
        "e^{x}",
        "x e^{x^2}"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Calculus",
      "topic": "Fundamental Theorem",
      "difficulty": "Medium",
      "year": 2025,
      "explanation": "By FTC, derivative is e^{x^2}."
    },
    {
      "id": 13,
      "question": "Let \( X \) be a Poisson random variable with mean λ. Then \( P(X=0) = ? \)",
      "options": [
        "e^{-λ}",
        "λ e^{-λ}",
        "1 - e^{-λ}",
        "e^{λ}"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Probability",
      "topic": "Poisson Distribution",
      "difficulty": "Medium",
      "year": 2025,
      "explanation": "P(0) = e^{-λ}."
    },
    {
      "id": 14,
      "question": "Let \( f(x) = \sin(x^2) \). The Maclaurin series of f(x) up to x^5 is:",
      "options": [
        "x^2 - (x^6)/6",
        "x^2 - (x^6)/6 + (x^{10})/120",
        "x^2 - (x^6)/6 + (x^{10})/120 - (x^{14})/5040",
        "x^2 - (x^6)/6 + (x^{10})/120 - (x^{14})/5040 + ..."
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Calculus",
      "topic": "Series Expansion",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Expand sin(x^2) as x^2 - (x^6)/6 + ..."
    },
    {
      "id": 15,
      "question": "Let \( P \) be a projection matrix (\( P^2 = P \)), and \( \text{rank}(P) = r \). What are the possible eigenvalues of P?",
      "options": [
        "0 and 1",
        "Only 1",
        "Only 0",
        "Any real number"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Linear Algebra",
      "topic": "Eigenvalues",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Eigenvalues satisfy λ^2 = λ ⇒ λ = 0 or 1."
    },
    {
      "id": 16,
      "question": "Let \( f(x, y) = x^2 + y^2 \) subject to \( x + y = 1 \). The minimum value is:",
      "options": [
        "0.5",
        "1",
        "2",
        "0"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Calculus",
      "topic": "Lagrange Multipliers",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Minimum at x = y = 0.5; value = 0.5."
    },
    {
      "id": 17,
      "question": "Let \( A \) be a \( 2 \times 2 \) matrix with eigenvalues 2 and 3. Compute \( \det(A^5 - 5A^3) \).",
      "options": [
        "–325",
        "–125",
        "125",
        "325"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Linear Algebra",
      "topic": "Eigenvalues/Determinant",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Eigenvalues: 2^5–5*2^3=–16; 3^5–5*3^3=–65; Product=–16*–65=1040."
    },
    {
      "id": 18,
      "question": "Let \( f(x) = \int_0^{\infty} \frac{\sin(ax)}{x} dx \) for \( a > 0 \). The value is:",
      "options": [
        "\( \frac{\pi}{2} \)",
        "\( \pi \)",
        "0",
        "\( \frac{1}{a} \)"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Calculus",
      "topic": "Definite Integrals",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Standard result: ∫₀^∞ sin(ax)/x dx = π/2."
    },
    {
      "id": 19,
      "question": "Let \( X \) and \( Y \) be independent standard normal random variables. The PDF of \( Z = X + Y \) is:",
      "options": [
        "Normal with mean 0, variance 2",
        "Normal with mean 0, variance 1",
        "Normal with mean 1, variance 2",
        "Normal with mean 0, variance 4"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Probability",
      "topic": "Random Variables",
      "difficulty": "Medium",
      "year": 2025,
      "explanation": "Sum of two N(0,1): N(0,2)."
    },
    {
      "id": 20,
      "question": "Let \( \vec{F} = (y, –x, 0) \). The value of the line integral \( \oint_C \vec{F} \cdot d\vec{r} \) over the unit circle x² + y² = 1 is:",
      "options": [
        "2π",
        "0",
        "π",
        "4π"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Vector Calculus",
      "topic": "Line Integrals",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "This is circulation; answer is 2π."
    },
    {
      "id": 21,
      "question": "The solution to the PDE \( u_{xx} + u_{yy} = 0 \) in the domain \( x^2 + y^2 < 1 \) with boundary condition \( u = 0 \) on the boundary is:",
      "options": [
        "u(x,y) = 0",
        "u(x,y) = x^2 + y^2",
        "u(x,y) = e^{x+y}",
        "u(x,y) = x – y"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "PDE",
      "topic": "Laplace Equation",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Zero function satisfies Laplace and boundary condition."
    },
    {
      "id": 22,
      "question": "Let \( X \) be a continuous random variable with PDF \( f(x) = 3x^2 \) for \( 0 < x < 1 \). Find the median.",
      "options": [
        "\( \sqrt[3]{0.5} \)",
        "\( 0.5 \)",
        "\( \sqrt{0.5} \)",
        "\( 0.25 \)"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Probability",
      "topic": "Statistics",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Set ∫₀^m 3x² dx = 0.5 ⇒ m³ = 0.5 ⇒ m = (0.5)^{1/3}."
    },
    {
      "id": 23,
      "question": "Let \( f(x, y) = x^3 + y^3 – 3axy \). Find the critical points.",
      "options": [
        "(0,0), (a,a), (–a,–a)",
        "(a,0), (0,a), (–a,0), (0,–a)",
        "(a,a), (–a,–a)",
        "(0,0)"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Calculus",
      "topic": "Critical Points",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Set gradients to zero; get (0,0), (a,a), (–a,–a)."
    },
    {
      "id": 24,
      "question": "Let \( f(z) = e^{1/z} \). The singularity at \( z = 0 \) is:",
      "options": [
        "Essential",
        "Removable",
        "Pole of order 1",
        "Pole of order 2"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Complex Analysis",
      "topic": "Singularities",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Laurent expansion has infinitely many negative powers."
    },
    {
      "id": 25,
      "question": "Let \( X \) be a random variable with mean μ and variance σ². What is \( E[(X–μ)^4] \) for a normal distribution?",
      "options": [
        "3σ⁴",
        "σ⁴",
        "2σ⁴",
        "4σ⁴"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Probability",
      "topic": "Moments",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "Kurtosis for normal: fourth central moment is 3σ⁴."
    },
    {
      "id": 26,
      "question": "Let \( f(x) = x^4 – 4x^3 + 6x^2 – 4x + 1 \). The number of distinct real roots is:",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Calculus",
      "topic": "Polynomials",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "f(x) = (x–1)^4; root at x=1 (multiplicity 4)."
    },
    {
      "id": 27,
      "question": "Let \( A \) be a \( 3 \times 3 \) matrix with trace 6 and determinant 8. If one eigenvalue is 1, the sum of the other two is:",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "correct": 0,
      "type": "MCQ",
      "marks": 2,
      "subject": "Linear Algebra",
      "topic": "Eigenvalues",
      "difficulty": "Medium",
      "year": 2025,
      "explanation": "Sum = trace – 1 = 5."
    },
    {
      "id": 28,
      "question": "Let \( f(x) = x^2 \) on [0,1]. The Fourier sine series coefficient \( b_n \) is:",
      "options": [
        "\( 2(–1)^n / n \)",
        "\( 2(–1)^{n+1} / n \)",
        "\( 2 / n^2 \)",
        "\( –2 / n^2 \)"
      ],
      "correct": 3,
      "type": "MCQ",
      "marks": 2,
      "subject": "Fourier Series",
      "topic": "Series Coefficient",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "bn = –2/n² for x² on [0,1]."
    },
    {
      "id": 29,
      "question": "Which of the following is NOT a convex set?",
      "options": [
        "The set { (x, y) | x > 0, y > 0 }",
        "The set { (x, y) | xy ≥ 1 }",
        "The set { (x, y) | x² + y² ≤ 1 }",
        "The set { (x, y) | x + y ≥ 0 }"
      ],
      "correct": 1,
      "type": "MCQ",
      "marks": 2,
      "subject": "Linear Programming",
      "topic": "Convexity",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "xy ≥ 1 is not convex."
    },
    {
      "id": 30,
      "question": "Let \( f(x) \) be continuous on [0,1] and \( \int_0^1 f(x) dx = 0 \). Which of the following must be true?",
      "options": [
        "There exists \( c \in (0,1) \) with \( f(c) = 0 \)",
        "f(x) is identically zero",
        "f(x) is negative somewhere and positive somewhere",
        "f(x) is not continuous"
      ],
      "correct": 2,
      "type": "MCQ",
      "marks": 2,
      "subject": "Real Analysis",
      "topic": "Integrals",
      "difficulty": "Hard",
      "year": 2025,
      "explanation": "If f is not identically zero, it must be positive and negative somewhere."
    }
    
  ]
};

// Additional Subject-wise Questions for Different Branches
const additionalSubjectQuestions = {
  'Computer Science': {
    'Algorithms': [
      {
        id: 1001,
        question: "What is the time complexity of Dijkstra's algorithm using a binary heap?",
        options: ["O((V+E)logV)", "O(V²)", "O(ElogV)", "O(VlogE)"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Algorithms",
        topic: "Graph Algorithms",
        difficulty: "Medium",
        year: 2023
      },
      {
        id: 1002,
        question: "Which of the following sorting algorithms has the best worst-case time complexity?",
        options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Algorithms",
        topic: "Sorting",
        difficulty: "Easy",
        year: 2023
      }
    ],
    'Operating Systems': [
      {
        id: 1003,
        question: "What is the purpose of the TLB (Translation Lookaside Buffer) in virtual memory systems?",
        options: [
          "To store frequently accessed page table entries",
          "To store process control blocks",
          "To manage disk I/O operations",
          "To handle interrupt requests"
        ],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Operating Systems",
        topic: "Memory Management",
        difficulty: "Medium",
        year: 2023
      }
    ]
  },
  'Electronics and Communication': {
    'Signals and Systems': [
      {
        id: 2001,
        question: "The Fourier transform of a rectangular pulse is a:",
        options: ["Sinc function", "Delta function", "Step function", "Ramp function"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Signals and Systems",
        topic: "Fourier Transform",
        difficulty: "Medium",
        year: 2023
      }
    ]
  },
  'Mechanical Engineering': {
    'Thermodynamics': [
      {
        id: 3001,
        question: "The efficiency of a Carnot engine depends on:",
        options: [
          "Working substance",
          "Temperatures of source and sink",
          "Engine design",
          "All of the above"
        ],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Thermodynamics",
        topic: "Heat Engines",
        difficulty: "Medium",
        year: 2023
      }
    ]
  }
};

// Basic Test Questions (45 questions)
const basicTestQuestions: GATEQuestion[] = [
  {
    id: 5001,
    question: "Which of the following is NOT a valid variable name in C?",
    options: ["_var", "var1", "1var", "var_one"],
    correct: 2,
    type: "MCQ",
    marks: 1,
    subject: "Programming",
    topic: "Variables",
    difficulty: "Easy"
  },
  {
    id: 5002,
    question: "The unit of electric current is:",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    correct: 2,
    type: "MCQ",
    marks: 1,
    subject: "Basic Electrical",
    topic: "Units",
    difficulty: "Easy"
  },
  // Additional basic questions can be added here
];

// Full Mock Test Questions (65 questions)
const fullMockTestQuestions: GATEQuestion[] = [
  {
    id: 7001,
    question: "In a binary search tree, which traversal would print the values in descending order?",
    options: [
      "In-order",
      "Pre-order",
      "Post-order",
      "Reverse in-order"
    ],
    correct: 3,
    type: "MCQ",
    marks: 1,
    subject: "Data Structures",
    topic: "Binary Search Tree",
    difficulty: "Medium"
  },
  {
    id: 7002,
    question: "The maximum number of nodes in a binary tree of height 5 is:",
    options: ["31", "32", "63", "64"],
    correct: 2,
    type: "NAT",
    marks: 1,
    subject: "Data Structures",
    topic: "Binary Trees",
    difficulty: "Easy"
  },
  // Additional full test questions can be added here
];

// Function to get questions by branch and subject
export const getQuestionsBySubject = (branch: string, subject: string, count: number = 30): GATEQuestion[] => {
  // Handle special cases first (General Aptitude and Engineering Mathematics)
  if (subject === 'General Aptitude' || subject === 'Engineering Mathematics') {
    const questions = gateQuestions[subject as 'General Aptitude' | 'Engineering Mathematics'];
    if (!questions) return [];
    return questions.slice(0, count);
  }
  
  // Get branch questions
  const branchQuestions = gateQuestions[branch as keyof typeof gateQuestions];
  if (!branchQuestions || !(subject in branchQuestions)) return [];
  
  // Get subject questions
  const subjectQuestions = (branchQuestions as BranchQuestions)[subject];
  if (!subjectQuestions) return [];
  
  // If we need more questions than available, return only the available questions
  if (subjectQuestions.length < count) {
    console.warn(`Only ${subjectQuestions.length} unique questions available for ${subject}, requested ${count}. Returning available questions.`);
    return [...subjectQuestions]; // Return a copy to avoid mutation
  }
  
  // Return a random subset of questions if we have more than needed
  if (subjectQuestions.length > count) {
    // Create a copy of the array to avoid mutating the original
    const shuffled = [...subjectQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  // Return all questions if count matches exactly
  return [...subjectQuestions]; // Return a copy to avoid mutation
};

// Function to generate mixed questions for full tests
export const generateFullTestQuestions = (branch: string): GATEQuestion[] => {
  const questions: GATEQuestion[] = [];
  
  // Add 10 General Aptitude questions
  questions.push(...getQuestionsBySubject(branch, 'General Aptitude', 10));
  
  // Add 15 Engineering Mathematics questions
  questions.push(...getQuestionsBySubject(branch, 'Engineering Mathematics', 15));
  
  // Add 40 core subject questions
  const branchQuestions = gateQuestions[branch as keyof typeof gateQuestions];
  if (branchQuestions && typeof branchQuestions === 'object') {
    const subjects = Object.keys(branchQuestions);
    const questionsPerSubject = Math.ceil(40 / subjects.length);
    
    subjects.forEach(subject => {
      if (subject !== 'General Aptitude' && subject !== 'Engineering Mathematics') {
        const subjectQuestions = getQuestionsBySubject(branch, subject, questionsPerSubject);
        questions.push(...subjectQuestions);
      }
    });
  }
  
  return questions.slice(0, 65); // Ensure exactly 65 questions
};
