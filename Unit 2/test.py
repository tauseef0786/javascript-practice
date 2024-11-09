arr=["c","i","v","i","c"]
n=len(arr)
i=0
j=n-1
flag=True
while i <j:
    if arr[i]!=arr[j]:
        flag=False
        break
   
    i+=1
    j-=1
if flag :
    print("yes")
else:
    print("no")        
        
arr=[7,4,9,11,21,8,5]     
k=25
pair_found = False

for i in range(len(arr) - 1):
    for j in range(i + 1, len(arr)):
        if arr[i] + arr[j] == k:
            print("yes")
            pair_found = True
            break
    if pair_found:
        break

if not pair_found:
    print("no")
# for i in range(len(arr)-1):
#     for j in range(1,len(arr)):
#         if arr[i]+arr[j]==k:
#             print("yes")
#         else:
#             print("no")  
# 
sum=0
for i in range(1,11):
    sum+=i   
print     

t=1
n=6
arra=[1, 2, 2, 3, 4, 5]
arrb=[4, 4, 3, 2, 1, 1]
i=0
j=0
count=0
while i<n and n-1>j-1:
    if arra[i]==arrb[j]:
        count+=1
    i+=1
    j-=1
print(count)        

n = 6
arra = [1, 2, 2, 3, 4, 5]
arrb = [5, 4, 3, 2, 1, 1]
i = 0
j = 0
count = 0
while i < n and j < n:
    if arra[i] == arrb[n - j - 1]:
        count += 1
    i += 1
    j += 1
print(count)

print("=====================================")

arr=[1,8,6,2,5,4,8,3,7]
n=len(arr)
i=0
j=n-1
max_a=0
while i<j:
    area=min(arr[i],arr[j])* ( j - i)
    max_a=max(area,max_a)
    if arr[i]<arr[j]:
        i+=1
    else:
        j-=1    
print(max_a)      






