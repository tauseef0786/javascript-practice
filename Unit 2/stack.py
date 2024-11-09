#include <iostream>
#include <stack>
from collections import deque

N = 9
S = deque()

while N > 0:
    if (N - 1) % 3 > 0:
        S.append(N)
    else:
        print(S[-1])
        S.pop()
    N = N - 1

N = 9
S1 = []
S2 = []

for i in range(1, 101):
    S1.append(i)
    
    if i % 3 == 0 or i % 5 == 0:
        S2.append(S1[-1])
        S1.pop()

print("Elements in S1:", len(S1))
print("Elements in S2:", len(S2))


from collections import deque

A = [2, 8, 4, 6, 5, 10]
N = len(A)
S = deque()

for i in range(N-1, -1, -1):
    while S and S[-1] < A[i]:
        S.pop()

    if S:
        print(S[-1])
    else:
        print(-1)

    S.append(A[i])

print("==========")
from collections import deque

# Initialize S1 with first 10 natural numbers
S1 = deque(range(1, 11))
S2 = deque()

# First while loop to move elements from S1 to S2 in sorted order
while S1:
    X = S1[-1]  # Get the top element of S1
    S1.pop()    # Pop the top element from S1
    
    # Second while loop to arrange elements in S2 in ascending order
    while S2 and X < S2[-1]:
        S1.append(S2[-1])  # Push the top element of S2 back to S1
        S2.pop()           # Pop the top element from S2
    
    S2.append(X)  # Push X to S2 in the correct position

# Print elements in sorted order from S2
while S2:
    print(S2[-1])  # Print the top element of S2
    S2.pop()       # Pop the top element from S2



