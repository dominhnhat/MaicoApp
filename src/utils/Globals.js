import Routes from '../navigation/Routes';
import { Animated } from 'react-native';
import AppConfig from '../../branding/App_config';
import assets from '../../branding/carter/assets/Assets';
import { CommonActions } from '@react-navigation/native';
import Config from '../../branding/carter/configuration/Config';
import IconNames from '../../branding/carter/assets/IconNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
const colors = AppConfig.lightColors.default;

/**
 * App Constants
 */
class Globals {
  static SAFE_AREA_INSET = {};

  //Variant 1 Intro
  static intro1Items = [
    {
      title: 'Welcome to Carter grocery application',
      subtitle:
        'Carter online grocery store is the no. 1 grocery application in the world',
      headerImg: assets.intro1,
    },
    {
      title: 'Best quality grocery at your doorstep',
      subtitle:
        'Carter online grocery store where we deliver everything on time.',
      headerImg: assets.intro2,
    },
    {
      title: 'Peace of mind same day delivery guaranteed!',
      subtitle:
        'We dispatch all the order within two hours of the order being placed.',
      headerImg: assets.intro3,
    },
    {
      title: 'Big savings with seasonal discounts in all products',
      subtitle:
        'We believe in providing best competitive prices to all of our customers.',
      headerImg: assets.intro4,
    },
  ];

  //Variant 2 Intro
  static intro2Items = [
    {
      title: 'Welcome to Carter grocery application',
      subtitle:
        'Carter online grocery store is the no. 1 grocery application in the world',
      headerImg: IconNames.BagShopping,
      theme: 'green',
    },
    {
      title: 'Best quality grocery at your doorstep',
      subtitle:
        'Carter online grocery store where we deliver everything on time.',
      headerImg: IconNames.Fish,
      theme: 'red',
    },
    {
      title: 'Peace of mind same day delivery guaranteed',
      subtitle:
        'We dispatch all the order within two hours of the order being placed.',
      headerImg: IconNames.Truck,
      theme: 'blue',
    },
    {
      title: 'Big savings with seasonal discounts in all products',
      subtitle:
        'We believe in providing best competitive prices to all of our customers.',
      headerImg: IconNames.MoneyBillWave,
      theme: 'orange',
    },
  ];

  //Variant 3 Intro
  static intro3Items = [
    {
      title: 'Maico xin chào!',
      subtitle:
        'Ứng dụng cung cấp các nhu yếu phẩm cần thiết với thời gian giao nhanh nhất',
      headerImg: assets.intro2_img1,
    },
    {
      title: 'Giao hàng nhanh chóng',
      subtitle:
        'Các đơn hàng của bạn sẽ được xử lí hoả tốc',
      headerImg: assets.intro2_img2,
    },
    {
      title: 'Cung cấp nhu yếu phẩm',
      subtitle:
        'Cung cấp các nhu yếu phẩm cần thiết cho cuộc sống của bạn',
      headerImg: assets.intro2_img3,
    },
  ];

  //Grocery Products
  static foodItems = [
    {
      id: 1,
      title: 'Organic lemons',
      image: require('../components/Application/FoodItem/Assets/Images/organic_lemons.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/organic_lemons_big.png'),
      price: '$1.22',
      weight: '1.50 lbs',
      discount: '15%',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 2,
      title: 'Fresh apricots',
      image: require('../components/Application/FoodItem/Assets/Images/apricot.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/apricot_big.png'),
      price: '$2.35',
      weight: 'dozen',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 3,
      title: 'Pomegranate',
      image: require('../components/Application/FoodItem/Assets/Images/pomegranate.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/pomegranate_big.png'),
      price: '$1.22',
      weight: 'each',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 4,
      title: 'Broccoli flower',
      image: require('../components/Application/FoodItem/Assets/Images/broccoli_flower.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/broccoli_flower_big.png'),
      price: '$4.99',
      weight: '1.50 lbs',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 5,
      title: 'Chocolate chip',
      image: require('../components/Application/FoodItem/Assets/Images/chocolate_chip.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/chocolate_chip_big.png'),
      price: '$1.22',
      weight: '10 cookies',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 6,
      title: 'Red grapes',
      image: require('../components/Application/FoodItem/Assets/Images/red_grapes.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/red_grapes_big.png'),
      price: '$8.99',
      weight: '5.0 lbs',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 7,
      title: 'Organic lemons',
      image: require('../components/Application/FoodItem/Assets/Images/organic_lemons.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/organic_lemons_big.png'),
      price: '$1.22',
      weight: '1.50 lbs',
      discount: '15%',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 8,
      title: 'Fresh apricots',
      image: require('../components/Application/FoodItem/Assets/Images/apricot.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/apricot_big.png'),
      price: '$2.35',
      weight: 'dozen',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 9,
      title: 'Pomegranate',
      image: require('../components/Application/FoodItem/Assets/Images/pomegranate.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/pomegranate_big.png'),
      price: '$1.22',
      weight: 'each',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 10,
      title: 'Broccoli flower',
      image: require('../components/Application/FoodItem/Assets/Images/broccoli_flower.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/broccoli_flower_big.png'),
      price: '$4.99',
      weight: '1.50 lbs',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 11,
      title: 'Chocolate chip',
      image: require('../components/Application/FoodItem/Assets/Images/chocolate_chip.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/chocolate_chip_big.png'),
      price: '$1.22',
      weight: '10 cookies',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 12,
      title: 'Red grapes',
      image: require('../components/Application/FoodItem/Assets/Images/red_grapes.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/red_grapes_big.png'),
      price: '$8.99',
      weight: '5.0 lbs',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 13,
      title: 'Organic lemons',
      image: require('../components/Application/FoodItem/Assets/Images/organic_lemons.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/organic_lemons_big.png'),
      price: '$1.22',
      weight: '1.50 lbs',
      discount: '15%',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 14,
      title: 'Fresh apricots',
      image: require('../components/Application/FoodItem/Assets/Images/apricot.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/apricot_big.png'),
      price: '$2.35',
      weight: 'dozen',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 15,
      title: 'Pomegranate',
      image: require('../components/Application/FoodItem/Assets/Images/pomegranate.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/pomegranate_big.png'),
      price: '$1.22',
      weight: 'each',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 16,
      title: 'Broccoli flower',
      image: require('../components/Application/FoodItem/Assets/Images/broccoli_flower.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/broccoli_flower_big.png'),
      price: '$4.99',
      weight: '1.50 lbs',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 17,
      title: 'Chocolate chip',
      image: require('../components/Application/FoodItem/Assets/Images/chocolate_chip.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/chocolate_chip_big.png'),
      price: '$1.22',
      weight: '10 cookies',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
    {
      id: 18,
      title: 'Red grapes',
      image: require('../components/Application/FoodItem/Assets/Images/red_grapes.png'),
      bigImage: require('../components/Application/FoodItem/Assets/Images/red_grapes_big.png'),
      price: '$8.99',
      weight: '5.0 lbs',
      cartCount: 0,
      isFavourite: false,
      detail:
        'Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.',
      ratingValue: 4.5,
    },
  ];

  //Product Categories
  static categoryItems = [
    {
      id: 1,
      secondaryTitle: 'organic',
      secondaryColor: '#7ad228',
      primaryTitle: 'Vegetable',
      primaryColor: '#519610',
      iconBgColor: '#7ad027',
      iconURI: IconNames.Carrot,
      bgURI: require('../components/Application/CategoryItem/Assets/Images/organic_vegetable.png'),
      selected: true,
    },
    {
      id: 2,
      secondaryTitle: 'fresh',
      secondaryColor: '#FF4344',
      primaryTitle: 'Fruits',
      primaryColor: '#DD2021',
      iconBgColor: '#ff4244',
      iconURI: IconNames.Lemon,
      bgURI: require('../components/Application/CategoryItem/Assets/Images/fresh_fruits.png'),
      selected: false,
    },
    {
      id: 3,
      secondaryTitle: 'fresh',
      secondaryColor: '#ffa200',
      primaryTitle: 'Dairy',
      primaryColor: '#ee7b00',
      iconBgColor: '#ffa200',
      iconURI: IconNames.BreadSlice,
      bgURI: require('../components/Application/CategoryItem/Assets/Images/fresh_dairy.png'),
      selected: false,
    },
    {
      id: 4,
      secondaryTitle: 'original',
      secondaryColor: '#1faaff',
      primaryTitle: 'Medicine',
      primaryColor: '#0076be',
      iconBgColor: '#20a9ff',
      iconURI: IconNames.HeartBeat,
      bgURI: require('../components/Application/CategoryItem/Assets/Images/original_medicine.png'),
      selected: false,
    },
    {
      id: 5,
      secondaryTitle: 'quality',
      secondaryColor: '#18e2d6',
      primaryTitle: 'Bakery',
      primaryColor: '#09bcb1',
      iconBgColor: '#1ae1d5',
      iconURI: IconNames.BirthdayCake,
      bgURI: require('../components/Application/CategoryItem/Assets/Images/quality_bakery.png'),
      selected: false,
    },
    {
      id: 6,
      secondaryTitle: 'baby',
      secondaryColor: '#D250E9',
      primaryTitle: 'Products',
      primaryColor: '#A627BC',
      iconBgColor: '#d24fe9',
      iconURI: IconNames.BabyCarriage,
      bgURI: require('../components/Application/CategoryItem/Assets/Images/baby_products.png'),
      selected: false,
    },
    {
      id: 7,
      secondaryTitle: 'fresh',
      secondaryColor: '#E26D3F',
      primaryTitle: 'chicken',
      primaryColor: '#B24E27',
      iconBgColor: '#e26e3e',
      iconURI: IconNames.Turkey,
      bgURI: require('../components/Application/CategoryItem/Assets/Images/fresh_chicken.png'),
      selected: false,
    },
    {
      id: 8,
      secondaryTitle: 'fresh',
      secondaryColor: '#9DB6CF',
      primaryTitle: 'fishes',
      primaryColor: '#7A91A8',
      iconBgColor: '#9db5cf',
      iconURI: IconNames.Fish,
      bgURI: require('../components/Application/CategoryItem/Assets/Images/fresh_fishes.png'),
      selected: false,
    },
    {
      id: 9,
      secondaryTitle: 'organic',
      secondaryColor: '#7AD228',
      primaryTitle: 'salads',
      primaryColor: '#519610',
      iconBgColor: '#a3db19',
      iconURI: IconNames.Salad,
      bgURI: require('../components/Application/CategoryItem/Assets/Images/organic_salads.png'),
      selected: false,
    },
    {
      id: 10,
      secondaryTitle: 'pet',
      secondaryColor: '#B6833D',
      primaryTitle: 'foods',
      primaryColor: '#A26E27',
      iconBgColor: '#b5833b',
      iconURI: IconNames.Dog,
      bgURI: require('../components/Application/CategoryItem/Assets/Images/pet_foods.png'),
      selected: false,
    },
    {
      id: 11,
      secondaryTitle: 'quality',
      secondaryColor: '#C5150C',
      primaryTitle: 'pizzas',
      primaryColor: '#A8130B',
      iconBgColor: '#c6160c',
      iconURI: IconNames.PizzaSlice,
      bgURI: require('../components/Application/CategoryItem/Assets/Images/quality_pizzas.png'),
      selected: false,
    },
    {
      id: 12,
      secondaryTitle: 'sport',
      secondaryColor: '#2A56F5',
      primaryTitle: 'goods',
      primaryColor: '#1E40BD',
      iconBgColor: '#2a56f5',
      iconURI: IconNames.TableTennis,
      bgURI: require('../components/Application/CategoryItem/Assets/Images/sport_goods.png'),
      selected: false,
    },
  ];

  //Addresses
  static addressItems = [
    {
      id: 0,
      isDefault: true,
      name: 'William Crown',
      address: '2811 Crescent Day, LA Port California, United States, 77511',
      phone: '+1 122 541 1234',

      city: 'California',
      state: 'United States',
      postalCode: '77547',

      isActive: false,

      spinValue: new Animated.Value(0),
    },
    {
      id: 1,
      isDefault: false,
      name: 'John Doe',
      address: '2811 Crescent Day, LA Port California, United States, 77511',
      phone: '+1 122 541 1234',

      city: 'California',
      state: 'United States',
      postalCode: '77547',

      isActive: false,

      spinValue: new Animated.Value(0),
    },
    {
      id: 2,
      isDefault: false,
      name: 'William Crown',
      address: '2811 Crescent Day, LA Port California, United States, 77511',
      phone: '+1 122 541 1234',

      city: 'California',
      state: 'United States',
      postalCode: '77547',

      isActive: false,

      spinValue: new Animated.Value(0),
    },
    {
      id: 3,
      isDefault: false,
      name: 'John Doe',
      address: '2811 Crescent Day, LA Port California, United States, 77511',
      phone: '+1 122 541 1234',

      isActive: false,

      city: 'California',
      state: 'United States',
      postalCode: '77547',

      spinValue: new Animated.Value(0),
    },
    {
      id: 4,
      isDefault: false,
      name: 'William Crown',
      address: '2811 Crescent Day, LA Port California, United States, 77511',
      phone: '+1 122 541 1234',

      isActive: false,

      city: 'California',
      state: 'United States',
      postalCode: '77547',

      spinValue: new Animated.Value(0),
    },
    {
      id: 5,
      isDefault: false,
      name: 'John Doe',
      address: '2811 Crescent Day, LA Port California, United States, 77511',
      phone: '+1 122 541 1234',

      isActive: false,

      city: 'California',
      state: 'United States',
      postalCode: '77547',

      spinValue: new Animated.Value(0),
    },
  ];

  //Self Pickup Addresses
  static selfPickupAddresses = [
    {
      id: 1,
      isDefault: false,
      name: 'Carter Bay Area',
      address: '2811 Crescent Day, LA Port California, United States, 77511',
      phone: '+1 122 541 1234',

      city: 'California',
      state: 'United States',
      postalCode: '77547',

      isActive: false,

      spinValue: new Animated.Value(0),
    },
    {
      id: 2,
      isDefault: false,
      name: 'Carter Downtown',
      address: '2811 Crescent Day, LA Port California, United States, 77511',
      phone: '+1 122 541 1234',

      city: 'California',
      state: 'United States',
      postalCode: '77547',

      isActive: false,

      spinValue: new Animated.Value(0),
    },
    {
      id: 3,
      isDefault: false,
      name: 'Carter 5th Avenue',
      address: '2811 Crescent Day, LA Port California, United States, 77511',
      phone: '+1 122 541 1234',

      isActive: false,

      city: 'California',
      state: 'United States',
      postalCode: '77547',

      spinValue: new Animated.Value(0),
    },
  ];

  //Payment Methods
  static paymentMethodItems = {
    cardItems: [
      {
        id: 0,
        isDefault: true,
        isActive: true,

        type: 'Master Card',
        cardNo: 'XXXX XXXX XXXX 3694',
        completeCardNo: '1234 5678 1234 5678',
        cardHolderName: 'John Doe',
        expiry: '01/25',
        CVV: '512',

        spinValue: new Animated.Value(0),
      },
      {
        id: 1,
        isDefault: false,
        isActive: false,

        type: 'Visa Card',
        cardNo: 'XXXX XXXX XXXX 3694',
        completeCardNo: '5678 1234 5678 1234',
        cardHolderName: 'William Crown',
        expiry: '01/25',
        CVV: '512',

        spinValue: new Animated.Value(0),
      },
      {
        id: 2,
        isDefault: false,
        isActive: false,

        type: 'Master Card',
        cardNo: 'XXXX XXXX XXXX 3694',
        completeCardNo: '1234 5678 1234 5678',
        cardHolderName: 'John Doe',
        expiry: '01/25',
        CVV: '512',

        spinValue: new Animated.Value(0),
      },
      {
        id: 3,
        isDefault: false,
        isActive: false,

        type: 'Visa Card',
        cardNo: 'XXXX XXXX XXXX 3694',
        completeCardNo: '5678 1234 5678 1234',
        cardHolderName: 'William Crown',
        expiry: '01/25',
        CVV: '512',

        spinValue: new Animated.Value(0),
      },
      {
        id: 4,
        isDefault: false,
        isActive: false,

        type: 'Master Card',
        cardNo: 'XXXX XXXX XXXX 3694',
        completeCardNo: '1234 5678 1234 5678',
        cardHolderName: 'John Doe',
        expiry: '01/25',
        CVV: '512',

        spinValue: new Animated.Value(0),
      },
      {
        id: 5,
        isDefault: false,
        isActive: false,

        type: 'Visa Card',
        cardNo: 'XXXX XXXX XXXX 3694',
        completeCardNo: '5678 1234 5678 1234',
        cardHolderName: 'William Crown',
        expiry: '01/25',
        CVV: '512',

        spinValue: new Animated.Value(0),
      },
    ],
    paypalItems: [
      {
        id: 0,
        isDefault: true,
        isActive: true,

        type: 'Paypal',
        name: 'Katherine Muguel',
        email: 'gfx********@gmail.com',
        addedOn: '11/07/2020',

        spinValue: new Animated.Value(0),
      },
      {
        id: 1,
        isDefault: false,
        isActive: false,

        type: 'Paypal',
        name: 'William J Brown',
        email: 'gfx********@gmail.com',
        addedOn: '11/07/2020',

        spinValue: new Animated.Value(0),
      },
      {
        id: 2,
        isDefault: false,
        isActive: false,

        type: 'Paypal',
        name: 'Jasson Blue',
        email: 'gfx********@gmail.com',
        addedOn: '11/07/2020',

        spinValue: new Animated.Value(0),
      },
      {
        id: 3,
        isDefault: false,
        isActive: false,

        type: 'Paypal',
        name: 'Katherine Muguel',
        email: 'gfx********@gmail.com',
        addedOn: '11/07/2020',

        spinValue: new Animated.Value(0),
      },
      {
        id: 4,
        isDefault: false,
        isActive: false,

        type: 'Paypal',
        name: 'William J Brown',
        email: 'gfx********@gmail.com',
        addedOn: '11/07/2020',

        spinValue: new Animated.Value(0),
      },
      {
        id: 5,
        isDefault: false,
        isActive: false,

        type: 'Paypal',
        name: 'Jasson Blue',
        email: 'gfx********@gmail.com',
        addedOn: '11/07/2020',

        spinValue: new Animated.Value(0),
      },
    ],
    paymentMethods: [
      {
        id: 1,
        isActive: true,
        icon: IconNames.CreditCard,
        type: 'Credit Card',
      },
      {
        id: 2,
        isActive: false,
        icon: IconNames.Paypal,
        type: 'Paypal',
      },
      {
        id: 3,
        isActive: false,
        icon: IconNames.Apple,
        type: 'Apple Pay',
      },
      {
        id: 4,
        isActive: false,
        icon: IconNames.MoneyBillWave,
        type: 'Cash on Delivery',
      },
      {
        id: 5,
        isActive: false,
        icon: IconNames.BagShopping,
        type: 'Self Pickup',
      },
    ],
  };

  //Favourite List
  static favouritesList = [
    {
      id: 1,
      backgroundColor: '#6cc51d',
      itemLabel: 'Groceries',
      selected: false,
    },
    {
      id: 2,
      backgroundColor: '#bf0d3f',
      itemLabel: 'Sunday Snacks',
      selected: true,
    },
    {
      id: 3,
      backgroundColor: '#f88e11',
      itemLabel: 'Vegetables',
      selected: false,
    },
    {
      id: 4,
      backgroundColor: '#efb019',
      itemLabel: 'Snacks',
      selected: false,
    },
    {
      id: 5,
      backgroundColor: '#b71dc5',
      itemLabel: 'fruits',
      selected: false,
    },
    {
      id: 6,
      backgroundColor: '#1d68c5',
      itemLabel: 'Meat',
      selected: false,
    },
    {
      id: 7,
      backgroundColor: '#1dafc5',
      itemLabel: 'Dieting Plan',
      selected: false,
    },
    {
      id: 8,
      backgroundColor: '#ccb7cc',
      itemLabel: 'Sports',
      selected: false,
    },
  ];

  //Favourite Products
  static favouriteItems = [
    {
      id: 0,
      name: 'Groceries',
      totalItems: '4',
      addedOn: '11/07/2020',
      color: colors.activeColor,

      items: Globals.foodItems.slice(0, 4),

      spinValue: new Animated.Value(0),
    },
    {
      id: 1,
      name: 'Sunday Snacks',
      totalItems: '6',
      addedOn: '11/07/2020',
      color: colors.red,

      items: Globals.foodItems.slice(0, 6),

      spinValue: new Animated.Value(0),
    },
    {
      id: 2,
      name: 'Vegetables',
      totalItems: '2',
      addedOn: '11/07/2020',
      color: colors.orange,

      items: Globals.foodItems.slice(0, 2),

      spinValue: new Animated.Value(0),
    },
    {
      id: 3,
      name: 'Snacks',
      totalItems: '7',
      addedOn: '11/07/2020',
      color: colors.purple,

      items: Globals.foodItems.slice(0, 7),

      spinValue: new Animated.Value(0),
    },
  ];

  //Search History
  static searchHistoryItems = [
    'Fresh Apricots',
    'Frozen Pizza',
    'Bananas',
    'Cheetos',
    'Discounted Items',
    'Fresh Vegetables',
  ];

  //Transactions
  static transactionItems = [
    {
      id: 1,
      type: 'Master Card',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 2,
      type: 'Visa',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 3,
      type: 'Paypal',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 4,
      type: 'Master Card',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 5,
      type: 'Paypal',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 6,
      type: 'Visa',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 7,
      type: 'Master Card',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 8,
      type: 'Visa',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 9,
      type: 'Paypal',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 10,
      type: 'Visa',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 11,
      type: 'Master Card',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 12,
      type: 'Master Card',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 13,
      type: 'Paypal',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 14,
      type: 'Visa',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
    {
      id: 15,
      type: 'Master Card',
      date: 'Dec 10, 2020 at 10:00 PM',
      price: '$16.99',
    },
  ];

  //Orders
  static ordersItems = [
    {
      id: 1,
      title: 'First',
      orderNo: 'Order # 44698',
      dateTime: 'Placed on December 15, 2022',
      items: '10',
      total: '$16.99',

      isOrderPlaced: true,
      orderPlaced: 'Dec 10, 2022',
      isOrderConfirmed: true,
      orderConfirmed: 'Dec 10, 2022',
      isOrderShipped: true,
      orderShipped: 'Dec 10, 2022',
      isOrderOutOfDelivery: false,
      outOfDelivery: 'Pending',
      isOrderDelivered: false,
      orderDelivered: 'Pending',

      spinValue: new Animated.Value(0),
    },
    {
      id: 2,
      title: 'First',
      orderNo: 'Order # 44698',
      dateTime: 'Placed on December 15, 2022',
      items: '10',
      total: '$16.99',

      isOrderPlaced: true,
      orderPlaced: 'Dec 10, 2022',
      isOrderConfirmed: true,
      orderConfirmed: 'Dec 10, 2022',
      isOrderShipped: true,
      orderShipped: 'Dec 10, 2022',
      isOrderOutOfDelivery: false,
      outOfDelivery: 'Pending',
      isOrderDelivered: false,
      orderDelivered: 'Pending',

      spinValue: new Animated.Value(0),
    },
    {
      id: 3,
      title: 'First',
      orderNo: 'Order # 44698',
      dateTime: 'Placed on December 15, 2022',
      items: '10',
      total: '$16.99',

      isOrderPlaced: true,
      orderPlaced: 'Dec 10, 2022',
      isOrderConfirmed: true,
      orderConfirmed: 'Dec 10, 2022',
      isOrderShipped: true,
      orderShipped: 'Dec 10, 2022',
      isOrderOutOfDelivery: false,
      outOfDelivery: 'Pending',
      isOrderDelivered: false,
      orderDelivered: 'Pending',

      spinValue: new Animated.Value(0),
    },
    {
      id: 4,
      title: 'First',
      orderNo: 'Order # 44698',
      dateTime: 'Placed on December 15, 2022',
      items: '10',
      total: '$16.99',

      isOrderPlaced: true,
      orderPlaced: 'Dec 10, 2022',
      isOrderConfirmed: true,
      orderConfirmed: 'Dec 10, 2022',
      isOrderShipped: true,
      orderShipped: 'Dec 10, 2022',
      isOrderOutOfDelivery: false,
      outOfDelivery: 'Pending',
      isOrderDelivered: false,
      orderDelivered: 'Pending',

      spinValue: new Animated.Value(0),
    },
    {
      id: 5,
      title: 'First',
      orderNo: 'Order # 44698',
      dateTime: 'Placed on December 15, 2022',
      items: '10',
      total: '$16.99',

      isOrderPlaced: true,
      orderPlaced: 'Dec 10, 2022',
      isOrderConfirmed: true,
      orderConfirmed: 'Dec 10, 2022',
      isOrderShipped: true,
      orderShipped: 'Dec 10, 2022',
      isOrderOutOfDelivery: false,
      outOfDelivery: 'Pending',
      isOrderDelivered: false,
      orderDelivered: 'Pending',

      spinValue: new Animated.Value(0),
    },
    {
      id: 6,
      title: 'First',
      orderNo: 'Order # 44698',
      dateTime: 'Placed on December 15, 2022',
      items: '10',
      total: '$16.99',

      isOrderPlaced: true,
      orderPlaced: 'Dec 10, 2022',
      isOrderConfirmed: true,
      orderConfirmed: 'Dec 10, 2022',
      isOrderShipped: true,
      orderShipped: 'Dec 10, 2022',
      isOrderOutOfDelivery: false,
      outOfDelivery: 'Pending',
      isOrderDelivered: false,
      orderDelivered: 'Pending',

      spinValue: new Animated.Value(0),
    },
    {
      id: 7,
      title: 'First',
      orderNo: 'Order # 44698',
      dateTime: 'Placed on December 15, 2022',
      items: '10',
      total: '$16.99',

      isOrderPlaced: false,
      orderPlaced: 'Dec 10, 2022',
      isOrderConfirmed: false,
      orderConfirmed: 'Dec 10, 2022',
      isOrderShipped: false,
      orderShipped: 'Dec 10, 2022',
      isOrderOutOfDelivery: false,
      outOfDelivery: 'Dec 10, 2022',
      isOrderDelivered: true,
      orderDelivered: 'Dec 10, 2022',

      spinValue: new Animated.Value(0),
    },
    {
      id: 8,
      title: 'First',
      orderNo: 'Order # 44698',
      dateTime: 'Placed on December 15, 2022',
      items: '10',
      total: '$16.99',

      isOrderPlaced: false,
      orderPlaced: 'Dec 10, 2022',
      isOrderConfirmed: false,
      orderConfirmed: 'Dec 10, 2022',
      isOrderShipped: false,
      orderShipped: 'Dec 10, 2022',
      isOrderOutOfDelivery: false,
      outOfDelivery: 'Dec 10, 2022',
      isOrderDelivered: true,
      orderDelivered: 'Dec 10, 2022',

      spinValue: new Animated.Value(0),
    },
    {
      id: 9,
      title: 'First',
      orderNo: 'Order # 4469812',
      dateTime: 'Placed on December 15, 2022',
      items: '10',
      total: '$16.99',

      isOrderPlaced: false,
      orderPlaced: 'Dec 10, 2022',
      isOrderConfirmed: false,
      orderConfirmed: 'Dec 10, 2022',
      isOrderShipped: false,
      orderShipped: 'Dec 10, 2022',
      isOrderOutOfDelivery: false,
      outOfDelivery: 'Dec 10, 2022',
      isOrderDelivered: true,
      orderDelivered: 'Dec 10, 2022',

      spinValue: new Animated.Value(0),
    },
  ];

  //Product Reviews List
  static reviewsList = [
    {
      id: 1,
      profileImage: require('../screens/ReviewList/Assets/Images/review_author_img1.png'),
      fullName: 'David Martin',
      reviewTime: '32 minutes ago',
      rating: 4.5,
      comment:
        'Carter team is fast and always deliver fresh fruits. Highly Recommend!',
    },
    {
      id: 2,
      profileImage: require('../screens/ReviewList/Assets/Images/review_author_img2.png'),
      fullName: 'David Martin',
      reviewTime: '32 minutes ago',
      rating: 3.5,
      comment:
        'Best apples on the market hands down. I almost order them everyday.',
    },
    {
      id: 3,
      profileImage: require('../screens/ReviewList/Assets/Images/review_author_img3.png'),
      fullName: 'David Martin',
      reviewTime: '32 minutes ago',
      rating: 5,
      comment:
        'Carter team is fast and always deliver fresh fruits. Highly Recommend!',
    },
    {
      id: 4,
      profileImage: require('../screens/ReviewList/Assets/Images/review_author_img4.png'),
      fullName: 'David Martin',
      reviewTime: '32 minutes ago',
      rating: 4,
      comment:
        'Best apples on the market hands down. I almost order them everyday.',
    },
    {
      id: 5,
      profileImage: require('../screens/ReviewList/Assets/Images/review_author_img1.png'),
      fullName: 'David Martin',
      reviewTime: '32 minutes ago',
      rating: 4.5,
      comment:
        'Carter team is fast and always deliver fresh fruits. Highly Recommend!',
    },
  ];

  //Profile List
  static profileList = navigation => {
    return [
      // {
      //   id: 1,
      //   icon: IconNames.UserAlt,
      //   title: 'About me',
      //   onPress: () => navigation.navigate(Routes.ABOUT_ME),
      // },
      {
        id: 2,
        icon: IconNames.Box,
        title: 'Đơn hàng',
        onPress: () => navigation.navigate(Routes.MY_ORDERS),
      },
      {
        id: 3,
        icon: IconNames.MapMarkerAlt,
        title: 'Địa chỉ',
        onPress: () => navigation.navigate(Routes.My_Address),
      },
      // {
      //   id: 4,
      //   icon: IconNames.CreditCard,
      //   title: 'Credit Cards',
      //   onPress: () => navigation.navigate(Routes.My_CREDIT_CARDS),
      // },
      // {
      //   id: 5,
      //   icon: IconNames.MoneyBillWave,
      //   title: 'Transactions',
      //   onPress: () => navigation.navigate(Routes.TRANSACTIONS),
      // },
      // {
      //   id: 6,
      //   icon: IconNames.Bell,
      //   title: 'Notifications',
      //   onPress: () => navigation.navigate(Routes.NOTIFICATIONS),
      // },
      // {
      //   id: 7,
      //   icon: IconNames.Th,
      //   title: 'Categories',
      //   onPress: () => navigation.navigate(Routes.CATEGORY_LIST),
      // },
      {
        id: 8,
        icon: IconNames.PowerOff,
        title: 'Sign out',
        onPress: async () => {
          console.log('Sign out');
          try {
            await AsyncStorage.removeItem('@user');
          } catch (e) {
            console.log(e);
          }
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: Routes.LOGIN_FORM_SCREEN3 }],
            }),
          );
        }
      },
    ];
  };

  //Filter Other Items
  static otherFilters = [
    {
      id: 1,
      leftIcon: IconNames.Tag,
      title: 'Discount',
      checked: false,
    },
    {
      id: 2,
      leftIcon: IconNames.ParachuteBox,
      title: 'Same Day Delivery',
      checked: false,
    },
    {
      id: 3,
      leftIcon: IconNames.Truck,
      title: 'Free Shipping',
      checked: false,
    },
  ];

  //Filter Categories
  static filterCategories = [
    {
      id: 1,
      leftIcon: IconNames.Lemon,
      title: 'Fresh Fruits',
      checked: false,
    },
    {
      id: 2,
      leftIcon: IconNames.Turkey,
      title: 'Fresh Chicken',
      checked: false,
    },
    {
      id: 3,
      leftIcon: IconNames.BreadSlice,
      title: 'Fresh Dairy',
      checked: false,
    },
    {
      id: 4,
      leftIcon: IconNames.Fish,
      title: 'Fresh Fishes',
      checked: false,
    },
    {
      id: 5,
      leftIcon: IconNames.Carrot,
      title: 'Vegetables',
      checked: false,
    },
    {
      id: 6,
      leftIcon: IconNames.Salad,
      title: 'Organic Salads',
      checked: false,
    },
    {
      id: 7,
      leftIcon: IconNames.HeartBeat,
      title: 'Medicine',
      checked: false,
    },
    {
      id: 8,
      leftIcon: IconNames.Dog,
      title: 'Pet Foods',
      checked: false,
    },
    {
      id: 9,
      leftIcon: IconNames.BirthdayCake,
      title: 'Quality Bakery',
      checked: false,
    },
    {
      id: 10,
      leftIcon: IconNames.PizzaSlice,
      title: 'Quality Pizza',
      checked: false,
    },
    {
      id: 11,
      leftIcon: IconNames.BabyCarriage,
      title: 'Baby Products',
      checked: false,
    },
    {
      id: 12,
      leftIcon: IconNames.TableTennis,
      title: 'Sports Goods',
      checked: false,
    },
  ];
}

export default Globals;
