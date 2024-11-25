declare type Div = DivImage | DivGifImage | DivText | DivSeparator | DivContainer | DivGrid | DivGallery | DivPager | DivTabs | DivState | DivCustom | DivIndicator | DivSlider | DivSwitch | DivInput | DivSelect | DivVideo | TemplateBlock;

declare const expr: unique symbol;
interface DivExpression {
    [expr]: string;
}
declare class SafeDivExpression implements DivExpression {
    [expr]: string;
    constructor(expression: string);
    toJSON(): string;
    toString(): string;
}

/**
 * Root structure.
 */
interface IDivData {
    /**
     * Logging ID.
     */
    log_id: string;
    /**
     * A set of visual element states. Each element can have a few states with a different layout.
     * The states are displayed strictly one by one and switched using [action](div-action.md).
     */
    states: NonEmptyArray<IDivDataState>;
    /**
     * List of timers.
     */
    timers?: NonEmptyArray<IDivTimer>;
    /**
     * Events that trigger transition animations.
     *
     * @deprecated
     *
     * Platforms: android, ios
     */
    transition_animation_selector?: DivTransitionSelector | DivExpression;
    /**
     * Triggers for changing variables.
     */
    variable_triggers?: NonEmptyArray<IDivTrigger>;
    /**
     * Declaration of variables that can be used in an element.
     */
    variables?: NonEmptyArray<DivVariable>;
}
interface IDivDataState {
    /**
     * Contents.
     */
    div: Div;
    /**
     * State ID.
     */
    state_id: number;
}

interface ITemplates {
    [type: string]: Div;
}
declare type Type<U, V extends string = string> = U | TemplatePropertyReference<V, U>;
declare class TemplatePropertyReference<V extends string = string, U = {}> {
    templatePropertyName: V;
    private _value?;
    constructor(name: V);
}
declare function reference<V extends string = string, U = {}>(name: V): TemplatePropertyReference<V, U>;
declare class TemplateBlock<T extends string = any, U = object> {
    readonly type: T;
    readonly _props?: U;
    constructor(type: T, props?: U);
    getProps(): object;
}
declare function template<T extends string = any, U = object>(type: T, props?: U): TemplateBlock<T, U>;
declare function escapeCard(obj: unknown): unknown;
declare function divCard(templates: ITemplates, card: IDivData): {
    templates: ITemplates;
    card: IDivData;
};

declare type NonEmptyArray<T> = T[];
declare type Exact<TBase, TExt extends TBase> = TExt extends unknown ? Exactly<TBase, TExt> : never;
declare type Exactly<TBase, TExt extends TBase> = {
    [K in keyof TExt]: K extends keyof TBase ? TExt[K] : never;
};
declare type IntBoolean = 1 | 0 | true | false;
/**
 * DFS for a js object with callback on each leaf
 * @param tree js object
 * @param nodeAction callback for each leaf
 */
declare function treeWalkDFS(tree: unknown, nodeAction: (x: unknown, path: string[]) => void): void;
declare function copyTemplates<T extends ITemplates>(templates: T): T;

declare class ArrayValue<T extends ArrayValueProps = ArrayValueProps> {
    readonly _props?: Exact<ArrayValueProps, T>;
    readonly type = "array";
    value: Type<unknown[] | DivExpression>;
    constructor(props: Exact<ArrayValueProps, T>);
}
interface ArrayValueProps {
    value: Type<unknown[] | DivExpression>;
}

/**
 * An arbitrary array in JSON format.
 */
declare class ArrayVariable<T extends ArrayVariableProps = ArrayVariableProps> {
    readonly _props?: Exact<ArrayVariableProps, T>;
    readonly type = "array";
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<unknown[]>;
    constructor(props: Exact<ArrayVariableProps, T>);
}
interface ArrayVariableProps {
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<unknown[]>;
}

declare class BooleanValue<T extends BooleanValueProps = BooleanValueProps> {
    readonly _props?: Exact<BooleanValueProps, T>;
    readonly type = "boolean";
    value: Type<boolean | DivExpression>;
    constructor(props: Exact<BooleanValueProps, T>);
}
interface BooleanValueProps {
    value: Type<boolean | DivExpression>;
}

/**
 * A Boolean variable in binary format.
 */
declare class BooleanVariable<T extends BooleanVariableProps = BooleanVariableProps> {
    readonly _props?: Exact<BooleanVariableProps, T>;
    readonly type = "boolean";
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<IntBoolean>;
    constructor(props: Exact<BooleanVariableProps, T>);
}
interface BooleanVariableProps {
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<IntBoolean>;
}

declare class ColorValue<T extends ColorValueProps = ColorValueProps> {
    readonly _props?: Exact<ColorValueProps, T>;
    readonly type = "color";
    value: Type<string | DivExpression>;
    constructor(props: Exact<ColorValueProps, T>);
}
interface ColorValueProps {
    value: Type<string | DivExpression>;
}

/**
 * Variable — HEX color as a string.
 */
declare class ColorVariable<T extends ColorVariableProps = ColorVariableProps> {
    readonly _props?: Exact<ColorVariableProps, T>;
    readonly type = "color";
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<string>;
    constructor(props: Exact<ColorVariableProps, T>);
}
interface ColorVariableProps {
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<string>;
}

declare class ContentText<T extends ContentTextProps = ContentTextProps> {
    readonly _props?: Exact<ContentTextProps, T>;
    readonly type = "text";
    value: Type<string | DivExpression>;
    constructor(props: Exact<ContentTextProps, T>);
}
interface ContentTextProps {
    value: Type<string | DivExpression>;
}

declare class ContentUrl<T extends ContentUrlProps = ContentUrlProps> {
    readonly _props?: Exact<ContentUrlProps, T>;
    readonly type = "url";
    value: Type<string | DivExpression>;
    constructor(props: Exact<ContentUrlProps, T>);
}
interface ContentUrlProps {
    value: Type<string | DivExpression>;
}

declare class DictValue<T extends DictValueProps = DictValueProps> {
    readonly _props?: Exact<DictValueProps, T>;
    readonly type = "dict";
    value: Type<{}>;
    constructor(props: Exact<DictValueProps, T>);
}
interface DictValueProps {
    value: Type<{}>;
}

/**
 * An arbitrary object in JSON format.
 */
declare class DictVariable<T extends DictVariableProps = DictVariableProps> {
    readonly _props?: Exact<DictVariableProps, T>;
    readonly type = "dict";
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<{}>;
    constructor(props: Exact<DictVariableProps, T>);
}
interface DictVariableProps {
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<{}>;
}

/**
 * Sets margins without regard to screen properties.
 */
interface IDivAbsoluteEdgeInsets {
    /**
     * Bottom margin.
     */
    bottom?: Type<number | DivExpression>;
    /**
     * Left margin.
     */
    left?: Type<number | DivExpression>;
    /**
     * Right margin.
     */
    right?: Type<number | DivExpression>;
    /**
     * Top margin.
     */
    top?: Type<number | DivExpression>;
}

/**
 * Accessibility settings.
 */
interface IDivAccessibility {
    /**
     * Element description. It is used as the main description for screen reading applications.
     */
    description?: Type<string | DivExpression>;
    /**
     * A tooltip of what will happen during interaction. If Speak Hints is enabled in the VoiceOver
     * settings on iOS, a tooltip is played after `description`.
     *
     * Platforms: android, ios
     */
    hint?: Type<string | DivExpression>;
    /**
     * The way the accessibility tree is organized. In the `merge` mode the accessibility service
     * perceives an element together with a subtree as a whole. In the `exclude` mode an element
     * together with a subtree isn't available for accessibility.
     *
     * Platforms: android, ios
     */
    mode?: Type<DivAccessibilityMode | DivExpression>;
    /**
     * Mutes the screen reader sound after interacting with the element.
     *
     * Platforms: ios
     */
    mute_after_action?: Type<IntBoolean | DivExpression>;
    /**
     * Description of the current state of an element. For example, in the description you can
     * specify a selected date for a date selection element and an on/off state for a switch.
     *
     * Platforms: android, ios
     */
    state_description?: Type<string | DivExpression>;
    /**
     * Element role. Used to correctly identify an element by the accessibility service. For example,
     * the `list` element is used to group list elements into one element.
     *
     * Platforms: android, ios
     */
    type?: Type<DivAccessibilityType>;
}
declare type DivAccessibilityMode = 'default' | 'merge' | 'exclude';
declare type DivAccessibilityType = 'none' | 'button' | 'image' | 'text' | 'edit_text' | 'header' | 'tab_bar' | 'list' | 'select' | 'auto';

/**
 * It defines an action when clicking on an element.
 */
interface IDivAction {
    /**
     * Callbacks that are called after [data loading](../../interaction#loading-data).
     *
     * Platforms: android, ios, web
     */
    download_callbacks?: Type<IDivDownloadCallbacks>;
    /**
     * The parameter disables the action. Disabled actions stop listening to their associated event
     * (clicks, changes in visibility, and so on).
     */
    is_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Logging ID.
     */
    log_id: Type<string | DivExpression>;
    /**
     * URL for logging.
     */
    log_url?: Type<string | DivExpression>;
    /**
     * Context menu.
     */
    menu_items?: Type<NonEmptyArray<IDivActionMenuItem>>;
    /**
     * Additional parameters, passed to the host application.
     */
    payload?: Type<{}>;
    /**
     * Referer URL for logging.
     *
     * Platforms: android, ios
     */
    referer?: Type<string | DivExpression>;
    /**
     * The ID of the element within which the specified action will be performed.
     *
     * Platforms: android, ios, web
     */
    scope_id?: Type<string>;
    /**
     * The tab in which the URL must be opened.
     *
     * Platforms: web
     */
    target?: Type<DivActionTarget | DivExpression>;
    typed?: Type<DivActionTyped>;
    /**
     * URL. Possible values: `url` or `div-action://`. To learn more, see [Interaction with
     * elements](../../interaction).
     */
    url?: Type<string | DivExpression>;
}
declare type DivActionTarget = '_self' | '_blank';
interface IDivActionMenuItem {
    /**
     * One action when clicking on a menu item. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Multiple actions when clicking on a menu item.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Menu item title.
     */
    text: Type<string | DivExpression>;
}

/**
 * Launches the specified animator.
 */
declare class DivActionAnimatorStart<T extends DivActionAnimatorStartProps = DivActionAnimatorStartProps> {
    readonly _props?: Exact<DivActionAnimatorStartProps, T>;
    readonly type = "animator_start";
    /**
     * ID of the animator launched.
     */
    animator_id: Type<string>;
    /**
     * Animation direction. Determines whether the animation should be played forward, backward, or
     * alternate between forward and backward.
     */
    direction?: Type<DivAnimationDirection | DivExpression>;
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Overrides the value that will be set after the animation finishes.
     */
    end_value?: Type<DivTypedValue>;
    /**
     * Animated value interpolation function.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Number of times the animation will repeat before stopping. A value of `0` enables infinite
     * looping.
     */
    repeat_count?: Type<DivCount>;
    /**
     * Delay before the animation is launched in milliseconds.
     */
    start_delay?: Type<number | DivExpression>;
    /**
     * Overrides the value that will be set before the animation begins.
     */
    start_value?: Type<DivTypedValue>;
    constructor(props: Exact<DivActionAnimatorStartProps, T>);
}
interface DivActionAnimatorStartProps {
    /**
     * ID of the animator launched.
     */
    animator_id: Type<string>;
    /**
     * Animation direction. Determines whether the animation should be played forward, backward, or
     * alternate between forward and backward.
     */
    direction?: Type<DivAnimationDirection | DivExpression>;
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Overrides the value that will be set after the animation finishes.
     */
    end_value?: Type<DivTypedValue>;
    /**
     * Animated value interpolation function.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Number of times the animation will repeat before stopping. A value of `0` enables infinite
     * looping.
     */
    repeat_count?: Type<DivCount>;
    /**
     * Delay before the animation is launched in milliseconds.
     */
    start_delay?: Type<number | DivExpression>;
    /**
     * Overrides the value that will be set before the animation begins.
     */
    start_value?: Type<DivTypedValue>;
}

/**
 * Stops the specified animator.
 */
declare class DivActionAnimatorStop<T extends DivActionAnimatorStopProps = DivActionAnimatorStopProps> {
    readonly _props?: Exact<DivActionAnimatorStopProps, T>;
    readonly type = "animator_stop";
    /**
     * ID of the animator to be stopped.
     */
    animator_id: Type<string>;
    constructor(props: Exact<DivActionAnimatorStopProps, T>);
}
interface DivActionAnimatorStopProps {
    /**
     * ID of the animator to be stopped.
     */
    animator_id: Type<string>;
}

/**
 * Adds a value to the array
 */
declare class DivActionArrayInsertValue<T extends DivActionArrayInsertValueProps = DivActionArrayInsertValueProps> {
    readonly _props?: Exact<DivActionArrayInsertValueProps, T>;
    readonly type = "array_insert_value";
    index?: Type<number | DivExpression>;
    value: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;
    constructor(props: Exact<DivActionArrayInsertValueProps, T>);
}
interface DivActionArrayInsertValueProps {
    index?: Type<number | DivExpression>;
    value: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;
}

/**
 * Deletes a value from the array
 */
declare class DivActionArrayRemoveValue<T extends DivActionArrayRemoveValueProps = DivActionArrayRemoveValueProps> {
    readonly _props?: Exact<DivActionArrayRemoveValueProps, T>;
    readonly type = "array_remove_value";
    index: Type<number | DivExpression>;
    variable_name: Type<string | DivExpression>;
    constructor(props: Exact<DivActionArrayRemoveValueProps, T>);
}
interface DivActionArrayRemoveValueProps {
    index: Type<number | DivExpression>;
    variable_name: Type<string | DivExpression>;
}

/**
 * Sets the value in the array by index.
 */
declare class DivActionArraySetValue<T extends DivActionArraySetValueProps = DivActionArraySetValueProps> {
    readonly _props?: Exact<DivActionArraySetValueProps, T>;
    readonly type = "array_set_value";
    index: Type<number | DivExpression>;
    value: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;
    constructor(props: Exact<DivActionArraySetValueProps, T>);
}
interface DivActionArraySetValueProps {
    index: Type<number | DivExpression>;
    value: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;
}

/**
 * Removes focus from an element.
 */
declare class DivActionClearFocus<T extends DivActionClearFocusProps = DivActionClearFocusProps> {
    readonly _props?: Exact<DivActionClearFocusProps, T>;
    readonly type = "clear_focus";
    constructor(props?: Exact<DivActionClearFocusProps, T>);
}
interface DivActionClearFocusProps {
}

/**
 * Copies data to the clipboard.
 */
declare class DivActionCopyToClipboard<T extends DivActionCopyToClipboardProps = DivActionCopyToClipboardProps> {
    readonly _props?: Exact<DivActionCopyToClipboardProps, T>;
    readonly type = "copy_to_clipboard";
    content: Type<DivActionCopyToClipboardContent>;
    constructor(props: Exact<DivActionCopyToClipboardProps, T>);
}
interface DivActionCopyToClipboardProps {
    content: Type<DivActionCopyToClipboardContent>;
}

declare type DivActionCopyToClipboardContent = ContentText | ContentUrl;

/**
 * Sets the value in the dictionary by the specified key. Deletes the key if the value is not
 * set.
 */
declare class DivActionDictSetValue<T extends DivActionDictSetValueProps = DivActionDictSetValueProps> {
    readonly _props?: Exact<DivActionDictSetValueProps, T>;
    readonly type = "dict_set_value";
    key: Type<string | DivExpression>;
    value?: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;
    constructor(props: Exact<DivActionDictSetValueProps, T>);
}
interface DivActionDictSetValueProps {
    key: Type<string | DivExpression>;
    value?: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;
}

/**
 * Loads additional data in `div-patch` format and updates the current element.
 */
declare class DivActionDownload<T extends DivActionDownloadProps = DivActionDownloadProps> {
    readonly _props?: Exact<DivActionDownloadProps, T>;
    readonly type = "download";
    /**
     * Actions in case of unsuccessful loading if the host reported it or the waiting time expired.
     */
    on_fail_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions in case of successful loading.
     */
    on_success_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Link for receiving changes.
     */
    url: Type<string | DivExpression>;
    constructor(props: Exact<DivActionDownloadProps, T>);
}
interface DivActionDownloadProps {
    /**
     * Actions in case of unsuccessful loading if the host reported it or the waiting time expired.
     */
    on_fail_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions in case of successful loading.
     */
    on_success_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Link for receiving changes.
     */
    url: Type<string | DivExpression>;
}

/**
 * Requests focus for an element. May require a user action on the web.
 */
declare class DivActionFocusElement<T extends DivActionFocusElementProps = DivActionFocusElementProps> {
    readonly _props?: Exact<DivActionFocusElementProps, T>;
    readonly type = "focus_element";
    element_id: Type<string | DivExpression>;
    constructor(props: Exact<DivActionFocusElementProps, T>);
}
interface DivActionFocusElementProps {
    element_id: Type<string | DivExpression>;
}

/**
 * Hides the tooltip.
 */
declare class DivActionHideTooltip<T extends DivActionHideTooltipProps = DivActionHideTooltipProps> {
    readonly _props?: Exact<DivActionHideTooltipProps, T>;
    readonly type = "hide_tooltip";
    /**
     * Tooltip ID.
     */
    id: Type<string | DivExpression>;
    constructor(props: Exact<DivActionHideTooltipProps, T>);
}
interface DivActionHideTooltipProps {
    /**
     * Tooltip ID.
     */
    id: Type<string | DivExpression>;
}

/**
 * Scrolls the container by `item_count` or `offset` starting from the current position. If both
 * values are specified, the action will be combined. For scrolling back, use negative values.
 */
declare class DivActionScrollBy<T extends DivActionScrollByProps = DivActionScrollByProps> {
    readonly _props?: Exact<DivActionScrollByProps, T>;
    readonly type = "scroll_by";
    /**
     * Enables scrolling animation.
     */
    animated?: Type<boolean | DivExpression>;
    /**
     * ID of the element where the action should be performed.
     */
    id: Type<string | DivExpression>;
    /**
     * Number of container elements to scroll through. For scrolling back, use negative values.
     */
    item_count?: Type<number | DivExpression>;
    /**
     * Scrolling distance measured in `dp` from the current position. For scrolling back, use
     * negative values. Only applies in `gallery`.
     */
    offset?: Type<number | DivExpression>;
    /**
     * Defines navigation behavior at boundary elements:`clamp`: Stop navigation at the boundary
     * element (default)`ring`: Navigate to the start or end, depending on the current element.
     */
    overflow?: Type<DivActionScrollByOverflow | DivExpression>;
    constructor(props: Exact<DivActionScrollByProps, T>);
}
interface DivActionScrollByProps {
    /**
     * Enables scrolling animation.
     */
    animated?: Type<boolean | DivExpression>;
    /**
     * ID of the element where the action should be performed.
     */
    id: Type<string | DivExpression>;
    /**
     * Number of container elements to scroll through. For scrolling back, use negative values.
     */
    item_count?: Type<number | DivExpression>;
    /**
     * Scrolling distance measured in `dp` from the current position. For scrolling back, use
     * negative values. Only applies in `gallery`.
     */
    offset?: Type<number | DivExpression>;
    /**
     * Defines navigation behavior at boundary elements:`clamp`: Stop navigation at the boundary
     * element (default)`ring`: Navigate to the start or end, depending on the current element.
     */
    overflow?: Type<DivActionScrollByOverflow | DivExpression>;
}
declare type DivActionScrollByOverflow = 'clamp' | 'ring';

declare type DivActionScrollDestination = OffsetDestination | IndexDestination | StartDestination | EndDestination;

/**
 * Scrolls to a position or switches to the container element specified by the `destination`
 * parameter.
 */
declare class DivActionScrollTo<T extends DivActionScrollToProps = DivActionScrollToProps> {
    readonly _props?: Exact<DivActionScrollToProps, T>;
    readonly type = "scroll_to";
    /**
     * Enables scrolling animation.
     */
    animated?: Type<boolean | DivExpression>;
    /**
     * Defines the scrolling end position:`index`: Scroll to the element with the index provided in
     * `value``offset`: Scroll to the position specified in `value` and measured in `dp` from the
     * start of the container. Applies only in `gallery`;`start`: Scroll to the container
     * start;`end`: Scroll to the container end.
     */
    destination: Type<DivActionScrollDestination>;
    /**
     * ID of the element where the action should be performed.
     */
    id: Type<string | DivExpression>;
    constructor(props: Exact<DivActionScrollToProps, T>);
}
interface DivActionScrollToProps {
    /**
     * Enables scrolling animation.
     */
    animated?: Type<boolean | DivExpression>;
    /**
     * Defines the scrolling end position:`index`: Scroll to the element with the index provided in
     * `value``offset`: Scroll to the position specified in `value` and measured in `dp` from the
     * start of the container. Applies only in `gallery`;`start`: Scroll to the container
     * start;`end`: Scroll to the container end.
     */
    destination: Type<DivActionScrollDestination>;
    /**
     * ID of the element where the action should be performed.
     */
    id: Type<string | DivExpression>;
}

/**
 * Applies a new appearance to the content in `div-state'.
 */
declare class DivActionSetState<T extends DivActionSetStateProps = DivActionSetStateProps> {
    readonly _props?: Exact<DivActionSetStateProps, T>;
    readonly type = "set_state";
    /**
     * The path of the state inside `state` that needs to be activated. Set in the format
     * `div_data_state_id/id/state_id'. Can be hierarchical:
     * `div_data_state_id/id_1/state_id_1/../id_n/state_id_n`. Consists of:`div_data_state_id` — the
     * numeric value of the `state_id` of the `state` object in `data`'id` — the `id` value of the
     * `state` object`state_id` — the `state_id` value of the `state` object in `state`
     */
    state_id: Type<string | DivExpression>;
    /**
     * Indicates a state change:`true` — the change is temporary and will switch to the original one
     * (default value) when the element is recreated`false` — the change is permanent
     */
    temporary?: Type<boolean | DivExpression>;
    constructor(props: Exact<DivActionSetStateProps, T>);
}
interface DivActionSetStateProps {
    /**
     * The path of the state inside `state` that needs to be activated. Set in the format
     * `div_data_state_id/id/state_id'. Can be hierarchical:
     * `div_data_state_id/id_1/state_id_1/../id_n/state_id_n`. Consists of:`div_data_state_id` — the
     * numeric value of the `state_id` of the `state` object in `data`'id` — the `id` value of the
     * `state` object`state_id` — the `state_id` value of the `state` object in `state`
     */
    state_id: Type<string | DivExpression>;
    /**
     * Indicates a state change:`true` — the change is temporary and will switch to the original one
     * (default value) when the element is recreated`false` — the change is permanent
     */
    temporary?: Type<boolean | DivExpression>;
}

/**
 * Temporarily saves the variable in storage.
 */
declare class DivActionSetStoredValue<T extends DivActionSetStoredValueProps = DivActionSetStoredValueProps> {
    readonly _props?: Exact<DivActionSetStoredValueProps, T>;
    readonly type = "set_stored_value";
    /**
     * Duration of storage in seconds.
     */
    lifetime: Type<number | DivExpression>;
    /**
     * Name of the saved variable.
     */
    name: Type<string | DivExpression>;
    /**
     * Saved value.
     */
    value: Type<DivTypedValue>;
    constructor(props: Exact<DivActionSetStoredValueProps, T>);
}
interface DivActionSetStoredValueProps {
    /**
     * Duration of storage in seconds.
     */
    lifetime: Type<number | DivExpression>;
    /**
     * Name of the saved variable.
     */
    name: Type<string | DivExpression>;
    /**
     * Saved value.
     */
    value: Type<DivTypedValue>;
}

/**
 * Assigns a value to the variable
 */
declare class DivActionSetVariable<T extends DivActionSetVariableProps = DivActionSetVariableProps> {
    readonly _props?: Exact<DivActionSetVariableProps, T>;
    readonly type = "set_variable";
    value: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;
    constructor(props: Exact<DivActionSetVariableProps, T>);
}
interface DivActionSetVariableProps {
    value: Type<DivTypedValue>;
    variable_name: Type<string | DivExpression>;
}

/**
 * Shows the tooltip.
 */
declare class DivActionShowTooltip<T extends DivActionShowTooltipProps = DivActionShowTooltipProps> {
    readonly _props?: Exact<DivActionShowTooltipProps, T>;
    readonly type = "show_tooltip";
    /**
     * Tooltip ID.
     */
    id: Type<string | DivExpression>;
    /**
     * Sets whether the tooltip can be shown again after it’s closed.
     */
    multiple?: Type<boolean | DivExpression>;
    constructor(props: Exact<DivActionShowTooltipProps, T>);
}
interface DivActionShowTooltipProps {
    /**
     * Tooltip ID.
     */
    id: Type<string | DivExpression>;
    /**
     * Sets whether the tooltip can be shown again after it’s closed.
     */
    multiple?: Type<boolean | DivExpression>;
}

/**
 * Sends variables from the container by link. Data sending configuration can be defined by the
 * host app. By default, variables are sent as JSON in the request body using the POST method.
 */
declare class DivActionSubmit<T extends DivActionSubmitProps = DivActionSubmitProps> {
    readonly _props?: Exact<DivActionSubmitProps, T>;
    readonly type = "submit";
    /**
     * ID of the container with the variables to be sent.
     */
    container_id: Type<string | DivExpression>;
    /**
     * Actions when sending data is unsuccessful.
     */
    on_fail_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions when sending data is successful.
     */
    on_success_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * HTTP request parameters for configuring the sending of data.
     */
    request: Type<IDivActionSubmitRequest>;
    constructor(props: Exact<DivActionSubmitProps, T>);
}
interface DivActionSubmitProps {
    /**
     * ID of the container with the variables to be sent.
     */
    container_id: Type<string | DivExpression>;
    /**
     * Actions when sending data is unsuccessful.
     */
    on_fail_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions when sending data is successful.
     */
    on_success_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * HTTP request parameters for configuring the sending of data.
     */
    request: Type<IDivActionSubmitRequest>;
}
/**
 * HTTP request parameters for configuring the sending of data.
 */
interface IDivActionSubmitRequest {
    /**
     * HTTP request headers.
     */
    headers?: Type<NonEmptyArray<IRequestHeader>>;
    /**
     * HTTP request method.
     */
    method?: Type<RequestMethod | DivExpression>;
    /**
     * Link for sending data from the container.
     */
    url: Type<string | DivExpression>;
}
declare type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options';
interface IRequestHeader {
    name: Type<string | DivExpression>;
    value: Type<string | DivExpression>;
}

/**
 * Controls the timer.
 */
declare class DivActionTimer<T extends DivActionTimerProps = DivActionTimerProps> {
    readonly _props?: Exact<DivActionTimerProps, T>;
    readonly type = "timer";
    /**
     * Timer actions:`start` — starts the timer from a stopped state`stop`— stops the timer and
     * performs the `onEnd` action`pause` — pauses the timer, saves the current time`resume` —
     * restarts the timer after a pause`cancel` — interrupts the timer, resets the time`reset` —
     * cancels the timer, then starts it again
     */
    action: Type<DivActionTimerAction | DivExpression>;
    /**
     * Timer ID.
     */
    id: Type<string | DivExpression>;
    constructor(props: Exact<DivActionTimerProps, T>);
}
interface DivActionTimerProps {
    /**
     * Timer actions:`start` — starts the timer from a stopped state`stop`— stops the timer and
     * performs the `onEnd` action`pause` — pauses the timer, saves the current time`resume` —
     * restarts the timer after a pause`cancel` — interrupts the timer, resets the time`reset` —
     * cancels the timer, then starts it again
     */
    action: Type<DivActionTimerAction | DivExpression>;
    /**
     * Timer ID.
     */
    id: Type<string | DivExpression>;
}
declare type DivActionTimerAction = 'start' | 'stop' | 'pause' | 'resume' | 'cancel' | 'reset';

declare type DivActionTyped = DivActionAnimatorStart | DivActionAnimatorStop | DivActionArrayInsertValue | DivActionArrayRemoveValue | DivActionArraySetValue | DivActionClearFocus | DivActionCopyToClipboard | DivActionDictSetValue | DivActionDownload | DivActionFocusElement | DivActionHideTooltip | DivActionScrollBy | DivActionScrollTo | DivActionSetState | DivActionSetStoredValue | DivActionSetVariable | DivActionShowTooltip | DivActionSubmit | DivActionTimer | DivActionVideo;

/**
 * Manages video playback.
 */
declare class DivActionVideo<T extends DivActionVideoProps = DivActionVideoProps> {
    readonly _props?: Exact<DivActionVideoProps, T>;
    readonly type = "video";
    /**
     * Defines the action for the video: `start` — starts playing the video if the video is ready to
     * be played, or schedules playback`pause' — stops the video playback
     */
    action: Type<DivActionVideoAction | DivExpression>;
    /**
     * Video ID.
     */
    id: Type<string | DivExpression>;
    constructor(props: Exact<DivActionVideoProps, T>);
}
interface DivActionVideoProps {
    /**
     * Defines the action for the video: `start` — starts playing the video if the video is ready to
     * be played, or schedules playback`pause' — stops the video playback
     */
    action: Type<DivActionVideoAction | DivExpression>;
    /**
     * Video ID.
     */
    id: Type<string | DivExpression>;
}
declare type DivActionVideoAction = 'start' | 'pause';

declare type DivAlignmentHorizontal = 'left' | 'center' | 'right' | 'start' | 'end';

declare type DivAlignmentVertical = 'top' | 'center' | 'bottom' | 'baseline';

/**
 * Element animation parameters.
 */
interface IDivAnimation {
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Final value of an animation.
     */
    end_value?: Type<number | DivExpression>;
    /**
     * Animation speed nature. When the value is set to `spring` — animation of damping fluctuations
     * cut to 0.7 with the `damping=1` parameter. Other options correspond to the Bezier
     * curve:`linear` — cubic-bezier(0, 0, 1, 1);`ease` — cubic-bezier(0.25, 0.1, 0.25, 1);`ease_in`
     * — cubic-bezier(0.42, 0, 1, 1);`ease_out` — cubic-bezier(0, 0, 0.58, 1);`ease_in_out` —
     * cubic-bezier(0.42, 0, 0.58, 1).
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Animation elements.
     */
    items?: Type<NonEmptyArray<IDivAnimation>>;
    /**
     * Animation type.
     */
    name: Type<DivAnimationName | DivExpression>;
    /**
     * Number of animation repetitions.
     */
    repeat?: Type<DivCount>;
    /**
     * Delay in milliseconds before animation starts.
     */
    start_delay?: Type<number | DivExpression>;
    /**
     * Starting value of an animation.
     */
    start_value?: Type<number | DivExpression>;
}
declare type DivAnimationName = 'fade' | 'translate' | 'scale' | 'native' | 'set' | 'no_animation';

declare type DivAnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate_reverse';

declare type DivAnimationInterpolator = 'linear' | 'ease' | 'ease_in' | 'ease_out' | 'ease_in_out' | 'spring';

declare type DivAnimator = DivColorAnimator | DivNumberAnimator;

interface IDivAnimatorBase {
    /**
     * Actions performed when the animation is canceled. For example, when a command with the
     * 'animator_stop' type is received.
     */
    cancel_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Animation direction. Determines whether the animation should be played forward, backward, or
     * alternate between forward and backward.
     */
    direction?: Type<DivAnimationDirection | DivExpression>;
    /**
     * Animation duration in milliseconds.
     */
    duration: Type<number | DivExpression>;
    /**
     * Actions when the animation is completed.
     */
    end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Animator ID.
     */
    id: Type<string>;
    /**
     * Animated value interpolation function.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Number of times the animation will repeat before stopping. A value of `0` enables infinite
     * looping.
     */
    repeat_count?: Type<DivCount>;
    /**
     * Delay before the animation is launched in milliseconds.
     */
    start_delay?: Type<number | DivExpression>;
    /**
     * Name of the variable being animated.
     */
    variable_name: Type<string>;
}

/**
 * A set of animations to be applied simultaneously.
 */
declare class DivAppearanceSetTransition<T extends DivAppearanceSetTransitionProps = DivAppearanceSetTransitionProps> {
    readonly _props?: Exact<DivAppearanceSetTransitionProps, T>;
    readonly type = "set";
    /**
     * An array of animations.
     */
    items: Type<NonEmptyArray<DivAppearanceTransition>>;
    constructor(props: Exact<DivAppearanceSetTransitionProps, T>);
}
interface DivAppearanceSetTransitionProps {
    /**
     * An array of animations.
     */
    items: Type<NonEmptyArray<DivAppearanceTransition>>;
}

declare type DivAppearanceTransition = DivAppearanceSetTransition | DivFadeTransition | DivScaleTransition | DivSlideTransition;

/**
 * Fixed aspect ratio. The element's height is calculated based on the width, ignoring the
 * `height` value.
 */
interface IDivAspect {
    /**
     * `height = width / ratio`.
     */
    ratio: Type<number | DivExpression>;
}

declare type DivBackground = DivLinearGradient | DivRadialGradient | DivImageBackground | DivSolidBackground | DivNinePatchBackground;

interface IDivBase {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}

declare type DivBlendMode = 'source_in' | 'source_atop' | 'darken' | 'lighten' | 'multiply' | 'screen';

/**
 * Gaussian image blur.
 */
declare class DivBlur<T extends DivBlurProps = DivBlurProps> {
    readonly _props?: Exact<DivBlurProps, T>;
    readonly type = "blur";
    /**
     * Blur radius. Defines how many pixels blend into each other. Specified in: `dp`.
     */
    radius: Type<number | DivExpression>;
    constructor(props: Exact<DivBlurProps, T>);
}
interface DivBlurProps {
    /**
     * Blur radius. Defines how many pixels blend into each other. Specified in: `dp`.
     */
    radius: Type<number | DivExpression>;
}

/**
 * Stroke around the element.
 */
interface IDivBorder {
    /**
     * One radius of element and stroke corner rounding. Has a lower priority than `corners_radius`.
     */
    corner_radius?: Type<number | DivExpression>;
    /**
     * Multiple radii of element and stroke corner rounding.
     */
    corners_radius?: Type<IDivCornersRadius>;
    /**
     * Adding shadow.
     */
    has_shadow?: Type<IntBoolean | DivExpression>;
    /**
     * Parameters of the shadow applied to the element stroke.
     */
    shadow?: Type<IDivShadow>;
    /**
     * Stroke style.
     */
    stroke?: Type<IDivStroke>;
}

/**
 * Element position and size change animation.
 */
declare class DivChangeBoundsTransition<T extends DivChangeBoundsTransitionProps = DivChangeBoundsTransitionProps> {
    readonly _props?: Exact<DivChangeBoundsTransitionProps, T>;
    readonly type = "change_bounds";
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Transition speed nature.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Delay in milliseconds before animation starts.
     */
    start_delay?: Type<number | DivExpression>;
    constructor(props?: Exact<DivChangeBoundsTransitionProps, T>);
}
interface DivChangeBoundsTransitionProps {
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Transition speed nature.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Delay in milliseconds before animation starts.
     */
    start_delay?: Type<number | DivExpression>;
}

/**
 * Animations.
 */
declare class DivChangeSetTransition<T extends DivChangeSetTransitionProps = DivChangeSetTransitionProps> {
    readonly _props?: Exact<DivChangeSetTransitionProps, T>;
    readonly type = "set";
    /**
     * List of animations.
     */
    items: Type<NonEmptyArray<DivChangeTransition>>;
    constructor(props: Exact<DivChangeSetTransitionProps, T>);
}
interface DivChangeSetTransitionProps {
    /**
     * List of animations.
     */
    items: Type<NonEmptyArray<DivChangeTransition>>;
}

declare type DivChangeTransition = DivChangeSetTransition | DivChangeBoundsTransition;

/**
 * Circle.
 */
declare class DivCircleShape<T extends DivCircleShapeProps = DivCircleShapeProps> {
    readonly _props?: Exact<DivCircleShapeProps, T>;
    readonly type = "circle";
    /**
     * Fill color.
     */
    background_color?: Type<string | DivExpression>;
    /**
     * Radius.
     */
    radius?: Type<DivFixedSize>;
    /**
     * Stroke style.
     */
    stroke?: Type<IDivStroke>;
    constructor(props?: Exact<DivCircleShapeProps, T>);
}
interface DivCircleShapeProps {
    /**
     * Fill color.
     */
    background_color?: Type<string | DivExpression>;
    /**
     * Radius.
     */
    radius?: Type<DivFixedSize>;
    /**
     * Stroke style.
     */
    stroke?: Type<IDivStroke>;
}

/**
 * Cloud-style text background. Rows have a rectangular background in the specified color with
 * rounded corners.
 */
declare class DivCloudBackground<T extends DivCloudBackgroundProps = DivCloudBackgroundProps> {
    readonly _props?: Exact<DivCloudBackgroundProps, T>;
    readonly type = "cloud";
    /**
     * Fill color.
     */
    color: Type<string | DivExpression>;
    /**
     * Corner rounding radius.
     */
    corner_radius: Type<number | DivExpression>;
    /**
     * Margins between the row border and background border.
     */
    paddings?: Type<IDivEdgeInsets>;
    constructor(props: Exact<DivCloudBackgroundProps, T>);
}
interface DivCloudBackgroundProps {
    /**
     * Fill color.
     */
    color: Type<string | DivExpression>;
    /**
     * Corner rounding radius.
     */
    corner_radius: Type<number | DivExpression>;
    /**
     * Margins between the row border and background border.
     */
    paddings?: Type<IDivEdgeInsets>;
}

interface IDivCollectionItemBuilder {
    /**
     * Data that will be used to create collection elements.
     */
    data: Type<unknown[] | DivExpression>;
    /**
     * Name for accessing the next `data` element in the prototype. Working with this element is the
     * same as with dictionaries.
     */
    data_element_name?: Type<string>;
    /**
     * Array of `div` elements from which the collection elements will be created.
     */
    prototypes: Type<NonEmptyArray<IDivCollectionItemBuilderPrototype>>;
}
interface IDivCollectionItemBuilderPrototype {
    /**
     * `Div` from which the collection elements will be created. In `Div`, you can use expressions
     * using data from `data`. To access the next `data` element, you need to use the same prefix as
     * in `data_element_prefix`.
     */
    div: Type<Div>;
    /**
     * `id` of the element to be created from the prototype. Unlike the `div-base.id` field, may
     * contain expressions. Has a higher priority than `div-base.id`.
     */
    id?: Type<string | DivExpression>;
    /**
     * A condition that is used to select the prototype for the next element in the collection. If
     * there is more than 1 true condition, the earlier prototype is selected. If none of the
     * conditions are met, the element from `data` is skipped.
     */
    selector?: Type<IntBoolean | DivExpression>;
}

/**
 * Color animator.
 */
declare class DivColorAnimator<T extends DivColorAnimatorProps = DivColorAnimatorProps> {
    readonly _props?: Exact<DivColorAnimatorProps, T>;
    readonly type = "color_animator";
    /**
     * Actions performed when the animation is canceled. For example, when a command with the
     * 'animator_stop' type is received.
     */
    cancel_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Animation direction. Determines whether the animation should be played forward, backward, or
     * alternate between forward and backward.
     */
    direction?: Type<DivAnimationDirection | DivExpression>;
    /**
     * Animation duration in milliseconds.
     */
    duration: Type<number | DivExpression>;
    /**
     * Actions when the animation is completed.
     */
    end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * The value the variable will have when the animation ends.
     */
    end_value: Type<string | DivExpression>;
    /**
     * Animator ID.
     */
    id: Type<string>;
    /**
     * Animated value interpolation function.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Number of times the animation will repeat before stopping. A value of `0` enables infinite
     * looping.
     */
    repeat_count?: Type<DivCount>;
    /**
     * Delay before the animation is launched in milliseconds.
     */
    start_delay?: Type<number | DivExpression>;
    /**
     * The value the variable will have when the animation starts. If the property isn't specified,
     * the current value of the variable will be used.
     */
    start_value?: Type<string | DivExpression>;
    /**
     * Name of the variable being animated.
     */
    variable_name: Type<string>;
    constructor(props: Exact<DivColorAnimatorProps, T>);
}
interface DivColorAnimatorProps {
    /**
     * Actions performed when the animation is canceled. For example, when a command with the
     * 'animator_stop' type is received.
     */
    cancel_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Animation direction. Determines whether the animation should be played forward, backward, or
     * alternate between forward and backward.
     */
    direction?: Type<DivAnimationDirection | DivExpression>;
    /**
     * Animation duration in milliseconds.
     */
    duration: Type<number | DivExpression>;
    /**
     * Actions when the animation is completed.
     */
    end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * The value the variable will have when the animation ends.
     */
    end_value: Type<string | DivExpression>;
    /**
     * Animator ID.
     */
    id: Type<string>;
    /**
     * Animated value interpolation function.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Number of times the animation will repeat before stopping. A value of `0` enables infinite
     * looping.
     */
    repeat_count?: Type<DivCount>;
    /**
     * Delay before the animation is launched in milliseconds.
     */
    start_delay?: Type<number | DivExpression>;
    /**
     * The value the variable will have when the animation starts. If the property isn't specified,
     * the current value of the variable will be used.
     */
    start_value?: Type<string | DivExpression>;
    /**
     * Name of the variable being animated.
     */
    variable_name: Type<string>;
}

/**
 * Container. It contains other elements and is responsible for their location. It is used to
 * arrange elements vertically, horizontally, and with an overlay in a certain order, simulating
 * the third dimension.
 */
declare class DivContainer<T extends DivContainerProps = DivContainerProps> {
    readonly _props?: Exact<DivContainerProps, T>;
    readonly type = "container";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Fixed aspect ratio of the container. The element's height is calculated based on the width,
     * ignoring the `height` parameter's value.
    On the web, support for the `aspect-ratio` CSS
     * property is required to use this parameter.
     */
    aspect?: Type<IDivAspect>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Enables the bounding of child elements by the parent's borders.
     *
     * Platforms: android, ios, web
     */
    clip_to_bounds?: Type<IntBoolean | DivExpression>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Horizontal element alignment. For child elements, it can be redefined using the
     * `alignment_horizontal` property.
     */
    content_alignment_horizontal?: Type<DivContentAlignmentHorizontal | DivExpression>;
    /**
     * Vertical element alignment. The `baseline` value aligns elements along their own specified
     * baseline (for text and other elements that have a baseline). Elements that don't have their
     * baseline value specified are aligned along the top edge. For child elements, it can be
     * redefined using the `alignment_vertical` property.
     */
    content_alignment_vertical?: Type<DivContentAlignmentVertical | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Actions performed when hovering over an element ends. Available on platforms with pointing
     * device support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when hovering over an element. Available on platforms with pointing device
     * support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Sets collection elements dynamically using `data` and `prototypes`.
     *
     * Platforms: android, ios, web
     */
    item_builder?: Type<IDivCollectionItemBuilder>;
    /**
     * Nested elements.
     */
    items?: Type<NonEmptyArray<Div>>;
    /**
     * Element placement method. The `wrap` value transfers elements to the next line if they don't
     * fit in the previous one. If the `wrap` value is set:A separate line is allocated for each
     * element along the main axis with the size value set to `match_parent`.Elements along the cross
     * axis with the size value `match_parent` are ignored.
     */
    layout_mode?: Type<DivContainerLayoutMode | DivExpression>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Separator between elements along the cross axis. Not used if the `layout_mode` parameter is
     * set to `no_wrap`. Only new browsers are supported on the web (the `gap` property must be
     * supported for flex blocks).
     *
     * Platforms: android, ios, web
     */
    line_separator?: Type<IDivContainerSeparator>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Location of elements. `overlap` value overlays elements on top of each other in the order of
     * enumeration. The lowest is the zero element of an array.
     */
    orientation?: Type<DivContainerOrientation | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Actions performed when an element is released.
     *
     * Platforms: not supported
     */
    press_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when an element is pressed.
     *
     * Platforms: not supported
     */
    press_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Separator between elements along the main axis. Not used if the `orientation` parameter is set
     * to `overlap`. Only new browsers are supported on the web (the `gap` property must be supported
     * for flex blocks).
     *
     * Platforms: android, ios, web
     */
    separator?: Type<IDivContainerSeparator>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props?: Exact<DivContainerProps, T>);
}
interface DivContainerPropsBase {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Fixed aspect ratio of the container. The element's height is calculated based on the width,
     * ignoring the `height` parameter's value.
    On the web, support for the `aspect-ratio` CSS
     * property is required to use this parameter.
     */
    aspect?: Type<IDivAspect>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Enables the bounding of child elements by the parent's borders.
     *
     * Platforms: android, ios, web
     */
    clip_to_bounds?: Type<IntBoolean | DivExpression>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Horizontal element alignment. For child elements, it can be redefined using the
     * `alignment_horizontal` property.
     */
    content_alignment_horizontal?: Type<DivContentAlignmentHorizontal | DivExpression>;
    /**
     * Vertical element alignment. The `baseline` value aligns elements along their own specified
     * baseline (for text and other elements that have a baseline). Elements that don't have their
     * baseline value specified are aligned along the top edge. For child elements, it can be
     * redefined using the `alignment_vertical` property.
     */
    content_alignment_vertical?: Type<DivContentAlignmentVertical | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Actions performed when hovering over an element ends. Available on platforms with pointing
     * device support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when hovering over an element. Available on platforms with pointing device
     * support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Sets collection elements dynamically using `data` and `prototypes`.
     *
     * Platforms: android, ios, web
     */
    item_builder?: Type<IDivCollectionItemBuilder>;
    /**
     * Nested elements.
     */
    items?: Type<NonEmptyArray<Div>>;
    /**
     * Element placement method. The `wrap` value transfers elements to the next line if they don't
     * fit in the previous one. If the `wrap` value is set:A separate line is allocated for each
     * element along the main axis with the size value set to `match_parent`.Elements along the cross
     * axis with the size value `match_parent` are ignored.
     */
    layout_mode?: Type<DivContainerLayoutMode | DivExpression>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Separator between elements along the cross axis. Not used if the `layout_mode` parameter is
     * set to `no_wrap`. Only new browsers are supported on the web (the `gap` property must be
     * supported for flex blocks).
     *
     * Platforms: android, ios, web
     */
    line_separator?: Type<IDivContainerSeparator>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Location of elements. `overlap` value overlays elements on top of each other in the order of
     * enumeration. The lowest is the zero element of an array.
     */
    orientation?: Type<DivContainerOrientation | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Actions performed when an element is released.
     *
     * Platforms: not supported
     */
    press_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when an element is pressed.
     *
     * Platforms: not supported
     */
    press_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Separator between elements along the main axis. Not used if the `orientation` parameter is set
     * to `overlap`. Only new browsers are supported on the web (the `gap` property must be supported
     * for flex blocks).
     *
     * Platforms: android, ios, web
     */
    separator?: Type<IDivContainerSeparator>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}
interface DivContainerProps0 extends DivContainerPropsBase {
    /**
     * Nested elements.
     */
    items: Type<NonEmptyArray<Div>>;
}
interface DivContainerProps1 extends DivContainerPropsBase {
    /**
     * Sets collection elements dynamically using `data` and `prototypes`.
     *
     * Platforms: android, ios, web
     */
    item_builder: Type<IDivCollectionItemBuilder>;
}
declare type DivContainerProps = DivContainerProps0 | DivContainerProps1;
declare type DivContainerLayoutMode = 'no_wrap' | 'wrap';
declare type DivContainerOrientation = 'vertical' | 'horizontal' | 'overlap';
interface IDivContainerSeparator {
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Enables displaying the separator after the last item.
     */
    show_at_end?: Type<IntBoolean | DivExpression>;
    /**
     * Enables displaying the separator before the first item.
     */
    show_at_start?: Type<IntBoolean | DivExpression>;
    /**
     * Enables displaying the separator between items.
     */
    show_between?: Type<IntBoolean | DivExpression>;
    /**
     * Separator style.
     */
    style: Type<DivDrawable>;
}

declare type DivContentAlignmentHorizontal = 'left' | 'center' | 'right' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly';

declare type DivContentAlignmentVertical = 'top' | 'center' | 'bottom' | 'baseline' | 'space-between' | 'space-around' | 'space-evenly';

/**
 * Sets corner rounding.
 */
interface IDivCornersRadius {
    /**
     * Rounding radius of a lower left corner. If not specified, then `corner_radius` is used.
     */
    'bottom-left'?: Type<number | DivExpression>;
    /**
     * Rounding radius of a lower right corner. If not specified, then `corner_radius` is used.
     */
    'bottom-right'?: Type<number | DivExpression>;
    /**
     * Rounding radius of an upper left corner. If not specified, then `corner_radius` is used.
     */
    'top-left'?: Type<number | DivExpression>;
    /**
     * Rounding radius of an upper right corner. If not specified, then `corner_radius` is used.
     */
    'top-right'?: Type<number | DivExpression>;
}

declare type DivCount = DivInfinityCount | DivFixedCount;

/**
 * Mask for entering currency in the specified regional format.
 */
declare class DivCurrencyInputMask<T extends DivCurrencyInputMaskProps = DivCurrencyInputMaskProps> {
    readonly _props?: Exact<DivCurrencyInputMaskProps, T>;
    readonly type = "currency";
    /**
     * Language tag that the currency format should match, as per [IETF BCP
     * 47](https://en.wikipedia.org/wiki/IETF_language_tag). If the language is not set, it is
     * defined automatically.
     */
    locale?: Type<string | DivExpression>;
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;
    constructor(props: Exact<DivCurrencyInputMaskProps, T>);
}
interface DivCurrencyInputMaskProps {
    /**
     * Language tag that the currency format should match, as per [IETF BCP
     * 47](https://en.wikipedia.org/wiki/IETF_language_tag). If the language is not set, it is
     * defined automatically.
     */
    locale?: Type<string | DivExpression>;
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;
}

/**
 * Custom element. It is delegated to a host application to create native elements depending on
 * the platform.
 */
declare class DivCustom<T extends DivCustomProps = DivCustomProps> {
    readonly _props?: Exact<DivCustomProps, T>;
    readonly type = "custom";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Element data for a host application.
     */
    custom_props?: Type<{}>;
    /**
     * Subtype of an element for a host application.
     */
    custom_type: Type<string>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Nested elements.
     */
    items?: Type<NonEmptyArray<Div>>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivCustomProps, T>);
}
interface DivCustomProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Element data for a host application.
     */
    custom_props?: Type<{}>;
    /**
     * Subtype of an element for a host application.
     */
    custom_type: Type<string>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Nested elements.
     */
    items?: Type<NonEmptyArray<Div>>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}

/**
 * Element size adjusts to a parent element.
 */
declare class DivDefaultIndicatorItemPlacement<T extends DivDefaultIndicatorItemPlacementProps = DivDefaultIndicatorItemPlacementProps> {
    readonly _props?: Exact<DivDefaultIndicatorItemPlacementProps, T>;
    readonly type = "default";
    /**
     * Spacing between indicator centers.
     */
    space_between_centers?: Type<DivFixedSize>;
    constructor(props?: Exact<DivDefaultIndicatorItemPlacementProps, T>);
}
interface DivDefaultIndicatorItemPlacementProps {
    /**
     * Spacing between indicator centers.
     */
    space_between_centers?: Type<DivFixedSize>;
}

/**
 * Element dimension value.
 */
interface IDivDimension {
    unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Value.
     */
    value: Type<number | DivExpression>;
}

/**
 * Actions performed when an element is no longer visible.
 */
interface IDivDisappearAction {
    /**
     * Time in milliseconds during which an element must be outside the visible area to trigger
     * `disappear-action`.
     */
    disappear_duration?: Type<number | DivExpression>;
    /**
     * Callbacks that are called after [data loading](../../interaction#loading-data).
     *
     * Platforms: android, ios, web
     */
    download_callbacks?: Type<IDivDownloadCallbacks>;
    /**
     * The parameter disables the action. Disabled actions stop listening to their associated event
     * (clicks, changes in visibility, and so on).
     */
    is_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Logging ID.
     */
    log_id: Type<string | DivExpression>;
    /**
     * Limit on the number of loggings. If `0`, the limit is removed.
     */
    log_limit?: Type<number | DivExpression>;
    /**
     * Additional parameters, passed to the host application.
     */
    payload?: Type<{}>;
    /**
     * Referer URL for logging.
     *
     * Platforms: android, ios
     */
    referer?: Type<string | DivExpression>;
    /**
     * The ID of the element within which the specified action will be performed.
     *
     * Platforms: android, ios, web
     */
    scope_id?: Type<string>;
    typed?: Type<DivActionTyped>;
    /**
     * URL. Possible values: `url` or `div-action://`. To learn more, see [Interaction with
     * elements](../../interaction).
     */
    url?: Type<string | DivExpression>;
    /**
     * Percentage of the visible part of an element that triggers `disappear-action`.
     */
    visibility_percentage?: Type<number | DivExpression>;
}

/**
 * Callbacks that are called after [data loading](../../interaction#loading-data).
 */
interface IDivDownloadCallbacks {
    /**
     * Actions in case of unsuccessful loading if the host reported it or the waiting time expired.
     */
    on_fail_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions in case of successful loading.
     */
    on_success_actions?: Type<NonEmptyArray<IDivAction>>;
}

declare type DivDrawable = DivShapeDrawable;

/**
 * It sets margins.
 */
interface IDivEdgeInsets {
    /**
     * Bottom margin.
     */
    bottom?: Type<number | DivExpression>;
    /**
     * End margin. Margin position depends on the interface orientation. Has higher priority than the
     * left and right margins.
     */
    end?: Type<number | DivExpression>;
    /**
     * Left margin.
     */
    left?: Type<number | DivExpression>;
    /**
     * Right margin.
     */
    right?: Type<number | DivExpression>;
    /**
     * Start margin. Margin position depends on the interface orientation. Has higher priority than
     * the left and right margins.
     */
    start?: Type<number | DivExpression>;
    /**
     * Top margin.
     */
    top?: Type<number | DivExpression>;
    /**
     * Platforms: android, ios
     */
    unit?: Type<DivSizeUnit | DivExpression>;
}

declare type DivEvaluableType = 'string' | 'integer' | 'number' | 'boolean' | 'datetime' | 'color' | 'url' | 'dict' | 'array';

/**
 * Extension that affects an element.
 */
interface IDivExtension {
    /**
     * Extension ID.
     */
    id: Type<string>;
    /**
     * Additional extension parameters.
     */
    params?: Type<{}>;
}

/**
 * Transparency animation.
 */
declare class DivFadeTransition<T extends DivFadeTransitionProps = DivFadeTransitionProps> {
    readonly _props?: Exact<DivFadeTransitionProps, T>;
    readonly type = "fade";
    /**
     * Value of the alpha channel which the element starts appearing from or at which it finishes
     * disappearing.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Transition speed nature.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Delay in milliseconds before animation starts.
     */
    start_delay?: Type<number | DivExpression>;
    constructor(props?: Exact<DivFadeTransitionProps, T>);
}
interface DivFadeTransitionProps {
    /**
     * Value of the alpha channel which the element starts appearing from or at which it finishes
     * disappearing.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Transition speed nature.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Delay in milliseconds before animation starts.
     */
    start_delay?: Type<number | DivExpression>;
}

declare type DivFilter = DivBlur | DivFilterRtlMirror;

/**
 * Mirrors an image if the system uses RTL (Right-to-Left) text direction.
 */
declare class DivFilterRtlMirror<T extends DivFilterRtlMirrorProps = DivFilterRtlMirrorProps> {
    readonly _props?: Exact<DivFilterRtlMirrorProps, T>;
    readonly type = "rtl_mirror";
    constructor(props?: Exact<DivFilterRtlMirrorProps, T>);
}
interface DivFilterRtlMirrorProps {
}

/**
 * Fixed number of repetitions.
 */
declare class DivFixedCount<T extends DivFixedCountProps = DivFixedCountProps> {
    readonly _props?: Exact<DivFixedCountProps, T>;
    readonly type = "fixed";
    /**
     * Number of repetitions.
     */
    value: Type<number | DivExpression>;
    constructor(props: Exact<DivFixedCountProps, T>);
}
interface DivFixedCountProps {
    /**
     * Number of repetitions.
     */
    value: Type<number | DivExpression>;
}

/**
 * Mask for entering text with a fixed number of characters.
 */
declare class DivFixedLengthInputMask<T extends DivFixedLengthInputMaskProps = DivFixedLengthInputMaskProps> {
    readonly _props?: Exact<DivFixedLengthInputMaskProps, T>;
    readonly type = "fixed_length";
    /**
     * If this option is enabled, the text field contains the mask before being filled in.
     */
    always_visible?: Type<IntBoolean | DivExpression>;
    /**
     * String that sets the text input template. For example, the `+7 (###) ###-##-## ` template for
     * a phone number.
     */
    pattern: Type<string | DivExpression>;
    /**
     * Template decoding is a description of the characters that will be replaced with user input.
     */
    pattern_elements: Type<NonEmptyArray<IDivFixedLengthInputMaskPatternElement>>;
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;
    constructor(props: Exact<DivFixedLengthInputMaskProps, T>);
}
interface DivFixedLengthInputMaskProps {
    /**
     * If this option is enabled, the text field contains the mask before being filled in.
     */
    always_visible?: Type<IntBoolean | DivExpression>;
    /**
     * String that sets the text input template. For example, the `+7 (###) ###-##-## ` template for
     * a phone number.
     */
    pattern: Type<string | DivExpression>;
    /**
     * Template decoding is a description of the characters that will be replaced with user input.
     */
    pattern_elements: Type<NonEmptyArray<IDivFixedLengthInputMaskPatternElement>>;
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;
}
/**
 * Template decoding is a description of the characters that will be replaced with user input.
 */
interface IDivFixedLengthInputMaskPatternElement {
    /**
     * A character in the template that will be replaced with a user-defined character.
     */
    key: Type<string | DivExpression>;
    /**
     * The character that's displayed in the input field where the user is expected to enter text.
     * This is used if mask display is enabled.
     */
    placeholder?: Type<string | DivExpression>;
    /**
     * Regular expression for validating character inputs. For example, when a mask is digit-only.
     */
    regex?: Type<string | DivExpression>;
}

/**
 * Fixed size of an element.
 */
declare class DivFixedSize<T extends DivFixedSizeProps = DivFixedSizeProps> {
    readonly _props?: Exact<DivFixedSizeProps, T>;
    readonly type = "fixed";
    /**
     * Unit of measurement. To learn more about units of size measurement, see [Layout inside the
     * card](../../layout).
     */
    unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Element size.
     */
    value: Type<number | DivExpression>;
    constructor(props: Exact<DivFixedSizeProps, T>);
}
interface DivFixedSizeProps {
    /**
     * Unit of measurement. To learn more about units of size measurement, see [Layout inside the
     * card](../../layout).
     */
    unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Element size.
     */
    value: Type<number | DivExpression>;
}

/**
 * Element behavior when focusing or losing focus.
 */
interface IDivFocus {
    /**
     * Background of an element when it is in focus. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Border of an element when it's in focus.
     */
    border?: Type<IDivBorder>;
    /**
     * IDs of elements that will be next to get focus.
     */
    next_focus_ids?: Type<IDivFocusNextFocusIds>;
    /**
     * Actions when an element loses focus.
     */
    on_blur?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions when an element gets focus.
     */
    on_focus?: Type<NonEmptyArray<IDivAction>>;
}
/**
 * IDs of elements that will be next to get focus.
 */
interface IDivFocusNextFocusIds {
    /**
     * Platforms: android
     */
    down?: Type<string | DivExpression>;
    /**
     * Platforms: android, ios
     */
    forward?: Type<string | DivExpression>;
    /**
     * Platforms: android
     */
    left?: Type<string | DivExpression>;
    /**
     * Platforms: android
     */
    right?: Type<string | DivExpression>;
    /**
     * Platforms: android
     */
    up?: Type<string | DivExpression>;
}

declare type DivFontWeight = 'light' | 'medium' | 'regular' | 'bold';

/**
 * User-defined function.
 */
interface IDivFunction {
    /**
     * Function argument.
     */
    arguments: Type<NonEmptyArray<IDivFunctionArgument>>;
    /**
     * Function body. Evaluated as an expression using the passed arguments. Doesn't capture external
     * variables.
     */
    body: Type<string>;
    /**
     * Function name.
     */
    name: Type<string>;
    /**
     * Return value type.
     */
    return_type: Type<DivEvaluableType>;
}

/**
 * Function argument.
 */
interface IDivFunctionArgument {
    /**
     * Function argument name.
     */
    name: Type<string>;
    /**
     * Function argument type.
     */
    type: Type<DivEvaluableType>;
}

/**
 * Gallery. It contains a horizontal or vertical set of cards that can be scrolled.
 */
declare class DivGallery<T extends DivGalleryProps = DivGalleryProps> {
    readonly _props?: Exact<DivGalleryProps, T>;
    readonly type = "gallery";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Number of columns for block layout.
     *
     * Platforms: android, ios, web
     */
    column_count?: Type<number | DivExpression>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Aligning elements in the direction perpendicular to the scroll direction. In horizontal
     * galleries:`start` — alignment to the top of the card;`center` — to the center;`end` — to the
     * bottom.</p><p>In vertical galleries:`start` — alignment to the left of the card;`center` — to
     * the center;`end` — to the right.
     */
    cross_content_alignment?: Type<DivGalleryCrossContentAlignment | DivExpression>;
    /**
     * Spacing between elements across the scroll axis. By default, the value set to `item_spacing`.
     *
     * Platforms: android, ios, web
     */
    cross_spacing?: Type<number | DivExpression>;
    /**
     * Ordinal number of the gallery element to be scrolled to by default. For
     * `scroll_mode`:`default` — the scroll position is set to the beginning of the element, without
     * taking into account `item_spacing`;`paging` — the scroll position is set to the center of the
     * element.
     *
     * Platforms: android, ios, web
     */
    default_item?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Sets collection elements dynamically using `data` and `prototypes`.
     *
     * Platforms: android, ios
     */
    item_builder?: Type<IDivCollectionItemBuilder>;
    /**
     * Spacing between elements.
     */
    item_spacing?: Type<number | DivExpression>;
    /**
     * Gallery elements. Scrolling to elements can be implemented
     * using:`div-action://set_current_item?id=&item=` — scrolling to the element with an ordinal
     * number `item` inside an element, with the specified
     * `id`;`div-action://set_next_item?id=[&overflow={clamp\|ring}]` — scrolling to the next element
     * inside an element, with the specified
     * `id`;`div-action://set_previous_item?id=[&overflow={clamp\|ring}]` — scrolling to the previous
     * element inside an element, with the specified `id`.</p><p>The optional `overflow` parameter is
     * used to set navigation when the first or last element is reached:`clamp` — transition will
     * stop at the border element;`ring` — go to the beginning or end, depending on the current
     * element.</p><p>By default, `clamp`.
     */
    items?: Type<NonEmptyArray<Div>>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Gallery orientation.
     */
    orientation?: Type<DivGalleryOrientation | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * If the parameter is enabled, the gallery won't transmit the scroll gesture to the parent
     * element.
     *
     * Platforms: android, web
     */
    restrict_parent_scroll?: Type<IntBoolean | DivExpression>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Scroll type: `default` — continuous, `paging` — page-by-page.
     *
     * Platforms: android, ios, web
     */
    scroll_mode?: Type<DivGalleryScrollMode | DivExpression>;
    /**
     * Scrollbar behavior. Hidden by default. When choosing a gallery size, keep in mind that the
     * scrollbar may have a different height and width depending on the platform and user settings.
     * `none` — the scrollbar is hidden.`auto` — the scrollbar is shown if there isn't enough space
     * and it needs to be displayed on the current platform.
     *
     * Platforms: web, android
     */
    scrollbar?: Type<DivGalleryScrollbar | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props?: Exact<DivGalleryProps, T>);
}
interface DivGalleryProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Number of columns for block layout.
     *
     * Platforms: android, ios, web
     */
    column_count?: Type<number | DivExpression>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Aligning elements in the direction perpendicular to the scroll direction. In horizontal
     * galleries:`start` — alignment to the top of the card;`center` — to the center;`end` — to the
     * bottom.</p><p>In vertical galleries:`start` — alignment to the left of the card;`center` — to
     * the center;`end` — to the right.
     */
    cross_content_alignment?: Type<DivGalleryCrossContentAlignment | DivExpression>;
    /**
     * Spacing between elements across the scroll axis. By default, the value set to `item_spacing`.
     *
     * Platforms: android, ios, web
     */
    cross_spacing?: Type<number | DivExpression>;
    /**
     * Ordinal number of the gallery element to be scrolled to by default. For
     * `scroll_mode`:`default` — the scroll position is set to the beginning of the element, without
     * taking into account `item_spacing`;`paging` — the scroll position is set to the center of the
     * element.
     *
     * Platforms: android, ios, web
     */
    default_item?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Sets collection elements dynamically using `data` and `prototypes`.
     *
     * Platforms: android, ios
     */
    item_builder?: Type<IDivCollectionItemBuilder>;
    /**
     * Spacing between elements.
     */
    item_spacing?: Type<number | DivExpression>;
    /**
     * Gallery elements. Scrolling to elements can be implemented
     * using:`div-action://set_current_item?id=&item=` — scrolling to the element with an ordinal
     * number `item` inside an element, with the specified
     * `id`;`div-action://set_next_item?id=[&overflow={clamp\|ring}]` — scrolling to the next element
     * inside an element, with the specified
     * `id`;`div-action://set_previous_item?id=[&overflow={clamp\|ring}]` — scrolling to the previous
     * element inside an element, with the specified `id`.</p><p>The optional `overflow` parameter is
     * used to set navigation when the first or last element is reached:`clamp` — transition will
     * stop at the border element;`ring` — go to the beginning or end, depending on the current
     * element.</p><p>By default, `clamp`.
     */
    items?: Type<NonEmptyArray<Div>>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Gallery orientation.
     */
    orientation?: Type<DivGalleryOrientation | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * If the parameter is enabled, the gallery won't transmit the scroll gesture to the parent
     * element.
     *
     * Platforms: android, web
     */
    restrict_parent_scroll?: Type<IntBoolean | DivExpression>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Scroll type: `default` — continuous, `paging` — page-by-page.
     *
     * Platforms: android, ios, web
     */
    scroll_mode?: Type<DivGalleryScrollMode | DivExpression>;
    /**
     * Scrollbar behavior. Hidden by default. When choosing a gallery size, keep in mind that the
     * scrollbar may have a different height and width depending on the platform and user settings.
     * `none` — the scrollbar is hidden.`auto` — the scrollbar is shown if there isn't enough space
     * and it needs to be displayed on the current platform.
     *
     * Platforms: web, android
     */
    scrollbar?: Type<DivGalleryScrollbar | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}
declare type DivGalleryCrossContentAlignment = 'start' | 'center' | 'end';
declare type DivGalleryOrientation = 'horizontal' | 'vertical';
declare type DivGalleryScrollMode = 'paging' | 'default';
declare type DivGalleryScrollbar = 'none' | 'auto';

/**
 * Animated GIF image.
 */
declare class DivGifImage<T extends DivGifImageProps = DivGifImageProps> {
    readonly _props?: Exact<DivGifImageProps, T>;
    readonly type = "gif";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Fixed aspect ratio. The element's height is calculated based on the width, ignoring the
     * `height` value.
     */
    aspect?: Type<IDivAspect>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Horizontal image alignment.
     */
    content_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical image alignment.
     */
    content_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Direct URL to a GIF image.
     */
    gif_url: Type<string | DivExpression>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Actions performed when hovering over an element ends. Available on platforms with pointing
     * device support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when hovering over an element. Available on platforms with pointing device
     * support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Placeholder background before the image is loaded.
     *
     * Platforms: android, ios, web
     */
    placeholder_color?: Type<string | DivExpression>;
    /**
     * Background image must be loaded before the display.
     *
     * Platforms: android, web
     */
    preload_required?: Type<IntBoolean | DivExpression>;
    /**
     * Actions performed when an element is released.
     *
     * Platforms: not supported
     */
    press_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when an element is pressed.
     *
     * Platforms: not supported
     */
    press_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Image preview encoded in `base64`. It will be shown instead of `placeholder_color` before the
     * image is loaded. Format `data url`: `data:[;base64],<data>`
     *
     * Platforms: android, ios, web
     */
    preview?: Type<string | DivExpression>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Image scaling:`fit` places the entire image into the element (free space is filled with
     * background);`fill` scales the image to the element size and cuts off the excess.
     */
    scale?: Type<DivImageScale | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivGifImageProps, T>);
}
interface DivGifImageProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Fixed aspect ratio. The element's height is calculated based on the width, ignoring the
     * `height` value.
     */
    aspect?: Type<IDivAspect>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Horizontal image alignment.
     */
    content_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical image alignment.
     */
    content_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Direct URL to a GIF image.
     */
    gif_url: Type<string | DivExpression>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Actions performed when hovering over an element ends. Available on platforms with pointing
     * device support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when hovering over an element. Available on platforms with pointing device
     * support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Placeholder background before the image is loaded.
     *
     * Platforms: android, ios, web
     */
    placeholder_color?: Type<string | DivExpression>;
    /**
     * Background image must be loaded before the display.
     *
     * Platforms: android, web
     */
    preload_required?: Type<IntBoolean | DivExpression>;
    /**
     * Actions performed when an element is released.
     *
     * Platforms: not supported
     */
    press_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when an element is pressed.
     *
     * Platforms: not supported
     */
    press_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Image preview encoded in `base64`. It will be shown instead of `placeholder_color` before the
     * image is loaded. Format `data url`: `data:[;base64],<data>`
     *
     * Platforms: android, ios, web
     */
    preview?: Type<string | DivExpression>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Image scaling:`fit` places the entire image into the element (free space is filled with
     * background);`fill` scales the image to the element size and cuts off the excess.
     */
    scale?: Type<DivImageScale | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}

/**
 * A grid with an option to merge cells vertically and horizontally.
 */
declare class DivGrid<T extends DivGridProps = DivGridProps> {
    readonly _props?: Exact<DivGridProps, T>;
    readonly type = "grid";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Number of columns.
     */
    column_count: Type<number | DivExpression>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Horizontal alignment of grid contents.
     */
    content_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of grid contents.
     */
    content_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Actions performed when hovering over an element ends. Available on platforms with pointing
     * device support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when hovering over an element. Available on platforms with pointing device
     * support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Contents.
     */
    items?: Type<NonEmptyArray<Div>>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Actions performed when an element is released.
     *
     * Platforms: not supported
     */
    press_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when an element is pressed.
     *
     * Platforms: not supported
     */
    press_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivGridProps, T>);
}
interface DivGridProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Number of columns.
     */
    column_count: Type<number | DivExpression>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Horizontal alignment of grid contents.
     */
    content_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of grid contents.
     */
    content_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Actions performed when hovering over an element ends. Available on platforms with pointing
     * device support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when hovering over an element. Available on platforms with pointing device
     * support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Contents.
     */
    items?: Type<NonEmptyArray<Div>>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Actions performed when an element is released.
     *
     * Platforms: not supported
     */
    press_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when an element is pressed.
     *
     * Platforms: not supported
     */
    press_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}

/**
 * Image.
 */
declare class DivImage<T extends DivImageProps = DivImageProps> {
    readonly _props?: Exact<DivImageProps, T>;
    readonly type = "image";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Transparency animation when loading an image.
     *
     * Platforms: android, ios, web
     */
    appearance_animation?: Type<DivFadeTransition>;
    /**
     * Fixed aspect ratio. The element's height is calculated based on the width, ignoring the
     * `height` value.
     */
    aspect?: Type<IDivAspect>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Horizontal image alignment.
     */
    content_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical image alignment.
     */
    content_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Image filters.
     */
    filters?: Type<NonEmptyArray<DivFilter>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * It sets the priority of displaying the preview — the preview is decoded in the main stream and
     * displayed as the first frame. Use the parameter carefully — it will worsen the preview display
     * time and can worsen the application launch time.
     *
     * Platforms: android, ios
     */
    high_priority_preview_show?: Type<IntBoolean | DivExpression>;
    /**
     * Actions performed when hovering over an element ends. Available on platforms with pointing
     * device support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when hovering over an element. Available on platforms with pointing device
     * support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Direct URL to an image.
     */
    image_url: Type<string | DivExpression>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Placeholder background before the image is loaded.
     *
     * Platforms: android, ios, web
     */
    placeholder_color?: Type<string | DivExpression>;
    /**
     * Background image must be loaded before the display.
     *
     * Platforms: android, web
     */
    preload_required?: Type<IntBoolean | DivExpression>;
    /**
     * Actions performed when an element is released.
     *
     * Platforms: not supported
     */
    press_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when an element is pressed.
     *
     * Platforms: not supported
     */
    press_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Image preview encoded in `base64`. It will be shown instead of `placeholder_color` before the
     * image is loaded. Format `data url`: `data:[;base64],<data>`
     *
     * Platforms: android, ios, web
     */
    preview?: Type<string | DivExpression>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Image scaling:`fit` places the entire image into the element (free space is filled with
     * background);`fill` scales the image to the element size and cuts off the excess.
     */
    scale?: Type<DivImageScale | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * New color of a contour image.
     */
    tint_color?: Type<string | DivExpression>;
    /**
     * Blend mode of the color specified in `tint_color`.
     */
    tint_mode?: Type<DivBlendMode | DivExpression>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivImageProps, T>);
}
interface DivImageProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Transparency animation when loading an image.
     *
     * Platforms: android, ios, web
     */
    appearance_animation?: Type<DivFadeTransition>;
    /**
     * Fixed aspect ratio. The element's height is calculated based on the width, ignoring the
     * `height` value.
     */
    aspect?: Type<IDivAspect>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Horizontal image alignment.
     */
    content_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical image alignment.
     */
    content_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Image filters.
     */
    filters?: Type<NonEmptyArray<DivFilter>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * It sets the priority of displaying the preview — the preview is decoded in the main stream and
     * displayed as the first frame. Use the parameter carefully — it will worsen the preview display
     * time and can worsen the application launch time.
     *
     * Platforms: android, ios
     */
    high_priority_preview_show?: Type<IntBoolean | DivExpression>;
    /**
     * Actions performed when hovering over an element ends. Available on platforms with pointing
     * device support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when hovering over an element. Available on platforms with pointing device
     * support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Direct URL to an image.
     */
    image_url: Type<string | DivExpression>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Placeholder background before the image is loaded.
     *
     * Platforms: android, ios, web
     */
    placeholder_color?: Type<string | DivExpression>;
    /**
     * Background image must be loaded before the display.
     *
     * Platforms: android, web
     */
    preload_required?: Type<IntBoolean | DivExpression>;
    /**
     * Actions performed when an element is released.
     *
     * Platforms: not supported
     */
    press_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when an element is pressed.
     *
     * Platforms: not supported
     */
    press_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Image preview encoded in `base64`. It will be shown instead of `placeholder_color` before the
     * image is loaded. Format `data url`: `data:[;base64],<data>`
     *
     * Platforms: android, ios, web
     */
    preview?: Type<string | DivExpression>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Image scaling:`fit` places the entire image into the element (free space is filled with
     * background);`fill` scales the image to the element size and cuts off the excess.
     */
    scale?: Type<DivImageScale | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * New color of a contour image.
     */
    tint_color?: Type<string | DivExpression>;
    /**
     * Blend mode of the color specified in `tint_color`.
     */
    tint_mode?: Type<DivBlendMode | DivExpression>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}

/**
 * Background image.
 */
declare class DivImageBackground<T extends DivImageBackgroundProps = DivImageBackgroundProps> {
    readonly _props?: Exact<DivImageBackgroundProps, T>;
    readonly type = "image";
    /**
     * Image transparency.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Horizontal image alignment.
     */
    content_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical image alignment.
     */
    content_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Image filters.
     */
    filters?: Type<NonEmptyArray<DivFilter>>;
    /**
     * Image URL.
     */
    image_url: Type<string | DivExpression>;
    /**
     * Background image must be loaded before the display.
     *
     * Platforms: android
     */
    preload_required?: Type<IntBoolean | DivExpression>;
    /**
     * Image scaling.
     */
    scale?: Type<DivImageScale | DivExpression>;
    constructor(props: Exact<DivImageBackgroundProps, T>);
}
interface DivImageBackgroundProps {
    /**
     * Image transparency.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Horizontal image alignment.
     */
    content_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical image alignment.
     */
    content_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Image filters.
     */
    filters?: Type<NonEmptyArray<DivFilter>>;
    /**
     * Image URL.
     */
    image_url: Type<string | DivExpression>;
    /**
     * Background image must be loaded before the display.
     *
     * Platforms: android
     */
    preload_required?: Type<IntBoolean | DivExpression>;
    /**
     * Image scaling.
     */
    scale?: Type<DivImageScale | DivExpression>;
}

declare type DivImageScale = 'fill' | 'no_scale' | 'fit' | 'stretch';

/**
 * Progress indicator for [pager](div-pager.md).
 */
declare class DivIndicator<T extends DivIndicatorProps = DivIndicatorProps> {
    readonly _props?: Exact<DivIndicatorProps, T>;
    readonly type = "indicator";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Active indicator color.
     *
     * @deprecated
     */
    active_item_color?: Type<string | DivExpression>;
    /**
     * A size multiplier for an active indicator.
     *
     * @deprecated
     */
    active_item_size?: Type<number | DivExpression>;
    /**
     * Active indicator shape.
     */
    active_shape?: Type<DivRoundedRectangleShape>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Animation of switching between indicators.
     *
     * Platforms: android, ios
     */
    animation?: Type<DivIndicatorAnimation | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Indicator color.
     *
     * @deprecated
     */
    inactive_item_color?: Type<string | DivExpression>;
    /**
     * Inactive indicator shape, minimum size. Used when all the indicators don't fit on the screen.
     *
     * Platforms: android, ios
     */
    inactive_minimum_shape?: Type<DivRoundedRectangleShape>;
    /**
     * Indicator shape.
     */
    inactive_shape?: Type<DivRoundedRectangleShape>;
    /**
     * Indicator items placement mode:Default: Indicators' width is fixed and defined by the `shape`
     * parameters.Stretch: Indicators are expanded to fill the entire width.
     */
    items_placement?: Type<DivIndicatorItemPlacement>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * A size multiplier for a minimal indicator. It is used when the required number of indicators
     * don't fit on the screen.
     *
     * @deprecated
     *
     * Platforms: android, ios
     */
    minimum_item_size?: Type<number | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID of the pager that is a data source for an indicator.
     */
    pager_id?: Type<string>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Indicator shape.
     *
     * @deprecated
     */
    shape?: Type<DivShape>;
    /**
     * Spacing between indicator centers.
     *
     * @deprecated
     */
    space_between_centers?: Type<DivFixedSize>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props?: Exact<DivIndicatorProps, T>);
}
interface DivIndicatorProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Active indicator color.
     *
     * @deprecated
     */
    active_item_color?: Type<string | DivExpression>;
    /**
     * A size multiplier for an active indicator.
     *
     * @deprecated
     */
    active_item_size?: Type<number | DivExpression>;
    /**
     * Active indicator shape.
     */
    active_shape?: Type<DivRoundedRectangleShape>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Animation of switching between indicators.
     *
     * Platforms: android, ios
     */
    animation?: Type<DivIndicatorAnimation | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Indicator color.
     *
     * @deprecated
     */
    inactive_item_color?: Type<string | DivExpression>;
    /**
     * Inactive indicator shape, minimum size. Used when all the indicators don't fit on the screen.
     *
     * Platforms: android, ios
     */
    inactive_minimum_shape?: Type<DivRoundedRectangleShape>;
    /**
     * Indicator shape.
     */
    inactive_shape?: Type<DivRoundedRectangleShape>;
    /**
     * Indicator items placement mode:Default: Indicators' width is fixed and defined by the `shape`
     * parameters.Stretch: Indicators are expanded to fill the entire width.
     */
    items_placement?: Type<DivIndicatorItemPlacement>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * A size multiplier for a minimal indicator. It is used when the required number of indicators
     * don't fit on the screen.
     *
     * @deprecated
     *
     * Platforms: android, ios
     */
    minimum_item_size?: Type<number | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID of the pager that is a data source for an indicator.
     */
    pager_id?: Type<string>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Indicator shape.
     *
     * @deprecated
     */
    shape?: Type<DivShape>;
    /**
     * Spacing between indicator centers.
     *
     * @deprecated
     */
    space_between_centers?: Type<DivFixedSize>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}
declare type DivIndicatorAnimation = 'scale' | 'worm' | 'slider';

declare type DivIndicatorItemPlacement = DivDefaultIndicatorItemPlacement | DivStretchIndicatorItemPlacement;

/**
 * Infinite number of repetitions.
 */
declare class DivInfinityCount<T extends DivInfinityCountProps = DivInfinityCountProps> {
    readonly _props?: Exact<DivInfinityCountProps, T>;
    readonly type = "infinity";
    constructor(props?: Exact<DivInfinityCountProps, T>);
}
interface DivInfinityCountProps {
}

/**
 * Text input element.
 */
declare class DivInput<T extends DivInputProps = DivInputProps> {
    readonly _props?: Exact<DivInputProps, T>;
    readonly type = "input";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Text auto-capitalization type.
     *
     * Platforms: android, ios, web
     */
    autocapitalization?: Type<DivInputAutocapitalization | DivExpression>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Actions when pressing the 'Enter' key. Actions (if any) override the default behavior.
     *
     * Platforms: ios, android, web
     */
    enter_key_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * 'Enter' key type.
     *
     * Platforms: ios, android, web
     */
    enter_key_type?: Type<DivInputEnterKeyType | DivExpression>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Filter that prevents users from entering text that doesn't satisfy the specified conditions.
     *
     * Platforms: ios
     */
    filters?: Type<NonEmptyArray<DivInputFilter>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     *
     * Platforms: android, ios, web
     */
    font_family?: Type<string | DivExpression>;
    /**
     * Font size.
     */
    font_size?: Type<number | DivExpression>;
    /**
     * Unit of measurement:`px` — a physical pixel.`dp` — a logical pixel that doesn't depend on
     * screen density.`sp` — a logical pixel that depends on the font size on a device. Specify
     * height in `sp`. Only available on Android.
     */
    font_size_unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Style.
     */
    font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Style. Numeric value.
     *
     * Platforms: ios, web, android
     */
    font_weight_value?: Type<number | DivExpression>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Text highlight color. If the value isn't set, the color set in the client will be used
     * instead.
     *
     * Platforms: android, ios, web
     */
    highlight_color?: Type<string | DivExpression>;
    /**
     * Text color.
     */
    hint_color?: Type<string | DivExpression>;
    /**
     * Tooltip text.
     */
    hint_text?: Type<string | DivExpression>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Enables or disables text editing.
     */
    is_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Keyboard type.
     */
    keyboard_type?: Type<DivInputKeyboardType | DivExpression>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Spacing between characters.
     *
     * Platforms: android, ios, web
     */
    letter_spacing?: Type<number | DivExpression>;
    /**
     * Line spacing of the text. Units specified in `font_size_unit`.
     */
    line_height?: Type<number | DivExpression>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Mask for entering text based on the specified template.
     *
     * Platforms: android, ios, web
     */
    mask?: Type<DivInputMask>;
    /**
     * Maximum number of characters that can be entered in the input field.
     *
     * Platforms: android, ios, web
     */
    max_length?: Type<number | DivExpression>;
    /**
     * Maximum number of lines to be displayed in the input field.
     */
    max_visible_lines?: Type<number | DivExpression>;
    /**
     * Text input line used in the native interface.
     *
     * Platforms: android
     */
    native_interface?: Type<IDivInputNativeInterface>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Highlighting input text when focused.
     *
     * Platforms: android, ios, web
     */
    select_all_on_focus?: Type<IntBoolean | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal text alignment.
     */
    text_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical text alignment.
     */
    text_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Text color.
     */
    text_color?: Type<string | DivExpression>;
    /**
     * Name of text storage variable.
     */
    text_variable: Type<string>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Validator that checks that the field value meets the specified conditions.
     *
     * Platforms: android, ios, web
     */
    validators?: Type<NonEmptyArray<DivInputValidator>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivInputProps, T>);
}
interface DivInputProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Text auto-capitalization type.
     *
     * Platforms: android, ios, web
     */
    autocapitalization?: Type<DivInputAutocapitalization | DivExpression>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Actions when pressing the 'Enter' key. Actions (if any) override the default behavior.
     *
     * Platforms: ios, android, web
     */
    enter_key_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * 'Enter' key type.
     *
     * Platforms: ios, android, web
     */
    enter_key_type?: Type<DivInputEnterKeyType | DivExpression>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Filter that prevents users from entering text that doesn't satisfy the specified conditions.
     *
     * Platforms: ios
     */
    filters?: Type<NonEmptyArray<DivInputFilter>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     *
     * Platforms: android, ios, web
     */
    font_family?: Type<string | DivExpression>;
    /**
     * Font size.
     */
    font_size?: Type<number | DivExpression>;
    /**
     * Unit of measurement:`px` — a physical pixel.`dp` — a logical pixel that doesn't depend on
     * screen density.`sp` — a logical pixel that depends on the font size on a device. Specify
     * height in `sp`. Only available on Android.
     */
    font_size_unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Style.
     */
    font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Style. Numeric value.
     *
     * Platforms: ios, web, android
     */
    font_weight_value?: Type<number | DivExpression>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Text highlight color. If the value isn't set, the color set in the client will be used
     * instead.
     *
     * Platforms: android, ios, web
     */
    highlight_color?: Type<string | DivExpression>;
    /**
     * Text color.
     */
    hint_color?: Type<string | DivExpression>;
    /**
     * Tooltip text.
     */
    hint_text?: Type<string | DivExpression>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Enables or disables text editing.
     */
    is_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Keyboard type.
     */
    keyboard_type?: Type<DivInputKeyboardType | DivExpression>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Spacing between characters.
     *
     * Platforms: android, ios, web
     */
    letter_spacing?: Type<number | DivExpression>;
    /**
     * Line spacing of the text. Units specified in `font_size_unit`.
     */
    line_height?: Type<number | DivExpression>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Mask for entering text based on the specified template.
     *
     * Platforms: android, ios, web
     */
    mask?: Type<DivInputMask>;
    /**
     * Maximum number of characters that can be entered in the input field.
     *
     * Platforms: android, ios, web
     */
    max_length?: Type<number | DivExpression>;
    /**
     * Maximum number of lines to be displayed in the input field.
     */
    max_visible_lines?: Type<number | DivExpression>;
    /**
     * Text input line used in the native interface.
     *
     * Platforms: android
     */
    native_interface?: Type<IDivInputNativeInterface>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Highlighting input text when focused.
     *
     * Platforms: android, ios, web
     */
    select_all_on_focus?: Type<IntBoolean | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal text alignment.
     */
    text_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical text alignment.
     */
    text_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Text color.
     */
    text_color?: Type<string | DivExpression>;
    /**
     * Name of text storage variable.
     */
    text_variable: Type<string>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Validator that checks that the field value meets the specified conditions.
     *
     * Platforms: android, ios, web
     */
    validators?: Type<NonEmptyArray<DivInputValidator>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}
declare type DivInputAutocapitalization = 'auto' | 'none' | 'words' | 'sentences' | 'all_characters';
declare type DivInputEnterKeyType = 'default' | 'go' | 'search' | 'send' | 'done';
declare type DivInputKeyboardType = 'single_line_text' | 'multi_line_text' | 'phone' | 'number' | 'email' | 'uri' | 'password';
/**
 * Text input line used in the native interface.
 */
interface IDivInputNativeInterface {
    /**
     * Text input line color.
     */
    color: Type<string | DivExpression>;
}

declare type DivInputFilter = DivInputFilterRegex | DivInputFilterExpression;

/**
 * Filter based on [calculated expressions](../../expressions).
 */
declare class DivInputFilterExpression<T extends DivInputFilterExpressionProps = DivInputFilterExpressionProps> {
    readonly _props?: Exact<DivInputFilterExpressionProps, T>;
    readonly type = "expression";
    /**
     * [Calculated expression](../../expressions) used to verify the validity of the value.
     */
    condition: Type<IntBoolean | DivExpression>;
    constructor(props: Exact<DivInputFilterExpressionProps, T>);
}
interface DivInputFilterExpressionProps {
    /**
     * [Calculated expression](../../expressions) used to verify the validity of the value.
     */
    condition: Type<IntBoolean | DivExpression>;
}

/**
 * Filter based on regular expressions.
 */
declare class DivInputFilterRegex<T extends DivInputFilterRegexProps = DivInputFilterRegexProps> {
    readonly _props?: Exact<DivInputFilterRegexProps, T>;
    readonly type = "regex";
    /**
     * Regular expression (pattern) that the entered value must match.
     */
    pattern: Type<string | DivExpression>;
    constructor(props: Exact<DivInputFilterRegexProps, T>);
}
interface DivInputFilterRegexProps {
    /**
     * Regular expression (pattern) that the entered value must match.
     */
    pattern: Type<string | DivExpression>;
}

declare type DivInputMask = DivFixedLengthInputMask | DivCurrencyInputMask | DivPhoneInputMask;

interface IDivInputMaskBase {
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;
}

declare type DivInputValidator = DivInputValidatorRegex | DivInputValidatorExpression;

interface IDivInputValidatorBase {
    /**
     * Determines whether the empty field value is valid.
     */
    allow_empty?: Type<IntBoolean | DivExpression>;
    /**
     * ID of the text element containing the error message. The message will also be used for
     * providing access.
     */
    label_id?: Type<string | DivExpression>;
    /**
     * The name of the variable that stores the calculation results.
     */
    variable?: Type<string>;
}

/**
 * [Calculated expression](../../expressions) validator.
 */
declare class DivInputValidatorExpression<T extends DivInputValidatorExpressionProps = DivInputValidatorExpressionProps> {
    readonly _props?: Exact<DivInputValidatorExpressionProps, T>;
    readonly type = "expression";
    /**
     * Determines whether the empty field value is valid.
     */
    allow_empty?: Type<IntBoolean | DivExpression>;
    /**
     * [Calculated expression](../../expressions) used as a value validity condition.
     */
    condition: Type<IntBoolean | DivExpression>;
    /**
     * ID of the text element containing the error message. The message will also be used for
     * providing access.
     */
    label_id: Type<string | DivExpression>;
    /**
     * The name of the variable that stores the calculation results.
     */
    variable: Type<string>;
    constructor(props: Exact<DivInputValidatorExpressionProps, T>);
}
interface DivInputValidatorExpressionProps {
    /**
     * Determines whether the empty field value is valid.
     */
    allow_empty?: Type<IntBoolean | DivExpression>;
    /**
     * [Calculated expression](../../expressions) used as a value validity condition.
     */
    condition: Type<IntBoolean | DivExpression>;
    /**
     * ID of the text element containing the error message. The message will also be used for
     * providing access.
     */
    label_id: Type<string | DivExpression>;
    /**
     * The name of the variable that stores the calculation results.
     */
    variable: Type<string>;
}

/**
 * Regex validator.
 */
declare class DivInputValidatorRegex<T extends DivInputValidatorRegexProps = DivInputValidatorRegexProps> {
    readonly _props?: Exact<DivInputValidatorRegexProps, T>;
    readonly type = "regex";
    /**
     * Determines whether the empty field value is valid.
     */
    allow_empty?: Type<IntBoolean | DivExpression>;
    /**
     * ID of the text element containing the error message. The message will also be used for
     * providing access.
     */
    label_id: Type<string | DivExpression>;
    /**
     * A regular expression (pattern) that the field value must match.
     */
    pattern: Type<string | DivExpression>;
    /**
     * The name of the variable that stores the calculation results.
     */
    variable: Type<string>;
    constructor(props: Exact<DivInputValidatorRegexProps, T>);
}
interface DivInputValidatorRegexProps {
    /**
     * Determines whether the empty field value is valid.
     */
    allow_empty?: Type<IntBoolean | DivExpression>;
    /**
     * ID of the text element containing the error message. The message will also be used for
     * providing access.
     */
    label_id: Type<string | DivExpression>;
    /**
     * A regular expression (pattern) that the field value must match.
     */
    pattern: Type<string | DivExpression>;
    /**
     * The name of the variable that stores the calculation results.
     */
    variable: Type<string>;
}

interface IDivLayoutProvider {
    /**
     * Name of the variable that stores the element’s height.
     */
    height_variable_name?: Type<string>;
    /**
     * Name of the variable that stores the element’s width.
     */
    width_variable_name?: Type<string>;
}

declare type DivLineStyle = 'none' | 'single';

/**
 * Linear gradient.
 */
declare class DivLinearGradient<T extends DivLinearGradientProps = DivLinearGradientProps> {
    readonly _props?: Exact<DivLinearGradientProps, T>;
    readonly type = "gradient";
    /**
     * Angle of gradient direction.
     */
    angle?: Type<number | DivExpression>;
    /**
     * Colors. Gradient points are located at an equal distance from each other.
     */
    colors: Type<NonEmptyArray<string | DivExpression>>;
    constructor(props: Exact<DivLinearGradientProps, T>);
}
interface DivLinearGradientProps {
    /**
     * Angle of gradient direction.
     */
    angle?: Type<number | DivExpression>;
    /**
     * Colors. Gradient points are located at an equal distance from each other.
     */
    colors: Type<NonEmptyArray<string | DivExpression>>;
}

/**
 * Element size adjusts to a parent element.
 */
declare class DivMatchParentSize<T extends DivMatchParentSizeProps = DivMatchParentSizeProps> {
    readonly _props?: Exact<DivMatchParentSizeProps, T>;
    readonly type = "match_parent";
    /**
     * Weight when distributing free space between elements with the size type `match_parent` inside
     * an element. If the weight isn't specified, the elements will divide the place equally.
     */
    weight?: Type<number | DivExpression>;
    constructor(props?: Exact<DivMatchParentSizeProps, T>);
}
interface DivMatchParentSizeProps {
    /**
     * Weight when distributing free space between elements with the size type `match_parent` inside
     * an element. If the weight isn't specified, the elements will divide the place equally.
     */
    weight?: Type<number | DivExpression>;
}

/**
 * Fixed width value of the visible part of a neighbouring page.
 */
declare class DivNeighbourPageSize<T extends DivNeighbourPageSizeProps = DivNeighbourPageSizeProps> {
    readonly _props?: Exact<DivNeighbourPageSizeProps, T>;
    readonly type = "fixed";
    /**
     * Width of the visible part of a neighbouring page.
     */
    neighbour_page_width: Type<DivFixedSize>;
    constructor(props: Exact<DivNeighbourPageSizeProps, T>);
}
interface DivNeighbourPageSizeProps {
    /**
     * Width of the visible part of a neighbouring page.
     */
    neighbour_page_width: Type<DivFixedSize>;
}

/**
 * Image in 9-patch format (https://developer.android.com/studio/write/draw9patch).
 */
declare class DivNinePatchBackground<T extends DivNinePatchBackgroundProps = DivNinePatchBackgroundProps> {
    readonly _props?: Exact<DivNinePatchBackgroundProps, T>;
    readonly type = "nine_patch_image";
    /**
     * Image URL.
     */
    image_url: Type<string | DivExpression>;
    /**
     * Margins that break the image into parts using the same rules as the CSS `border-image-slice`
     * property (https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice).
     */
    insets: Type<IDivAbsoluteEdgeInsets>;
    constructor(props: Exact<DivNinePatchBackgroundProps, T>);
}
interface DivNinePatchBackgroundProps {
    /**
     * Image URL.
     */
    image_url: Type<string | DivExpression>;
    /**
     * Margins that break the image into parts using the same rules as the CSS `border-image-slice`
     * property (https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice).
     */
    insets: Type<IDivAbsoluteEdgeInsets>;
}

/**
 * Numeric value animator.
 */
declare class DivNumberAnimator<T extends DivNumberAnimatorProps = DivNumberAnimatorProps> {
    readonly _props?: Exact<DivNumberAnimatorProps, T>;
    readonly type = "number_animator";
    /**
     * Actions performed when the animation is canceled. For example, when a command with the
     * 'animator_stop' type is received.
     */
    cancel_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Animation direction. Determines whether the animation should be played forward, backward, or
     * alternate between forward and backward.
     */
    direction?: Type<DivAnimationDirection | DivExpression>;
    /**
     * Animation duration in milliseconds.
     */
    duration: Type<number | DivExpression>;
    /**
     * Actions when the animation is completed.
     */
    end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * The value the variable will have when the animation ends.
     */
    end_value: Type<number | DivExpression>;
    /**
     * Animator ID.
     */
    id: Type<string>;
    /**
     * Animated value interpolation function.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Number of times the animation will repeat before stopping. A value of `0` enables infinite
     * looping.
     */
    repeat_count?: Type<DivCount>;
    /**
     * Delay before the animation is launched in milliseconds.
     */
    start_delay?: Type<number | DivExpression>;
    /**
     * The value the variable will have when the animation starts. If the property isn't specified,
     * the current value of the variable will be used.
     */
    start_value?: Type<number | DivExpression>;
    /**
     * Name of the variable being animated.
     */
    variable_name: Type<string>;
    constructor(props: Exact<DivNumberAnimatorProps, T>);
}
interface DivNumberAnimatorProps {
    /**
     * Actions performed when the animation is canceled. For example, when a command with the
     * 'animator_stop' type is received.
     */
    cancel_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Animation direction. Determines whether the animation should be played forward, backward, or
     * alternate between forward and backward.
     */
    direction?: Type<DivAnimationDirection | DivExpression>;
    /**
     * Animation duration in milliseconds.
     */
    duration: Type<number | DivExpression>;
    /**
     * Actions when the animation is completed.
     */
    end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * The value the variable will have when the animation ends.
     */
    end_value: Type<number | DivExpression>;
    /**
     * Animator ID.
     */
    id: Type<string>;
    /**
     * Animated value interpolation function.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Number of times the animation will repeat before stopping. A value of `0` enables infinite
     * looping.
     */
    repeat_count?: Type<DivCount>;
    /**
     * Delay before the animation is launched in milliseconds.
     */
    start_delay?: Type<number | DivExpression>;
    /**
     * The value the variable will have when the animation starts. If the property isn't specified,
     * the current value of the variable will be used.
     */
    start_value?: Type<number | DivExpression>;
    /**
     * Name of the variable being animated.
     */
    variable_name: Type<string>;
}

/**
 * Page size equals to its content size.
 */
declare class DivPageContentSize<T extends DivPageContentSizeProps = DivPageContentSizeProps> {
    readonly _props?: Exact<DivPageContentSizeProps, T>;
    readonly type = "wrap_content";
    /**
     * Pager pages' alignment along the scroll axis. For edge alignment, offset from parent edge is
     * equal to the corresponding padding.
     */
    alignment?: Type<DivPageContentSizeAlignment | DivExpression>;
    constructor(props?: Exact<DivPageContentSizeProps, T>);
}
interface DivPageContentSizeProps {
    /**
     * Pager pages' alignment along the scroll axis. For edge alignment, offset from parent edge is
     * equal to the corresponding padding.
     */
    alignment?: Type<DivPageContentSizeAlignment | DivExpression>;
}
declare type DivPageContentSizeAlignment = 'start' | 'center' | 'end';

/**
 * Page width (%).
 */
declare class DivPageSize<T extends DivPageSizeProps = DivPageSizeProps> {
    readonly _props?: Exact<DivPageSizeProps, T>;
    readonly type = "percentage";
    /**
     * Page width as a percentage of the parent element width.
     */
    page_width: Type<DivPercentageSize>;
    constructor(props: Exact<DivPageSizeProps, T>);
}
interface DivPageSizeProps {
    /**
     * Page width as a percentage of the parent element width.
     */
    page_width: Type<DivPercentageSize>;
}

declare type DivPageTransformation = DivPageTransformationSlide | DivPageTransformationOverlap;

/**
 * Pages are stacked during animation overlapping one another.
 */
declare class DivPageTransformationOverlap<T extends DivPageTransformationOverlapProps = DivPageTransformationOverlapProps> {
    readonly _props?: Exact<DivPageTransformationOverlapProps, T>;
    readonly type = "overlap";
    /**
     * Animation speed adjustment. When the value is set to `spring`, it’s a damped oscillation
     * animation truncated to 0.7, with the `damping=1` parameter. Other values correspond to the
     * Bezier curve:`linear` — cubic-bezier(0, 0, 1, 1)`ease` — cubic-bezier(0.25, 0.1, 0.25,
     * 1)`ease_in` — cubic-bezier(0.42, 0, 1, 1)`ease_out` — cubic-bezier(0, 0, 0.58, 1)`ease_in_out`
     * — cubic-bezier(0.42, 0, 0.58, 1)
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Minimum transparency of the next page, within the range [0, 1], when scrolling through the
     * pager. The following page is always the page with a larger ordinal number in the `items` list,
     * regardless of the scrolling direction.
     */
    next_page_alpha?: Type<number | DivExpression>;
    /**
     * Scaling the next page during pager scrolling. The following page is always the page with a
     * larger ordinal number in the `items` list, regardless of the scrolling direction.
     */
    next_page_scale?: Type<number | DivExpression>;
    /**
     * Minimum transparency of the previous page, in the range [0, 1], during pager scrolling. The
     * previous page is always the page with a lower ordinal number in the `items` list, regardless
     * of the scrolling direction.
     */
    previous_page_alpha?: Type<number | DivExpression>;
    /**
     * Scaling the previous page during pager scrolling. The previous page is always the page with a
     * lower ordinal number in the `items` list, regardless of the scrolling direction.
     */
    previous_page_scale?: Type<number | DivExpression>;
    /**
     * If the value is `false`, the following pages will be stacked on top of the previous ones. If
     * the value is `true`, the reverse happens. The following page is always the page with a larger
     * ordinal number in the `items` list, regardless of the scrolling direction.
     */
    reversed_stacking_order?: Type<IntBoolean | DivExpression>;
    constructor(props?: Exact<DivPageTransformationOverlapProps, T>);
}
interface DivPageTransformationOverlapProps {
    /**
     * Animation speed adjustment. When the value is set to `spring`, it’s a damped oscillation
     * animation truncated to 0.7, with the `damping=1` parameter. Other values correspond to the
     * Bezier curve:`linear` — cubic-bezier(0, 0, 1, 1)`ease` — cubic-bezier(0.25, 0.1, 0.25,
     * 1)`ease_in` — cubic-bezier(0.42, 0, 1, 1)`ease_out` — cubic-bezier(0, 0, 0.58, 1)`ease_in_out`
     * — cubic-bezier(0.42, 0, 0.58, 1)
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Minimum transparency of the next page, within the range [0, 1], when scrolling through the
     * pager. The following page is always the page with a larger ordinal number in the `items` list,
     * regardless of the scrolling direction.
     */
    next_page_alpha?: Type<number | DivExpression>;
    /**
     * Scaling the next page during pager scrolling. The following page is always the page with a
     * larger ordinal number in the `items` list, regardless of the scrolling direction.
     */
    next_page_scale?: Type<number | DivExpression>;
    /**
     * Minimum transparency of the previous page, in the range [0, 1], during pager scrolling. The
     * previous page is always the page with a lower ordinal number in the `items` list, regardless
     * of the scrolling direction.
     */
    previous_page_alpha?: Type<number | DivExpression>;
    /**
     * Scaling the previous page during pager scrolling. The previous page is always the page with a
     * lower ordinal number in the `items` list, regardless of the scrolling direction.
     */
    previous_page_scale?: Type<number | DivExpression>;
    /**
     * If the value is `false`, the following pages will be stacked on top of the previous ones. If
     * the value is `true`, the reverse happens. The following page is always the page with a larger
     * ordinal number in the `items` list, regardless of the scrolling direction.
     */
    reversed_stacking_order?: Type<IntBoolean | DivExpression>;
}

/**
 * Pages move without overlapping during pager scrolling.
 */
declare class DivPageTransformationSlide<T extends DivPageTransformationSlideProps = DivPageTransformationSlideProps> {
    readonly _props?: Exact<DivPageTransformationSlideProps, T>;
    readonly type = "slide";
    /**
     * Animation speed adjustment. When the value is set to `spring`, it’s a damped oscillation
     * animation truncated to 0.7, with the `damping=1` parameter. Other values correspond to the
     * Bezier curve:`linear` — cubic-bezier(0, 0, 1, 1)`ease` — cubic-bezier(0.25, 0.1, 0.25,
     * 1)`ease_in` — cubic-bezier(0.42, 0, 1, 1)`ease_out` — cubic-bezier(0, 0, 0.58, 1)`ease_in_out`
     * — cubic-bezier(0.42, 0, 0.58, 1)
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Minimum transparency of the next page, within the range [0, 1], when scrolling through the
     * pager. The following page is always the page with a larger ordinal number in the `items` list,
     * regardless of the scrolling direction.
     */
    next_page_alpha?: Type<number | DivExpression>;
    /**
     * Scaling the next page during pager scrolling. The following page is always the page with a
     * larger ordinal number in the `items` list, regardless of the scrolling direction.
     */
    next_page_scale?: Type<number | DivExpression>;
    /**
     * Minimum transparency of the previous page, in the range [0, 1], during pager scrolling. The
     * previous page is always the page with a lower ordinal number in the `items` list, regardless
     * of the scrolling direction.
     */
    previous_page_alpha?: Type<number | DivExpression>;
    /**
     * Scaling the previous page during pager scrolling. The previous page is always the page with a
     * lower ordinal number in the `items` list, regardless of the scrolling direction.
     */
    previous_page_scale?: Type<number | DivExpression>;
    constructor(props?: Exact<DivPageTransformationSlideProps, T>);
}
interface DivPageTransformationSlideProps {
    /**
     * Animation speed adjustment. When the value is set to `spring`, it’s a damped oscillation
     * animation truncated to 0.7, with the `damping=1` parameter. Other values correspond to the
     * Bezier curve:`linear` — cubic-bezier(0, 0, 1, 1)`ease` — cubic-bezier(0.25, 0.1, 0.25,
     * 1)`ease_in` — cubic-bezier(0.42, 0, 1, 1)`ease_out` — cubic-bezier(0, 0, 0.58, 1)`ease_in_out`
     * — cubic-bezier(0.42, 0, 0.58, 1)
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Minimum transparency of the next page, within the range [0, 1], when scrolling through the
     * pager. The following page is always the page with a larger ordinal number in the `items` list,
     * regardless of the scrolling direction.
     */
    next_page_alpha?: Type<number | DivExpression>;
    /**
     * Scaling the next page during pager scrolling. The following page is always the page with a
     * larger ordinal number in the `items` list, regardless of the scrolling direction.
     */
    next_page_scale?: Type<number | DivExpression>;
    /**
     * Minimum transparency of the previous page, in the range [0, 1], during pager scrolling. The
     * previous page is always the page with a lower ordinal number in the `items` list, regardless
     * of the scrolling direction.
     */
    previous_page_alpha?: Type<number | DivExpression>;
    /**
     * Scaling the previous page during pager scrolling. The previous page is always the page with a
     * lower ordinal number in the `items` list, regardless of the scrolling direction.
     */
    previous_page_scale?: Type<number | DivExpression>;
}

/**
 * Pager. It contains a horizontal set of cards that can be scrolled page by page. It shows the
 * main page and the beginning of the next one.
 */
declare class DivPager<T extends DivPagerProps = DivPagerProps> {
    readonly _props?: Exact<DivPagerProps, T>;
    readonly type = "pager";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Ordinal number of the pager element that will be opened by default.
     *
     * Platforms: android, ios, web
     */
    default_item?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Enables infinite scrolling of cards. Scrolling is looped: after the last card is displayed, it
     * starts over again.
     *
     * Platforms: android, ios
     */
    infinite_scroll?: Type<IntBoolean | DivExpression>;
    /**
     * Sets collection elements dynamically using `data` and `prototypes`.
     *
     * Platforms: android, ios
     */
    item_builder?: Type<IDivCollectionItemBuilder>;
    /**
     * Spacing between elements.
     */
    item_spacing?: Type<DivFixedSize>;
    /**
     * Pager elements. Page-by-page transition options can be implemented
     * using:`div-action://set_current_item?id=&item=` — set the current page with an ordinal number
     * `item` inside an element, with the specified
     * `id`;`div-action://set_next_item?id=[&overflow={clamp\|ring}]` — go to the next page inside an
     * element, with the specified `id`;`div-action://set_previous_item?id=[&overflow={clamp\|ring}]`
     * — go to the previous page inside an element, with the specified `id`.</p><p>The optional
     * `overflow` parameter is used to set navigation when the first or last element is
     * reached:`clamp` — transition will stop at the border element;`ring` — go to the beginning or
     * end, depending on the current element.</p><p>By default, `clamp`.
     */
    items?: Type<NonEmptyArray<Div>>;
    /**
     * Type of calculation of the main page width:`fixed` — from the fixed width of the next page
     * `neighbour_page_width`;`percentage` — from the percentage value `page_width`.
     */
    layout_mode: Type<DivPagerLayoutMode>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Pager orientation.
     */
    orientation?: Type<DivPagerOrientation | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Page transformation during pager scrolling.
     *
     * Platforms: android, ios
     */
    page_transformation?: Type<DivPageTransformation>;
    /**
     * If the parameter is enabled, the pager won't transmit the scroll gesture to the parent
     * element.
     *
     * Platforms: android, web
     */
    restrict_parent_scroll?: Type<IntBoolean | DivExpression>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivPagerProps, T>);
}
interface DivPagerProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Ordinal number of the pager element that will be opened by default.
     *
     * Platforms: android, ios, web
     */
    default_item?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Enables infinite scrolling of cards. Scrolling is looped: after the last card is displayed, it
     * starts over again.
     *
     * Platforms: android, ios
     */
    infinite_scroll?: Type<IntBoolean | DivExpression>;
    /**
     * Sets collection elements dynamically using `data` and `prototypes`.
     *
     * Platforms: android, ios
     */
    item_builder?: Type<IDivCollectionItemBuilder>;
    /**
     * Spacing between elements.
     */
    item_spacing?: Type<DivFixedSize>;
    /**
     * Pager elements. Page-by-page transition options can be implemented
     * using:`div-action://set_current_item?id=&item=` — set the current page with an ordinal number
     * `item` inside an element, with the specified
     * `id`;`div-action://set_next_item?id=[&overflow={clamp\|ring}]` — go to the next page inside an
     * element, with the specified `id`;`div-action://set_previous_item?id=[&overflow={clamp\|ring}]`
     * — go to the previous page inside an element, with the specified `id`.</p><p>The optional
     * `overflow` parameter is used to set navigation when the first or last element is
     * reached:`clamp` — transition will stop at the border element;`ring` — go to the beginning or
     * end, depending on the current element.</p><p>By default, `clamp`.
     */
    items?: Type<NonEmptyArray<Div>>;
    /**
     * Type of calculation of the main page width:`fixed` — from the fixed width of the next page
     * `neighbour_page_width`;`percentage` — from the percentage value `page_width`.
     */
    layout_mode: Type<DivPagerLayoutMode>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Pager orientation.
     */
    orientation?: Type<DivPagerOrientation | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Page transformation during pager scrolling.
     *
     * Platforms: android, ios
     */
    page_transformation?: Type<DivPageTransformation>;
    /**
     * If the parameter is enabled, the pager won't transmit the scroll gesture to the parent
     * element.
     *
     * Platforms: android, web
     */
    restrict_parent_scroll?: Type<IntBoolean | DivExpression>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}
declare type DivPagerOrientation = 'horizontal' | 'vertical';

declare type DivPagerLayoutMode = DivPageSize | DivNeighbourPageSize | DivPageContentSize;

/**
 * Edits the element.
 */
interface IDivPatch {
    /**
     * Element changes.
     */
    changes: NonEmptyArray<IDivPatchChange>;
    /**
     * Procedure for applying changes:`transactional` — if an error occurs during application of at
     * least one element, the changes aren't applied.`partial` — all possible changes are applied. If
     * there are errors, they are reported.
     *
     * Platforms: android, web
     */
    mode?: DivPatchMode | DivExpression;
    /**
     * Actions to perform after changes are applied.
     *
     * Platforms: android, ios, web
     */
    on_applied_actions?: NonEmptyArray<IDivAction>;
    /**
     * Actions to perform if there’s an error when applying changes in transaction mode.
     *
     * Platforms: android, web
     */
    on_failed_actions?: NonEmptyArray<IDivAction>;
}
declare type DivPatchMode = 'transactional' | 'partial';
interface IDivPatchChange {
    /**
     * ID of an element to be replaced or removed.
     */
    id: Type<string>;
    /**
     * Elements to be inserted. If the parameter isn't specified, the element will be removed.
     */
    items?: Type<NonEmptyArray<Div>>;
}

/**
 * Element size (%).
 */
declare class DivPercentageSize<T extends DivPercentageSizeProps = DivPercentageSizeProps> {
    readonly _props?: Exact<DivPercentageSizeProps, T>;
    readonly type = "percentage";
    /**
     * Element size value.
     */
    value: Type<number | DivExpression>;
    constructor(props: Exact<DivPercentageSizeProps, T>);
}
interface DivPercentageSizeProps {
    /**
     * Element size value.
     */
    value: Type<number | DivExpression>;
}

/**
 * Mask for entering phone numbers with dynamic regional format identification.
 */
declare class DivPhoneInputMask<T extends DivPhoneInputMaskProps = DivPhoneInputMaskProps> {
    readonly _props?: Exact<DivPhoneInputMaskProps, T>;
    readonly type = "phone";
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;
    constructor(props: Exact<DivPhoneInputMaskProps, T>);
}
interface DivPhoneInputMaskProps {
    /**
     * Name of the variable to store the unprocessed value.
     */
    raw_text_variable: Type<string>;
}

declare type DivPivot = DivPivotFixed | DivPivotPercentage | DivPivotFixedProps;

/**
 * Fixed coordinates of the rotation axis.
 */
declare class DivPivotFixed<T extends DivPivotFixedProps = DivPivotFixedProps> {
    readonly _props?: Exact<DivPivotFixedProps, T>;
    readonly type = "pivot-fixed";
    /**
     * Measurement unit. To learn more about units of size measurement, see [Layout inside the
     * card](../../layout).
     */
    unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Coordinate value.
     */
    value?: Type<number | DivExpression>;
    constructor(props?: Exact<DivPivotFixedProps, T>);
}
interface DivPivotFixedProps {
    /**
     * Measurement unit. To learn more about units of size measurement, see [Layout inside the
     * card](../../layout).
     */
    unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Coordinate value.
     */
    value?: Type<number | DivExpression>;
}

/**
 * Location of the coordinate of the rotation axis as a percentage relative to the element size.
 */
declare class DivPivotPercentage<T extends DivPivotPercentageProps = DivPivotPercentageProps> {
    readonly _props?: Exact<DivPivotPercentageProps, T>;
    readonly type = "pivot-percentage";
    /**
     * Coordinate value as a percentage.
     */
    value: Type<number | DivExpression>;
    constructor(props: Exact<DivPivotPercentageProps, T>);
}
interface DivPivotPercentageProps {
    /**
     * Coordinate value as a percentage.
     */
    value: Type<number | DivExpression>;
}

/**
 * A point with fixed coordinates.
 */
interface IDivPoint {
    /**
     * `X` coordinate.
     */
    x: Type<IDivDimension>;
    /**
     * `Y` coordinate.
     */
    y: Type<IDivDimension>;
}

/**
 * Radial gradient.
 */
declare class DivRadialGradient<T extends DivRadialGradientProps = DivRadialGradientProps> {
    readonly _props?: Exact<DivRadialGradientProps, T>;
    readonly type = "radial_gradient";
    /**
     * Shift of the central point of the gradient relative to the left edge along the X axis.
     */
    center_x?: Type<DivRadialGradientCenter>;
    /**
     * Shift of the central point of the gradient relative to the top edge along the Y axis.
     */
    center_y?: Type<DivRadialGradientCenter>;
    /**
     * Colors. Gradient points are located at an equal distance from each other.
     */
    colors: Type<NonEmptyArray<string | DivExpression>>;
    /**
     * Radius of the gradient transition.
     */
    radius?: Type<DivRadialGradientRadius>;
    constructor(props: Exact<DivRadialGradientProps, T>);
}
interface DivRadialGradientProps {
    /**
     * Shift of the central point of the gradient relative to the left edge along the X axis.
     */
    center_x?: Type<DivRadialGradientCenter>;
    /**
     * Shift of the central point of the gradient relative to the top edge along the Y axis.
     */
    center_y?: Type<DivRadialGradientCenter>;
    /**
     * Colors. Gradient points are located at an equal distance from each other.
     */
    colors: Type<NonEmptyArray<string | DivExpression>>;
    /**
     * Radius of the gradient transition.
     */
    radius?: Type<DivRadialGradientRadius>;
}

declare type DivRadialGradientCenter = DivRadialGradientFixedCenter | DivRadialGradientRelativeCenter;

/**
 * Fixed coordinates of the central point of the gradient.
 */
declare class DivRadialGradientFixedCenter<T extends DivRadialGradientFixedCenterProps = DivRadialGradientFixedCenterProps> {
    readonly _props?: Exact<DivRadialGradientFixedCenterProps, T>;
    readonly type = "fixed";
    /**
     * Unit of measurement. To learn more about units of size measurement, see [Layout inside the
     * card](../../layout).
     */
    unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Coordinate value.
     */
    value: Type<number | DivExpression>;
    constructor(props: Exact<DivRadialGradientFixedCenterProps, T>);
}
interface DivRadialGradientFixedCenterProps {
    /**
     * Unit of measurement. To learn more about units of size measurement, see [Layout inside the
     * card](../../layout).
     */
    unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Coordinate value.
     */
    value: Type<number | DivExpression>;
}

declare type DivRadialGradientRadius = DivFixedSize | DivRadialGradientRelativeRadius;

/**
 * Location of the central point of the gradient relative to the element borders.
 */
declare class DivRadialGradientRelativeCenter<T extends DivRadialGradientRelativeCenterProps = DivRadialGradientRelativeCenterProps> {
    readonly _props?: Exact<DivRadialGradientRelativeCenterProps, T>;
    readonly type = "relative";
    /**
     * Coordinate value in the range "0...1".
     */
    value: Type<number | DivExpression>;
    constructor(props: Exact<DivRadialGradientRelativeCenterProps, T>);
}
interface DivRadialGradientRelativeCenterProps {
    /**
     * Coordinate value in the range "0...1".
     */
    value: Type<number | DivExpression>;
}

/**
 * Relative radius of the gradient transition.
 */
declare class DivRadialGradientRelativeRadius<T extends DivRadialGradientRelativeRadiusProps = DivRadialGradientRelativeRadiusProps> {
    readonly _props?: Exact<DivRadialGradientRelativeRadiusProps, T>;
    readonly type = "relative";
    /**
     * Type of the relative radius of the gradient transition.
     */
    value: Type<DivRadialGradientRelativeRadiusValue | DivExpression>;
    constructor(props: Exact<DivRadialGradientRelativeRadiusProps, T>);
}
interface DivRadialGradientRelativeRadiusProps {
    /**
     * Type of the relative radius of the gradient transition.
     */
    value: Type<DivRadialGradientRelativeRadiusValue | DivExpression>;
}
declare type DivRadialGradientRelativeRadiusValue = 'nearest_corner' | 'farthest_corner' | 'nearest_side' | 'farthest_side';

/**
 * A rectangle with rounded corners.
 */
declare class DivRoundedRectangleShape<T extends DivRoundedRectangleShapeProps = DivRoundedRectangleShapeProps> {
    readonly _props?: Exact<DivRoundedRectangleShapeProps, T>;
    readonly type = "rounded_rectangle";
    /**
     * Fill color.
     */
    background_color?: Type<string | DivExpression>;
    /**
     * Corner rounding radius.
     */
    corner_radius?: Type<DivFixedSize>;
    /**
     * Height.
     */
    item_height?: Type<DivFixedSize>;
    /**
     * Width.
     */
    item_width?: Type<DivFixedSize>;
    /**
     * Stroke style.
     */
    stroke?: Type<IDivStroke>;
    constructor(props?: Exact<DivRoundedRectangleShapeProps, T>);
}
interface DivRoundedRectangleShapeProps {
    /**
     * Fill color.
     */
    background_color?: Type<string | DivExpression>;
    /**
     * Corner rounding radius.
     */
    corner_radius?: Type<DivFixedSize>;
    /**
     * Height.
     */
    item_height?: Type<DivFixedSize>;
    /**
     * Width.
     */
    item_width?: Type<DivFixedSize>;
    /**
     * Stroke style.
     */
    stroke?: Type<IDivStroke>;
}

/**
 * Scale animation.
 */
declare class DivScaleTransition<T extends DivScaleTransitionProps = DivScaleTransitionProps> {
    readonly _props?: Exact<DivScaleTransitionProps, T>;
    readonly type = "scale";
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Transition speed nature.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Relative coordinate `X` of the point that won't change its position in case of scaling.
     */
    pivot_x?: Type<number | DivExpression>;
    /**
     * Relative coordinate `Y` of the point that won't change its position in case of scaling.
     */
    pivot_y?: Type<number | DivExpression>;
    /**
     * Value of the scale  from which the element starts appearing or at which it finishes
     * disappearing.
     */
    scale?: Type<number | DivExpression>;
    /**
     * Delay in milliseconds before animation starts.
     */
    start_delay?: Type<number | DivExpression>;
    constructor(props?: Exact<DivScaleTransitionProps, T>);
}
interface DivScaleTransitionProps {
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Transition speed nature.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Relative coordinate `X` of the point that won't change its position in case of scaling.
     */
    pivot_x?: Type<number | DivExpression>;
    /**
     * Relative coordinate `Y` of the point that won't change its position in case of scaling.
     */
    pivot_y?: Type<number | DivExpression>;
    /**
     * Value of the scale  from which the element starts appearing or at which it finishes
     * disappearing.
     */
    scale?: Type<number | DivExpression>;
    /**
     * Delay in milliseconds before animation starts.
     */
    start_delay?: Type<number | DivExpression>;
}

/**
 * List of options with only one to be selected.
 */
declare class DivSelect<T extends DivSelectProps = DivSelectProps> {
    readonly _props?: Exact<DivSelectProps, T>;
    readonly type = "select";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     */
    font_family?: Type<string | DivExpression>;
    /**
     * Font size.
     */
    font_size?: Type<number | DivExpression>;
    /**
     * Unit of measurement:`px` — a physical pixel.`dp` — a logical pixel that doesn't depend on
     * screen density.`sp` — a logical pixel that depends on the font size on a device. Specify
     * height in `sp`. Only available on Android.
     *
     * Platforms: android, ios
     */
    font_size_unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Style.
     */
    font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Style. Numeric value.
     *
     * Platforms: ios, web, android
     */
    font_weight_value?: Type<number | DivExpression>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Hint color.
     */
    hint_color?: Type<string | DivExpression>;
    /**
     * Hint text.
     */
    hint_text?: Type<string | DivExpression>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Spacing between characters.
     */
    letter_spacing?: Type<number | DivExpression>;
    /**
     * Line spacing of the text. Measured in units set in `font_size_unit`.
     */
    line_height?: Type<number | DivExpression>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    options: Type<NonEmptyArray<IDivSelectOption>>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Text color.
     */
    text_color?: Type<string | DivExpression>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Name of the variable that stores the selected option value (`value`).
     */
    value_variable: Type<string>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivSelectProps, T>);
}
interface DivSelectProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     */
    font_family?: Type<string | DivExpression>;
    /**
     * Font size.
     */
    font_size?: Type<number | DivExpression>;
    /**
     * Unit of measurement:`px` — a physical pixel.`dp` — a logical pixel that doesn't depend on
     * screen density.`sp` — a logical pixel that depends on the font size on a device. Specify
     * height in `sp`. Only available on Android.
     *
     * Platforms: android, ios
     */
    font_size_unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Style.
     */
    font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Style. Numeric value.
     *
     * Platforms: ios, web, android
     */
    font_weight_value?: Type<number | DivExpression>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Hint color.
     */
    hint_color?: Type<string | DivExpression>;
    /**
     * Hint text.
     */
    hint_text?: Type<string | DivExpression>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Spacing between characters.
     */
    letter_spacing?: Type<number | DivExpression>;
    /**
     * Line spacing of the text. Measured in units set in `font_size_unit`.
     */
    line_height?: Type<number | DivExpression>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    options: Type<NonEmptyArray<IDivSelectOption>>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Text color.
     */
    text_color?: Type<string | DivExpression>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Name of the variable that stores the selected option value (`value`).
     */
    value_variable: Type<string>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}
/**
 * List option.
 */
interface IDivSelectOption {
    /**
     * Text description of the option displayed in the list. If not set, `value` is used instead.
     */
    text?: Type<string | DivExpression>;
    /**
     * Value matching the option.
     */
    value: Type<string | DivExpression>;
}

/**
 * A separating line between elements.
 */
declare class DivSeparator<T extends DivSeparatorProps = DivSeparatorProps> {
    readonly _props?: Exact<DivSeparatorProps, T>;
    readonly type = "separator";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Separator display settings.
     */
    delimiter_style?: Type<IDivSeparatorDelimiterStyle>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Actions performed when hovering over an element ends. Available on platforms with pointing
     * device support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when hovering over an element. Available on platforms with pointing device
     * support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Actions performed when an element is released.
     *
     * Platforms: not supported
     */
    press_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when an element is pressed.
     *
     * Platforms: not supported
     */
    press_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props?: Exact<DivSeparatorProps, T>);
}
interface DivSeparatorProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Separator display settings.
     */
    delimiter_style?: Type<IDivSeparatorDelimiterStyle>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Actions performed when hovering over an element ends. Available on platforms with pointing
     * device support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when hovering over an element. Available on platforms with pointing device
     * support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Actions performed when an element is released.
     *
     * Platforms: not supported
     */
    press_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when an element is pressed.
     *
     * Platforms: not supported
     */
    press_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}
/**
 * Separator display settings.
 */
interface IDivSeparatorDelimiterStyle {
    /**
     * Separator color. To prevent the separator from being displayed, set transparency in the alpha
     * channel. For example, `#00FFFFFF`.
     */
    color?: Type<string | DivExpression>;
    /**
     * Separator orientation:`vertical` — vertical;`horizontal` — horizontal.<
     */
    orientation?: Type<DelimiterStyleOrientation | DivExpression>;
}
declare type DelimiterStyleOrientation = 'vertical' | 'horizontal';

/**
 * Element shadow.
 */
interface IDivShadow {
    /**
     * Shadow transparency.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Blur intensity.
     */
    blur?: Type<number | DivExpression>;
    /**
     * Shadow color.
     */
    color?: Type<string | DivExpression>;
    /**
     * Shadow offset.
     */
    offset: Type<IDivPoint>;
}

declare type DivShape = DivRoundedRectangleShape | DivCircleShape;

/**
 * Drawable of a simple geometric shape.
 */
declare class DivShapeDrawable<T extends DivShapeDrawableProps = DivShapeDrawableProps> {
    readonly _props?: Exact<DivShapeDrawableProps, T>;
    readonly type = "shape_drawable";
    /**
     * Fill color.
     *
     * @deprecated
     */
    color: Type<string | DivExpression>;
    /**
     * Shape.
     */
    shape: Type<DivShape>;
    /**
     * Stroke style.
     *
     * @deprecated
     */
    stroke?: Type<IDivStroke>;
    constructor(props: Exact<DivShapeDrawableProps, T>);
}
interface DivShapeDrawableProps {
    /**
     * Fill color.
     *
     * @deprecated
     */
    color: Type<string | DivExpression>;
    /**
     * Shape.
     */
    shape: Type<DivShape>;
    /**
     * Stroke style.
     *
     * @deprecated
     */
    stroke?: Type<IDivStroke>;
}

interface IDivSightAction {
    /**
     * Callbacks that are called after [data loading](../../interaction#loading-data).
     *
     * Platforms: android, ios, web
     */
    download_callbacks?: Type<IDivDownloadCallbacks>;
    /**
     * The parameter disables the action. Disabled actions stop listening to their associated event
     * (clicks, changes in visibility, and so on).
     */
    is_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Logging ID.
     */
    log_id: Type<string | DivExpression>;
    /**
     * Limit on the number of loggings. If `0`, the limit is removed.
     */
    log_limit?: Type<number | DivExpression>;
    /**
     * Additional parameters, passed to the host application.
     */
    payload?: Type<{}>;
    /**
     * Referer URL for logging.
     *
     * Platforms: android, ios
     */
    referer?: Type<string | DivExpression>;
    /**
     * The ID of the element within which the specified action will be performed.
     *
     * Platforms: android, ios, web
     */
    scope_id?: Type<string>;
    typed?: Type<DivActionTyped>;
    /**
     * URL. Possible values: `url` or `div-action://`. To learn more, see [Interaction with
     * elements](../../interaction).
     */
    url?: Type<string | DivExpression>;
}

declare type DivSize = DivFixedSize | DivMatchParentSize | DivWrapContentSize;

declare type DivSizeUnit = 'dp' | 'sp' | 'px';

/**
 * Slide animation.
 */
declare class DivSlideTransition<T extends DivSlideTransitionProps = DivSlideTransitionProps> {
    readonly _props?: Exact<DivSlideTransitionProps, T>;
    readonly type = "slide";
    /**
     * A fixed value of an offset which the element starts appearing from or at which it finishes
     * disappearing. If no value is specified, the distance to the selected edge of a parent element
     * is used.
     */
    distance?: Type<IDivDimension>;
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Edge of a parent element for one of the action types:where the element will move from when
     * appearing;where the element will move to when disappearing.
     */
    edge?: Type<DivSlideTransitionEdge | DivExpression>;
    /**
     * Transition speed nature.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Delay in milliseconds before animation starts.
     */
    start_delay?: Type<number | DivExpression>;
    constructor(props?: Exact<DivSlideTransitionProps, T>);
}
interface DivSlideTransitionProps {
    /**
     * A fixed value of an offset which the element starts appearing from or at which it finishes
     * disappearing. If no value is specified, the distance to the selected edge of a parent element
     * is used.
     */
    distance?: Type<IDivDimension>;
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Edge of a parent element for one of the action types:where the element will move from when
     * appearing;where the element will move to when disappearing.
     */
    edge?: Type<DivSlideTransitionEdge | DivExpression>;
    /**
     * Transition speed nature.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Delay in milliseconds before animation starts.
     */
    start_delay?: Type<number | DivExpression>;
}
declare type DivSlideTransitionEdge = 'left' | 'top' | 'right' | 'bottom';

/**
 * Slider for selecting a value in the range.
 */
declare class DivSlider<T extends DivSliderProps = DivSliderProps> {
    readonly _props?: Exact<DivSliderProps, T>;
    readonly type = "slider";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Maximum value. It must be greater than the minimum value.
     */
    max_value?: Type<number | DivExpression>;
    /**
     * Minimum value.
     */
    min_value?: Type<number | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Section style.
     *
     * Platforms: android, ios
     */
    ranges?: Type<NonEmptyArray<IDivSliderRange>>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Accessibility settings for the second pointer.
     *
     * Platforms: web
     */
    secondary_value_accessibility?: Type<IDivAccessibility>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Style of the second pointer.
     */
    thumb_secondary_style?: Type<DivDrawable>;
    /**
     * Text style in the second pointer.
     */
    thumb_secondary_text_style?: Type<IDivSliderTextStyle>;
    /**
     * Name of the variable to store the second pointer's current value.
     */
    thumb_secondary_value_variable?: Type<string>;
    /**
     * Style of the first pointer.
     */
    thumb_style: Type<DivDrawable>;
    /**
     * Text style in the first pointer.
     */
    thumb_text_style?: Type<IDivSliderTextStyle>;
    /**
     * Name of the variable to store the pointer's current value.
     */
    thumb_value_variable?: Type<string>;
    /**
     * Style of active serifs.
     */
    tick_mark_active_style?: Type<DivDrawable>;
    /**
     * Style of inactive serifs.
     */
    tick_mark_inactive_style?: Type<DivDrawable>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Style of the active part of a scale.
     */
    track_active_style: Type<DivDrawable>;
    /**
     * Style of the inactive part of a scale.
     */
    track_inactive_style: Type<DivDrawable>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivSliderProps, T>);
}
interface DivSliderProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Maximum value. It must be greater than the minimum value.
     */
    max_value?: Type<number | DivExpression>;
    /**
     * Minimum value.
     */
    min_value?: Type<number | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Section style.
     *
     * Platforms: android, ios
     */
    ranges?: Type<NonEmptyArray<IDivSliderRange>>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Accessibility settings for the second pointer.
     *
     * Platforms: web
     */
    secondary_value_accessibility?: Type<IDivAccessibility>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Style of the second pointer.
     */
    thumb_secondary_style?: Type<DivDrawable>;
    /**
     * Text style in the second pointer.
     */
    thumb_secondary_text_style?: Type<IDivSliderTextStyle>;
    /**
     * Name of the variable to store the second pointer's current value.
     */
    thumb_secondary_value_variable?: Type<string>;
    /**
     * Style of the first pointer.
     */
    thumb_style: Type<DivDrawable>;
    /**
     * Text style in the first pointer.
     */
    thumb_text_style?: Type<IDivSliderTextStyle>;
    /**
     * Name of the variable to store the pointer's current value.
     */
    thumb_value_variable?: Type<string>;
    /**
     * Style of active serifs.
     */
    tick_mark_active_style?: Type<DivDrawable>;
    /**
     * Style of inactive serifs.
     */
    tick_mark_inactive_style?: Type<DivDrawable>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Style of the active part of a scale.
     */
    track_active_style: Type<DivDrawable>;
    /**
     * Style of the inactive part of a scale.
     */
    track_inactive_style: Type<DivDrawable>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}
interface IDivSliderRange {
    /**
     * End of section.
     */
    end?: Type<number | DivExpression>;
    /**
     * Section margins. Only uses horizontal margins.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Start of section.
     */
    start?: Type<number | DivExpression>;
    /**
     * Style of the active part of a scale.
     */
    track_active_style?: Type<DivDrawable>;
    /**
     * Style of the inactive part of a scale.
     */
    track_inactive_style?: Type<DivDrawable>;
}
interface IDivSliderTextStyle {
    /**
     * Font size.
     */
    font_size: Type<number | DivExpression>;
    /**
     * Platforms: android, ios
     */
    font_size_unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Style.
     */
    font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Style. Numeric value.
     *
     * Platforms: ios, web, android
     */
    font_weight_value?: Type<number | DivExpression>;
    /**
     * Shift relative to the center.
     */
    offset?: Type<IDivPoint>;
    /**
     * Text color.
     */
    text_color?: Type<string | DivExpression>;
}

/**
 * Solid background color.
 */
declare class DivSolidBackground<T extends DivSolidBackgroundProps = DivSolidBackgroundProps> {
    readonly _props?: Exact<DivSolidBackgroundProps, T>;
    readonly type = "solid";
    /**
     * Color.
     */
    color: Type<string | DivExpression>;
    constructor(props: Exact<DivSolidBackgroundProps, T>);
}
interface DivSolidBackgroundProps {
    /**
     * Color.
     */
    color: Type<string | DivExpression>;
}

/**
 * It contains sets of states for visual elements and switches between them.
 */
declare class DivState<T extends DivStateProps = DivStateProps> {
    readonly _props?: Exact<DivStateProps, T>;
    readonly type = "state";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Enables the bounding of child elements by the parent's borders.
     *
     * Platforms: android
     */
    clip_to_bounds?: Type<IntBoolean | DivExpression>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * ID of the status that will be set by default. If the parameter isnt set, the first state of
     * the `states` will be set.
     */
    default_state_id?: Type<string | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * ID of an element to search in the hierarchy. The ID must be unique at one hierarchy level.
     *
     * @deprecated
     */
    div_id?: Type<string>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * The name of the variable that stores the ID for the current state. If the variable changes,
     * the active state will also change. The variable is prioritized over the default_state_id
     * parameter.
     */
    state_id_variable?: Type<string>;
    /**
     * States. Each element can have a few states with a different layout. Transition between states
     * is performed using [special scheme](../../interaction) of the [action](div-action.md) element.
     */
    states: Type<NonEmptyArray<IDivStateState>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * It determines which events trigger transition animations.
     *
     * @deprecated
     */
    transition_animation_selector?: Type<DivTransitionSelector | DivExpression>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivStateProps, T>);
}
interface DivStateProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Enables the bounding of child elements by the parent's borders.
     *
     * Platforms: android
     */
    clip_to_bounds?: Type<IntBoolean | DivExpression>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * ID of the status that will be set by default. If the parameter isnt set, the first state of
     * the `states` will be set.
     */
    default_state_id?: Type<string | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * ID of an element to search in the hierarchy. The ID must be unique at one hierarchy level.
     *
     * @deprecated
     */
    div_id?: Type<string>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * The name of the variable that stores the ID for the current state. If the variable changes,
     * the active state will also change. The variable is prioritized over the default_state_id
     * parameter.
     */
    state_id_variable?: Type<string>;
    /**
     * States. Each element can have a few states with a different layout. Transition between states
     * is performed using [special scheme](../../interaction) of the [action](div-action.md) element.
     */
    states: Type<NonEmptyArray<IDivStateState>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * It determines which events trigger transition animations.
     *
     * @deprecated
     */
    transition_animation_selector?: Type<DivTransitionSelector | DivExpression>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}
interface IDivStateState {
    /**
     * State appearance animation. Use `transition_in` instead.
     *
     * @deprecated
     *
     * Platforms: android, ios
     */
    animation_in?: Type<IDivAnimation>;
    /**
     * State disappearance animation. Use `transition_out` instead.
     *
     * @deprecated
     *
     * Platforms: android, ios
     */
    animation_out?: Type<IDivAnimation>;
    /**
     * Contents. If the parameter is missing, the state won't be displayed.
     */
    div?: Type<Div>;
    /**
     * State ID. It must be unique at one hierarchy level.
     */
    state_id: Type<string>;
    /**
     * Actions when swiping the state horizontally.
     *
     * @deprecated
     *
     * Platforms: android
     */
    swipe_out_actions?: Type<NonEmptyArray<IDivAction>>;
}

/**
 * Element size adjusts to a parent element.
 */
declare class DivStretchIndicatorItemPlacement<T extends DivStretchIndicatorItemPlacementProps = DivStretchIndicatorItemPlacementProps> {
    readonly _props?: Exact<DivStretchIndicatorItemPlacementProps, T>;
    readonly type = "stretch";
    /**
     * Spacing between indicator centers.
     */
    item_spacing?: Type<DivFixedSize>;
    /**
     * Maximum number of visible indicators.
     */
    max_visible_items?: Type<number | DivExpression>;
    constructor(props?: Exact<DivStretchIndicatorItemPlacementProps, T>);
}
interface DivStretchIndicatorItemPlacementProps {
    /**
     * Spacing between indicator centers.
     */
    item_spacing?: Type<DivFixedSize>;
    /**
     * Maximum number of visible indicators.
     */
    max_visible_items?: Type<number | DivExpression>;
}

/**
 * Stroke.
 */
interface IDivStroke {
    /**
     * Stroke color.
     */
    color: Type<string | DivExpression>;
    unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Stroke width.
     */
    width?: Type<number | DivExpression>;
}

/**
 * Two-state toggle that allows the user to control a Boolean variable. The element's
 * look-and-feel varies by platform. The toggle has a fixed size in iOS.
 */
declare class DivSwitch<T extends DivSwitchProps = DivSwitchProps> {
    readonly _props?: Exact<DivSwitchProps, T>;
    readonly type = "switch";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Enables or disables the element's toggle functionality.
     */
    is_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Name of the Boolean variable assigned to the toggle.
     */
    is_on_variable: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Color of the toggle in the enabled state. If the color is omitted:
    : iOS standard system color
     * is used
    : the color specified in `Div2Context` on Android is used.
     */
    on_color?: Type<string | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivSwitchProps, T>);
}
interface DivSwitchProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Enables or disables the element's toggle functionality.
     */
    is_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Name of the Boolean variable assigned to the toggle.
     */
    is_on_variable: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Color of the toggle in the enabled state. If the color is omitted:
    : iOS standard system color
     * is used
    : the color specified in `Div2Context` on Android is used.
     */
    on_color?: Type<string | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}

/**
 * Tabs. Height of the first tab is determined by its contents, and height of the remaining
 * [depends on the platform](../../location#tabs).
 */
declare class DivTabs<T extends DivTabsProps = DivTabsProps> {
    readonly _props?: Exact<DivTabsProps, T>;
    readonly type = "tabs";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Updating height when changing the active element. In the browser, the value is always `true`.
     *
     * Platforms: android, ios
     */
    dynamic_height?: Type<IntBoolean | DivExpression>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * A separating line between tabs and contents.
     */
    has_separator?: Type<IntBoolean | DivExpression>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Tabs. Transition between tabs can be implemented
     * using:`div-action://set_current_item?id=&item=` — set the current tab with an ordinal number
     * `item` inside an element, with the specified
     * `id`;`div-action://set_next_item?id=[&overflow={clamp\|ring}]` — go to the next tab inside an
     * element, with the specified `id`;`div-action://set_previous_item?id=[&overflow={clamp\|ring}]`
     * — go to the previous tab inside an element, with the specified `id`.</p><p>The optional
     * `overflow` parameter is used to set navigation when the first or last element is
     * reached:`clamp` — transition will stop at the border element;`ring` — go to the beginning or
     * end, depending on the current element.</p><p>By default, `clamp`.
     */
    items: Type<NonEmptyArray<IDivTabsItem>>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * If the parameter is enabled, tabs won't transmit the scroll gesture to the parent element.
     *
     * Platforms: android, web
     */
    restrict_parent_scroll?: Type<IntBoolean | DivExpression>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Ordinal number of the tab that will be opened by default.
     */
    selected_tab?: Type<number | DivExpression>;
    /**
     * Separator color.
     */
    separator_color?: Type<string | DivExpression>;
    /**
     * Indents from the separating line. Not used if `has_separator = false`.
     */
    separator_paddings?: Type<IDivEdgeInsets>;
    /**
     * Switching tabs by scrolling through the contents.
     */
    switch_tabs_by_content_swipe_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Design style of separators between tab titles.
     *
     * Platforms: android, web
     */
    tab_title_delimiter?: Type<IDivTabsTabTitleDelimiter>;
    /**
     * Design style of tab titles.
     */
    tab_title_style?: Type<IDivTabsTabTitleStyle>;
    /**
     * Indents in the tab name.
     */
    title_paddings?: Type<IDivEdgeInsets>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivTabsProps, T>);
}
interface DivTabsProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Updating height when changing the active element. In the browser, the value is always `true`.
     *
     * Platforms: android, ios
     */
    dynamic_height?: Type<IntBoolean | DivExpression>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * A separating line between tabs and contents.
     */
    has_separator?: Type<IntBoolean | DivExpression>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Tabs. Transition between tabs can be implemented
     * using:`div-action://set_current_item?id=&item=` — set the current tab with an ordinal number
     * `item` inside an element, with the specified
     * `id`;`div-action://set_next_item?id=[&overflow={clamp\|ring}]` — go to the next tab inside an
     * element, with the specified `id`;`div-action://set_previous_item?id=[&overflow={clamp\|ring}]`
     * — go to the previous tab inside an element, with the specified `id`.</p><p>The optional
     * `overflow` parameter is used to set navigation when the first or last element is
     * reached:`clamp` — transition will stop at the border element;`ring` — go to the beginning or
     * end, depending on the current element.</p><p>By default, `clamp`.
     */
    items: Type<NonEmptyArray<IDivTabsItem>>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * If the parameter is enabled, tabs won't transmit the scroll gesture to the parent element.
     *
     * Platforms: android, web
     */
    restrict_parent_scroll?: Type<IntBoolean | DivExpression>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Ordinal number of the tab that will be opened by default.
     */
    selected_tab?: Type<number | DivExpression>;
    /**
     * Separator color.
     */
    separator_color?: Type<string | DivExpression>;
    /**
     * Indents from the separating line. Not used if `has_separator = false`.
     */
    separator_paddings?: Type<IDivEdgeInsets>;
    /**
     * Switching tabs by scrolling through the contents.
     */
    switch_tabs_by_content_swipe_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Design style of separators between tab titles.
     *
     * Platforms: android, web
     */
    tab_title_delimiter?: Type<IDivTabsTabTitleDelimiter>;
    /**
     * Design style of tab titles.
     */
    tab_title_style?: Type<IDivTabsTabTitleStyle>;
    /**
     * Indents in the tab name.
     */
    title_paddings?: Type<IDivEdgeInsets>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}
/**
 * Tab.
 */
interface IDivTabsItem {
    /**
     * Tab contents.
     */
    div: Type<Div>;
    /**
     * Tab title.
     */
    title: Type<string | DivExpression>;
    /**
     * Action when clicking on the active tab title.
     */
    title_click_action?: Type<IDivAction>;
}
/**
 * Design style of separators between tab titles.
 */
interface IDivTabsTabTitleDelimiter {
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivFixedSize>;
    /**
     * Direct URL to an image.
     */
    image_url: Type<string | DivExpression>;
    /**
     * Element width.
     */
    width?: Type<DivFixedSize>;
}
/**
 * Design style of tab titles.
 */
interface IDivTabsTabTitleStyle {
    /**
     * Background color of the active tab title.
     */
    active_background_color?: Type<string | DivExpression>;
    /**
     * Active tab title style.
     */
    active_font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Color of the active tab title text.
     */
    active_text_color?: Type<string | DivExpression>;
    /**
     * Duration of active title change animation.
     */
    animation_duration?: Type<number | DivExpression>;
    /**
     * Active title change animation.
     *
     * Platforms: android, ios
     */
    animation_type?: Type<TabTitleStyleAnimationType | DivExpression>;
    /**
     * Title corner rounding radius. If the parameter isn't specified, the rounding is maximum (half
     * of the smallest size). Not used if the `corners_radius` parameter is set.
     */
    corner_radius?: Type<number | DivExpression>;
    /**
     * Rounding radii of corners of multiple titles. Empty values are replaced by `corner_radius`.
     */
    corners_radius?: Type<IDivCornersRadius>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     */
    font_family?: Type<string | DivExpression>;
    /**
     * Title font size.
     */
    font_size?: Type<number | DivExpression>;
    /**
     * Units of title font size measurement.
     *
     * Platforms: android, ios
     */
    font_size_unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Style. Use `active_font_weight` and `inactive_font_weight` instead.
     *
     * @deprecated
     */
    font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Background color of the inactive tab title.
     */
    inactive_background_color?: Type<string | DivExpression>;
    /**
     * Inactive tab title style.
     */
    inactive_font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Color of the inactive tab title text.
     */
    inactive_text_color?: Type<string | DivExpression>;
    /**
     * Spacing between neighbouring tab titles.
     */
    item_spacing?: Type<number | DivExpression>;
    /**
     * Spacing between title characters.
     */
    letter_spacing?: Type<number | DivExpression>;
    /**
     * Line spacing of the text.
     */
    line_height?: Type<number | DivExpression>;
    /**
     * Indents around the tab title.
     */
    paddings?: Type<IDivEdgeInsets>;
}
declare type TabTitleStyleAnimationType = 'slide' | 'fade' | 'none';

/**
 * Text.
 */
declare class DivText<T extends DivTextProps = DivTextProps> {
    readonly _props?: Exact<DivTextProps, T>;
    readonly type = "text";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Automatic text cropping to fit the container size.
     *
     * Platforms: android, web, flutter
     */
    auto_ellipsize?: Type<IntBoolean | DivExpression>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Text cropping marker. It is displayed when text size exceeds the limit on the number of lines.
     *
     * Platforms: android, ios
     */
    ellipsis?: Type<IDivTextEllipsis>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * Text color when focusing on the element.
     *
     * Platforms: android, web
     */
    focused_text_color?: Type<string | DivExpression>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     *
     * Platforms: android, ios, web
     */
    font_family?: Type<string | DivExpression>;
    /**
     * List of OpenType font features. The format matches the CSS attribute "font-feature-settings".
     * Learn more: https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
     *
     * Platforms: android, ios, web
     */
    font_feature_settings?: Type<string | DivExpression>;
    /**
     * Font size.
     */
    font_size?: Type<number | DivExpression>;
    /**
     * Platforms: android, ios
     */
    font_size_unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Style.
     */
    font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Style. Numeric value.
     *
     * Platforms: ios, android, web
     */
    font_weight_value?: Type<number | DivExpression>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Actions performed when hovering over an element ends. Available on platforms with pointing
     * device support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when hovering over an element. Available on platforms with pointing device
     * support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Images embedded in text.
     *
     * Platforms: android, ios, web
     */
    images?: Type<NonEmptyArray<IDivTextImage>>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Spacing between characters.
     *
     * Platforms: android, ios, web
     */
    letter_spacing?: Type<number | DivExpression>;
    /**
     * Line spacing of the text.
     */
    line_height?: Type<number | DivExpression>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Maximum number of lines not to be cropped when breaking the limits.
     */
    max_lines?: Type<number | DivExpression>;
    /**
     * Minimum number of cropped lines when breaking the limits.
     *
     * Platforms: android, ios
     */
    min_hidden_lines?: Type<number | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Actions performed when an element is released.
     *
     * Platforms: not supported
     */
    press_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when an element is pressed.
     *
     * Platforms: not supported
     */
    press_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * A character range in which additional style parameters can be set. Defined by mandatory
     * `start` and `end` fields.
     *
     * Platforms: android, ios, web
     */
    ranges?: Type<NonEmptyArray<IDivTextRange>>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Ability to select and copy text.
     *
     * Platforms: android, ios, web
     */
    selectable?: Type<IntBoolean | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Strikethrough.
     */
    strike?: Type<DivLineStyle | DivExpression>;
    /**
     * Text.
     */
    text: Type<string | DivExpression>;
    /**
     * Horizontal text alignment.
     */
    text_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical text alignment.
     */
    text_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Text color. Not used if the `text_gradient` parameter is set.
     */
    text_color?: Type<string | DivExpression>;
    /**
     * Gradient text color.
     *
     * Platforms: android, ios, web
     */
    text_gradient?: Type<DivTextGradient>;
    /**
     * Parameters of the shadow applied to the text.
     *
     * Platforms: android, web
     */
    text_shadow?: Type<IDivShadow>;
    /**
     * Limit the text width to the maximum line width. Applies only when the width is set to
     * `wrap_content`, `constrained=true`, and `max_size` is specified.
     *
     * Platforms: android, ios
     */
    tighten_width?: Type<IntBoolean | DivExpression>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Text cropping method. Use `ellipsis` instead.
     *
     * @deprecated
     *
     * Platforms: android, ios
     */
    truncate?: Type<DivTextTruncate | DivExpression>;
    /**
     * Underline.
     */
    underline?: Type<DivLineStyle | DivExpression>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivTextProps, T>);
}
interface DivTextProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * One action when clicking on an element. Not used if the `actions` parameter is set.
     */
    action?: Type<IDivAction>;
    /**
     * Click animation. The web only supports the following values: `fade`, `scale`, `native`,
     * `no_animation` and `set`.
     *
     * Platforms: android, ios, web
     */
    action_animation?: Type<IDivAnimation>;
    /**
     * Multiple actions when clicking on an element.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Automatic text cropping to fit the container size.
     *
     * Platforms: android, web, flutter
     */
    auto_ellipsize?: Type<IntBoolean | DivExpression>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Action when double-clicking on an element.
     *
     * Platforms: android, ios, web
     */
    doubletap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Text cropping marker. It is displayed when text size exceeds the limit on the number of lines.
     *
     * Platforms: android, ios
     */
    ellipsis?: Type<IDivTextEllipsis>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * Text color when focusing on the element.
     *
     * Platforms: android, web
     */
    focused_text_color?: Type<string | DivExpression>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     *
     * Platforms: android, ios, web
     */
    font_family?: Type<string | DivExpression>;
    /**
     * List of OpenType font features. The format matches the CSS attribute "font-feature-settings".
     * Learn more: https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
     *
     * Platforms: android, ios, web
     */
    font_feature_settings?: Type<string | DivExpression>;
    /**
     * Font size.
     */
    font_size?: Type<number | DivExpression>;
    /**
     * Platforms: android, ios
     */
    font_size_unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Style.
     */
    font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Style. Numeric value.
     *
     * Platforms: ios, android, web
     */
    font_weight_value?: Type<number | DivExpression>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Actions performed when hovering over an element ends. Available on platforms with pointing
     * device support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when hovering over an element. Available on platforms with pointing device
     * support (mouse, stylus, etc).
     *
     * Platforms: not supported
     */
    hover_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Images embedded in text.
     *
     * Platforms: android, ios, web
     */
    images?: Type<NonEmptyArray<IDivTextImage>>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * Spacing between characters.
     *
     * Platforms: android, ios, web
     */
    letter_spacing?: Type<number | DivExpression>;
    /**
     * Line spacing of the text.
     */
    line_height?: Type<number | DivExpression>;
    /**
     * Action when long-clicking an element. Doesn't work on devices that don't support touch
     * gestures.
     *
     * Platforms: android, ios, web
     */
    longtap_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * Maximum number of lines not to be cropped when breaking the limits.
     */
    max_lines?: Type<number | DivExpression>;
    /**
     * Minimum number of cropped lines when breaking the limits.
     *
     * Platforms: android, ios
     */
    min_hidden_lines?: Type<number | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Actions performed when an element is released.
     *
     * Platforms: not supported
     */
    press_end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Actions performed when an element is pressed.
     *
     * Platforms: not supported
     */
    press_start_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * A character range in which additional style parameters can be set. Defined by mandatory
     * `start` and `end` fields.
     *
     * Platforms: android, ios, web
     */
    ranges?: Type<NonEmptyArray<IDivTextRange>>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Ability to select and copy text.
     *
     * Platforms: android, ios, web
     */
    selectable?: Type<IntBoolean | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Strikethrough.
     */
    strike?: Type<DivLineStyle | DivExpression>;
    /**
     * Text.
     */
    text: Type<string | DivExpression>;
    /**
     * Horizontal text alignment.
     */
    text_alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical text alignment.
     */
    text_alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Text color. Not used if the `text_gradient` parameter is set.
     */
    text_color?: Type<string | DivExpression>;
    /**
     * Gradient text color.
     *
     * Platforms: android, ios, web
     */
    text_gradient?: Type<DivTextGradient>;
    /**
     * Parameters of the shadow applied to the text.
     *
     * Platforms: android, web
     */
    text_shadow?: Type<IDivShadow>;
    /**
     * Limit the text width to the maximum line width. Applies only when the width is set to
     * `wrap_content`, `constrained=true`, and `max_size` is specified.
     *
     * Platforms: android, ios
     */
    tighten_width?: Type<IntBoolean | DivExpression>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Text cropping method. Use `ellipsis` instead.
     *
     * @deprecated
     *
     * Platforms: android, ios
     */
    truncate?: Type<DivTextTruncate | DivExpression>;
    /**
     * Underline.
     */
    underline?: Type<DivLineStyle | DivExpression>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}
declare type DivTextTruncate = 'none' | 'start' | 'end' | 'middle';
/**
 * Text cropping marker. It is displayed when text size exceeds the limit on the number of lines.
 */
interface IDivTextEllipsis {
    /**
     * Actions when clicking on a crop marker.
     *
     * Platforms: android, ios, web
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Images embedded in a crop marker.
     *
     * Platforms: android, ios, web
     */
    images?: Type<NonEmptyArray<IDivTextImage>>;
    /**
     * Character ranges inside a crop marker with different text styles.
     *
     * Platforms: android, ios, web
     */
    ranges?: Type<NonEmptyArray<IDivTextRange>>;
    /**
     * Marker text.
     */
    text: Type<string | DivExpression>;
}
/**
 * Image.
 */
interface IDivTextImage {
    /**
     * Platforms: android
     */
    accessibility?: Type<IImageAccessibility>;
    /**
     * Vertical image alignment within the row.
     *
     * Platforms: android, web
     */
    alignment_vertical?: Type<DivTextAlignmentVertical | DivExpression>;
    /**
     * Image height.
     */
    height?: Type<DivFixedSize>;
    /**
     * Defines direction in `start` parameter:
    `normal` - regular indexation for strings ([0, 1, 2,
     * ..., N]). Use to insert an image by index relative to the begging of a string.
    `reversed` -
     * indexation from the end towards the begging of a string ([N, ..., 2, 1, 0]). Use to insert an
     * image by index relative to the end of a string.
     *
     * Platforms: not supported
     */
    indexing_direction?: Type<ImageIndexingDirection | DivExpression>;
    /**
     * Background image must be loaded before the display.
     *
     * Platforms: web
     */
    preload_required?: Type<IntBoolean | DivExpression>;
    /**
     * A symbol to insert prior to an image. To insert an image at the end of the text, specify the
     * number of the last character plus one.
     */
    start: Type<number | DivExpression>;
    /**
     * New color of a contour image.
     */
    tint_color?: Type<string | DivExpression>;
    /**
     * Blend mode of the color specified in `tint_color`.
     *
     * Platforms: android, web
     */
    tint_mode?: Type<DivBlendMode | DivExpression>;
    /**
     * Image URL.
     */
    url: Type<string | DivExpression>;
    /**
     * Image width.
     */
    width?: Type<DivFixedSize>;
}
declare type ImageIndexingDirection = 'normal' | 'reversed';
interface IImageAccessibility {
    /**
     * Element description. It is used as the main description for screen reading applications.
     */
    description?: Type<string | DivExpression>;
    /**
     * Element role. Used to correctly identify an element by the accessibility service. For example,
     * the `list` element is used to group list elements into one element.
     */
    type?: Type<AccessibilityType>;
}
declare type AccessibilityType = 'none' | 'button' | 'image' | 'text' | 'auto';
/**
 * Additional parameters of the character range.
 */
interface IDivTextRange {
    /**
     * Action when clicking on text.
     */
    actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Vertical text alignment within the row.
     *
     * Platforms: android, web
     */
    alignment_vertical?: Type<DivTextAlignmentVertical | DivExpression>;
    /**
     * Character range background.
     */
    background?: Type<DivTextRangeBackground>;
    /**
     * Character range border.
     */
    border?: Type<IDivTextRangeBorder>;
    /**
     * Ordinal number of the last character to be included in the range. If the property is omitted,
     * the range ends at the last character of the text.
     */
    end?: Type<number | DivExpression>;
    /**
     * Font family:`text` — a standard text font;`display` — a family of fonts with a large font
     * size.
     */
    font_family?: Type<string | DivExpression>;
    /**
     * List of OpenType font features. The format matches the CSS attribute "font-feature-settings".
     * Learn more: https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
     *
     * Platforms: android, ios, web
     */
    font_feature_settings?: Type<string | DivExpression>;
    /**
     * Font size.
     */
    font_size?: Type<number | DivExpression>;
    /**
     * Unit of measurement:`px` — a physical pixel.`dp` — a logical pixel that doesn't depend on
     * screen density.`sp` — a logical pixel that depends on the font size on a device. Specify
     * height in `sp`. Only available on Android.
     *
     * Platforms: android, ios
     */
    font_size_unit?: Type<DivSizeUnit | DivExpression>;
    /**
     * Style.
     */
    font_weight?: Type<DivFontWeight | DivExpression>;
    /**
     * Style. Numeric value.
     *
     * Platforms: ios, web, android
     */
    font_weight_value?: Type<number | DivExpression>;
    /**
     * Spacing between characters.
     */
    letter_spacing?: Type<number | DivExpression>;
    /**
     * Line spacing of the text. Units specified in `font_size_unit`.
     */
    line_height?: Type<number | DivExpression>;
    /**
     * Ordinal number of a character which the range begins from. The first character has a number
     * `0`.
     */
    start?: Type<number | DivExpression>;
    /**
     * Strikethrough.
     */
    strike?: Type<DivLineStyle | DivExpression>;
    /**
     * Text color.
     */
    text_color?: Type<string | DivExpression>;
    /**
     * Parameters of the shadow applied to the character range.
     *
     * Platforms: android, web
     */
    text_shadow?: Type<IDivShadow>;
    /**
     * Top margin of the character range. Units specified in `font_size_unit`.
     */
    top_offset?: Type<number | DivExpression>;
    /**
     * Underline.
     */
    underline?: Type<DivLineStyle | DivExpression>;
}

declare type DivTextAlignmentVertical = 'top' | 'center' | 'bottom' | 'baseline';

declare type DivTextGradient = DivLinearGradient | DivRadialGradient;

declare type DivTextRangeBackground = DivSolidBackground | DivCloudBackground;

/**
 * Character range border.
 */
interface IDivTextRangeBorder {
    /**
     * One radius of element and stroke corner rounding. Has a lower priority than `corners_radius`.
     */
    corner_radius?: Type<number | DivExpression>;
    /**
     * Stroke style.
     */
    stroke?: Type<IDivStroke>;
}

/**
 * Timer.
 */
interface IDivTimer {
    /**
     * Timer duration in milliseconds. If the parameter is `0` or not specified, the timer runs
     * indefinitely (until the timer stop event occurs).
     */
    duration?: Type<number | DivExpression>;
    /**
     * Actions performed when the timer ends: when the timer has counted to the `duration` value or
     * the `div-action://timer?action=stop&id=<id>` command has been received.
     */
    end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Timer ID. Must be unique. Used when calling actions for the selected timer, for example:
     * start, stop.
     */
    id: Type<string>;
    /**
     * Actions that are performed on each count of the timer.
     */
    tick_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Duration of time intervals in milliseconds between counts. If the parameter is not specified,
     * the timer counts down from `0` to `duration` without calling `tick_actions`.
     */
    tick_interval?: Type<number | DivExpression>;
    /**
     * Name of the variable where the current timer value is stored. Updated on each count or when
     * the timer commands are called (start, stop, and so on), except the cancel command.
     */
    value_variable?: Type<string>;
}

/**
 * Tooltip.
 */
interface IDivTooltip {
    /**
     * Tooltip appearance animation. By default, the tooltip will be appearing gradually with an
     * offset from the anchor point by 10 dp.
     *
     * Platforms: android, web
     */
    animation_in?: Type<IDivAnimation>;
    /**
     * Tooltip disappearance animation. By default, the tooltip will disappear gradually with an
     * offset from the anchor point by 10 dp.
     *
     * Platforms: android, web
     */
    animation_out?: Type<IDivAnimation>;
    /**
     * An element that will be shown in a tooltip. If there are tooltips inside an element, they
     * won't be shown.
     */
    div: Type<Div>;
    /**
     * Duration of the tooltip visibility in milliseconds. When the value is set to `0`, the tooltip
     * will be visible until the user hides it.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Tooltip ID. It is used to avoid re-showing. It must be unique for all element tooltips.
     */
    id: Type<string>;
    /**
     * Shift relative to an anchor point.
     */
    offset?: Type<IDivPoint>;
    /**
     * The position of a tooltip relative to an element it belongs to.
     */
    position: Type<DivTooltipPosition | DivExpression>;
}
declare type DivTooltipPosition = 'left' | 'top-left' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'center';

/**
 * Transformation of the element.
 */
interface IDivTransform {
    /**
     * X coordinate of the rotation axis.
     */
    pivot_x?: Type<DivPivot>;
    /**
     * Y coordinate of the rotation axis.
     */
    pivot_y?: Type<DivPivot>;
    /**
     * Degrees of the element rotation. Positive values used for clockwise rotation.
     */
    rotation?: Type<number | DivExpression>;
}

interface IDivTransitionBase {
    /**
     * Animation duration in milliseconds.
     */
    duration?: Type<number | DivExpression>;
    /**
     * Transition speed nature.
     */
    interpolator?: Type<DivAnimationInterpolator | DivExpression>;
    /**
     * Delay in milliseconds before animation starts.
     */
    start_delay?: Type<number | DivExpression>;
}

declare type DivTransitionSelector = 'none' | 'data_change' | 'state_change' | 'any_change';

declare type DivTransitionTrigger = 'data_change' | 'state_change' | 'visibility_change';

/**
 * A trigger that causes an action when activated.
 */
interface IDivTrigger {
    /**
     * Action when a trigger is activated.
     */
    actions: Type<NonEmptyArray<IDivAction>>;
    /**
     * Condition for activating a trigger. For example, `liked && subscribed`.
     */
    condition: Type<IntBoolean | DivExpression>;
    /**
     * Trigger activation mode:`on_condition` — a trigger is activated when the condition changes
     * from `false` to `true`;`on_variable` — a trigger is activated when the condition is met and
     * the variable value changes.
     */
    mode?: Type<DivTriggerMode | DivExpression>;
}
declare type DivTriggerMode = 'on_condition' | 'on_variable';

declare type DivTypedValue = StringValue | IntegerValue | NumberValue | ColorValue | BooleanValue | UrlValue | DictValue | ArrayValue;

declare type DivVariable = StringVariable | NumberVariable | IntegerVariable | BooleanVariable | ColorVariable | UrlVariable | DictVariable | ArrayVariable;

/**
 * Video.
 */
declare class DivVideo<T extends DivVideoProps = DivVideoProps> {
    readonly _props?: Exact<DivVideoProps, T>;
    readonly type = "video";
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Fixed aspect ratio. The element's height is calculated based on the width, ignoring the
     * `height` value.
     */
    aspect?: Type<IDivAspect>;
    /**
     * This option turns on automatic video playback. On the web, the video starts if muted playback
     * is turned on.
     */
    autostart?: Type<IntBoolean | DivExpression>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Actions performed during video loading.
     */
    buffering_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Time interval from the video beginning to the current position in milliseconds.
     */
    elapsed_time_variable?: Type<string>;
    /**
     * Actions performed after the video ends.
     */
    end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Actions performed when playback can't be continued due to a player error.
     */
    fatal_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * This option mutes video.
     */
    muted?: Type<IntBoolean | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Actions performed when playback is paused.
     */
    pause_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Additional information that can be used in the player.
     *
     * Platforms: android, ios
     */
    player_settings_payload?: Type<{}>;
    /**
     * Enables video preloading.
     *
     * Platforms: android, web
     */
    preload_required?: Type<IntBoolean | DivExpression>;
    /**
     * Video preview encoded in `base64`. Will be shown until the video is ready to play. `Data url`
     * format: `data:[;base64],<data>`
     */
    preview?: Type<string | DivExpression>;
    /**
     * This option turns on video repeat.
     */
    repeatable?: Type<IntBoolean | DivExpression>;
    /**
     * Actions performed when video playback resumes.
     */
    resume_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Video scaling:`fit` places the entire video into the element (free space is filled with
     * background);`fill` scales the video to the element size and cuts off anything that's extra.
     */
    scale?: Type<DivVideoScale | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    video_sources: Type<NonEmptyArray<DivVideoSource>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
    constructor(props: Exact<DivVideoProps, T>);
}
interface DivVideoProps {
    /**
     * Accessibility settings.
     *
     * Platforms: android, ios, web
     */
    accessibility?: Type<IDivAccessibility>;
    /**
     * Horizontal alignment of an element inside the parent element.
     */
    alignment_horizontal?: Type<DivAlignmentHorizontal | DivExpression>;
    /**
     * Vertical alignment of an element inside the parent element.
     */
    alignment_vertical?: Type<DivAlignmentVertical | DivExpression>;
    /**
     * Sets transparency of the entire element: `0` — completely transparent, `1` — opaque.
     */
    alpha?: Type<number | DivExpression>;
    /**
     * Declaration of animators that change variable values over time.
     *
     * Platforms: android, ios, web
     */
    animators?: Type<NonEmptyArray<DivAnimator>>;
    /**
     * Fixed aspect ratio. The element's height is calculated based on the width, ignoring the
     * `height` value.
     */
    aspect?: Type<IDivAspect>;
    /**
     * This option turns on automatic video playback. On the web, the video starts if muted playback
     * is turned on.
     */
    autostart?: Type<IntBoolean | DivExpression>;
    /**
     * Element background. It can contain multiple layers.
     */
    background?: Type<NonEmptyArray<DivBackground>>;
    /**
     * Element stroke.
     */
    border?: Type<IDivBorder>;
    /**
     * Actions performed during video loading.
     */
    buffering_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Merges cells in a column of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    column_span?: Type<number | DivExpression>;
    /**
     * Actions when an element disappears from the screen.
     *
     * Platforms: android, ios, web
     */
    disappear_actions?: Type<NonEmptyArray<IDivDisappearAction>>;
    /**
     * Time interval from the video beginning to the current position in milliseconds.
     */
    elapsed_time_variable?: Type<string>;
    /**
     * Actions performed after the video ends.
     */
    end_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Extensions for additional processing of an element. The list of extensions is given in
     * [DivExtension](../../extensions).
     *
     * Platforms: android, ios, web
     */
    extensions?: Type<NonEmptyArray<IDivExtension>>;
    /**
     * Actions performed when playback can't be continued due to a player error.
     */
    fatal_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Parameters when focusing on an element or losing focus.
     */
    focus?: Type<IDivFocus>;
    /**
     * User functions.
     *
     * Platforms: android, ios
     */
    functions?: Type<NonEmptyArray<IDivFunction>>;
    /**
     * Element height. For Android: if there is text in this or in a child element, specify height in
     * `sp` to scale the element together with the text. To learn more about units of size
     * measurement, see [Layout inside the card](../../layout).
     */
    height?: Type<DivSize>;
    /**
     * Element ID. It must be unique within the root element. It is used as `accessibilityIdentifier`
     * on iOS.
     */
    id?: Type<string>;
    /**
     * Provides data on the actual size of the element.
     *
     * Platforms: android, ios, web
     */
    layout_provider?: Type<IDivLayoutProvider>;
    /**
     * External margins from the element stroke.
     */
    margins?: Type<IDivEdgeInsets>;
    /**
     * This option mutes video.
     */
    muted?: Type<IntBoolean | DivExpression>;
    /**
     * Internal margins from the element stroke.
     */
    paddings?: Type<IDivEdgeInsets>;
    /**
     * Actions performed when playback is paused.
     */
    pause_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Additional information that can be used in the player.
     *
     * Platforms: android, ios
     */
    player_settings_payload?: Type<{}>;
    /**
     * Enables video preloading.
     *
     * Platforms: android, web
     */
    preload_required?: Type<IntBoolean | DivExpression>;
    /**
     * Video preview encoded in `base64`. Will be shown until the video is ready to play. `Data url`
     * format: `data:[;base64],<data>`
     */
    preview?: Type<string | DivExpression>;
    /**
     * This option turns on video repeat.
     */
    repeatable?: Type<IntBoolean | DivExpression>;
    /**
     * Actions performed when video playback resumes.
     */
    resume_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * ID for the div object structure. Used to optimize block reuse. See [block
     * reuse](../../reuse/reuse.md).
     *
     * Platforms: android, ios
     */
    reuse_id?: Type<string | DivExpression>;
    /**
     * Merges cells in a string of the [grid](div-grid.md) element.
     *
     * Platforms: android, ios, web
     */
    row_span?: Type<number | DivExpression>;
    /**
     * Video scaling:`fit` places the entire video into the element (free space is filled with
     * background);`fill` scales the video to the element size and cuts off anything that's extra.
     */
    scale?: Type<DivVideoScale | DivExpression>;
    /**
     * List of [actions](div-action.md) to be executed when selecting an element in
     * [pager](div-pager.md).
     *
     * Platforms: android, ios, web
     */
    selected_actions?: Type<NonEmptyArray<IDivAction>>;
    /**
     * Tooltips linked to an element. A tooltip can be shown by `div-action://show_tooltip?id=`,
     * hidden by `div-action://hide_tooltip?id=` where `id` — tooltip id.
     *
     * Platforms: android, ios, web
     */
    tooltips?: Type<NonEmptyArray<IDivTooltip>>;
    /**
     * Applies the passed transformation to the element. Content that doesn't fit into the original
     * view area is cut off.
     *
     * Platforms: android, ios, web
     */
    transform?: Type<IDivTransform>;
    /**
     * Change animation. It is played when the position or size of an element changes in the new
     * layout.
     *
     * Platforms: android, ios, web
     */
    transition_change?: Type<DivChangeTransition>;
    /**
     * Appearance animation. It is played when an element with a new ID appears. To learn more about
     * the concept of transitions, see [Animated
     * transitions](../../interaction#animation/transition-animation).
     *
     * Platforms: android, ios, web
     */
    transition_in?: Type<DivAppearanceTransition>;
    /**
     * Disappearance animation. It is played when an element disappears in the new layout.
     *
     * Platforms: android, ios, web
     */
    transition_out?: Type<DivAppearanceTransition>;
    /**
     * Animation starting triggers. Default value: `[state_change, visibility_change]`.
     *
     * Platforms: android, ios, web
     */
    transition_triggers?: Type<NonEmptyArray<DivTransitionTrigger>>;
    /**
     * Triggers for changing variables within an element.
     *
     * Platforms: android, ios, web
     */
    variable_triggers?: Type<NonEmptyArray<IDivTrigger>>;
    /**
     * Declaration of variables that can be used within an element. Variables declared in this array
     * can only be used within the element and its child elements.
     *
     * Platforms: ios, web, android
     */
    variables?: Type<NonEmptyArray<DivVariable>>;
    video_sources: Type<NonEmptyArray<DivVideoSource>>;
    /**
     * Element visibility.
     */
    visibility?: Type<DivVisibility | DivExpression>;
    /**
     * Tracking visibility of a single element. Not used if the `visibility_actions` parameter is
     * set.
     *
     * Platforms: android, ios, web
     */
    visibility_action?: Type<IDivVisibilityAction>;
    /**
     * Actions when an element appears on the screen.
     *
     * Platforms: android, ios, web
     */
    visibility_actions?: Type<NonEmptyArray<IDivVisibilityAction>>;
    /**
     * Element width.
     */
    width?: Type<DivSize>;
}

declare type DivVideoScale = 'fill' | 'no_scale' | 'fit';

declare class DivVideoSource<T extends DivVideoSourceProps = DivVideoSourceProps> {
    readonly _props?: Exact<DivVideoSourceProps, T>;
    readonly type = "video_source";
    /**
     * Media file bitrate: Data transfer rate in a video stream, measured in kilobits per second
     * (kbps).
     */
    bitrate?: Type<number | DivExpression>;
    /**
     * MIME type (Multipurpose Internet Mail Extensions): A string that defines the file type and
     * helps process it correctly.
     */
    mime_type: Type<string | DivExpression>;
    /**
     * Media file resolution.
     */
    resolution?: Type<DivVideoSourceResolution>;
    /**
     * Link to the media file available for playback or download.
     */
    url: Type<string | DivExpression>;
    constructor(props: Exact<DivVideoSourceProps, T>);
}
interface DivVideoSourceProps {
    /**
     * Media file bitrate: Data transfer rate in a video stream, measured in kilobits per second
     * (kbps).
     */
    bitrate?: Type<number | DivExpression>;
    /**
     * MIME type (Multipurpose Internet Mail Extensions): A string that defines the file type and
     * helps process it correctly.
     */
    mime_type: Type<string | DivExpression>;
    /**
     * Media file resolution.
     */
    resolution?: Type<DivVideoSourceResolution>;
    /**
     * Link to the media file available for playback or download.
     */
    url: Type<string | DivExpression>;
}
/**
 * Media file resolution.
 */
declare class DivVideoSourceResolution<T extends DivVideoSourceResolutionProps = DivVideoSourceResolutionProps> {
    readonly _props?: Exact<DivVideoSourceResolutionProps, T>;
    readonly type = "resolution";
    /**
     * Media file frame height.
     */
    height: Type<number | DivExpression>;
    /**
     * Media file frame width.
     */
    width: Type<number | DivExpression>;
    constructor(props: Exact<DivVideoSourceResolutionProps, T>);
}
interface DivVideoSourceResolutionProps {
    /**
     * Media file frame height.
     */
    height: Type<number | DivExpression>;
    /**
     * Media file frame width.
     */
    width: Type<number | DivExpression>;
}

declare type DivVisibility = 'visible' | 'invisible' | 'gone';

/**
 * Actions performed when an element becomes visible.
 */
interface IDivVisibilityAction {
    /**
     * Callbacks that are called after [data loading](../../interaction#loading-data).
     *
     * Platforms: android, ios, web
     */
    download_callbacks?: Type<IDivDownloadCallbacks>;
    /**
     * The parameter disables the action. Disabled actions stop listening to their associated event
     * (clicks, changes in visibility, and so on).
     */
    is_enabled?: Type<IntBoolean | DivExpression>;
    /**
     * Logging ID.
     */
    log_id: Type<string | DivExpression>;
    /**
     * Limit on the number of loggings. If `0`, the limit is removed.
     */
    log_limit?: Type<number | DivExpression>;
    /**
     * Additional parameters, passed to the host application.
     */
    payload?: Type<{}>;
    /**
     * Referer URL for logging.
     *
     * Platforms: android, ios
     */
    referer?: Type<string | DivExpression>;
    /**
     * The ID of the element within which the specified action will be performed.
     *
     * Platforms: android, ios, web
     */
    scope_id?: Type<string>;
    typed?: Type<DivActionTyped>;
    /**
     * URL. Possible values: `url` or `div-action://`. To learn more, see [Interaction with
     * elements](../../interaction).
     */
    url?: Type<string | DivExpression>;
    /**
     * Time in milliseconds during which an element must be visible to trigger `visibility-action`.
     */
    visibility_duration?: Type<number | DivExpression>;
    /**
     * Percentage of the visible part of an element that triggers `visibility-action`.
     */
    visibility_percentage?: Type<number | DivExpression>;
}

/**
 * The size of an element adjusts to its contents.
 */
declare class DivWrapContentSize<T extends DivWrapContentSizeProps = DivWrapContentSizeProps> {
    readonly _props?: Exact<DivWrapContentSizeProps, T>;
    readonly type = "wrap_content";
    /**
     * The final size mustn't exceed the parent one. On iOS and in a default browser `false`. On
     * Android always `true`.
     */
    constrained?: Type<IntBoolean | DivExpression>;
    /**
     * Maximum size of an element.
     */
    max_size?: Type<IDivWrapContentSizeConstraintSize>;
    /**
     * Minimum size of an element.
     */
    min_size?: Type<IDivWrapContentSizeConstraintSize>;
    constructor(props?: Exact<DivWrapContentSizeProps, T>);
}
interface DivWrapContentSizeProps {
    /**
     * The final size mustn't exceed the parent one. On iOS and in a default browser `false`. On
     * Android always `true`.
     */
    constrained?: Type<IntBoolean | DivExpression>;
    /**
     * Maximum size of an element.
     */
    max_size?: Type<IDivWrapContentSizeConstraintSize>;
    /**
     * Minimum size of an element.
     */
    min_size?: Type<IDivWrapContentSizeConstraintSize>;
}
interface IDivWrapContentSizeConstraintSize {
    /**
     * Unit of measurement:`px` — a physical pixel.`dp` — a logical pixel that doesn't depend on
     * screen density.`sp` — a logical pixel that depends on the font size on a device. Specify
     * height in `sp`. Only available on Android.
     */
    unit?: Type<DivSizeUnit | DivExpression>;
    value: Type<number | DivExpression>;
}

/**
 * Specifies the end of the container as the scrolling end position.
 */
declare class EndDestination<T extends EndDestinationProps = EndDestinationProps> {
    readonly _props?: Exact<EndDestinationProps, T>;
    readonly type = "end";
    constructor(props?: Exact<EndDestinationProps, T>);
}
interface EndDestinationProps {
}

/**
 * Specifies the element with the given index as the scrolling end position.
 */
declare class IndexDestination<T extends IndexDestinationProps = IndexDestinationProps> {
    readonly _props?: Exact<IndexDestinationProps, T>;
    readonly type = "index";
    /**
     * Container element index.
     */
    value: Type<number | DivExpression>;
    constructor(props: Exact<IndexDestinationProps, T>);
}
interface IndexDestinationProps {
    /**
     * Container element index.
     */
    value: Type<number | DivExpression>;
}

declare class IntegerValue<T extends IntegerValueProps = IntegerValueProps> {
    readonly _props?: Exact<IntegerValueProps, T>;
    readonly type = "integer";
    value: Type<number | DivExpression>;
    constructor(props: Exact<IntegerValueProps, T>);
}
interface IntegerValueProps {
    value: Type<number | DivExpression>;
}

/**
 * An integer variable.
 */
declare class IntegerVariable<T extends IntegerVariableProps = IntegerVariableProps> {
    readonly _props?: Exact<IntegerVariableProps, T>;
    readonly type = "integer";
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<number>;
    constructor(props: Exact<IntegerVariableProps, T>);
}
interface IntegerVariableProps {
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<number>;
}

declare class NumberValue<T extends NumberValueProps = NumberValueProps> {
    readonly _props?: Exact<NumberValueProps, T>;
    readonly type = "number";
    value: Type<number | DivExpression>;
    constructor(props: Exact<NumberValueProps, T>);
}
interface NumberValueProps {
    value: Type<number | DivExpression>;
}

/**
 * A floating-point variable.
 */
declare class NumberVariable<T extends NumberVariableProps = NumberVariableProps> {
    readonly _props?: Exact<NumberVariableProps, T>;
    readonly type = "number";
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<number>;
    constructor(props: Exact<NumberVariableProps, T>);
}
interface NumberVariableProps {
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<number>;
}

/**
 * Specifies the position measured in `dp` from the container start as the scrolling end
 * position. Only applies in `gallery`.
 */
declare class OffsetDestination<T extends OffsetDestinationProps = OffsetDestinationProps> {
    readonly _props?: Exact<OffsetDestinationProps, T>;
    readonly type = "offset";
    /**
     * Position measured in `dp`.
     */
    value: Type<number | DivExpression>;
    constructor(props: Exact<OffsetDestinationProps, T>);
}
interface OffsetDestinationProps {
    /**
     * Position measured in `dp`.
     */
    value: Type<number | DivExpression>;
}

/**
 * Specifies the start of the container as the scrolling end position.
 */
declare class StartDestination<T extends StartDestinationProps = StartDestinationProps> {
    readonly _props?: Exact<StartDestinationProps, T>;
    readonly type = "start";
    constructor(props?: Exact<StartDestinationProps, T>);
}
interface StartDestinationProps {
}

declare class StringValue<T extends StringValueProps = StringValueProps> {
    readonly _props?: Exact<StringValueProps, T>;
    readonly type = "string";
    value: Type<string | DivExpression>;
    constructor(props: Exact<StringValueProps, T>);
}
interface StringValueProps {
    value: Type<string | DivExpression>;
}

/**
 * A string variable.
 */
declare class StringVariable<T extends StringVariableProps = StringVariableProps> {
    readonly _props?: Exact<StringVariableProps, T>;
    readonly type = "string";
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<string>;
    constructor(props: Exact<StringVariableProps, T>);
}
interface StringVariableProps {
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<string>;
}

declare class UrlValue<T extends UrlValueProps = UrlValueProps> {
    readonly _props?: Exact<UrlValueProps, T>;
    readonly type = "url";
    value: Type<string | DivExpression>;
    constructor(props: Exact<UrlValueProps, T>);
}
interface UrlValueProps {
    value: Type<string | DivExpression>;
}

/**
 * Variable — URL as a string.
 */
declare class UrlVariable<T extends UrlVariableProps = UrlVariableProps> {
    readonly _props?: Exact<UrlVariableProps, T>;
    readonly type = "url";
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<string>;
    constructor(props: Exact<UrlVariableProps, T>);
}
interface UrlVariableProps {
    /**
     * Variable name.
     */
    name: Type<string>;
    /**
     * Value.
     */
    value: Type<string>;
}

/**
 * @deprecated use DivLinearGradient instead.
 */
declare class DivGradientBackground extends DivLinearGradient {
}

declare function fixed(value: number | DivExpression, unit?: DivSizeUnit | undefined): DivFixedSize;
declare function matchParent(): DivMatchParentSize;
declare function weighted(weight: number): DivMatchParentSize;
declare function wrapContent(): DivWrapContentSize;

declare function expression(expression: string): DivExpression;
declare function escapeExpression(str: string): string;

declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
declare type IsNeverType<T> = [T] extends [never] ? true : false;
declare type NU<T> = unknown extends T ? {} : IsNeverType<T> extends true ? {} : T;
declare type EU<T> = Exclude<T, undefined>;
declare type Var<U extends string, T> = TemplatePropertyReference<U, T>;
declare type FilterVars<T extends {}, X> = {
    [K in keyof T]: T[K] extends Var<infer V, infer T> ? {
        [I in V]: T;
    } : T[K] extends (infer S)[] ? NU<DistributeTemplateVars<S, X>> : T[K] extends number ? {} : T[K] extends infer Y ? NU<Vars<Y, X>> : {};
};
declare type TemplateVars<T, X> = T extends TemplateBlock<infer K2, any> ? K2 extends keyof X ? Vars<EU<T['_props']>, X> & Omit<Vars<X[K2], X>, keyof EU<T['_props']>> : {} : Vars<T, X>;
declare type DistributeTemplateVars<T, X> = UnionToIntersection<T extends any ? TemplateVars<T, X> : never>;
declare type Vars<T, X> = '_props' extends keyof T ? UnionToIntersection<FilterVars<EU<T['_props']>, X>[keyof EU<T['_props']>]> : UnionToIntersection<FilterVars<T, X>[keyof T]>;
declare type VarMap<T, X> = {
    [K in keyof T]: T[K] extends Var<string, unknown> ? K : undefined extends Vars<{
        K: T[K];
    }, X> ? never : K;
};
declare type VarList<T, X> = VarMap<T, X>[keyof T];
declare type OptionalVars<T extends Div, X> = {
    [K in Exclude<keyof T, 'type' | '_props' | VarList<T['_props'], X>>]?: Exclude<T[K], TemplatePropertyReference>;
};
declare type TemplateHelper<U extends ITemplates> = {
    [K in keyof U & string]: U[K] extends TemplateBlock<infer K2, infer P> ? K2 extends keyof U ? (props: Omit<Vars<U[K2], U> & OptionalVars<U[K2], U>, keyof P> & Vars<P, U>) => TemplateBlock<K> : unknown : (props: Vars<U[K], U> & OptionalVars<U[K], U>) => TemplateBlock<K>;
};
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
declare function templateHelper<T extends ITemplates>(templates: T): TemplateHelper<T>;

declare type TemplateResolvedAction<T> = (props: {
    name: string;
    template: Div;
    plainDeps: string[];
    depsResolved: {
        [k: string]: T;
    };
}) => T;
/**
 * Templates walker. It resolves template dependencies on each step, and also can run a callback after that
 * @param templates
 * @param resolvedAction Callback for the template. It will be called after resolving dependencies
 * @param depsResolved Deps resolve cache, for example, for common templates
 */
declare function runResolveDeps<T>(templates: ITemplates, resolvedAction: TemplateResolvedAction<T>, depsResolved?: {
    [k: string]: T;
}): {
    [k: string]: T;
};
/**
 * Search for a templates dependencies
 * @param templates
 * @param depsResolved Deps resolution cache
 * @returns Map with deps for each template
 */
declare function templatesDepsMap(templates: ITemplates, depsResolved?: {
    [k: string]: string[];
}): {
    [k: string]: string[];
};

interface ThelperWithMemo<T extends ITemplates> {
    thelper: TemplateHelper<T>;
    used: Set<string>;
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
declare function thelperWithMemo<T extends ITemplates>(options?: {
    customName?: (x: string) => string;
}): ThelperWithMemo<T>;

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
declare function rewriteNames<T extends ITemplates>(templates: T, rename: (name: string, templates: T) => string, resolvedNames?: {
    [k: string]: string;
}): {
    templates: T;
    resolvedNames: {
        [k: string]: string;
    };
};

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
declare function rewriteRefs<T extends ITemplates>(templates: T): T;

declare function getTemplateHash(template: Div): string;
declare function thelperVersion(templates: ITemplates): (name: string) => string;
/**
 * Replaces a TemplateBlock calls with the concat of the name with a hash (md5).
 * The names of the root templates are not changed! (templates object keys)
 * @param templates
 * @param resolvedNames Names cache
 * @returns A map with new names
 */
declare function rewriteTemplateVersions<T extends ITemplates>(templates: T, resolvedNames?: {
    [k: string]: string;
}): {
    templates: T;
    resolvedNames: {
        [k: string]: string;
    };
};

export { AccessibilityType, ArrayValue, ArrayValueProps, ArrayVariable, ArrayVariableProps, BooleanValue, BooleanValueProps, BooleanVariable, BooleanVariableProps, ColorValue, ColorValueProps, ColorVariable, ColorVariableProps, ContentText, ContentTextProps, ContentUrl, ContentUrlProps, DelimiterStyleOrientation, DictValue, DictValueProps, DictVariable, DictVariableProps, Div, DivAccessibilityMode, DivAccessibilityType, DivActionAnimatorStart, DivActionAnimatorStartProps, DivActionAnimatorStop, DivActionAnimatorStopProps, DivActionArrayInsertValue, DivActionArrayInsertValueProps, DivActionArrayRemoveValue, DivActionArrayRemoveValueProps, DivActionArraySetValue, DivActionArraySetValueProps, DivActionClearFocus, DivActionClearFocusProps, DivActionCopyToClipboard, DivActionCopyToClipboardContent, DivActionCopyToClipboardProps, DivActionDictSetValue, DivActionDictSetValueProps, DivActionDownload, DivActionDownloadProps, DivActionFocusElement, DivActionFocusElementProps, DivActionHideTooltip, DivActionHideTooltipProps, DivActionScrollBy, DivActionScrollByOverflow, DivActionScrollByProps, DivActionScrollDestination, DivActionScrollTo, DivActionScrollToProps, DivActionSetState, DivActionSetStateProps, DivActionSetStoredValue, DivActionSetStoredValueProps, DivActionSetVariable, DivActionSetVariableProps, DivActionShowTooltip, DivActionShowTooltipProps, DivActionSubmit, DivActionSubmitProps, DivActionTarget, DivActionTimer, DivActionTimerAction, DivActionTimerProps, DivActionTyped, DivActionVideo, DivActionVideoAction, DivActionVideoProps, DivAlignmentHorizontal, DivAlignmentVertical, DivAnimationDirection, DivAnimationInterpolator, DivAnimationName, DivAnimator, DivAppearanceSetTransition, DivAppearanceSetTransitionProps, DivAppearanceTransition, DivBackground, DivBlendMode, DivBlur, DivBlurProps, DivChangeBoundsTransition, DivChangeBoundsTransitionProps, DivChangeSetTransition, DivChangeSetTransitionProps, DivChangeTransition, DivCircleShape, DivCircleShapeProps, DivCloudBackground, DivCloudBackgroundProps, DivColorAnimator, DivColorAnimatorProps, DivContainer, DivContainerLayoutMode, DivContainerOrientation, DivContainerProps, DivContainerProps0, DivContainerProps1, DivContainerPropsBase, DivContentAlignmentHorizontal, DivContentAlignmentVertical, DivCount, DivCurrencyInputMask, DivCurrencyInputMaskProps, DivCustom, DivCustomProps, DivDefaultIndicatorItemPlacement, DivDefaultIndicatorItemPlacementProps, DivDrawable, DivEvaluableType, DivExpression, DivFadeTransition, DivFadeTransitionProps, DivFilter, DivFilterRtlMirror, DivFilterRtlMirrorProps, DivFixedCount, DivFixedCountProps, DivFixedLengthInputMask, DivFixedLengthInputMaskProps, DivFixedSize, DivFixedSizeProps, DivFontWeight, DivGallery, DivGalleryCrossContentAlignment, DivGalleryOrientation, DivGalleryProps, DivGalleryScrollMode, DivGalleryScrollbar, DivGifImage, DivGifImageProps, DivGradientBackground, DivGrid, DivGridProps, DivImage, DivImageBackground, DivImageBackgroundProps, DivImageProps, DivImageScale, DivIndicator, DivIndicatorAnimation, DivIndicatorItemPlacement, DivIndicatorProps, DivInfinityCount, DivInfinityCountProps, DivInput, DivInputAutocapitalization, DivInputEnterKeyType, DivInputFilter, DivInputFilterExpression, DivInputFilterExpressionProps, DivInputFilterRegex, DivInputFilterRegexProps, DivInputKeyboardType, DivInputMask, DivInputProps, DivInputValidator, DivInputValidatorExpression, DivInputValidatorExpressionProps, DivInputValidatorRegex, DivInputValidatorRegexProps, DivLineStyle, DivLinearGradient, DivLinearGradientProps, DivMatchParentSize, DivMatchParentSizeProps, DivNeighbourPageSize, DivNeighbourPageSizeProps, DivNinePatchBackground, DivNinePatchBackgroundProps, DivNumberAnimator, DivNumberAnimatorProps, DivPageContentSize, DivPageContentSizeAlignment, DivPageContentSizeProps, DivPageSize, DivPageSizeProps, DivPageTransformation, DivPageTransformationOverlap, DivPageTransformationOverlapProps, DivPageTransformationSlide, DivPageTransformationSlideProps, DivPager, DivPagerLayoutMode, DivPagerOrientation, DivPagerProps, DivPatchMode, DivPercentageSize, DivPercentageSizeProps, DivPhoneInputMask, DivPhoneInputMaskProps, DivPivot, DivPivotFixed, DivPivotFixedProps, DivPivotPercentage, DivPivotPercentageProps, DivRadialGradient, DivRadialGradientCenter, DivRadialGradientFixedCenter, DivRadialGradientFixedCenterProps, DivRadialGradientProps, DivRadialGradientRadius, DivRadialGradientRelativeCenter, DivRadialGradientRelativeCenterProps, DivRadialGradientRelativeRadius, DivRadialGradientRelativeRadiusProps, DivRadialGradientRelativeRadiusValue, DivRoundedRectangleShape, DivRoundedRectangleShapeProps, DivScaleTransition, DivScaleTransitionProps, DivSelect, DivSelectProps, DivSeparator, DivSeparatorProps, DivShape, DivShapeDrawable, DivShapeDrawableProps, DivSize, DivSizeUnit, DivSlideTransition, DivSlideTransitionEdge, DivSlideTransitionProps, DivSlider, DivSliderProps, DivSolidBackground, DivSolidBackgroundProps, DivState, DivStateProps, DivStretchIndicatorItemPlacement, DivStretchIndicatorItemPlacementProps, DivSwitch, DivSwitchProps, DivTabs, DivTabsProps, DivText, DivTextAlignmentVertical, DivTextGradient, DivTextProps, DivTextRangeBackground, DivTextTruncate, DivTooltipPosition, DivTransitionSelector, DivTransitionTrigger, DivTriggerMode, DivTypedValue, DivVariable, DivVideo, DivVideoProps, DivVideoScale, DivVideoSource, DivVideoSourceProps, DivVideoSourceResolution, DivVideoSourceResolutionProps, DivVisibility, DivWrapContentSize, DivWrapContentSizeProps, EndDestination, EndDestinationProps, Exact, IDivAbsoluteEdgeInsets, IDivAccessibility, IDivAction, IDivActionMenuItem, IDivActionSubmitRequest, IDivAnimation, IDivAnimatorBase, IDivAspect, IDivBase, IDivBorder, IDivCollectionItemBuilder, IDivCollectionItemBuilderPrototype, IDivContainerSeparator, IDivCornersRadius, IDivData, IDivDataState, IDivDimension, IDivDisappearAction, IDivDownloadCallbacks, IDivEdgeInsets, IDivExtension, IDivFixedLengthInputMaskPatternElement, IDivFocus, IDivFocusNextFocusIds, IDivFunction, IDivFunctionArgument, IDivInputMaskBase, IDivInputNativeInterface, IDivInputValidatorBase, IDivLayoutProvider, IDivPatch, IDivPatchChange, IDivPoint, IDivSelectOption, IDivSeparatorDelimiterStyle, IDivShadow, IDivSightAction, IDivSliderRange, IDivSliderTextStyle, IDivStateState, IDivStroke, IDivTabsItem, IDivTabsTabTitleDelimiter, IDivTabsTabTitleStyle, IDivTextEllipsis, IDivTextImage, IDivTextRange, IDivTextRangeBorder, IDivTimer, IDivTooltip, IDivTransform, IDivTransitionBase, IDivTrigger, IDivVisibilityAction, IDivWrapContentSizeConstraintSize, IImageAccessibility, IRequestHeader, ITemplates, ImageIndexingDirection, IndexDestination, IndexDestinationProps, IntBoolean, IntegerValue, IntegerValueProps, IntegerVariable, IntegerVariableProps, NonEmptyArray, NumberValue, NumberValueProps, NumberVariable, NumberVariableProps, OffsetDestination, OffsetDestinationProps, RequestMethod, SafeDivExpression, StartDestination, StartDestinationProps, StringValue, StringValueProps, StringVariable, StringVariableProps, TabTitleStyleAnimationType, TemplateBlock, TemplateHelper, TemplatePropertyReference, TemplateResolvedAction, ThelperWithMemo, Type, UrlValue, UrlValueProps, UrlVariable, UrlVariableProps, copyTemplates, divCard, escapeCard, escapeExpression, expression, fixed, getTemplateHash, matchParent, reference, rewriteNames, rewriteRefs, rewriteTemplateVersions, runResolveDeps, template, templateHelper, templatesDepsMap, thelperVersion, thelperWithMemo, treeWalkDFS, weighted, wrapContent };
