#include <bits/stdc++.h>
using namespace std;
#define ll long long

class Solution {
	void solve(vector<vector<bool>> &res, int row,
	           vector<bool> cols, vector<bool> dia,
	           vector<bool> revDia, vector<vector<string>> &ans) {
		int n = res[0].size();
		if (row == n)
		{
			vector<string> t;
			for (auto i : res)
			{
				string temp = "";
				for (auto j : i)
				{
					if (j)
					{
						temp.push_back('Q');
					}
					else
					{
						temp.push_back('.');
					}
				}
				t.push_back(temp);
			}
			ans.push_back(t);
			return;
		}
		for (int col = 0; col < n; ++col)
		{
			int i = row + col, j = row - col + n - 1;
			if (!cols[col] && !dia[i] && !revDia[j])
			{
				dia[i] = cols[col] = revDia[j] = res[row][col] = true;
				solve(res, row + 1, cols, dia, revDia, ans);
				dia[i] = cols[col] = revDia[j] = res[row][col] = false;
			}
		}
	}
public:
	vector<vector<string>> solveNQueens(int n) {
		vector<vector<bool>> res(n, vector<bool> (n, false));
		vector<vector<string>> ans;
		vector<bool > cols(n, false);
		vector<bool > dia(2 * n - 1, false);
		vector<bool > revDia(2 * n - 1, false);
		solve(res, 0, cols, dia, revDia, ans);
		return ans;
	}
};

int main()
{
	Solution ob;
	int n; cin >> n;
	vector<vector<string>> res = ob.solveNQueens(n);
	for (auto &i : res)
	{
		for (auto &j : i)
		{
			cout << j << ' ';
		}
		cout << endl;
	}
	cout << endl;
	return 0;
}
