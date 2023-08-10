

export function filterData(searchInput,restuarents){
    const  filterdata= restuarents.filter((restaurant)=>
   restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));
    return filterdata;
}
