async function getData(API) {
    try {
        const response = await fetch(API);
        // if (!response.ok) {
        //     alert('Ошибка на стороне сервера, попробуйте позже');
        // }
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export { getData };
