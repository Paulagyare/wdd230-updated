const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value.trim();

  if (myItem !== '') {
    input.value = '';

    // Check if item already exists in the list
    if ([...list.children].some(item => item.textContent === myItem)) {
      // Find the existing item and focus on its "X" button
      const existingItem = [...list.children].find(item => item.textContent === myItem);
      existingItem.querySelector('button').focus();
    } else {
      const listItem = document.createElement('li');
      const listText = document.createElement('span');
      const listBtn = document.createElement('button');

      listItem.appendChild(listText);
      listText.textContent = myItem;
      listItem.appendChild(listBtn);
      listBtn.textContent = '❌';
      list.appendChild(listItem);

      listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
      });

      input.focus();
    }
  } else {
    alert('Input cannot be empty!');
  }
});
