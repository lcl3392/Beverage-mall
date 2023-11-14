
import {createSlice} from "@reduxjs/toolkit"

let no = 7
const initialState = {
   data: [{id:1, name:'이초롱', title:'안녕하세요',content:'신제품 내용 확인부탁드립니다.',date:'2023-07-10'},
          {id:2, name:'심초롱', title:'셀렉토커피와 피자알볼로, ‘갓 내린 커피와 피자의 맛있는 페어링’ 선보여.',content:'신제품 내용 확인부탁드립니다.',date:'2023-08-11'},
          {id:3, name:'심초롱', title:'주문문의 합니다.',content:'신제품 내용 확인부탁드립니다.',date:'2023-08-14'},
          {id:4, name:'심초롱', title:'신제품 확인부탁드립니다.',content:'신제품 내용 확인부탁드립니다.',date:'2023-08-29'},
          {id:5, name:'심초롱', title:'알리지 반응 확인해주세요.',content:'신제품 내용 확인부탁드립니다.',date:'2023-10-21'},
          {id:6, name:'심초롱', title:'가을의 커피랑 어울리는 메뉴.',content:'신제품 내용 확인부탁드립니다.',date:'2023-11-11'}
         ],
   current:{},

}

export const customerSlice = createSlice({
    name:'customer',
    initialState,
    reducers:{
        add(state,action){
            state.data.push({id:no++,...action.payload})
        },
        //최신순 정렬
        addSort(state,action){
            state.data.sort(function(a,b){
                if(a.id > b.id){
                    return -1;
                }
                if(a.value < b.value){
                    return 1;
                }
                return 0;
            });
        },
        remove(state,action){
            state.data = state.data.filter(item => item.id !== action.payload)
        },
        edit(state,action){
            //디테일페이지에서 customer/id정보를 넘겨줌
            state.current = action.payload
        },
        update(state,action){
            state.data = state.data.map(item => item.id === action.payload.id ?
            action.payload : item)
        }
    }
})

export const {add,remove,edit,addSort,update} = customerSlice.actions
export default customerSlice.reducer