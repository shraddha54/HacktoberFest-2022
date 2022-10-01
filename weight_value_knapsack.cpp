//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

class Solution
{
    void solveRec(vector<int> &nums, int &index, vector<vector<int>> &res, vector<int> &temp) {
        if (index == nums.size()) {
            res.push_back(temp);
            return;
        }
        index++;
        solveRec(nums, index, res, temp);
        temp.push_back(nums[index]);
        index++;
        solveRec(nums, index, res, temp);
    }
public:
    vector<vector<int> > subsets(vector<int>& A)
    {
        //code here
        vector<vector<int>> res;
        vector<int> temp;
        int index = 0;
        solveRec(A, 0, res, temp);
        return res;
    }
};

//{ Driver Code Starts.

int main()
{
    int t;
    cin >> t;

    while (t--)
    {
        int n, x;
        cin >> n;

        vector<int> array;
        for (int i = 0; i < n; i++)
        {
            cin >> x;
            array.push_back(x);
        }


        Solution ob;
        vector<vector<int> > res = ob.subsets(array);

        // Print result
        for (int i = 0; i < res.size(); i++) {
            for (int j = 0; j < res[i].size(); j++)
                cout << res[i][j] << " ";
            cout << endl;
        }


    }

    return 0;
}
// } Driver Code Ends
