javascript:(function(){fetch('https://raw.githubusercontent.com/cakebill12/InfiniteCraftScripts/main/1000save.json').then(response => response.json()).then(data => {localStorage.setItem('infinite-craft-data', JSON.stringify(data));console.log('Infinite Craft save data updated successfully.');window.location.reload();}).catch(error => {console.error('Error updating Infinite Craft save data:', error);});})();
