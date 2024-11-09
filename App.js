import React from "react";
import ReactDOM from "react-dom/client";

// HEADER :LOGO, NAV ITEMS
// BODY: SEARCH BAR, RESTRO CONTAINER, RESTRO CARDS -img, name of res, cusines, rating , delivery time
// FOOTER:COPYRIGHT, LINKS, ADDRESS 
const Header =() =>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" 
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_72,h_72/portal/m/logo_192x192.png"></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>


        
    </div>
  );
};
//  there will be many restro cards, so code will be repeated, so to make code modular,we will make a seprate component.component is just like a func.so that we can reuse it.
const RestaurantCard =(props) => {
  const { resData } = props; // Get resData from props
  const { 
    cloudinaryImageId,
     name,
      avgRating,
      costForTwo,
      cuisines,
      DeliveryTime
} =resData?.data;

  return (
    <div className="Restro-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy//" +
          cloudinaryImageId
        }
      />
       
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{DeliveryTime} minutes</h4>
    </div>
  );
};

const resList ={
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      data: {
        id: "588619",
        name: "KFC",
        city: "1",
        slugs: {
          restaurant: "kfc-brigade-road-central-bangalore",
          city: "bangalore"
        },
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
        address: "Ground Floor & 1st Floor, Brigade Rd, Opposite Space Centre, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560029",
        locality: "Brigade Road",
        areaName: "Central Bangalore",
        costForTwo: "40000",
        costForTwoMessage: "₹400 FOR TWO",
        cuisines: [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        avgRating: 4.4,
        avgRatingString: "4.4",
        totalRatingsString: "1.9K+",
        sla: {
          deliveryTime: 24,
          minDeliveryTime: 20,
          maxDeliveryTime: 25,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          rainMode: "RAIN_MODE_NONE",
          slaString: "20-25 MINS",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          opened: true
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80"
        },
        ratingSlab: "RATING_SLAB_5",
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "317"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        screenName: "explore",
        context: "{\"tid\":\"a48bcef8-88c3-8042-1121-6b903ca6a4dd\",\"grid\":\"04dc2712-1f5d-446c-9269-b941ef2f7822\",\"queryUniqueId\":\"31db7b90-ec0a-2351-c893-11304d27e493\",\"query\":\"kfc\"}",
        objectValue: "588619",
        impressionObjectName: "impression-restaurant",
        clickObjectName: "click-restaurant"
      },
      ctaWithParams: {
        link: "swiggy://menu",
        type: "DEEPLINK",
        params: {
          sourceSessionId: "g6c88454-cabd-4947-b305-92f3e99507ac",
          source: "SEARCH",
          isSld: "false",
          sourceRequestId: "9d80652f37b9c4813dae43a762b2238b",
          restaurant_id: "588619",
          query: "kfc"
        }
      }
    },
    card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            data: {
              "id": "605290",
              "name": "Chinese Wok",
              "city": "Vadodara",
              "slugs": {
                "restaurant": "chinese-wok-akota-akota",
                "city": "vadodara"
              },
              "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
              "locality": "Sarod",
              "areaName": "Akota",
              "costForTwo": "25000",
              "costForTwoMessage": "₹250 for two",
              "cuisines": [
                "Chinese",
                "Asian"
              ],
              "avgRating": 4.3,
              "veg": true,
              "feeDetails": {
                
              },
              "parentId": "61955",
              "avgRatingString": "4.3",
              "totalRatingsString": "2.0K+ ratings",
              "sla": {
                "restaurantId": "605290",
                "lastMileTravel": 1138.9,
                "serviceability": "NON_SERVICEABLE",
                "rainMode": "RAIN_MODE_NONE",
                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                "lastMileTravelString": "1138.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-10-03 23:00:00",
                "visibility": true,
                "opened": true,
                "restaurantClosedMeta": {
                  
                }
              },
              "aggregatedDiscountInfo": {
                "header": "Get items under 169",
                "shortDescriptionList": [
                  {
                    "meta": "Get items under 169",
                    "discountType": "FinalPrice",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "50% off | Use TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "Get items under 169",
                    "discountType": "FinalPrice",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "50% off up to ₹100 | Use code TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "visible": true
              },
              "badges": {
                
              },
              "slugString": "chinese-wok-akota-akota",
              "multiOutlet": true,
              "isOpen": true,
              "labels": [
                {
                  "title": "Timings",
                  "message": "null"
                },
                {
                  "title": "Address",
                  "message": "Shop No- 1, Upper Ground Floor, Alankar Tower, Survey No- 943, City Survey No- 252, Sayajiganj, Vadodra, Vadodara, Vadodara, Gujarat, 390005"
                },
                {
                  "title": "Cuisines",
                  "message": "Chinese,Asian"
                }
              ],
              "totalRatings": 2000,
              "aggregatedDiscountInfoV2": {
                "header": "Get items under 169",
                "shortDescriptionList": [
                  {
                    "meta": "Get items under 169",
                    "discountType": "FinalPrice",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "50% off | Use TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "Get items under 169",
                    "discountType": "FinalPrice",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "50% off up to ₹100 | Use code TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "couponDetailsCta": "View coupon details"
              },
              "type": "F",
              "nudgeBanners": [
                {
                  "priority": 3,
                  "discountInfo": {
                    "discountType": "FinalPrice",
                    "value": 269
                  },
                  "unlockedMessage": "Deal of the Day unlocked!",
                  "minItemCount": 1,
                  "maxItemCount": 1,
                  "type": "SILD",
                  "nudgeTagInfo": {
                    "title": "Deal of the Day",
                    "fontName": "FONT_NAME_CONDENSED_BOLD"
                  },
                  "logoCtx": {
                    
                  }
                }
              ],
              "headerBanner": {
                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/605290"
              },
              "ratingSlab": "RATING_SLAB_5",
              "availabilityServiceabilityMessage": "Does not deliver to your location",
              "orderabilityCommunication": {
                "title": {
                  "text": "Wish you were"
                },
                "subTitle": {
                  "text": "CLOSER!"
                },
                "message": {
                  "text": "This location is outside the outlet's delivery area",
                  "textColour": "negative"
                },
                "customIcon": {
                  "bgGradientColorStart": "#F64C41",
                  "bgGradientColorEnd": "#E53554"
                }
              },
              "hasBestsellerItems": true,
              "nearestOutletNudge": {
                "nearestOutletInfo": {
                  "siblingOutlet": {
                    "id": "405798",
                    "city": "0",
                    "slugs": {
                      
                    },
                    "areaName": "Malleshwaram",
                    "costForTwo": "0",
                    "feeDetails": {
                      
                    },
                    "sla": {
                      "deliveryTime": 74,
                      "lastMileTravel": 6,
                      "slaString": "74 MINS",
                      "lastMileTravelString": "6.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "restaurantClosedMeta": {
                        
                      }
                    },
                    "aggregatedDiscountInfo": {
                      "visible": true
                    },
                    "badges": {
                      
                    },
                    "aggregatedDiscountInfoV2": {
                      "visible": true
                    },
                    "availabilityServiceabilityMessage": "Temporarily closed for delivery",
                    "cartOrderabilityNudgeBanner": {
                      "parameters": {
                        
                      },
                      "presentation": {
                        
                      }
                    },
                    "featuredSectionInfo": {
                      
                    }
                  }
                },
                "nearestOutletComms": {
                  "title": {
                    "text": "Don't worry! Try our outlet that's delivering"
                  },
                  "subTitle": {
                    "text": "Switch to the fastest alternate"
                  }
                }
              },
              "cartOrderabilityNudgeBanner": {
                "parameters": {
                  
                },
                "presentation": {
                  
                }
              },
              "latLong": "22.309510824108038,73.1840700849164",
              "backgroundImageOverlayInfo": {
                
              },
              "featuredSectionInfo": {
                
              }
            },
            "analytics": {
              
            }
     },
     card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            data: {
              "id": "568731",
              "name": "Pizza Hut",
              "city": "Vadodara",
              "slugs": {
                "restaurant": "pizza-hut-akota-mandvi",
                "city": "vadodara"
              },
              "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/d02bb7fc-346c-4f10-b770-f9913c4854c6_568731.jpg",
              "locality": "Crossway Mall",
              "areaName": "Mandvi",
              "costForTwo": "35000",
              "costForTwoMessage": "₹350 for two",
              "cuisines": [
                "Pizzas"
              ],
              "avgRating": 4.3,
              "feeDetails": {
                
              },
              "parentId": "721",
              "avgRatingString": "4.3",
              "totalRatingsString": "1.3K+ ratings",
              "sla": {
                "restaurantId": "568731",
                "lastMileTravel": 1137.5,
                "serviceability": "NON_SERVICEABLE",
                "rainMode": "RAIN_MODE_NONE",
                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                "lastMileTravelString": "1137.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-10-04 01:00:00",
                "visibility": true,
                "opened": true,
                "restaurantClosedMeta": {
                  
                }
              },
              "aggregatedDiscountInfo": {
                "header": "50% off",
                "shortDescriptionList": [
                  {
                    "meta": "50% off | Use SWIGGY50",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "50% off up to ₹100 | Use code SWIGGY50",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "20% off upto ₹150 |  Use HSBCDELIGHTS Above ₹499",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "visible": true
              },
              "badges": {
                
              },
              "slugString": "pizza-hut-akota-mandvi",
              "multiOutlet": true,
              "isOpen": true,
              "labels": [
                {
                  "title": "Timings",
                  "message": "null"
                },
                {
                  "title": "Address",
                  "message": "Pizzahut, Crossway Mall,  shanadevi marg, shop no-24, ground floor, Akota Dandia Bazar road, Vadodara 390001"
                },
                {
                  "title": "Cuisines",
                  "message": "Pizzas"
                }
              ],
              "logo": "rng/md/carousel/production/cztbor82z4wcxssgnaje",
              "totalRatings": 1300,
              "aggregatedDiscountInfoV2": {
                "header": "50% off",
                "shortDescriptionList": [
                  {
                    "meta": "50% off | Use SWIGGY50",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "50% off up to ₹100 | Use code SWIGGY50",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "20% off upto ₹150 |  Use HSBCDELIGHTS Above ₹499",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "couponDetailsCta": "View coupon details"
              },
              "type": "F",
              "headerBanner": {
                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/568731"
              },
              "ratingSlab": "RATING_SLAB_5",
              "availabilityServiceabilityMessage": "Does not deliver to your location",
              "orderabilityCommunication": {
                "title": {
                  "text": "Wish you were"
                },
                "subTitle": {
                  "text": "CLOSER!"
                },
                "message": {
                  "text": "This location is outside the outlet's delivery area",
                  "textColour": "negative"
                },
                "customIcon": {
                  "bgGradientColorStart": "#F64C41",
                  "bgGradientColorEnd": "#E53554"
                }
              },
              "hasBestsellerItems": true,
              "nearestOutletNudge": {
                "nearestOutletInfo": {
                  "siblingOutlet": {
                    "id": "10575",
                    "city": "0",
                    "slugs": {
                      
                    },
                    "areaName": "Shanti Nagar",
                    "costForTwo": "0",
                    "feeDetails": {
                      
                    },
                    "sla": {
                      "deliveryTime": 38,
                      "lastMileTravel": 2.7,
                      "slaString": "38 MINS",
                      "lastMileTravelString": "2.7 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "restaurantClosedMeta": {
                        
                      }
                    },
                    "aggregatedDiscountInfo": {
                      "visible": true
                    },
                    "badges": {
                      
                    },
                    "aggregatedDiscountInfoV2": {
                      "visible": true
                    },
                    "availabilityServiceabilityMessage": "Temporarily closed for delivery",
                    "cartOrderabilityNudgeBanner": {
                      "parameters": {
                        
                      },
                      "presentation": {
                        
                      }
                    },
                    "featuredSectionInfo": {
                      
                    }
                  }
                },
                "nearestOutletComms": {
                  "title": {
                    "text": "Don't worry! Try our outlet that's delivering"
                  },
                  "subTitle": {
                    "text": "Switch to the fastest alternate"
                  }
                }
              },
              "cartOrderabilityNudgeBanner": {
                "parameters": {
                  
                },
                "presentation": {
                  
                }
              },
              "latLong": "22.30023,73.194614",
              "backgroundImageOverlayInfo": {
                
              },
              "featuredSectionInfo": {
                
              }
            },
            "analytics": {
              
            }
     },
     card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            data: {
              "id": "92545",
              "name": "Jagdish Foods Pvt Ltd",
              "city": "Vadodara",
              "slugs": {
                "restaurant": "jagdish-foods-karelibaug-karelibaug",
                "city": "vadodara"
              },
              "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              "cloudinaryImageId": "gjslzcl4yaedbbdoljgd",
              "locality": "Old Padra Road",
              "areaName": "Karelibaug",
              "costForTwo": "30000",
              "costForTwoMessage": "₹300 for two",
              "cuisines": [
                "Fast Food",
                "Street Food"
              ],
              "avgRating": 4.5,
              "veg": true,
              "feeDetails": {
                
              },
              "parentId": "473018",
              "avgRatingString": "4.5",
              "totalRatingsString": "2.2K+ ratings",
              "sla": {
                "restaurantId": "92545",
                "lastMileTravel": 1138.9,
                "serviceability": "NON_SERVICEABLE",
                "rainMode": "RAIN_MODE_NONE",
                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                "lastMileTravelString": "1138.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-10-03 21:00:00",
                "visibility": true,
                "opened": true,
                "restaurantClosedMeta": {
                  
                }
              },
              "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                  {
                    "meta": "60% off | Use TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "FLAT ₹125 off  | Use BINGE125",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "60% off up to ₹120 | Use code TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "FLAT ₹125 off  | Use BINGE125",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  }
                ],
                "visible": true
              },
              "badges": {
                
              },
              "slugString": "jagdish-foods-karelibaug-karelibaug",
              "isOpen": true,
              "labels": [
                {
                  "title": "Timings",
                  "message": "null"
                },
                {
                  "title": "Address",
                  "message": "Jagdish Foods, Ameeplex, Opposite Water Tank, Karelibaug"
                },
                {
                  "title": "Cuisines",
                  "message": "Fast Food,Street Food"
                }
              ],
              "totalRatings": 2200,
              "aggregatedDiscountInfoV2": {
                "header": "60% off",
                "shortDescriptionList": [
                  {
                    "meta": "60% off | Use TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "FLAT ₹125 off  | Use BINGE125",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "60% off up to ₹120 | Use code TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "FLAT ₹125 off  | Use BINGE125",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  }
                ],
                "couponDetailsCta": "View coupon details"
              },
              "type": "F",
              "nudgeBanners": [
                {
                  "minValue": 209,
                  "maxValue": 299,
                  "priority": 2,
                  "couponCode": "BINGE125",
                  "discountInfo": {
                    "discountType": "Flat",
                    "value": 125
                  },
                  "lockedMessage": "Add items worth ₹<amount> to save ₹125 | Code BINGE125",
                  "unlockedMessage": "BINGE125 Coupon Unlocked! Use it to save ₹125",
                  "logoCtx": {
                    
                  }
                }
              ],
              "headerBanner": {
                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/92545"
              },
              "ratingSlab": "RATING_SLAB_5",
              "availabilityServiceabilityMessage": "Does not deliver to your location",
              "orderabilityCommunication": {
                "title": {
                  "text": "Wish you were"
                },
                "subTitle": {
                  "text": "CLOSER!"
                },
                "message": {
                  "text": "This location is outside the outlet's delivery area",
                  "textColour": "negative"
                },
                "customIcon": {
                  "bgGradientColorStart": "#F64C41",
                  "bgGradientColorEnd": "#E53554"
                }
              },
              "hasBestsellerItems": true,
              "cartOrderabilityNudgeBanner": {
                "parameters": {
                  
                },
                "presentation": {
                  
                }
              },
              "latLong": "22.3200325,73.2086519",
              "backgroundImageOverlayInfo": {
                
              },
              "featuredSectionInfo": {
                
              }
            },
            "analytics": {
              
            }
      },
          
        }
      
      
const Body =() =>{
  return(
    <div className="body">
      <div className="Search">Search</div>
      <div className="Restro-container"> 
        <RestaurantCard resData={resList.card}/>
        <RestaurantCard resData={resList.card}/>
        <RestaurantCard resData={resList.card}/>
        <RestaurantCard resData={resList.card}/>
        
        
      </div>
    </div>
  );
};

const AppLayout =() => {
  return (
    <div className="app">
      <Header/>
      <Body/>
  
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
