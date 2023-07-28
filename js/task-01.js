const list = document.querySelector('#categories');
const items = document.querySelectorAll('.item');
console.dir(`Number of categories: ${items.length}`);

items.forEach((items) => {
    const title = items.querySelector('h2').textContent;
    const elements = items.querySelectorAll('li');
    console.dir(`Category: ${title}`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                  
    console.dir(`Elements: ${elements.length}`)                                                                                                                                                                                                                                                                                                                                                                                                                       
})                                                                                                                                  

