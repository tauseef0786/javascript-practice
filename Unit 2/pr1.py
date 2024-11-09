# Input:-

# Integer array with the size [n]
# k ( integer )
# Output:- boolean

# True : if array contains two elements ( a, b) : a+b=k
# False : else

# arr=[3,5,6,0,2]
# n=len(arr)
# k=2

# arr.sort()  # 0,2,3,5,6
# left=0
# right=n-1
# flag =False
# while left < right:
#     current_sum=arr[left]+arr[right]
#     if current_sum==k:
#         flag=True
#         break
#     elif current_sum <k:
#         left+=1
#     else:
#         right-=1
# if flag:
#     print(True)
# else:
#     print(False)   


# print("====================")

# arr=[1,4,2,10,23,3,1,0,20]
# k=4
# sum=0
# for i in range(k):
#     sum+=arr[i]
# res=sum
# for i in range(k,n):
#     sum=sum-arr[i-k]+arr[i]
#     res=max(res,sum)
# print(res)    


arr = [100, 60, 70, 65, 80, 85]

n = len(arr)  
spans = [0] * n 
stack = []  

for i in range(n):
    while stack and arr[stack[-1][0]] <= arr[i]:
        stack.pop()
    
    if not stack:
        spans[i] = i + 1
    else:
        spans[i] = i - stack[-1][0]
    
    stack.append((i, arr[i]))

print(" ".join(map(str, spans)))




