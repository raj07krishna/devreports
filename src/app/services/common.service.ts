import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

const API_END_POINTS = {
  GET_STOTRES:`${environment.apiUrl}DefaultData/getStores`,
  GET_REGISTERS:`${environment.apiUrl}DefaultData/getRegisters`,
  GET_PAYMENT_TYPES:`${environment.apiUrl}DefaultData/getPaymentTypes`,
  GET_ORDER_TYPES:`${environment.apiUrl}DefaultData/getOrderTypes`,
  GET_ORDERS:`${environment.apiUrl}DefaultData/getOrders`,
  GET_ORDERS_BY_DATE:`${environment.apiUrl}DefaultData/getOrdersByDate`,
  GET_ORDERS_BEST_TIME:`${environment.apiUrl}DefaultData/getOrdersBestTime`,
  GET_ORDERS_BEST_DAY:`${environment.apiUrl}DefaultData/getOrdersBestDay`,
  GET_ORDERS_STATS:`${environment.apiUrl}/DefaultData/getOrdersSTATS`,
};

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(private http: HttpClient) { }

  getStoreData(){
    return this.http.get(API_END_POINTS.GET_STOTRES)
  }
  getRegisterData(){
    return this.http.get(API_END_POINTS.GET_REGISTERS)
  }
  getPayementTypesData(){
    return this.http.get(API_END_POINTS.GET_PAYMENT_TYPES)
  }
  getOrderTypesData(){
    return this.http.get(API_END_POINTS.GET_ORDER_TYPES)
  }

  getOrdersData(params:any){
    return this.http.post(`${API_END_POINTS.GET_ORDERS}`, params)
  }
  getOrdersByDatedata(params:any){
    return this.http.post(`${API_END_POINTS.GET_ORDERS_BEST_DAY}`, params)
  }
  getOrdersBestTimeData(params:any){
    return this.http.post(`${API_END_POINTS.GET_ORDERS_BEST_TIME}`, params)
  }
  getOrdersBestDayData(params:any){
    return this.http.post(`${API_END_POINTS.GET_ORDERS_BY_DATE}`, params)
  }
  getOrdersStats(params:any){
    return this.http.post(`${API_END_POINTS.GET_ORDERS_STATS}`, params)
  }
}
