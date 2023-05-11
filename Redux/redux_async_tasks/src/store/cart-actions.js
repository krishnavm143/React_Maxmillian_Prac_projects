import { cartActions } from "./cart-slice"
import { uiActions } from "./ui-slice"

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(`https://fetch-app-7d637-default-rtdb.firebaseio.com/cart.json`, {
                method: "GET"
            })

            if (!response.ok) {
                throw new Error('Could not fetch Cart Data')
            }
            const data = response.json()

            return data
        }
        try {
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'error',
                message: 'failed to send'
            }))
        }
    }
}
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'sending',
            message: 'sending message to cart'
        }))

        const sendRequest = async () => {
            const response = await fetch(`https://fetch-app-7d637-default-rtdb.firebaseio.com/cart.json`, {
                method: "PUT",
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            })

            if (!response.ok) {
                throw new Error('something went wring')
            }
        }
        try {
            await sendRequest()

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'success',
                message: 'successfully sent'
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'error',
                message: 'failed to send'
            }))
        }
    }
}
