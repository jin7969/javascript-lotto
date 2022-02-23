export const SELECTOR = {
  PURCHASE_FORM: ".purchase-form",
  PURCHASE_INPUT: ".purchase-input",
  PURCHASE_BUTTON: ".purchase-button",
  PURCHASE_INFOMATION: ".purchase-infomation",
  LOTTO_NUMBER_LIST: ".lotto-number-list",
  SWITCH_INPUT: ".switch-input",
};

export const MINIMUM_AMOUNT = 1000;

export const AMOUNT_UNIT = 1000;

export const LOTTO_NUMBER = {
  LENGTH: 6,
  RANGE_MIN: 1,
  RANGE_MAX: 45,
};

export const ERROR_MESSAGES = {
  INVALID_MINIMUM_AMOUNT: `금액은 ${MINIMUM_AMOUNT}원 이상으로 입력해주세요.`,
  INVALID_AMOUNT_UNIT: `${AMOUNT_UNIT}원 단위로 입력해주세요.`,
};