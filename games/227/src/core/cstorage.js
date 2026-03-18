cstorage = {
  ID: "FHG_HOHOSTACKO" + window.location.hostname
};

cstorage.proxy = {
  // dummy data for fallback
};


function isLocalStorageNameSupported() {
  var testKey = "test";
  var storage = window.localStorage;
  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}


cstorage.init = function() {
}

cstorage.set = function(name, value) {
  name = cstorage.ID+btoa(name);
  value = btoa(JSON.stringify(value));
  value = LZString.compressToUTF16(value);

  if( !isLocalStorageNameSupported() ){
    cstorage.proxy[name] = value;
  }
  else {
    localStorage.setItem(name, value);
  }
  
}

cstorage.get = function(name) {
  name = cstorage.ID+btoa(name);
  var value;

  if( !isLocalStorageNameSupported() ){
    value = cstorage.proxy[name];
  }
  else {
     value = localStorage.getItem(name);
  }


  value = LZString.decompressFromUTF16(value);
  if (value)
    return JSON.parse(atob(value));
  else 
    return null;
}

cstorage.remove = function(name) {
  name = cstorage.ID+btoa(name);
  if( !isLocalStorageNameSupported() ){
    cstorage.proxy[name] = null;
  }
  else {
    localStorage.removeItem(name);    
  }
}


cstorage.checkSpace = function() {
  var totalSpace = 0;
  for(var x in localStorage) {
    totalSpace += localStorage[x].length * 2;
    console.log(x+"="+((localStorage[x].length * 2)/1024).toFixed(2)+" KB");
  }
  console.log("Total Space ="+(totalSpace/1024).toFixed(2)+" KB");
  return totalSpace;

}
