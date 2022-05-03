import Axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
    const request = Axios.get(BASE_URL + '/billingCycles')

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}


function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''

        Axios[method](BASE_URL + '/billingCycles/' + id, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso.')
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => {
                toastr.error('Erro', error)
            })
        })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tab-update'),
        selectTab('tab-update'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs('tab-delete'),
        selectTab('tab-delete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tab-list', 'tab-create'),
        selectTab('tab-list'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}