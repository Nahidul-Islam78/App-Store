const getInstalAppList = () => {
  const getAppSTR = localStorage.getItem('appList');
  if (getAppSTR) {
    const appList = JSON.parse(getAppSTR);
    return appList;
  } else {
    return [];
  }
};
const addApp = id => {
  const appList = getInstalAppList();

  if (appList.includes(id)) {
    alert('this App already added');
  } else {
    appList.push(id);
    const appListSTR = JSON.stringify(appList);
    localStorage.setItem('appList', appListSTR);
  }
};
const removeApp = id => {
  
  const appList = getInstalAppList();
  const app = appList.filter(app => !app.includes(id));
   const appListSTR = JSON.stringify(app);
   localStorage.setItem('appList', appListSTR);
  
  

  
};
export { addApp, getInstalAppList,removeApp };
