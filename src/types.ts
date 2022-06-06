/* eslint-disable @typescript-eslint/camelcase */
import { ActionConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'slider-button-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

export interface SliderButtonCardConfig extends LovelaceCardConfig {
  type: string;
  entity: string;
  attribute?: string;
  name?: string;
  show_name?: boolean;
  show_state?: boolean;
  show_attribute?: boolean;
  icon?: IconConfig;
  action_button?: ActionButtonConfig;
  slider?: SliderConfig;
  theme?: string;
  debug?: boolean;
  compact?: boolean;
}

export interface ActionButtonConfig {
  mode?: ActionButtonMode;
  icon?: string;
  show?: boolean;
  show_spinner?: boolean;
  tap_action?: ActionConfig;
}

export interface IconConfig {
  icon?: string;
  show?: boolean;
  tap_action?: ActionConfig;
  use_state_color?: boolean;
}

export interface SliderConfig {
  min?: number;
  max?: number;
  step?: number;
  attribute?: string;
  direction?: SliderDirections;
  background: SliderBackground;
  use_percentage_bg_opacity?: boolean;
  use_state_color?: boolean;
  show_track?: boolean;
  disable_sliding?: boolean
  invert?: boolean;
  force_square: boolean;
  tap_action?: ActionConfig;
}

export enum ActionButtonMode {
  TOGGLE = 'toggle',
  CUSTOM = 'custom',
}

export enum SliderDirections {
  LEFT_RIGHT = 'left-right',
  TOP_BOTTOM = 'top-bottom',
  BOTTOM_TOP = 'bottom-top',
}

export enum SliderBackground {
  SOLID = 'solid',
  GRADIENT = 'gradient',
  TRIANGLE = 'triangle',
  STRIPED = 'striped',
  CUSTOM = 'custom',
}

export enum Domain {
  LIGHT = 'light',
  SWITCH = 'switch',
  FAN = 'fan',
  COVER = 'cover',
  INPUT_BOOLEAN = 'input_boolean',
  INPUT_NUMBER = 'input_number',
  MEDIA_PLAYER = 'media_player',
  CLIMATE = 'climate',
  LOCK = 'lock',
  AUTOMATION = 'automation',
  SENSOR = 'sensor',
  BINARY_SENSOR = 'binary_sensor',
  SCRIPT = 'script',
}

export const ActionButtonConfigDefault: ActionButtonConfig = {
  mode: ActionButtonMode.TOGGLE,
  icon: 'mdi:power',
  show: true,
  show_spinner: true,
  tap_action: {
    action: 'toggle'
  },
};

export const IconConfigDefault: IconConfig = {
  show: true,
  use_state_color: true,
  tap_action: {
    action: 'more-info'
  },
};

export const SliderConfigDefault: SliderConfig = {
  direction: SliderDirections.LEFT_RIGHT,
  background: SliderBackground.SOLID,
  use_percentage_bg_opacity: false,
  use_state_color: false,
  show_track: false,
  disable_sliding: false,
  force_square: false,
  tap_action: {
    action: 'toggle'
  },
};

export const SliderConfigDefaultDomain: Map<string, SliderConfig> = new Map([
  [Domain.LIGHT, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.GRADIENT,
    use_state_color: true,
    use_percentage_bg_opacity: false,
    show_track: false,
    disable_sliding: false,
    force_square: false,
    show_attribute: false,
    tap_action: {
      action: 'toggle'
    },
  }],
  [Domain.FAN, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    disable_sliding: false,
    force_square: false,
    show_attribute: false,
    tap_action: {
      action: 'toggle'
    },
  }],
  [Domain.SWITCH, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    disable_sliding: true,
    force_square: false,
    show_attribute: false,
    tap_action: {
      action: 'toggle'
    },
  }],
  [Domain.AUTOMATION, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    disable_sliding: true,
    force_square: false,
    show_attribute: false,
    tap_action: {
      action: 'toggle'
    },
  }],
  [Domain.COVER, {
    direction: SliderDirections.TOP_BOTTOM,
    background: SliderBackground.STRIPED,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    disable_sliding: false,
    show_track: false,
    force_square: false,
    invert: true,
    show_attribute: false,
    tap_action: {
      action: 'toggle'
    },
  }],
  [Domain.INPUT_BOOLEAN, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    disable_sliding: false,
    force_square: false,
    show_attribute: false,
    tap_action: {
      action: 'toggle'
    },
  }],
  [Domain.INPUT_NUMBER, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    disable_sliding: false,
    force_square: false,
    show_attribute: false,
    tap_action: {
      action: 'more-info'
    },
  }],
  [Domain.MEDIA_PLAYER, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.TRIANGLE,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: true,
    disable_sliding: false,
    force_square: false,
    show_attribute: true,
    attribute: "media_title",
    tap_action: {
      action: 'more-info'
    },
  }],
  [Domain.LOCK, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    disable_sliding: true,
    force_square: false,
    show_attribute: false,
    tap_action: {
      action: 'toggle'
    },
  }],
  [Domain.CLIMATE, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.TRIANGLE,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: true,
    disable_sliding: false,
    force_square: false,
    show_attribute: "current_temperature",
    tap_action: {
      action: 'more-info'
    },
  }],
  [Domain.SENSOR, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    disable_sliding: true,
    force_square: false,
    tap_action: {
      action: 'more-info'
    },
  }],
  [Domain.BINARY_SENSOR, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    disable_sliding: true,
    force_square: false,
    tap_action: {
      action: 'more-info'
    },
  }],
  [Domain.SCRIPT, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    disable_sliding: true,
    force_square: false,
    tap_action: {
      action: 'more-info'
    },
  }],
]);

export enum LightAttributes {
  COLOR_TEMP = 'color_temp',
  BRIGHTNESS = 'brightness',
  BRIGHTNESS_PCT = 'brightness_pct',
  HUE = 'hue',
  SATURATION = 'saturation',
  ON_OFF = 'onoff',
}

export enum LightColorModes {
  COLOR_TEMP = 'color_temp',
  BRIGHTNESS = 'brightness',
  HS = 'hs',
  ON_OFF = 'onoff',
}

export enum CoverAttributes {
  POSITION = 'position',
  TILT = 'tilt',
}
