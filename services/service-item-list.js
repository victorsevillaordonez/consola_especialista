
const getItemList = () => {
    
    return fetch('http://servicemanagement.arandasoft.com:4433/asdkapi/service/api/v8.6/case/list', {
        method: 'POST',
        headers: {
            'Authorization': 'jevzfozi1upe0feg4ikf2c3z',
            'Content-Type': 'application/json'
        },
        body: '{"filter":[{"field":"CustomerId","operator":5,"value":"3816"}],"level":2,"pagination":{"isAscending":false,"orderField":"CreationDate","pageIndex":0,"pageSize":50},"viewId":8}'
    }).then((res) => res.json());
}
export default getItemList;