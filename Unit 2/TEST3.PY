arr=["a","d","w","a","d","w","a"]
my_dict={}
for i in arr:
    if i in my_dict:
        my_dict[i]+=1
    else:
        my_dict[i]=1
print(my_dict)            