import React from 'react';

import {
  Apple,
  ArrowLeft,
  ArrowRight,
  BabyCarriage,
  BagShopping,
  Bell,
  BirthdayCake,
  Box,
  BoxOpen,
  BreadSlice,
  Calendar,
  CalendarAlt,
  Camera,
  Carrot,
  CCMasterCard,
  CCVisa,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  CircleUser,
  CircleXMark,
  ClipboardCheck,
  Clock,
  CreditCard,
  Dog,
  Dolly,
  Envelope,
  Eye,
  EyeSlash,
  Fish,
  Globe,
  Google,
  Heart,
  HeartBeat,
  HeartFilled,
  HomeAlt,
  Key,
  Lemon,
  LockKeyhole,
  Mailbox,
  Map,
  MapMarkedAlt,
  MapMarkerAlt,
  Microphone,
  Minus,
  MoneyBillWave,
  ParachuteBox,
  Paypal,
  Pencil,
  PhoneFlip,
  PizzaSlice,
  Plus,
  PlusCircle,
  PowerOff,
  RedoAlt,
  Salad,
  Search,
  ShippingFast,
  SlidersH,
  StarSharp,
  TableTennis,
  Tag,
  Th,
  TrashAlt,
  Truck,
  Turkey,
  UserAlt,
  Wallet,
} from '../../../../branding/carter/assets/Icons';
import IconNames from '../../../../branding/carter/assets/IconNames';

const PropTypes = require('prop-types');

export const SvgIcon = props => {
  const {type, color, width, height, style} = props;

  if (type === IconNames.Google) {
    return (
      <Google style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.CircleUser) {
    return (
      <CircleUser style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.PhoneFlip) {
    return (
      <PhoneFlip style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.LockKeyhole) {
    return (
      <LockKeyhole style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Envelope) {
    return (
      <Envelope style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Eye) {
    return <Eye style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.EyeSlash) {
    return (
      <EyeSlash style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.ArrowLeft) {
    return (
      <ArrowLeft style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.ArrowRight) {
    return (
      <ArrowRight style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.ChevronDown) {
    return (
      <ChevronDown style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.CircleXMark) {
    return (
      <CircleXMark style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.BagShopping) {
    return (
      <BagShopping style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Fish) {
    return <Fish style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.Truck) {
    return <Truck style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.MoneyBillWave) {
    return (
      <MoneyBillWave
        style={[style]}
        width={width}
        height={height}
        fill={color}
      />
    );
  } else if (type === IconNames.Key) {
    return <Key style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.Camera) {
    return (
      <Camera style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Search) {
    return (
      <Search style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.SlidersH) {
    return (
      <SlidersH style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.HomeAlt) {
    return (
      <HomeAlt style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Heart) {
    return <Heart style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.HeartFilled) {
    return (
      <HeartFilled style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Microphone) {
    return (
      <Microphone style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.RedoAlt) {
    return (
      <RedoAlt style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.CheckCircle) {
    return (
      <CheckCircle style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Tag) {
    return <Tag style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.ParachuteBox) {
    return (
      <ParachuteBox
        style={[style]}
        width={width}
        height={height}
        fill={color}
      />
    );
  } else if (type === IconNames.Lemon) {
    return <Lemon style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.Turkey) {
    return (
      <Turkey style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.BreadSlice) {
    return (
      <BreadSlice style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Carrot) {
    return (
      <Carrot style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Salad) {
    return <Salad style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.HeartBeat) {
    return (
      <HeartBeat style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Dog) {
    return <Dog style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.BirthdayCake) {
    return (
      <BirthdayCake
        style={[style]}
        width={width}
        height={height}
        fill={color}
      />
    );
  } else if (type === IconNames.PizzaSlice) {
    return (
      <PizzaSlice style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.BabyCarriage) {
    return (
      <BabyCarriage
        style={[style]}
        width={width}
        height={height}
        fill={color}
      />
    );
  } else if (type === IconNames.TableTennis) {
    return (
      <TableTennis style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.PlusCircle) {
    return (
      <PlusCircle style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.TrashAlt) {
    return (
      <TrashAlt style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Pencil) {
    return (
      <Pencil style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.MapMarkerAlt) {
    return (
      <MapMarkerAlt
        style={[style]}
        width={width}
        height={height}
        fill={color}
      />
    );
  } else if (type === IconNames.Mailbox) {
    return (
      <Mailbox style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Map) {
    return <Map style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.Globe) {
    return <Globe style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.Paypal) {
    return (
      <Paypal style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.CCMasterCard) {
    return (
      <CCMasterCard
        style={[style]}
        width={width}
        height={height}
        fill={color}
      />
    );
  } else if (type === IconNames.CCVisa) {
    return (
      <CCVisa style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Apple) {
    return <Apple style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.CreditCard) {
    return (
      <CreditCard style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Calendar) {
    return (
      <Calendar style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.CalendarAlt) {
    return (
      <CalendarAlt style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.UserAlt) {
    return (
      <UserAlt style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Box) {
    return <Box style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.Bell) {
    return <Bell style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.Th) {
    return <Th style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.PowerOff) {
    return (
      <PowerOff style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.BoxOpen) {
    return (
      <BoxOpen style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Plus) {
    return <Plus style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.Minus) {
    return <Minus style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.Clock) {
    return <Clock style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.ClipboardCheck) {
    return (
      <ClipboardCheck
        style={[style]}
        width={width}
        height={height}
        fill={color}
      />
    );
  } else if (type === IconNames.MapMarkedAlt) {
    return (
      <MapMarkedAlt
        style={[style]}
        width={width}
        height={height}
        fill={color}
      />
    );
  } else if (type === IconNames.ShippingFast) {
    return (
      <ShippingFast
        style={[style]}
        width={width}
        height={height}
        fill={color}
      />
    );
  } else if (type === IconNames.Dolly) {
    return <Dolly style={[style]} width={width} height={height} fill={color} />;
  } else if (type === IconNames.ChevronRight) {
    return (
      <ChevronRight
        style={[style]}
        width={width}
        height={height}
        fill={color}
      />
    );
  } else if (type === IconNames.Wallet) {
    return (
      <Wallet style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.StarSharp) {
    return (
      <StarSharp style={[style]} width={width} height={height} fill={color} />
    );
  } else if (type === IconNames.Check) {
    return <Check style={[style]} width={width} height={height} fill={color} />;
  } else {
    return (
      <Google style={[style]} width={width} height={height} fill={color} />
    );
  }
};

SvgIcon.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.any,
};
