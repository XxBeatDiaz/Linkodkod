export async function fetchAction(endPoint: string, setFunc?: any) {
    try {
        const response = await fetch(`http://localhost:3000/${endPoint}`);
        const result = await response.json();
        setFunc(result);
    } catch (error) {
        console.log(error);
    }
}
