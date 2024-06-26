import { gql } from "apollo-server-express";

export const WarehouseDefs = gql`
  type Warehouse {
    _id: ID
    name: String
    stockList(stockListInput: StockListInput): StockList
    country: String
    createdAt: String
    updatedAt: String
    isActive: Boolean
    createdBy: String
    updatedBy: String
    metaStatus: String
  }

  type ProductStocks {
    productId: String
    totalStocks: Int
    saftyStock: Int
    allocatedStocks: Int
  }

  type WarehouseStatusChangeResponse {
    success: Boolean
    status: Boolean
  }

  type WarehouseList {
    warehouses: [Warehouse]
    pageInfo: WarehousePageInfo
  }

  type StockList {
    stocks: [ProductStocks]
    pageInfo: WarehousePageInfo
  }

  type WarehousePageInfo {
    isStart: Boolean
    isEnd: Boolean
    totalPages: Int
    totalMatches: Int
    currentMatchs: Int
  }

  # =============== Inputs =================

  input ProductStockEntryInput {
    warehouseId: String
    productId: String
    totalStocks: Int
    saftyStock: Int
  }

  input WarehouseCreateInput {
    name: String
    country: String
  }

  input WarehouseListInput {
    search: String
    page: Int
    size: Int
    sortBy: String
    sortDirection: String
    active: String
  }

  input StockListInput {
    search: String
    page: Int
    size: Int
  }
`;
