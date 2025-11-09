import { toast } from "react-toastify";

const getInsatalledApps = () => {

    const getStoredAppsString = localStorage.getItem("All_Installed_Apps") ;  // All_Installed_Apps key er "value" nilam

    if(getStoredAppsString) {
        const getStoredAppsDATA = JSON.parse(getStoredAppsString) ;  // converted json str to real data type
        return getStoredAppsDATA ;
    }
    else{
        return [] ;
    }
}


const addToLocalStorage = (obj) => {

    const getAllInstalledApps = getInsatalledApps() ;

    // if(getAllInstalledApps.includes(obj)){
    const alrdyinstalled = getAllInstalledApps.find(i => (obj.id === i.id)) ;
    if(alrdyinstalled){
        toast.warn("Already Installed") ;
    }
    else{
        getAllInstalledApps.push(obj) ;
        localStorage.setItem("All_Installed_Apps", JSON.stringify(getAllInstalledApps)) ; // pushed item converted into json str again
        toast.success("Installed Successfully") ;

    }
}

export {addToLocalStorage , getInsatalledApps} ;