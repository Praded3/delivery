 const address = {};
        let autocomplete;
        function initAutocomplete() {
            autocomplete = new google.maps.places.Autocomplete(
                document.getElementById('pac-input'),

                {
                    types: ['address'],
                    componentRestrictions: { country: ["us"] },
                    // fields: ["address_components"],
                    // fields: ["address"],
                    // fields: ['place_id', 'geometry', 'name'],
                });


            autocomplete.addListener('place_changed', onPlaceChange);
        }

let place;

function onPlaceChange() {
  place = autocomplete.getPlace();

 
  //     alert(place.name);
  console.log(place);
  console.log(place.address_components);

parseAddress(place);
 

  

}


  const parseAddress = (place) => {
        // const address = {};
              console.log(address);
        if (!Array.isArray(place.address_components)) {
            throw Error('Address Components is not an array')
        }
        if (!place.address_components.length) {
            throw Error('Address Components is empty')
        }
        const isStreetNumber = (component) => {
            return component.types.includes('street_number')
        }
        const isStreetName = (component) => {
            return component.types.includes('route')
        }
    const isCity = (component) => {
        if (component.types.includes('locality') || component.types.includes('sublocality') ||
            component.types.includes('administrative_area_level_3')) {
            return !0
        } else if (component.types.includes('neighborhood') && component.types.includes('political')) {
            address.prev_city_component = 'neighborhood'; return !0
        } else { return !1 }
    }
    const isState = (component) => {
        return component.types.includes('administrative_area_level_1')
    }
    const isCountry = (component) => {
        return component.types.includes('country')
    }
    const isCounty = (component) => {
        return component.types.includes('administrative_area_level_2')
    }
    const isPostalCode = (component) => {
        return component.types.includes('postal_code')
    }
    const isStreetAddress = (component) => {
        return component.types.includes('street_address')
        }
        

    for (const addressComponent of place.address_components) {
        const component = addressComponent;
        if (isStreetNumber(component)) {
            address.street_number = component.long_name
        }
        if (isStreetName(component)) {
            address.street_name = component.long_name
        }
        if (isCity(component) && (!address.city || address.prev_city_component === 'neighborhood')) {
            address.city = component.long_name
        }
        if (isCountry(component)) {
            address.country = component.long_name
        }
        if (isCounty(component)) {
            address.county = component.long_name
        }
        if (isState(component)) {
            address.state = component.long_name
        }
        if (isPostalCode(component)) {
            address.postal_code = component.long_name
        }
    }
    if (place.types.includes('locality')) {
        address.type = 'city'
    } else if (place.types.includes('administrative_area_level_1')) {
        address.type = 'state'
    } else if (place.types.includes('street_address') || place.types.includes('route') || place.types.includes('premise')) {
        address.type = 'street_address'
    } else if (place.types.includes('lcountry')) {
        address.type = 'country'
    } else {
        address.type = null
    }
    address.formatted_address = place.formatted_address;
      console.log(address);
      	
    //  document.getElementById('bbbbb').innerHTML = address.formatted_address;
     return address

     
}