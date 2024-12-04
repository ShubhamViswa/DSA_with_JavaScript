// LeetCode Problem Link --> https://leetcode.com/problems/merge-sorted-array/

function merge(nums1, m, nums2, n){
     let i = 0, j = 0, k = 0;
    //  let n = nums1.length;
    //  let m = nums2.length;
     let result = new Array(m+n)
     
    while(i<m && j<n){
        if(nums1[i]<=nums2[j]){
         result[k] = nums1[i];
         i++;
         k++;
     }else{
         result[k] = nums2[j];
         j++;
         k++;
     }
    }
    
    while(i<m){
        result[k] = nums1[i];
        i++;
        j++
    }
    while(j<n){
        result[k] = nums2[j];
        j++;
        k++;
    }
    
    return result;
    
 }
 let nums1 = [1,2,3];
 let m = nums1.length;
 let nums2 = [2,5,6];
 let n = nums2.length;
 let call = merge(nums1, m, nums2, n);
 console.log(call)
