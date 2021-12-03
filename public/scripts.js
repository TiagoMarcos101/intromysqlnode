
function vercidades()
{
    fetch('http://localhost:3000/city')
    .then(res => res.json())
    .then(data => dadosprocessados(data))
    .catch((err) => (
        alert('Ouh home iss tá tudo marado')
    ))
}
function dadosprocessados(data)
{
    const tabela = document.getElementById('tabela')
    tabela.innerHTML=''
    for(var i=0;i<10;i++)
    {
        let city = data[i].Name
        let dis = data[i].District
        let Pop = data[i].Population

        let row = `<tr>
        <td>${city}<td>
        <td>${dis}<td>
        <td>${Pop}<td>
        </tr>`
        tabela.innerHTML += row 
        

    }
    
}