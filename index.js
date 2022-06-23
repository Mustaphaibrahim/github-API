const main = document.querySelector('.main1')
const username = document.querySelector('[type="text"]')
const btn = document.querySelector('[type="button"]')
const main2 = document.querySelector('.main2')

const box =
`<div class="box">
<span></span>
<h2></h2>
<span></span>
<p></p>
</div>
`


btn.addEventListener('click', () =>
{
    main2.innerHTML = '';
    const url =`https://api.github.com/users/${username.value}/repos`;
    fetch(url).then((data) =>
    {
        return data.json();
    }).then((jsonData) =>
    {
        console.log(jsonData);
        jsonData.forEach((repo, i) =>
        {
          main2.innerHTML += box;
          main2.children[i].children[1].textContent= repo.name;
          main2.children[i].children[0].textContent= (repo.private)?'private':'public';
          main2.children[i].children[2].textContent= repo.created_at;
          main2.children[i].children[3].textContent= repo.description;

        })
    }).then(
        main2.addEventListener('click',(e)=>
        {
            const repoName = e.target.children[1].textContent;
            window.open(`https://github.com/${username.value}/${repoName}`,'_blank');
        })
    ).catch(err => 
        console.log(err))
});