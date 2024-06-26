import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

export function getCategoryByType(type: FilterType){
    if(type == FilterType.MUGS) return "mugs"
    if(type == FilterType.SHIRT) return "t-shirts"
    return ""
}

export function getFieldByPriority(priority: PriorityTypes){
    if(priority === PriorityTypes.POPULARIDADE) return {field: "sales", order: "DESC"}
    if(priority === PriorityTypes.MAIOR_PRECO)  return {field: "price_in_cents", order: "ASC"}
    if(priority === PriorityTypes.MENOR_PREÇO) return {field: "price_in_cents", order: "DESC"}
    return {field: "created_at", order: "DESC"}
  }
  
  export const mountQuery = (type: FilterType, priority: PriorityTypes) => {
  const categoryFilter = getCategoryByType(type)
  const sortSettings = getFieldByPriority(priority)
  const searchParams = new URLSearchParams()
  if (categoryFilter){
    searchParams.set("category", categoryFilter)
  }

  if (sortSettings) {
    searchParams.set("sortField", sortSettings.field);
    searchParams.set("sortOrder", sortSettings.order);
}

  return searchParams.toString()
}