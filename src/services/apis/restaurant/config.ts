export interface RestaurantAPIConfigInterface {
    config: {
        baseURL: string;
        isAPIMocked: boolean;
    };
}

export const RestaurantAPIConfig: RestaurantAPIConfigInterface = {
    config: {
        baseURL: import.meta.env.VITE_API_RESTAURANT_BASE_URL,
        isAPIMocked: import.meta.env.VITE_ENABLE_API_MOCK === 'true',
    },
};
