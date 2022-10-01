//tc-   o(logn )
int binarysearch(int l,int r,int target,vector<int> &nums)
    {
        int mid;
        if(r>=l)
        {
            mid=(l+r)/2;
            if(nums[mid]==target)
                return mid;
            if(nums[mid]>target)
            {
                r=mid-1;
                return binarysearch(l,r,target,nums);
            }
            else if(nums[mid]<target)
            {
                l=mid+1;
                return binarysearch(l,r,target,nums);
            }
        }
        return -1;
    }
