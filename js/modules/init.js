export async function loadEmployees() {
    const response = await fetch ('../data/employees.json');
    if (!response.ok) {
        throw new Error (`Failed to load employee data: ${response.status} ${response.statusText}`);
    }
    const employee = await response.json()
    return employee
}