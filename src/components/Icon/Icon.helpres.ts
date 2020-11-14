import { ICON_TYPE } from "./Icon.enums";

export const getIconSrc = (type: ICON_TYPE, isDark: boolean) => {
    switch (type) {
        case ICON_TYPE.INFO:
            return isDark ? '/img/info_dark.svg' : '/img/info_white.svg';
        case ICON_TYPE.XRP:
            return isDark ? '/img/icons_currency_grey/xrp.svg' : '/img/icons_currency_color/xrp.svg';
        case ICON_TYPE.EGLD:
            return isDark ? '/img/icons_currency_grey/egld.svg' : '/img/icons_currency_color/egld.svg';
        case ICON_TYPE.ORN:
            return isDark ? '/img/icons_currency_grey/orn.svg' : '/img/icons_currency_color/orn.svg';
        case ICON_TYPE.USDT:
            return isDark ? '/img/icons_currency_grey/usdt.svg' : '/img/icons_currency_color/usdt.svg';
        case ICON_TYPE.BTC:
            return isDark ? '/img/icons_currency_grey/bitcoin.svg' : '/img/icons_currency_color/bitcoin.svg';
        case ICON_TYPE.ETH:
            return isDark ? '/img/icons_currency_grey/eth.svg' : '/img/icons_currency_color/eth.svg';
        case ICON_TYPE.DASH:
            return isDark ? '/img/icons_currency_grey/Combined Shape.svg' : '/img/icons_currency_color/Combined Shape.svg.svg';
        case ICON_TYPE.COLOR_BTC:
            return '/img/icons_currency_color/bitcoin.svg';
        case ICON_TYPE.COLOR_ETH:
            return '/img/icons_currency_color/eth.svg';
        case ICON_TYPE.COLOR_DASH:
            return '/img/icons_currency_color/Combined Shape.svg.svg';
        case ICON_TYPE.COLOR_XRP:
            return '/img/icons_currency_color/xrp.svg';
        case ICON_TYPE.LOGO:
            return '/img/logo.svg';
        case ICON_TYPE.COLOR_ERD:
            return '/img/icons_currency_color/egld.svg';
        case ICON_TYPE.COLOR_USDT:
            return '/img/icons_currency_color/usdt.svg';
        case ICON_TYPE.COLOR_ORN:
            return '/img/icons_currency_color/orn.svg';
        case ICON_TYPE.ARROW_DOWN:
            return '/img/arrow_fall.svg';
        case ICON_TYPE.DROPDOWN:
            return isDark ? '/img/dropdown_dark.svg' : '/img/dropdown.svg';
        case ICON_TYPE.TRADE:
            return isDark ? '/img/trade_white_dark.svg' : '/img/trade_white.svg';
        case ICON_TYPE.ARROW_BLUE:
            return '/img/arrow_blue.svg';
        case ICON_TYPE.CLOSE:
            return isDark ? '/img/close_dark.svg' : '/img/close.svg';
        case ICON_TYPE.CLOSE_GREY:
            return isDark ? '/img/close_grey_dark.svg' : '/img/close_grey.svg';
        case ICON_TYPE.BROADCAST:
            return isDark ? '/img/broadcast_dark.svg' : '/img/broadcast.svg';
        case ICON_TYPE.COPY:
            return isDark ? '/img/copy_dark.svg' : '/img/copy.svg';
        case ICON_TYPE.ARROWS_TRADE_BLUE_VERTICAL:
            return isDark ? '/img/arrows_trade_blue_vertical.svg' : '/img/arrows_trade_blue_vertical.svg';
        case ICON_TYPE.SUCCESS:
            return '/img/check_green.svg';
        case ICON_TYPE.ERROR:
            return '/img/cross_red.svg';
        default:
            return '';
    }
};
