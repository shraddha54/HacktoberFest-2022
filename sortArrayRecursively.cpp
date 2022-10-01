#include <iostream>
#include <bits/stdc++.h>
using namespace std;

void insertEle(vector<int> &, int);
void sortArr(vector<int> &v)
{
    if (v.size() == 1)
    {
        return;
    }
    int temp = v[v.size() - 1];
    v.pop_back();
    sortArr(v);
    insertEle(v, temp);
    return;
}
void insertEle(vector<int> &v, int temp)
{
    if (v.size() == 0 || temp >= v[v.size() - 1])
    {
        v.push_back(temp);
        return;
    }
    int last = v[v.size() - 1];
    v.pop_back();
    insertEle(v, temp);
    v.push_back(last);
    return;
}
int main()
{
    vector<int> v = {2, 7, 3, 6, 4, 1, 0, 11, 5};
    sortArr(v);
    for (int i = 0; i < v.size(); i++)
    {
        cout << v[i] << " ";
    }
    return 0;
}
