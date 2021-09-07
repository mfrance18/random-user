export const userInfo = (allInfo) => {
    return `<img src="${allInfo.results[0].picture.large}" alt="picture of user">
                <ul>
                    <li>Gender: ${allInfo.results[0].gender}</li>
                    <li>Name: ${allInfo.results[0].name.title} ${allInfo.results[0].name.first} ${allInfo.results[0].name.last}</li>
                    <li>Address: ${allInfo.results[0].location.street.number} ${allInfo.results[0].location.street.name}</li>
                    <li>Date of Birth: ${new Date(allInfo.results[0].dob.date).toLocaleString()}</li>
                    <li>Phone: ${allInfo.results[0].phone}</li>
                    <li>Cell Phone: ${allInfo.results[0].cell}</li>
                    <li>Email: ${allInfo.results[0].email}</li>
                </ul>`
}