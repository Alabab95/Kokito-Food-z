import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Kokito food'z",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Beja",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Nabeul",
            icon: icons.noodle,
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: icons.hotdog,
        },
        {
            id: 4,
            name: "Salads",
            icon: icons.salad,
        },
        {
            id: 5,
            name: "Burgers",
            icon: icons.hamburger,
        },
        {
            id: 6,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 7,
            name: "Snacks",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Desserts",
            icon: icons.donut,
        },
        {
            id: 10,
            name: "Drinks",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Ftet beja",
            rating: 4.8,
            categories: [1],
            priceRating: affordable,
            photo: images.ftetbeja,
            duration: "1h - 1h:30",
            location: {
                latitude: 36.741584,
                longitude: 10.248358,
                
            },
            courier: {
                avatar: images.avatar_3,
                name: "Sofien Ben jemaa"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Ftet beja",
                    photo: images.ftetbeja,
                    description: "Ce plat nous vient de Beja , c'est le repas préféré des bejois lors de Eid Idheha , il est a la base du pain d'ou le nom du plat vient et de la viande.",
                    calories: 200,
                    price: 18
                }
            ]
        },
        {
            id: 2,
            name: "Chakchouka",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: affordable,
            photo: images.Chakchouka,
            duration: "1h - 1h:30",
            location: {
                latitude: 36.74207311150049,
                longitude: 10.249349985758451,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Sofien Ben Jemaa"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Chakchouka",
                    photo: images.Chakchouka,
                    description: "Chakchouka est un plat Nabeulien connu par les épices piquants. ",
                    calories: 250,
                    price: 12
                }
            ]
        },
        {
            id: 3,
            name: "Couscous Sardine",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.couscousSardine,
            duration: "1h - 1h:30",
            location: {
                latitude: 36.7411080644172,
                longitude: 10.24799587603438,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Sofien Ben Jemaa"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Couscous Sardine",
                    photo: images.couscousSardine,
                    description: "Ce plat représente la tradition De Sousse et Mahdia , ou on le trouve pratiquement d'une manière quotidienne dans les maisons .",
                    calories: 100,
                    price: 14
                }
            ]
        },
        {
            id: 4,
            name: "Mrouzia",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.markahloua,
            duration: "30 - 45 min",
            location: {
                latitude: 36.7411080644172,
                longitude: 10.24799587603438,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Sofien Ben Jemaa"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Marka Hloua",
                    photo: images.markahloua,
                    description: "C'est un plat typiquement tunisien qui s'es propagé pendant des siècles , voir les turques qui ont enrichi ce plat . Celui la est connu pendant nos fêtes notamment Eid Idheha ",
                    calories: 100,
                    price: 18
                }
            ]
        },
        {
            id: 5,
            name: "Chebtia",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.chebtia,
            duration: "25 - 30 min",
            location: {
                latitude: 36.7411080644172,
                longitude: 10.24799587603438,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Sofien Ben Jemaa"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Chebtia",
                    photo: images.chebtia,
                    description: "	Chebtia et plat typique mahdoie qui se prépare pendant l'aïd el idha .",
                    calories: 200,
                    price: 10
                }
            ]
        },
        {

            id: 6,
            name: "Kafteji Kairaouan ",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.kafteji,
            duration: "35 - 40 min",
            location: {
                latitude: 36.7411080644172,
                longitude: 10.24799587603438,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Sofien Ben Jemaa"
            },
            menu: [
                {
                    menuId: 11,
                    name: "Kafteji Kairaouan",
                    photo: images.kafteji,
                    description: "Le kafteji représente l'emprunte Kairouane , avec son poivron coupé en cube et mélangé avec les œufs.",
                    calories: 100,
                    price: 6
                }
            ]

        },
        {

            id: 7,
            name: "Banadhej",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.banadhej,
            duration: "35 - 40 min",
            location: {
                latitude: 36.7411080644172,
                longitude: 10.24799587603438,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Sofien Ben Jemaa"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Banadhej",
                    photo: images.banadhej,
                    description: "Ce plat nous vient de Zaghouan , il est utilisé surtout a Eid Idheha .",
                    calories: 100,
                    price: 20
                }
            ]

        },
        {

            id: 8,
            name: "Tchich bl karnit",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.tchichblkarnit,
            duration: "35 - 40 min",
            location: {
                latitude: 36.7411080644172,
                longitude: 10.24799587603438,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Sofien Ben Jemaa"
            },
            menu: [
                {
                    menuId: 13,
                    name: "Tchich bl karnit",
                    photo: images.tchichblkarnit,
                    description: "C'est la soupe sfaxienne , très reconnu par ces épices piquants et le poulpe.",
                    calories: 100,
                    price: 10
                }
            ]

        },
        {

            id: 9,
            name: "Mchalwich",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.mchalwich,
            duration: "35 - 40 min",
            location: {
                latitude: 36.7411080644172,
                longitude: 10.24799587603438,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Sofien Ben Jemaa"
            },
            menu: [
                {
                    menuId: 14,
                    name: "Mchalwich",
                    photo: images.mchalwich,
                    description: "Ce plat présente l'atmosphère saherien, il est composé de Ojja et Bochmat.",
                    calories: 100,
                    price: 8
                }
            ]

        },
        {

            id: 10,
            name: "Rechta njara hlowa",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.rechta,
            duration: "35 - 40 min",
            location: {
                latitude: 36.7411080644172,
                longitude: 10.24799587603438,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Sofien Ben Jemaa"
            },
            menu: [
                {
                    menuId: 15,
                    name: "Rechta njara hlowa",
                    photo: images.rechta,
                    description: "Njara hlowa c'est un dessert typiquement bizertin mais aussi connu dans la région de Beja.",
                    calories: 100,
                    price: 6
                }
            ]

        },
        {

            id: 11,
            name: "Couscous Borzguen",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.borzguen,
            duration: "1h - 1h15min",
            location: {
                latitude: 36.7411080644172,
                longitude: 10.24799587603438,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Sofien Ben Jemaa"
            },
            menu: [
                {
                    menuId: 16,
                    name: "Couscous Borzguen",
                    photo: images.borzguen,
                    description: "Ce Couscous est un plat du Kef qui se  prépare lors des fêtes et des mariage. ",
                    calories: 100,
                    price: 18
                }
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Main</Text>
                <Text style={{ ...FONTS.h1 }}>Categories</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                       

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;