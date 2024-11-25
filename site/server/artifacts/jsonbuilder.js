'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var crypto = require('crypto');

// Generated code. Do not modify.
class ArrayValue {
    constructor(props) {
        this.type = 'array';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * An arbitrary array in JSON format.
 */
class ArrayVariable {
    constructor(props) {
        this.type = 'array';
        this.name = props.name;
        this.value = props.value;
    }
}

// Generated code. Do not modify.
class BooleanValue {
    constructor(props) {
        this.type = 'boolean';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * A Boolean variable in binary format.
 */
class BooleanVariable {
    constructor(props) {
        this.type = 'boolean';
        this.name = props.name;
        this.value = props.value;
    }
}

// Generated code. Do not modify.
class ColorValue {
    constructor(props) {
        this.type = 'color';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * Variable — HEX color as a string.
 */
class ColorVariable {
    constructor(props) {
        this.type = 'color';
        this.name = props.name;
        this.value = props.value;
    }
}

// Generated code. Do not modify.
class ContentText {
    constructor(props) {
        this.type = 'text';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
class ContentUrl {
    constructor(props) {
        this.type = 'url';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
class DictValue {
    constructor(props) {
        this.type = 'dict';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * An arbitrary object in JSON format.
 */
class DictVariable {
    constructor(props) {
        this.type = 'dict';
        this.name = props.name;
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * Launches the specified animator.
 */
class DivActionAnimatorStart {
    constructor(props) {
        this.type = 'animator_start';
        this.animator_id = props.animator_id;
        this.direction = props.direction;
        this.duration = props.duration;
        this.end_value = props.end_value;
        this.interpolator = props.interpolator;
        this.repeat_count = props.repeat_count;
        this.start_delay = props.start_delay;
        this.start_value = props.start_value;
    }
}

// Generated code. Do not modify.
/**
 * Stops the specified animator.
 */
class DivActionAnimatorStop {
    constructor(props) {
        this.type = 'animator_stop';
        this.animator_id = props.animator_id;
    }
}

// Generated code. Do not modify.
/**
 * Adds a value to the array
 */
class DivActionArrayInsertValue {
    constructor(props) {
        this.type = 'array_insert_value';
        this.index = props.index;
        this.value = props.value;
        this.variable_name = props.variable_name;
    }
}

// Generated code. Do not modify.
/**
 * Deletes a value from the array
 */
class DivActionArrayRemoveValue {
    constructor(props) {
        this.type = 'array_remove_value';
        this.index = props.index;
        this.variable_name = props.variable_name;
    }
}

// Generated code. Do not modify.
/**
 * Sets the value in the array by index.
 */
class DivActionArraySetValue {
    constructor(props) {
        this.type = 'array_set_value';
        this.index = props.index;
        this.value = props.value;
        this.variable_name = props.variable_name;
    }
}

// Generated code. Do not modify.
/**
 * Removes focus from an element.
 */
class DivActionClearFocus {
    constructor(props) {
        this.type = 'clear_focus';
    }
}

// Generated code. Do not modify.
/**
 * Copies data to the clipboard.
 */
class DivActionCopyToClipboard {
    constructor(props) {
        this.type = 'copy_to_clipboard';
        this.content = props.content;
    }
}

// Generated code. Do not modify.
/**
 * Sets the value in the dictionary by the specified key. Deletes the key if the value is not
 * set.
 */
class DivActionDictSetValue {
    constructor(props) {
        this.type = 'dict_set_value';
        this.key = props.key;
        this.value = props.value;
        this.variable_name = props.variable_name;
    }
}

// Generated code. Do not modify.
/**
 * Loads additional data in `div-patch` format and updates the current element.
 */
class DivActionDownload {
    constructor(props) {
        this.type = 'download';
        this.on_fail_actions = props.on_fail_actions;
        this.on_success_actions = props.on_success_actions;
        this.url = props.url;
    }
}

// Generated code. Do not modify.
/**
 * Requests focus for an element. May require a user action on the web.
 */
class DivActionFocusElement {
    constructor(props) {
        this.type = 'focus_element';
        this.element_id = props.element_id;
    }
}

// Generated code. Do not modify.
/**
 * Hides the tooltip.
 */
class DivActionHideTooltip {
    constructor(props) {
        this.type = 'hide_tooltip';
        this.id = props.id;
    }
}

// Generated code. Do not modify.
/**
 * Scrolls the container by `item_count` or `offset` starting from the current position. If both
 * values are specified, the action will be combined. For scrolling back, use negative values.
 */
class DivActionScrollBy {
    constructor(props) {
        this.type = 'scroll_by';
        this.animated = props.animated;
        this.id = props.id;
        this.item_count = props.item_count;
        this.offset = props.offset;
        this.overflow = props.overflow;
    }
}

// Generated code. Do not modify.
/**
 * Scrolls to a position or switches to the container element specified by the `destination`
 * parameter.
 */
class DivActionScrollTo {
    constructor(props) {
        this.type = 'scroll_to';
        this.animated = props.animated;
        this.destination = props.destination;
        this.id = props.id;
    }
}

// Generated code. Do not modify.
/**
 * Applies a new appearance to the content in `div-state'.
 */
class DivActionSetState {
    constructor(props) {
        this.type = 'set_state';
        this.state_id = props.state_id;
        this.temporary = props.temporary;
    }
}

// Generated code. Do not modify.
/**
 * Temporarily saves the variable in storage.
 */
class DivActionSetStoredValue {
    constructor(props) {
        this.type = 'set_stored_value';
        this.lifetime = props.lifetime;
        this.name = props.name;
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * Assigns a value to the variable
 */
class DivActionSetVariable {
    constructor(props) {
        this.type = 'set_variable';
        this.value = props.value;
        this.variable_name = props.variable_name;
    }
}

// Generated code. Do not modify.
/**
 * Shows the tooltip.
 */
class DivActionShowTooltip {
    constructor(props) {
        this.type = 'show_tooltip';
        this.id = props.id;
        this.multiple = props.multiple;
    }
}

// Generated code. Do not modify.
/**
 * Sends variables from the container by link. Data sending configuration can be defined by the
 * host app. By default, variables are sent as JSON in the request body using the POST method.
 */
class DivActionSubmit {
    constructor(props) {
        this.type = 'submit';
        this.container_id = props.container_id;
        this.on_fail_actions = props.on_fail_actions;
        this.on_success_actions = props.on_success_actions;
        this.request = props.request;
    }
}

// Generated code. Do not modify.
/**
 * Controls the timer.
 */
class DivActionTimer {
    constructor(props) {
        this.type = 'timer';
        this.action = props.action;
        this.id = props.id;
    }
}

// Generated code. Do not modify.
/**
 * Manages video playback.
 */
class DivActionVideo {
    constructor(props) {
        this.type = 'video';
        this.action = props.action;
        this.id = props.id;
    }
}

// Generated code. Do not modify.
/**
 * A set of animations to be applied simultaneously.
 */
class DivAppearanceSetTransition {
    constructor(props) {
        this.type = 'set';
        this.items = props.items;
    }
}

// Generated code. Do not modify.
/**
 * Gaussian image blur.
 */
class DivBlur {
    constructor(props) {
        this.type = 'blur';
        this.radius = props.radius;
    }
}

// Generated code. Do not modify.
/**
 * Element position and size change animation.
 */
class DivChangeBoundsTransition {
    constructor(props) {
        this.type = 'change_bounds';
        this.duration = props === null || props === void 0 ? void 0 : props.duration;
        this.interpolator = props === null || props === void 0 ? void 0 : props.interpolator;
        this.start_delay = props === null || props === void 0 ? void 0 : props.start_delay;
    }
}

// Generated code. Do not modify.
/**
 * Animations.
 */
class DivChangeSetTransition {
    constructor(props) {
        this.type = 'set';
        this.items = props.items;
    }
}

// Generated code. Do not modify.
/**
 * Circle.
 */
class DivCircleShape {
    constructor(props) {
        this.type = 'circle';
        this.background_color = props === null || props === void 0 ? void 0 : props.background_color;
        this.radius = props === null || props === void 0 ? void 0 : props.radius;
        this.stroke = props === null || props === void 0 ? void 0 : props.stroke;
    }
}

// Generated code. Do not modify.
/**
 * Cloud-style text background. Rows have a rectangular background in the specified color with
 * rounded corners.
 */
class DivCloudBackground {
    constructor(props) {
        this.type = 'cloud';
        this.color = props.color;
        this.corner_radius = props.corner_radius;
        this.paddings = props.paddings;
    }
}

// Generated code. Do not modify.
/**
 * Color animator.
 */
class DivColorAnimator {
    constructor(props) {
        this.type = 'color_animator';
        this.cancel_actions = props.cancel_actions;
        this.direction = props.direction;
        this.duration = props.duration;
        this.end_actions = props.end_actions;
        this.end_value = props.end_value;
        this.id = props.id;
        this.interpolator = props.interpolator;
        this.repeat_count = props.repeat_count;
        this.start_delay = props.start_delay;
        this.start_value = props.start_value;
        this.variable_name = props.variable_name;
    }
}

// Generated code. Do not modify.
/**
 * Container. It contains other elements and is responsible for their location. It is used to
 * arrange elements vertically, horizontally, and with an overlay in a certain order, simulating
 * the third dimension.
 */
class DivContainer {
    constructor(props) {
        this.type = 'container';
        this.accessibility = props === null || props === void 0 ? void 0 : props.accessibility;
        this.action = props === null || props === void 0 ? void 0 : props.action;
        this.action_animation = props === null || props === void 0 ? void 0 : props.action_animation;
        this.actions = props === null || props === void 0 ? void 0 : props.actions;
        this.alignment_horizontal = props === null || props === void 0 ? void 0 : props.alignment_horizontal;
        this.alignment_vertical = props === null || props === void 0 ? void 0 : props.alignment_vertical;
        this.alpha = props === null || props === void 0 ? void 0 : props.alpha;
        this.animators = props === null || props === void 0 ? void 0 : props.animators;
        this.aspect = props === null || props === void 0 ? void 0 : props.aspect;
        this.background = props === null || props === void 0 ? void 0 : props.background;
        this.border = props === null || props === void 0 ? void 0 : props.border;
        this.clip_to_bounds = props === null || props === void 0 ? void 0 : props.clip_to_bounds;
        this.column_span = props === null || props === void 0 ? void 0 : props.column_span;
        this.content_alignment_horizontal = props === null || props === void 0 ? void 0 : props.content_alignment_horizontal;
        this.content_alignment_vertical = props === null || props === void 0 ? void 0 : props.content_alignment_vertical;
        this.disappear_actions = props === null || props === void 0 ? void 0 : props.disappear_actions;
        this.doubletap_actions = props === null || props === void 0 ? void 0 : props.doubletap_actions;
        this.extensions = props === null || props === void 0 ? void 0 : props.extensions;
        this.focus = props === null || props === void 0 ? void 0 : props.focus;
        this.functions = props === null || props === void 0 ? void 0 : props.functions;
        this.height = props === null || props === void 0 ? void 0 : props.height;
        this.hover_end_actions = props === null || props === void 0 ? void 0 : props.hover_end_actions;
        this.hover_start_actions = props === null || props === void 0 ? void 0 : props.hover_start_actions;
        this.id = props === null || props === void 0 ? void 0 : props.id;
        this.item_builder = props === null || props === void 0 ? void 0 : props.item_builder;
        this.items = props === null || props === void 0 ? void 0 : props.items;
        this.layout_mode = props === null || props === void 0 ? void 0 : props.layout_mode;
        this.layout_provider = props === null || props === void 0 ? void 0 : props.layout_provider;
        this.line_separator = props === null || props === void 0 ? void 0 : props.line_separator;
        this.longtap_actions = props === null || props === void 0 ? void 0 : props.longtap_actions;
        this.margins = props === null || props === void 0 ? void 0 : props.margins;
        this.orientation = props === null || props === void 0 ? void 0 : props.orientation;
        this.paddings = props === null || props === void 0 ? void 0 : props.paddings;
        this.press_end_actions = props === null || props === void 0 ? void 0 : props.press_end_actions;
        this.press_start_actions = props === null || props === void 0 ? void 0 : props.press_start_actions;
        this.reuse_id = props === null || props === void 0 ? void 0 : props.reuse_id;
        this.row_span = props === null || props === void 0 ? void 0 : props.row_span;
        this.selected_actions = props === null || props === void 0 ? void 0 : props.selected_actions;
        this.separator = props === null || props === void 0 ? void 0 : props.separator;
        this.tooltips = props === null || props === void 0 ? void 0 : props.tooltips;
        this.transform = props === null || props === void 0 ? void 0 : props.transform;
        this.transition_change = props === null || props === void 0 ? void 0 : props.transition_change;
        this.transition_in = props === null || props === void 0 ? void 0 : props.transition_in;
        this.transition_out = props === null || props === void 0 ? void 0 : props.transition_out;
        this.transition_triggers = props === null || props === void 0 ? void 0 : props.transition_triggers;
        this.variable_triggers = props === null || props === void 0 ? void 0 : props.variable_triggers;
        this.variables = props === null || props === void 0 ? void 0 : props.variables;
        this.visibility = props === null || props === void 0 ? void 0 : props.visibility;
        this.visibility_action = props === null || props === void 0 ? void 0 : props.visibility_action;
        this.visibility_actions = props === null || props === void 0 ? void 0 : props.visibility_actions;
        this.width = props === null || props === void 0 ? void 0 : props.width;
    }
}

// Generated code. Do not modify.
/**
 * Mask for entering currency in the specified regional format.
 */
class DivCurrencyInputMask {
    constructor(props) {
        this.type = 'currency';
        this.locale = props.locale;
        this.raw_text_variable = props.raw_text_variable;
    }
}

// Generated code. Do not modify.
/**
 * Custom element. It is delegated to a host application to create native elements depending on
 * the platform.
 */
class DivCustom {
    constructor(props) {
        this.type = 'custom';
        this.accessibility = props.accessibility;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.custom_props = props.custom_props;
        this.custom_type = props.custom_type;
        this.disappear_actions = props.disappear_actions;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.functions = props.functions;
        this.height = props.height;
        this.id = props.id;
        this.items = props.items;
        this.layout_provider = props.layout_provider;
        this.margins = props.margins;
        this.paddings = props.paddings;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.selected_actions = props.selected_actions;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * Element size adjusts to a parent element.
 */
class DivDefaultIndicatorItemPlacement {
    constructor(props) {
        this.type = 'default';
        this.space_between_centers = props === null || props === void 0 ? void 0 : props.space_between_centers;
    }
}

// Generated code. Do not modify.
/**
 * Transparency animation.
 */
class DivFadeTransition {
    constructor(props) {
        this.type = 'fade';
        this.alpha = props === null || props === void 0 ? void 0 : props.alpha;
        this.duration = props === null || props === void 0 ? void 0 : props.duration;
        this.interpolator = props === null || props === void 0 ? void 0 : props.interpolator;
        this.start_delay = props === null || props === void 0 ? void 0 : props.start_delay;
    }
}

// Generated code. Do not modify.
/**
 * Mirrors an image if the system uses RTL (Right-to-Left) text direction.
 */
class DivFilterRtlMirror {
    constructor(props) {
        this.type = 'rtl_mirror';
    }
}

// Generated code. Do not modify.
/**
 * Fixed number of repetitions.
 */
class DivFixedCount {
    constructor(props) {
        this.type = 'fixed';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * Mask for entering text with a fixed number of characters.
 */
class DivFixedLengthInputMask {
    constructor(props) {
        this.type = 'fixed_length';
        this.always_visible = props.always_visible;
        this.pattern = props.pattern;
        this.pattern_elements = props.pattern_elements;
        this.raw_text_variable = props.raw_text_variable;
    }
}

// Generated code. Do not modify.
/**
 * Fixed size of an element.
 */
class DivFixedSize {
    constructor(props) {
        this.type = 'fixed';
        this.unit = props.unit;
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * Gallery. It contains a horizontal or vertical set of cards that can be scrolled.
 */
class DivGallery {
    constructor(props) {
        this.type = 'gallery';
        this.accessibility = props === null || props === void 0 ? void 0 : props.accessibility;
        this.alignment_horizontal = props === null || props === void 0 ? void 0 : props.alignment_horizontal;
        this.alignment_vertical = props === null || props === void 0 ? void 0 : props.alignment_vertical;
        this.alpha = props === null || props === void 0 ? void 0 : props.alpha;
        this.animators = props === null || props === void 0 ? void 0 : props.animators;
        this.background = props === null || props === void 0 ? void 0 : props.background;
        this.border = props === null || props === void 0 ? void 0 : props.border;
        this.column_count = props === null || props === void 0 ? void 0 : props.column_count;
        this.column_span = props === null || props === void 0 ? void 0 : props.column_span;
        this.cross_content_alignment = props === null || props === void 0 ? void 0 : props.cross_content_alignment;
        this.cross_spacing = props === null || props === void 0 ? void 0 : props.cross_spacing;
        this.default_item = props === null || props === void 0 ? void 0 : props.default_item;
        this.disappear_actions = props === null || props === void 0 ? void 0 : props.disappear_actions;
        this.extensions = props === null || props === void 0 ? void 0 : props.extensions;
        this.focus = props === null || props === void 0 ? void 0 : props.focus;
        this.functions = props === null || props === void 0 ? void 0 : props.functions;
        this.height = props === null || props === void 0 ? void 0 : props.height;
        this.id = props === null || props === void 0 ? void 0 : props.id;
        this.item_builder = props === null || props === void 0 ? void 0 : props.item_builder;
        this.item_spacing = props === null || props === void 0 ? void 0 : props.item_spacing;
        this.items = props === null || props === void 0 ? void 0 : props.items;
        this.layout_provider = props === null || props === void 0 ? void 0 : props.layout_provider;
        this.margins = props === null || props === void 0 ? void 0 : props.margins;
        this.orientation = props === null || props === void 0 ? void 0 : props.orientation;
        this.paddings = props === null || props === void 0 ? void 0 : props.paddings;
        this.restrict_parent_scroll = props === null || props === void 0 ? void 0 : props.restrict_parent_scroll;
        this.reuse_id = props === null || props === void 0 ? void 0 : props.reuse_id;
        this.row_span = props === null || props === void 0 ? void 0 : props.row_span;
        this.scroll_mode = props === null || props === void 0 ? void 0 : props.scroll_mode;
        this.scrollbar = props === null || props === void 0 ? void 0 : props.scrollbar;
        this.selected_actions = props === null || props === void 0 ? void 0 : props.selected_actions;
        this.tooltips = props === null || props === void 0 ? void 0 : props.tooltips;
        this.transform = props === null || props === void 0 ? void 0 : props.transform;
        this.transition_change = props === null || props === void 0 ? void 0 : props.transition_change;
        this.transition_in = props === null || props === void 0 ? void 0 : props.transition_in;
        this.transition_out = props === null || props === void 0 ? void 0 : props.transition_out;
        this.transition_triggers = props === null || props === void 0 ? void 0 : props.transition_triggers;
        this.variable_triggers = props === null || props === void 0 ? void 0 : props.variable_triggers;
        this.variables = props === null || props === void 0 ? void 0 : props.variables;
        this.visibility = props === null || props === void 0 ? void 0 : props.visibility;
        this.visibility_action = props === null || props === void 0 ? void 0 : props.visibility_action;
        this.visibility_actions = props === null || props === void 0 ? void 0 : props.visibility_actions;
        this.width = props === null || props === void 0 ? void 0 : props.width;
    }
}

// Generated code. Do not modify.
/**
 * Animated GIF image.
 */
class DivGifImage {
    constructor(props) {
        this.type = 'gif';
        this.accessibility = props.accessibility;
        this.action = props.action;
        this.action_animation = props.action_animation;
        this.actions = props.actions;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.aspect = props.aspect;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.content_alignment_horizontal = props.content_alignment_horizontal;
        this.content_alignment_vertical = props.content_alignment_vertical;
        this.disappear_actions = props.disappear_actions;
        this.doubletap_actions = props.doubletap_actions;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.functions = props.functions;
        this.gif_url = props.gif_url;
        this.height = props.height;
        this.hover_end_actions = props.hover_end_actions;
        this.hover_start_actions = props.hover_start_actions;
        this.id = props.id;
        this.layout_provider = props.layout_provider;
        this.longtap_actions = props.longtap_actions;
        this.margins = props.margins;
        this.paddings = props.paddings;
        this.placeholder_color = props.placeholder_color;
        this.preload_required = props.preload_required;
        this.press_end_actions = props.press_end_actions;
        this.press_start_actions = props.press_start_actions;
        this.preview = props.preview;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.scale = props.scale;
        this.selected_actions = props.selected_actions;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * A grid with an option to merge cells vertically and horizontally.
 */
class DivGrid {
    constructor(props) {
        this.type = 'grid';
        this.accessibility = props.accessibility;
        this.action = props.action;
        this.action_animation = props.action_animation;
        this.actions = props.actions;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.background = props.background;
        this.border = props.border;
        this.column_count = props.column_count;
        this.column_span = props.column_span;
        this.content_alignment_horizontal = props.content_alignment_horizontal;
        this.content_alignment_vertical = props.content_alignment_vertical;
        this.disappear_actions = props.disappear_actions;
        this.doubletap_actions = props.doubletap_actions;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.functions = props.functions;
        this.height = props.height;
        this.hover_end_actions = props.hover_end_actions;
        this.hover_start_actions = props.hover_start_actions;
        this.id = props.id;
        this.items = props.items;
        this.layout_provider = props.layout_provider;
        this.longtap_actions = props.longtap_actions;
        this.margins = props.margins;
        this.paddings = props.paddings;
        this.press_end_actions = props.press_end_actions;
        this.press_start_actions = props.press_start_actions;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.selected_actions = props.selected_actions;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * Image.
 */
class DivImage {
    constructor(props) {
        this.type = 'image';
        this.accessibility = props.accessibility;
        this.action = props.action;
        this.action_animation = props.action_animation;
        this.actions = props.actions;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.appearance_animation = props.appearance_animation;
        this.aspect = props.aspect;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.content_alignment_horizontal = props.content_alignment_horizontal;
        this.content_alignment_vertical = props.content_alignment_vertical;
        this.disappear_actions = props.disappear_actions;
        this.doubletap_actions = props.doubletap_actions;
        this.extensions = props.extensions;
        this.filters = props.filters;
        this.focus = props.focus;
        this.functions = props.functions;
        this.height = props.height;
        this.high_priority_preview_show = props.high_priority_preview_show;
        this.hover_end_actions = props.hover_end_actions;
        this.hover_start_actions = props.hover_start_actions;
        this.id = props.id;
        this.image_url = props.image_url;
        this.layout_provider = props.layout_provider;
        this.longtap_actions = props.longtap_actions;
        this.margins = props.margins;
        this.paddings = props.paddings;
        this.placeholder_color = props.placeholder_color;
        this.preload_required = props.preload_required;
        this.press_end_actions = props.press_end_actions;
        this.press_start_actions = props.press_start_actions;
        this.preview = props.preview;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.scale = props.scale;
        this.selected_actions = props.selected_actions;
        this.tint_color = props.tint_color;
        this.tint_mode = props.tint_mode;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * Background image.
 */
class DivImageBackground {
    constructor(props) {
        this.type = 'image';
        this.alpha = props.alpha;
        this.content_alignment_horizontal = props.content_alignment_horizontal;
        this.content_alignment_vertical = props.content_alignment_vertical;
        this.filters = props.filters;
        this.image_url = props.image_url;
        this.preload_required = props.preload_required;
        this.scale = props.scale;
    }
}

// Generated code. Do not modify.
/**
 * Progress indicator for [pager](div-pager.md).
 */
class DivIndicator {
    constructor(props) {
        this.type = 'indicator';
        this.accessibility = props === null || props === void 0 ? void 0 : props.accessibility;
        this.active_item_color = props === null || props === void 0 ? void 0 : props.active_item_color;
        this.active_item_size = props === null || props === void 0 ? void 0 : props.active_item_size;
        this.active_shape = props === null || props === void 0 ? void 0 : props.active_shape;
        this.alignment_horizontal = props === null || props === void 0 ? void 0 : props.alignment_horizontal;
        this.alignment_vertical = props === null || props === void 0 ? void 0 : props.alignment_vertical;
        this.alpha = props === null || props === void 0 ? void 0 : props.alpha;
        this.animation = props === null || props === void 0 ? void 0 : props.animation;
        this.animators = props === null || props === void 0 ? void 0 : props.animators;
        this.background = props === null || props === void 0 ? void 0 : props.background;
        this.border = props === null || props === void 0 ? void 0 : props.border;
        this.column_span = props === null || props === void 0 ? void 0 : props.column_span;
        this.disappear_actions = props === null || props === void 0 ? void 0 : props.disappear_actions;
        this.extensions = props === null || props === void 0 ? void 0 : props.extensions;
        this.focus = props === null || props === void 0 ? void 0 : props.focus;
        this.functions = props === null || props === void 0 ? void 0 : props.functions;
        this.height = props === null || props === void 0 ? void 0 : props.height;
        this.id = props === null || props === void 0 ? void 0 : props.id;
        this.inactive_item_color = props === null || props === void 0 ? void 0 : props.inactive_item_color;
        this.inactive_minimum_shape = props === null || props === void 0 ? void 0 : props.inactive_minimum_shape;
        this.inactive_shape = props === null || props === void 0 ? void 0 : props.inactive_shape;
        this.items_placement = props === null || props === void 0 ? void 0 : props.items_placement;
        this.layout_provider = props === null || props === void 0 ? void 0 : props.layout_provider;
        this.margins = props === null || props === void 0 ? void 0 : props.margins;
        this.minimum_item_size = props === null || props === void 0 ? void 0 : props.minimum_item_size;
        this.paddings = props === null || props === void 0 ? void 0 : props.paddings;
        this.pager_id = props === null || props === void 0 ? void 0 : props.pager_id;
        this.reuse_id = props === null || props === void 0 ? void 0 : props.reuse_id;
        this.row_span = props === null || props === void 0 ? void 0 : props.row_span;
        this.selected_actions = props === null || props === void 0 ? void 0 : props.selected_actions;
        this.shape = props === null || props === void 0 ? void 0 : props.shape;
        this.space_between_centers = props === null || props === void 0 ? void 0 : props.space_between_centers;
        this.tooltips = props === null || props === void 0 ? void 0 : props.tooltips;
        this.transform = props === null || props === void 0 ? void 0 : props.transform;
        this.transition_change = props === null || props === void 0 ? void 0 : props.transition_change;
        this.transition_in = props === null || props === void 0 ? void 0 : props.transition_in;
        this.transition_out = props === null || props === void 0 ? void 0 : props.transition_out;
        this.transition_triggers = props === null || props === void 0 ? void 0 : props.transition_triggers;
        this.variable_triggers = props === null || props === void 0 ? void 0 : props.variable_triggers;
        this.variables = props === null || props === void 0 ? void 0 : props.variables;
        this.visibility = props === null || props === void 0 ? void 0 : props.visibility;
        this.visibility_action = props === null || props === void 0 ? void 0 : props.visibility_action;
        this.visibility_actions = props === null || props === void 0 ? void 0 : props.visibility_actions;
        this.width = props === null || props === void 0 ? void 0 : props.width;
    }
}

// Generated code. Do not modify.
/**
 * Infinite number of repetitions.
 */
class DivInfinityCount {
    constructor(props) {
        this.type = 'infinity';
    }
}

// Generated code. Do not modify.
/**
 * Text input element.
 */
class DivInput {
    constructor(props) {
        this.type = 'input';
        this.accessibility = props.accessibility;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.autocapitalization = props.autocapitalization;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.disappear_actions = props.disappear_actions;
        this.enter_key_actions = props.enter_key_actions;
        this.enter_key_type = props.enter_key_type;
        this.extensions = props.extensions;
        this.filters = props.filters;
        this.focus = props.focus;
        this.font_family = props.font_family;
        this.font_size = props.font_size;
        this.font_size_unit = props.font_size_unit;
        this.font_weight = props.font_weight;
        this.font_weight_value = props.font_weight_value;
        this.functions = props.functions;
        this.height = props.height;
        this.highlight_color = props.highlight_color;
        this.hint_color = props.hint_color;
        this.hint_text = props.hint_text;
        this.id = props.id;
        this.is_enabled = props.is_enabled;
        this.keyboard_type = props.keyboard_type;
        this.layout_provider = props.layout_provider;
        this.letter_spacing = props.letter_spacing;
        this.line_height = props.line_height;
        this.margins = props.margins;
        this.mask = props.mask;
        this.max_length = props.max_length;
        this.max_visible_lines = props.max_visible_lines;
        this.native_interface = props.native_interface;
        this.paddings = props.paddings;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.select_all_on_focus = props.select_all_on_focus;
        this.selected_actions = props.selected_actions;
        this.text_alignment_horizontal = props.text_alignment_horizontal;
        this.text_alignment_vertical = props.text_alignment_vertical;
        this.text_color = props.text_color;
        this.text_variable = props.text_variable;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.validators = props.validators;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * Filter based on [calculated expressions](../../expressions).
 */
class DivInputFilterExpression {
    constructor(props) {
        this.type = 'expression';
        this.condition = props.condition;
    }
}

// Generated code. Do not modify.
/**
 * Filter based on regular expressions.
 */
class DivInputFilterRegex {
    constructor(props) {
        this.type = 'regex';
        this.pattern = props.pattern;
    }
}

// Generated code. Do not modify.
/**
 * [Calculated expression](../../expressions) validator.
 */
class DivInputValidatorExpression {
    constructor(props) {
        this.type = 'expression';
        this.allow_empty = props.allow_empty;
        this.condition = props.condition;
        this.label_id = props.label_id;
        this.variable = props.variable;
    }
}

// Generated code. Do not modify.
/**
 * Regex validator.
 */
class DivInputValidatorRegex {
    constructor(props) {
        this.type = 'regex';
        this.allow_empty = props.allow_empty;
        this.label_id = props.label_id;
        this.pattern = props.pattern;
        this.variable = props.variable;
    }
}

// Generated code. Do not modify.
/**
 * Linear gradient.
 */
class DivLinearGradient {
    constructor(props) {
        this.type = 'gradient';
        this.angle = props.angle;
        this.colors = props.colors;
    }
}

// Generated code. Do not modify.
/**
 * Element size adjusts to a parent element.
 */
class DivMatchParentSize {
    constructor(props) {
        this.type = 'match_parent';
        this.weight = props === null || props === void 0 ? void 0 : props.weight;
    }
}

// Generated code. Do not modify.
/**
 * Fixed width value of the visible part of a neighbouring page.
 */
class DivNeighbourPageSize {
    constructor(props) {
        this.type = 'fixed';
        this.neighbour_page_width = props.neighbour_page_width;
    }
}

// Generated code. Do not modify.
/**
 * Image in 9-patch format (https://developer.android.com/studio/write/draw9patch).
 */
class DivNinePatchBackground {
    constructor(props) {
        this.type = 'nine_patch_image';
        this.image_url = props.image_url;
        this.insets = props.insets;
    }
}

// Generated code. Do not modify.
/**
 * Numeric value animator.
 */
class DivNumberAnimator {
    constructor(props) {
        this.type = 'number_animator';
        this.cancel_actions = props.cancel_actions;
        this.direction = props.direction;
        this.duration = props.duration;
        this.end_actions = props.end_actions;
        this.end_value = props.end_value;
        this.id = props.id;
        this.interpolator = props.interpolator;
        this.repeat_count = props.repeat_count;
        this.start_delay = props.start_delay;
        this.start_value = props.start_value;
        this.variable_name = props.variable_name;
    }
}

// Generated code. Do not modify.
/**
 * Page size equals to its content size.
 */
class DivPageContentSize {
    constructor(props) {
        this.type = 'wrap_content';
        this.alignment = props === null || props === void 0 ? void 0 : props.alignment;
    }
}

// Generated code. Do not modify.
/**
 * Page width (%).
 */
class DivPageSize {
    constructor(props) {
        this.type = 'percentage';
        this.page_width = props.page_width;
    }
}

// Generated code. Do not modify.
/**
 * Pages are stacked during animation overlapping one another.
 */
class DivPageTransformationOverlap {
    constructor(props) {
        this.type = 'overlap';
        this.interpolator = props === null || props === void 0 ? void 0 : props.interpolator;
        this.next_page_alpha = props === null || props === void 0 ? void 0 : props.next_page_alpha;
        this.next_page_scale = props === null || props === void 0 ? void 0 : props.next_page_scale;
        this.previous_page_alpha = props === null || props === void 0 ? void 0 : props.previous_page_alpha;
        this.previous_page_scale = props === null || props === void 0 ? void 0 : props.previous_page_scale;
        this.reversed_stacking_order = props === null || props === void 0 ? void 0 : props.reversed_stacking_order;
    }
}

// Generated code. Do not modify.
/**
 * Pages move without overlapping during pager scrolling.
 */
class DivPageTransformationSlide {
    constructor(props) {
        this.type = 'slide';
        this.interpolator = props === null || props === void 0 ? void 0 : props.interpolator;
        this.next_page_alpha = props === null || props === void 0 ? void 0 : props.next_page_alpha;
        this.next_page_scale = props === null || props === void 0 ? void 0 : props.next_page_scale;
        this.previous_page_alpha = props === null || props === void 0 ? void 0 : props.previous_page_alpha;
        this.previous_page_scale = props === null || props === void 0 ? void 0 : props.previous_page_scale;
    }
}

// Generated code. Do not modify.
/**
 * Pager. It contains a horizontal set of cards that can be scrolled page by page. It shows the
 * main page and the beginning of the next one.
 */
class DivPager {
    constructor(props) {
        this.type = 'pager';
        this.accessibility = props.accessibility;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.default_item = props.default_item;
        this.disappear_actions = props.disappear_actions;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.functions = props.functions;
        this.height = props.height;
        this.id = props.id;
        this.infinite_scroll = props.infinite_scroll;
        this.item_builder = props.item_builder;
        this.item_spacing = props.item_spacing;
        this.items = props.items;
        this.layout_mode = props.layout_mode;
        this.layout_provider = props.layout_provider;
        this.margins = props.margins;
        this.orientation = props.orientation;
        this.paddings = props.paddings;
        this.page_transformation = props.page_transformation;
        this.restrict_parent_scroll = props.restrict_parent_scroll;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.selected_actions = props.selected_actions;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * Element size (%).
 */
class DivPercentageSize {
    constructor(props) {
        this.type = 'percentage';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * Mask for entering phone numbers with dynamic regional format identification.
 */
class DivPhoneInputMask {
    constructor(props) {
        this.type = 'phone';
        this.raw_text_variable = props.raw_text_variable;
    }
}

// Generated code. Do not modify.
/**
 * Fixed coordinates of the rotation axis.
 */
class DivPivotFixed {
    constructor(props) {
        this.type = 'pivot-fixed';
        this.unit = props === null || props === void 0 ? void 0 : props.unit;
        this.value = props === null || props === void 0 ? void 0 : props.value;
    }
}

// Generated code. Do not modify.
/**
 * Location of the coordinate of the rotation axis as a percentage relative to the element size.
 */
class DivPivotPercentage {
    constructor(props) {
        this.type = 'pivot-percentage';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * Radial gradient.
 */
class DivRadialGradient {
    constructor(props) {
        this.type = 'radial_gradient';
        this.center_x = props.center_x;
        this.center_y = props.center_y;
        this.colors = props.colors;
        this.radius = props.radius;
    }
}

// Generated code. Do not modify.
/**
 * Fixed coordinates of the central point of the gradient.
 */
class DivRadialGradientFixedCenter {
    constructor(props) {
        this.type = 'fixed';
        this.unit = props.unit;
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * Location of the central point of the gradient relative to the element borders.
 */
class DivRadialGradientRelativeCenter {
    constructor(props) {
        this.type = 'relative';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * Relative radius of the gradient transition.
 */
class DivRadialGradientRelativeRadius {
    constructor(props) {
        this.type = 'relative';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * A rectangle with rounded corners.
 */
class DivRoundedRectangleShape {
    constructor(props) {
        this.type = 'rounded_rectangle';
        this.background_color = props === null || props === void 0 ? void 0 : props.background_color;
        this.corner_radius = props === null || props === void 0 ? void 0 : props.corner_radius;
        this.item_height = props === null || props === void 0 ? void 0 : props.item_height;
        this.item_width = props === null || props === void 0 ? void 0 : props.item_width;
        this.stroke = props === null || props === void 0 ? void 0 : props.stroke;
    }
}

// Generated code. Do not modify.
/**
 * Scale animation.
 */
class DivScaleTransition {
    constructor(props) {
        this.type = 'scale';
        this.duration = props === null || props === void 0 ? void 0 : props.duration;
        this.interpolator = props === null || props === void 0 ? void 0 : props.interpolator;
        this.pivot_x = props === null || props === void 0 ? void 0 : props.pivot_x;
        this.pivot_y = props === null || props === void 0 ? void 0 : props.pivot_y;
        this.scale = props === null || props === void 0 ? void 0 : props.scale;
        this.start_delay = props === null || props === void 0 ? void 0 : props.start_delay;
    }
}

// Generated code. Do not modify.
/**
 * List of options with only one to be selected.
 */
class DivSelect {
    constructor(props) {
        this.type = 'select';
        this.accessibility = props.accessibility;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.disappear_actions = props.disappear_actions;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.font_family = props.font_family;
        this.font_size = props.font_size;
        this.font_size_unit = props.font_size_unit;
        this.font_weight = props.font_weight;
        this.font_weight_value = props.font_weight_value;
        this.functions = props.functions;
        this.height = props.height;
        this.hint_color = props.hint_color;
        this.hint_text = props.hint_text;
        this.id = props.id;
        this.layout_provider = props.layout_provider;
        this.letter_spacing = props.letter_spacing;
        this.line_height = props.line_height;
        this.margins = props.margins;
        this.options = props.options;
        this.paddings = props.paddings;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.selected_actions = props.selected_actions;
        this.text_color = props.text_color;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.value_variable = props.value_variable;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * A separating line between elements.
 */
class DivSeparator {
    constructor(props) {
        this.type = 'separator';
        this.accessibility = props === null || props === void 0 ? void 0 : props.accessibility;
        this.action = props === null || props === void 0 ? void 0 : props.action;
        this.action_animation = props === null || props === void 0 ? void 0 : props.action_animation;
        this.actions = props === null || props === void 0 ? void 0 : props.actions;
        this.alignment_horizontal = props === null || props === void 0 ? void 0 : props.alignment_horizontal;
        this.alignment_vertical = props === null || props === void 0 ? void 0 : props.alignment_vertical;
        this.alpha = props === null || props === void 0 ? void 0 : props.alpha;
        this.animators = props === null || props === void 0 ? void 0 : props.animators;
        this.background = props === null || props === void 0 ? void 0 : props.background;
        this.border = props === null || props === void 0 ? void 0 : props.border;
        this.column_span = props === null || props === void 0 ? void 0 : props.column_span;
        this.delimiter_style = props === null || props === void 0 ? void 0 : props.delimiter_style;
        this.disappear_actions = props === null || props === void 0 ? void 0 : props.disappear_actions;
        this.doubletap_actions = props === null || props === void 0 ? void 0 : props.doubletap_actions;
        this.extensions = props === null || props === void 0 ? void 0 : props.extensions;
        this.focus = props === null || props === void 0 ? void 0 : props.focus;
        this.functions = props === null || props === void 0 ? void 0 : props.functions;
        this.height = props === null || props === void 0 ? void 0 : props.height;
        this.hover_end_actions = props === null || props === void 0 ? void 0 : props.hover_end_actions;
        this.hover_start_actions = props === null || props === void 0 ? void 0 : props.hover_start_actions;
        this.id = props === null || props === void 0 ? void 0 : props.id;
        this.layout_provider = props === null || props === void 0 ? void 0 : props.layout_provider;
        this.longtap_actions = props === null || props === void 0 ? void 0 : props.longtap_actions;
        this.margins = props === null || props === void 0 ? void 0 : props.margins;
        this.paddings = props === null || props === void 0 ? void 0 : props.paddings;
        this.press_end_actions = props === null || props === void 0 ? void 0 : props.press_end_actions;
        this.press_start_actions = props === null || props === void 0 ? void 0 : props.press_start_actions;
        this.reuse_id = props === null || props === void 0 ? void 0 : props.reuse_id;
        this.row_span = props === null || props === void 0 ? void 0 : props.row_span;
        this.selected_actions = props === null || props === void 0 ? void 0 : props.selected_actions;
        this.tooltips = props === null || props === void 0 ? void 0 : props.tooltips;
        this.transform = props === null || props === void 0 ? void 0 : props.transform;
        this.transition_change = props === null || props === void 0 ? void 0 : props.transition_change;
        this.transition_in = props === null || props === void 0 ? void 0 : props.transition_in;
        this.transition_out = props === null || props === void 0 ? void 0 : props.transition_out;
        this.transition_triggers = props === null || props === void 0 ? void 0 : props.transition_triggers;
        this.variable_triggers = props === null || props === void 0 ? void 0 : props.variable_triggers;
        this.variables = props === null || props === void 0 ? void 0 : props.variables;
        this.visibility = props === null || props === void 0 ? void 0 : props.visibility;
        this.visibility_action = props === null || props === void 0 ? void 0 : props.visibility_action;
        this.visibility_actions = props === null || props === void 0 ? void 0 : props.visibility_actions;
        this.width = props === null || props === void 0 ? void 0 : props.width;
    }
}

// Generated code. Do not modify.
/**
 * Drawable of a simple geometric shape.
 */
class DivShapeDrawable {
    constructor(props) {
        this.type = 'shape_drawable';
        this.color = props.color;
        this.shape = props.shape;
        this.stroke = props.stroke;
    }
}

// Generated code. Do not modify.
/**
 * Slide animation.
 */
class DivSlideTransition {
    constructor(props) {
        this.type = 'slide';
        this.distance = props === null || props === void 0 ? void 0 : props.distance;
        this.duration = props === null || props === void 0 ? void 0 : props.duration;
        this.edge = props === null || props === void 0 ? void 0 : props.edge;
        this.interpolator = props === null || props === void 0 ? void 0 : props.interpolator;
        this.start_delay = props === null || props === void 0 ? void 0 : props.start_delay;
    }
}

// Generated code. Do not modify.
/**
 * Slider for selecting a value in the range.
 */
class DivSlider {
    constructor(props) {
        this.type = 'slider';
        this.accessibility = props.accessibility;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.disappear_actions = props.disappear_actions;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.functions = props.functions;
        this.height = props.height;
        this.id = props.id;
        this.layout_provider = props.layout_provider;
        this.margins = props.margins;
        this.max_value = props.max_value;
        this.min_value = props.min_value;
        this.paddings = props.paddings;
        this.ranges = props.ranges;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.secondary_value_accessibility = props.secondary_value_accessibility;
        this.selected_actions = props.selected_actions;
        this.thumb_secondary_style = props.thumb_secondary_style;
        this.thumb_secondary_text_style = props.thumb_secondary_text_style;
        this.thumb_secondary_value_variable = props.thumb_secondary_value_variable;
        this.thumb_style = props.thumb_style;
        this.thumb_text_style = props.thumb_text_style;
        this.thumb_value_variable = props.thumb_value_variable;
        this.tick_mark_active_style = props.tick_mark_active_style;
        this.tick_mark_inactive_style = props.tick_mark_inactive_style;
        this.tooltips = props.tooltips;
        this.track_active_style = props.track_active_style;
        this.track_inactive_style = props.track_inactive_style;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * Solid background color.
 */
class DivSolidBackground {
    constructor(props) {
        this.type = 'solid';
        this.color = props.color;
    }
}

// Generated code. Do not modify.
/**
 * It contains sets of states for visual elements and switches between them.
 */
class DivState {
    constructor(props) {
        this.type = 'state';
        this.accessibility = props.accessibility;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.background = props.background;
        this.border = props.border;
        this.clip_to_bounds = props.clip_to_bounds;
        this.column_span = props.column_span;
        this.default_state_id = props.default_state_id;
        this.disappear_actions = props.disappear_actions;
        this.div_id = props.div_id;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.functions = props.functions;
        this.height = props.height;
        this.id = props.id;
        this.layout_provider = props.layout_provider;
        this.margins = props.margins;
        this.paddings = props.paddings;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.selected_actions = props.selected_actions;
        this.state_id_variable = props.state_id_variable;
        this.states = props.states;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_animation_selector = props.transition_animation_selector;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * Element size adjusts to a parent element.
 */
class DivStretchIndicatorItemPlacement {
    constructor(props) {
        this.type = 'stretch';
        this.item_spacing = props === null || props === void 0 ? void 0 : props.item_spacing;
        this.max_visible_items = props === null || props === void 0 ? void 0 : props.max_visible_items;
    }
}

// Generated code. Do not modify.
/**
 * Two-state toggle that allows the user to control a Boolean variable. The element's
 * look-and-feel varies by platform. The toggle has a fixed size in iOS.
 */
class DivSwitch {
    constructor(props) {
        this.type = 'switch';
        this.accessibility = props.accessibility;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.disappear_actions = props.disappear_actions;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.functions = props.functions;
        this.height = props.height;
        this.id = props.id;
        this.is_enabled = props.is_enabled;
        this.is_on_variable = props.is_on_variable;
        this.layout_provider = props.layout_provider;
        this.margins = props.margins;
        this.on_color = props.on_color;
        this.paddings = props.paddings;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.selected_actions = props.selected_actions;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * Tabs. Height of the first tab is determined by its contents, and height of the remaining
 * [depends on the platform](../../location#tabs).
 */
class DivTabs {
    constructor(props) {
        this.type = 'tabs';
        this.accessibility = props.accessibility;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.disappear_actions = props.disappear_actions;
        this.dynamic_height = props.dynamic_height;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.functions = props.functions;
        this.has_separator = props.has_separator;
        this.height = props.height;
        this.id = props.id;
        this.items = props.items;
        this.layout_provider = props.layout_provider;
        this.margins = props.margins;
        this.paddings = props.paddings;
        this.restrict_parent_scroll = props.restrict_parent_scroll;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.selected_actions = props.selected_actions;
        this.selected_tab = props.selected_tab;
        this.separator_color = props.separator_color;
        this.separator_paddings = props.separator_paddings;
        this.switch_tabs_by_content_swipe_enabled = props.switch_tabs_by_content_swipe_enabled;
        this.tab_title_delimiter = props.tab_title_delimiter;
        this.tab_title_style = props.tab_title_style;
        this.title_paddings = props.title_paddings;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * Text.
 */
class DivText {
    constructor(props) {
        this.type = 'text';
        this.accessibility = props.accessibility;
        this.action = props.action;
        this.action_animation = props.action_animation;
        this.actions = props.actions;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.auto_ellipsize = props.auto_ellipsize;
        this.background = props.background;
        this.border = props.border;
        this.column_span = props.column_span;
        this.disappear_actions = props.disappear_actions;
        this.doubletap_actions = props.doubletap_actions;
        this.ellipsis = props.ellipsis;
        this.extensions = props.extensions;
        this.focus = props.focus;
        this.focused_text_color = props.focused_text_color;
        this.font_family = props.font_family;
        this.font_feature_settings = props.font_feature_settings;
        this.font_size = props.font_size;
        this.font_size_unit = props.font_size_unit;
        this.font_weight = props.font_weight;
        this.font_weight_value = props.font_weight_value;
        this.functions = props.functions;
        this.height = props.height;
        this.hover_end_actions = props.hover_end_actions;
        this.hover_start_actions = props.hover_start_actions;
        this.id = props.id;
        this.images = props.images;
        this.layout_provider = props.layout_provider;
        this.letter_spacing = props.letter_spacing;
        this.line_height = props.line_height;
        this.longtap_actions = props.longtap_actions;
        this.margins = props.margins;
        this.max_lines = props.max_lines;
        this.min_hidden_lines = props.min_hidden_lines;
        this.paddings = props.paddings;
        this.press_end_actions = props.press_end_actions;
        this.press_start_actions = props.press_start_actions;
        this.ranges = props.ranges;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.selectable = props.selectable;
        this.selected_actions = props.selected_actions;
        this.strike = props.strike;
        this.text = props.text;
        this.text_alignment_horizontal = props.text_alignment_horizontal;
        this.text_alignment_vertical = props.text_alignment_vertical;
        this.text_color = props.text_color;
        this.text_gradient = props.text_gradient;
        this.text_shadow = props.text_shadow;
        this.tighten_width = props.tighten_width;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.truncate = props.truncate;
        this.underline = props.underline;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * Video.
 */
class DivVideo {
    constructor(props) {
        this.type = 'video';
        this.accessibility = props.accessibility;
        this.alignment_horizontal = props.alignment_horizontal;
        this.alignment_vertical = props.alignment_vertical;
        this.alpha = props.alpha;
        this.animators = props.animators;
        this.aspect = props.aspect;
        this.autostart = props.autostart;
        this.background = props.background;
        this.border = props.border;
        this.buffering_actions = props.buffering_actions;
        this.column_span = props.column_span;
        this.disappear_actions = props.disappear_actions;
        this.elapsed_time_variable = props.elapsed_time_variable;
        this.end_actions = props.end_actions;
        this.extensions = props.extensions;
        this.fatal_actions = props.fatal_actions;
        this.focus = props.focus;
        this.functions = props.functions;
        this.height = props.height;
        this.id = props.id;
        this.layout_provider = props.layout_provider;
        this.margins = props.margins;
        this.muted = props.muted;
        this.paddings = props.paddings;
        this.pause_actions = props.pause_actions;
        this.player_settings_payload = props.player_settings_payload;
        this.preload_required = props.preload_required;
        this.preview = props.preview;
        this.repeatable = props.repeatable;
        this.resume_actions = props.resume_actions;
        this.reuse_id = props.reuse_id;
        this.row_span = props.row_span;
        this.scale = props.scale;
        this.selected_actions = props.selected_actions;
        this.tooltips = props.tooltips;
        this.transform = props.transform;
        this.transition_change = props.transition_change;
        this.transition_in = props.transition_in;
        this.transition_out = props.transition_out;
        this.transition_triggers = props.transition_triggers;
        this.variable_triggers = props.variable_triggers;
        this.variables = props.variables;
        this.video_sources = props.video_sources;
        this.visibility = props.visibility;
        this.visibility_action = props.visibility_action;
        this.visibility_actions = props.visibility_actions;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
class DivVideoSource {
    constructor(props) {
        this.type = 'video_source';
        this.bitrate = props.bitrate;
        this.mime_type = props.mime_type;
        this.resolution = props.resolution;
        this.url = props.url;
    }
}
/**
 * Media file resolution.
 */
class DivVideoSourceResolution {
    constructor(props) {
        this.type = 'resolution';
        this.height = props.height;
        this.width = props.width;
    }
}

// Generated code. Do not modify.
/**
 * The size of an element adjusts to its contents.
 */
class DivWrapContentSize {
    constructor(props) {
        this.type = 'wrap_content';
        this.constrained = props === null || props === void 0 ? void 0 : props.constrained;
        this.max_size = props === null || props === void 0 ? void 0 : props.max_size;
        this.min_size = props === null || props === void 0 ? void 0 : props.min_size;
    }
}

// Generated code. Do not modify.
/**
 * Specifies the end of the container as the scrolling end position.
 */
class EndDestination {
    constructor(props) {
        this.type = 'end';
    }
}

// Generated code. Do not modify.
/**
 * Specifies the element with the given index as the scrolling end position.
 */
class IndexDestination {
    constructor(props) {
        this.type = 'index';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
class IntegerValue {
    constructor(props) {
        this.type = 'integer';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * An integer variable.
 */
class IntegerVariable {
    constructor(props) {
        this.type = 'integer';
        this.name = props.name;
        this.value = props.value;
    }
}

// Generated code. Do not modify.
class NumberValue {
    constructor(props) {
        this.type = 'number';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * A floating-point variable.
 */
class NumberVariable {
    constructor(props) {
        this.type = 'number';
        this.name = props.name;
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * Specifies the position measured in `dp` from the container start as the scrolling end
 * position. Only applies in `gallery`.
 */
class OffsetDestination {
    constructor(props) {
        this.type = 'offset';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * Specifies the start of the container as the scrolling end position.
 */
class StartDestination {
    constructor(props) {
        this.type = 'start';
    }
}

// Generated code. Do not modify.
class StringValue {
    constructor(props) {
        this.type = 'string';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * A string variable.
 */
class StringVariable {
    constructor(props) {
        this.type = 'string';
        this.name = props.name;
        this.value = props.value;
    }
}

// Generated code. Do not modify.
class UrlValue {
    constructor(props) {
        this.type = 'url';
        this.value = props.value;
    }
}

// Generated code. Do not modify.
/**
 * Variable — URL as a string.
 */
class UrlVariable {
    constructor(props) {
        this.type = 'url';
        this.name = props.name;
        this.value = props.value;
    }
}

/**
 * @deprecated use DivLinearGradient instead.
 */
class DivGradientBackground extends DivLinearGradient {
}

function fixed(value, unit = undefined) {
    if (unit === undefined) {
        return new DivFixedSize({ value: value });
    }
    return new DivFixedSize({ unit: unit, value: value });
}
function matchParent() {
    return new DivMatchParentSize();
}
function weighted(weight) {
    return new DivMatchParentSize({ weight: weight });
}
function wrapContent() {
    return new DivWrapContentSize();
}

const expr = Symbol();
class SafeDivExpression {
    constructor(expression) {
        this[expr] = expression;
    }
    toJSON() {
        return this[expr];
    }
    toString() {
        return this[expr];
    }
}

function expression(expression) {
    return new SafeDivExpression(expression);
}
const replacer = {
    '\\': '\\\\',
    '@{': '\\@{',
};
function escapeExpression(str) {
    return str.replace(/\\|(@{)/g, (full) => {
        return replacer[full];
    });
}

/**
 * DFS for a js object with callback on each leaf
 * @param tree js object
 * @param nodeAction callback for each leaf
 */
function treeWalkDFS(tree, nodeAction) {
    const stack = [[tree, []]];
    while (stack.length) {
        const [node, path] = stack.pop();
        nodeAction(node, path);
        if (typeof node === 'object' && node !== null) {
            const list = Object.entries(node).map(([key, obj]) => [obj, [...path, key]]);
            for (let i = list.length - 1; i >= 0; --i) {
                stack.push(list[i]);
            }
        }
    }
}
function copyTemplates(templates) {
    const copy = {};
    const placeHolder = (node) => {
        if (!node || ['string', 'number', 'boolean'].includes(typeof node) || node instanceof SafeDivExpression) {
            return node;
        }
        if (Array.isArray(node)) {
            return [];
        }
        return Object.create(Object.getPrototypeOf(node));
    };
    const clone = (node, path) => {
        let parentPointer = copy;
        path = [...path];
        while (path.length > 1) {
            parentPointer = parentPointer[path.shift()];
        }
        const cur = path[0];
        if (!cur) {
            return;
        }
        parentPointer[cur] = placeHolder(node);
    };
    treeWalkDFS(templates, clone);
    return copy;
}

/* eslint-disable @typescript-eslint/ban-types */
class TemplatePropertyReference {
    constructor(name) {
        this.templatePropertyName = name;
    }
}
function reference(name) {
    return new TemplatePropertyReference(name);
}
class TemplateBlock {
    constructor(type, props) {
        this.type = type;
        Object.assign(this, props);
    }
    getProps() {
        return Object.keys(this).reduce((acc, k) => {
            if (k !== 'type') {
                acc[k] = true;
            }
            return acc;
        }, {});
    }
}
function template(type, props) {
    return new TemplateBlock(type, props);
}
function escapeCard(obj) {
    if (typeof obj === 'string') {
        return escapeExpression(obj);
    }
    else if (obj === true || obj === false) {
        return obj ? 1 : 0;
    }
    else if (obj instanceof SafeDivExpression) {
        return obj.toJSON();
    }
    else if (obj && typeof obj === 'object') {
        if (Array.isArray(obj)) {
            return obj.map(escapeCard);
        }
        else {
            return Object.keys(obj).reduce((acc, item) => {
                acc[item] = escapeCard(obj[item]);
                return acc;
            }, {});
        }
    }
    return obj;
}
class Card {
    constructor(templates, card) {
        this.templates = templates;
        this.card = card;
    }
    toJSON() {
        return escapeCard(this);
    }
}
function divCard(templates, card) {
    return new Card(templates, card);
}

/* eslint-disable @typescript-eslint/ban-types */
/**
 * Creates typed functions for templates instance construction
 * @param templates templates map of the form { template_name: template }
 * @example
 * const templates = {
 *   template: new DivContainer({
 *     paddings: { left: 3 },
 *     items: [ new DivText({ text: reference('var') }) ]
 *   })
 * };
 * const helpers = templateHelper(templates);
 * helpers.template({var: '123'});
 */
function templateHelper(templates) {
    const helpers = {};
    for (const key of Object.keys(templates)) {
        helpers[key] = (props) => new TemplateBlock(key, props);
    }
    return helpers;
}

/**
 * Search for a used templates list
 * @param template
 */
function findPlainDeps(template) {
    const deps = new Set();
    treeWalkDFS(template, (node) => {
        if (node instanceof TemplateBlock) {
            deps.add(node.type);
        }
    });
    return deps;
}
const inProgress = 1;
const isFinished = 2;
/**
 * Templates walker. It resolves template dependencies on each step, and also can run a callback after that
 * @param templates
 * @param resolvedAction Callback for the template. It will be called after resolving dependencies
 * @param depsResolved Deps resolve cache, for example, for common templates
 */
function runResolveDeps(templates, resolvedAction, depsResolved = {}) {
    depsResolved = Object.assign({}, depsResolved);
    const progress = {};
    for (const k of Object.keys(depsResolved)) {
        progress[k] = isFinished;
    }
    const stack = Object.keys(templates);
    while (stack.length) {
        const name = stack.pop();
        if (progress[name] === isFinished) {
            continue;
        }
        const plainDeps = [...findPlainDeps(templates[name])];
        const unresolvedDeps = plainDeps.filter((dep) => !(progress[dep] === isFinished));
        const unsolvableDeps = unresolvedDeps.filter((depName) => !templates[depName]);
        if (unsolvableDeps.length !== 0) {
            throw new Error(`template '${name}' unsolvable dependencies: ${unsolvableDeps.map((b) => `'${b}'`).join(',')}`);
        }
        if (unresolvedDeps.length === 0) {
            const template = templates[name];
            depsResolved[name] = resolvedAction({ name, template, plainDeps, depsResolved });
            progress[name] = isFinished;
        }
        else if (progress[name] === inProgress) {
            throw new Error(`template ${name}: cyclic depdendencies`);
        }
        else {
            progress[name] = inProgress;
            stack.push(name, ...unresolvedDeps);
        }
    }
    return depsResolved;
}
/**
 * Search for a templates dependencies
 * @param templates
 * @param depsResolved Deps resolution cache
 * @returns Map with deps for each template
 */
function templatesDepsMap(templates, depsResolved = {}) {
    return runResolveDeps(templates, ({ name, plainDeps, depsResolved }) => {
        const deps = new Set([name]);
        for (const plainDep of plainDeps) {
            for (const dep of depsResolved[plainDep]) {
                deps.add(dep);
            }
        }
        return [...deps];
    }, depsResolved);
}

/**
 * templateHelper with memoization of templates names for later
 * selection of used templates. It memoizes only explicitly used
 * names without tracking dependencies.
 * @param options
 * @param options.customName adds templates names mapping.
 * Instead of original template name adjust template's type to custom value
 * returned by customName. Can be used for templates versioning.
 */
function thelperWithMemo(options) {
    const used = new Set();
    const proxyHandler = {
        get(_, templateName) {
            const templateRenamed = (options === null || options === void 0 ? void 0 : options.customName) ? options.customName(templateName) : templateName;
            used.add(templateName);
            return (props) => (Object.assign(Object.assign({}, props), { type: templateRenamed }));
        },
    };
    const thelper = new Proxy({}, proxyHandler);
    return { used, thelper };
}

/**
 * Templates rewriting for a nested templates
 * For example, in template
 * new DivContainer({
 *   items: [
 *       template('template2')
 *   ]
 * })
 * 'template2' would be replaces into `template2/${hash(templates.template2)}`
 * @param templates Templates to process
 * @param rename New name generator
 * @param resolvedNames Rename cache
 * @returns Processed templates + map with transformed names
 */
function rewriteNames(templates, rename, resolvedNames = {}) {
    templates = copyTemplates(templates);
    resolvedNames = runResolveDeps(templates, ({ name, template, depsResolved }) => {
        treeWalkDFS(template, (node) => {
            if (node instanceof TemplateBlock) {
                node.type = depsResolved[node.type];
            }
        });
        return rename(name, templates);
    }, resolvedNames);
    return { templates, resolvedNames };
}

function rewriteRefsTemplate(template) {
    const stack = [template];
    while (stack.length > 0) {
        const obj = stack.pop();
        if (obj && typeof obj === 'object') {
            for (const key in obj) {
                const objChild = obj[key];
                if (objChild && typeof objChild === 'object') {
                    if (objChild instanceof TemplatePropertyReference) {
                        obj[key] = undefined;
                        if (objChild.templatePropertyName !== key) {
                            obj['$' + key] = objChild.templatePropertyName;
                        }
                    }
                    else {
                        stack.push(objChild);
                    }
                }
            }
        }
    }
}
/**
 * Changes the reference-objects with the actual props
 *
 * Example:
 * prop: reference('template_prop')
 * to
 * $prop: 'template_prop'
 * @param templates
 * @returns Serialization-ready templates
 */
function rewriteRefs(templates) {
    const result = copyTemplates(templates);
    for (const template of Object.values(result)) {
        rewriteRefsTemplate(template);
    }
    return result;
}

function getTemplateHash(template) {
    return crypto.createHash('md5').update(JSON.stringify(template), 'utf8').digest('hex');
}
function getHashes(templates) {
    const hashes = {};
    for (const template of Object.keys(templates)) {
        hashes[template] = getTemplateHash(templates[template]);
    }
    return hashes;
}
function versionName(name, hash) {
    return `${name}/${hash}`;
}
function thelperVersion(templates) {
    const hashes = getHashes(templates);
    return (name) => versionName(name, hashes[name]);
}
/**
 * Replaces a TemplateBlock calls with the concat of the name with a hash (md5).
 * The names of the root templates are not changed! (templates object keys)
 * @param templates
 * @param resolvedNames Names cache
 * @returns A map with new names
 */
function rewriteTemplateVersions(templates, resolvedNames) {
    const hashes = {};
    const rename = (name, templates) => {
        var _a;
        const template = templates[name];
        if (!template) {
            throw new Error(`No template ${name}`);
        }
        const hash = (hashes[name] = (_a = hashes[name]) !== null && _a !== void 0 ? _a : getTemplateHash(template));
        return versionName(name, hash);
    };
    return rewriteNames(templates, rename, resolvedNames);
}

exports.ArrayValue = ArrayValue;
exports.ArrayVariable = ArrayVariable;
exports.BooleanValue = BooleanValue;
exports.BooleanVariable = BooleanVariable;
exports.ColorValue = ColorValue;
exports.ColorVariable = ColorVariable;
exports.ContentText = ContentText;
exports.ContentUrl = ContentUrl;
exports.DictValue = DictValue;
exports.DictVariable = DictVariable;
exports.DivActionAnimatorStart = DivActionAnimatorStart;
exports.DivActionAnimatorStop = DivActionAnimatorStop;
exports.DivActionArrayInsertValue = DivActionArrayInsertValue;
exports.DivActionArrayRemoveValue = DivActionArrayRemoveValue;
exports.DivActionArraySetValue = DivActionArraySetValue;
exports.DivActionClearFocus = DivActionClearFocus;
exports.DivActionCopyToClipboard = DivActionCopyToClipboard;
exports.DivActionDictSetValue = DivActionDictSetValue;
exports.DivActionDownload = DivActionDownload;
exports.DivActionFocusElement = DivActionFocusElement;
exports.DivActionHideTooltip = DivActionHideTooltip;
exports.DivActionScrollBy = DivActionScrollBy;
exports.DivActionScrollTo = DivActionScrollTo;
exports.DivActionSetState = DivActionSetState;
exports.DivActionSetStoredValue = DivActionSetStoredValue;
exports.DivActionSetVariable = DivActionSetVariable;
exports.DivActionShowTooltip = DivActionShowTooltip;
exports.DivActionSubmit = DivActionSubmit;
exports.DivActionTimer = DivActionTimer;
exports.DivActionVideo = DivActionVideo;
exports.DivAppearanceSetTransition = DivAppearanceSetTransition;
exports.DivBlur = DivBlur;
exports.DivChangeBoundsTransition = DivChangeBoundsTransition;
exports.DivChangeSetTransition = DivChangeSetTransition;
exports.DivCircleShape = DivCircleShape;
exports.DivCloudBackground = DivCloudBackground;
exports.DivColorAnimator = DivColorAnimator;
exports.DivContainer = DivContainer;
exports.DivCurrencyInputMask = DivCurrencyInputMask;
exports.DivCustom = DivCustom;
exports.DivDefaultIndicatorItemPlacement = DivDefaultIndicatorItemPlacement;
exports.DivFadeTransition = DivFadeTransition;
exports.DivFilterRtlMirror = DivFilterRtlMirror;
exports.DivFixedCount = DivFixedCount;
exports.DivFixedLengthInputMask = DivFixedLengthInputMask;
exports.DivFixedSize = DivFixedSize;
exports.DivGallery = DivGallery;
exports.DivGifImage = DivGifImage;
exports.DivGradientBackground = DivGradientBackground;
exports.DivGrid = DivGrid;
exports.DivImage = DivImage;
exports.DivImageBackground = DivImageBackground;
exports.DivIndicator = DivIndicator;
exports.DivInfinityCount = DivInfinityCount;
exports.DivInput = DivInput;
exports.DivInputFilterExpression = DivInputFilterExpression;
exports.DivInputFilterRegex = DivInputFilterRegex;
exports.DivInputValidatorExpression = DivInputValidatorExpression;
exports.DivInputValidatorRegex = DivInputValidatorRegex;
exports.DivLinearGradient = DivLinearGradient;
exports.DivMatchParentSize = DivMatchParentSize;
exports.DivNeighbourPageSize = DivNeighbourPageSize;
exports.DivNinePatchBackground = DivNinePatchBackground;
exports.DivNumberAnimator = DivNumberAnimator;
exports.DivPageContentSize = DivPageContentSize;
exports.DivPageSize = DivPageSize;
exports.DivPageTransformationOverlap = DivPageTransformationOverlap;
exports.DivPageTransformationSlide = DivPageTransformationSlide;
exports.DivPager = DivPager;
exports.DivPercentageSize = DivPercentageSize;
exports.DivPhoneInputMask = DivPhoneInputMask;
exports.DivPivotFixed = DivPivotFixed;
exports.DivPivotPercentage = DivPivotPercentage;
exports.DivRadialGradient = DivRadialGradient;
exports.DivRadialGradientFixedCenter = DivRadialGradientFixedCenter;
exports.DivRadialGradientRelativeCenter = DivRadialGradientRelativeCenter;
exports.DivRadialGradientRelativeRadius = DivRadialGradientRelativeRadius;
exports.DivRoundedRectangleShape = DivRoundedRectangleShape;
exports.DivScaleTransition = DivScaleTransition;
exports.DivSelect = DivSelect;
exports.DivSeparator = DivSeparator;
exports.DivShapeDrawable = DivShapeDrawable;
exports.DivSlideTransition = DivSlideTransition;
exports.DivSlider = DivSlider;
exports.DivSolidBackground = DivSolidBackground;
exports.DivState = DivState;
exports.DivStretchIndicatorItemPlacement = DivStretchIndicatorItemPlacement;
exports.DivSwitch = DivSwitch;
exports.DivTabs = DivTabs;
exports.DivText = DivText;
exports.DivVideo = DivVideo;
exports.DivVideoSource = DivVideoSource;
exports.DivVideoSourceResolution = DivVideoSourceResolution;
exports.DivWrapContentSize = DivWrapContentSize;
exports.EndDestination = EndDestination;
exports.IndexDestination = IndexDestination;
exports.IntegerValue = IntegerValue;
exports.IntegerVariable = IntegerVariable;
exports.NumberValue = NumberValue;
exports.NumberVariable = NumberVariable;
exports.OffsetDestination = OffsetDestination;
exports.SafeDivExpression = SafeDivExpression;
exports.StartDestination = StartDestination;
exports.StringValue = StringValue;
exports.StringVariable = StringVariable;
exports.TemplateBlock = TemplateBlock;
exports.TemplatePropertyReference = TemplatePropertyReference;
exports.UrlValue = UrlValue;
exports.UrlVariable = UrlVariable;
exports.copyTemplates = copyTemplates;
exports.divCard = divCard;
exports.escapeCard = escapeCard;
exports.escapeExpression = escapeExpression;
exports.expression = expression;
exports.fixed = fixed;
exports.getTemplateHash = getTemplateHash;
exports.matchParent = matchParent;
exports.reference = reference;
exports.rewriteNames = rewriteNames;
exports.rewriteRefs = rewriteRefs;
exports.rewriteTemplateVersions = rewriteTemplateVersions;
exports.runResolveDeps = runResolveDeps;
exports.template = template;
exports.templateHelper = templateHelper;
exports.templatesDepsMap = templatesDepsMap;
exports.thelperVersion = thelperVersion;
exports.thelperWithMemo = thelperWithMemo;
exports.treeWalkDFS = treeWalkDFS;
exports.weighted = weighted;
exports.wrapContent = wrapContent;
//# sourceMappingURL=jsonbuilder.js.map
