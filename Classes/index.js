import {css} from 'lit-element';

import {
  shadow_drop_2_center,
  shadow_drop_2_tb,
  shadow_drop_2_top,
  shadow_drop_2_tr,
  shadow_drop_2_right,
  shadow_drop_2_br,
  shadow_drop_2_bottom,
  shadow_drop_2_bl,
  shadow_drop_2_left,
  shadow_drop_2_tl,
  shadow_drop_2_lr
} from '../Literals';

import {shadow_drop_2_center_keyframes,
shadow_drop_2_tb_keyframes,
shadow_drop_2_top_keyframes,
shadow_drop_2_tr_keyframes,
shadow_drop_2_right_keyframes,
shadow_drop_2_br_keyframes,
shadow_drop_2_bottom_keyframes,
shadow_drop_2_bl_keyframes,
shadow_drop_2_left_keyframes,
shadow_drop_2_tl_keyframes,
shadow_drop_2_lr_keyframes
} from '../Literals/KeyFrames';

export const Basic= css`
    .shadow-drop.to-center
    {
      ${shadow_drop_2_center}
    }
    ${shadow_drop_2_center_keyframes}

    .shadow-drop.top-bottom
    {
      ${shadow_drop_2_tb}
    }
    ${shadow_drop_2_tb_keyframes}

    .shadow-drop.top
    {
      ${shadow_drop_2_top}
    }
    ${shadow_drop_2_top_keyframes}

    .shadow-drop.top-right
    {
      ${shadow_drop_2_tr}
    }
    ${shadow_drop_2_tr_keyframes}

    .shadow-drop.right
    {
      ${shadow_drop_2_right}
    }
    ${shadow_drop_2_right_keyframes}

    .shadow-drop.bottom-right
    {
      ${shadow_drop_2_br}
    }
    ${shadow_drop_2_br_keyframes}

    .shadow-drop.bottom
    {
      ${shadow_drop_2_bottom}
    }
    ${shadow_drop_2_bottom_keyframes}

    .shadow-drop.bottom-left
    {
      ${shadow_drop_2_bl}
    }
    ${shadow_drop_2_bl_keyframes}

    .shadow-drop.left
    {
      ${shadow_drop_2_left}
    }
    ${shadow_drop_2_left_keyframes}

    .shadow-drop.top-left
    {
      ${shadow_drop_2_tl}
    }
    ${shadow_drop_2_tl_keyframes}

    .shadow-drop.left-right
    {
      ${shadow_drop_2_lr}
    }
    ${shadow_drop_2_lr_keyframes}




  `;


