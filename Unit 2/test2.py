# arr=[0,1,0,1,0,0,1,1,1,0]
# n=len(arr)
# left=0
# right=n-1
# while left< right:
#     if arr(left) ==0 and left<right:
#         left+=1
#     elif arr[right]==1 and left<right:
#         right-=1
#     elif left< right:
#         arr[left]=0
#         arr[right]=1
#     left+=1
#     right-=1
# print(arr)       

# arr=[100,200,300,400]
# # for i in range(len(arr)):
# #     for j in range(i,len(arr)):
# #         sub=arr[i:j+1]
# #         print(sub)

# n = len(arr)

# for i in range(n):
#     bag = []
#     for j in range(i, n):
#         bag.append(arr[j])
#         print(bag)

# # Example string and k value
# s = "aabcabebe"
# k = 3

# # Initialize variables to track the longest substring
# longest_length = 0
# longest_substring = ""
# start = 0
# end = 0

# # Iterate through all possible substrings
# n = len(s)
# for i in range(n):
#     for j in range(i, n):
#         substring = s[i:j+1]
#         distinct_chars = set(substring)
#         print(distinct_chars)
#         # Check if substring has exactly k distinct characters
#         if len(distinct_chars) == k:
#             # Update longest substring if current substring is longer
#             if len(substring) > longest_length:
#                 longest_length = len(substring)
#                 longest_substring = substring
#                 start = i
#                 end = j

# # Print the longest substring with k distinct characters
# print(f"The longest substring with {k} distinct characters is: {longest_substring}")



# print("=======================")
# arr = [6, 4, 9, 8, 7, 6, 7, 1]

# # Bubble sort implementation
# n = len(arr)
# for i in range(n):
#     # Flag to check if any swap is made in this pass
#     swapped = False
#     for j in range(0, n-i-1):
#         if arr[j] > arr[j+1]:
#             # Swap elements
#             arr[j], arr[j+1] = arr[j+1], arr[j]
#             swapped = True
#     # If no swap is made, array is already sorted
#     if not swapped:
#         break

# # Print sorted array
# print("Sorted array:", arr)




n=6
s= '(((()('

stack=[]
ids=[0]* n
current_id=1

for i in range(n):
    if s[i]=="(":
        ids[i]==current_id
        stack.append(current_id)
        current_id+=1
    elif s[i]==")":
        if stack:
            id=stack.pop()
            ids[i]=id
        else:
            ids[i]=current_id
            current_id+=1
    
print(" ".join(map(str,ids)))

n = 6
s = '(((()('

stack = []
ids = [0] * n
current_id = 1

for i in range(n):
    if s[i] == '(':
        ids[i] = current_id
        stack.append(current_id)
        current_id += 1
    elif s[i] == ')':
        if stack:
            id = stack.pop()
            ids[i] = id
        else:
            ids[i] = current_id
            current_id += 1

print(*ids)     
    