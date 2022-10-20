# Generated code. Do not modify.

from __future__ import annotations
from pydivkit.core import BaseDiv, Field
import enum
import typing

from . import div
from . import div_accessibility
from . import div_action
from . import div_alignment_horizontal
from . import div_alignment_vertical
from . import div_animation
from . import div_appearance_transition
from . import div_background
from . import div_border
from . import div_change_transition
from . import div_edge_insets
from . import div_extension
from . import div_focus
from . import div_size
from . import div_tooltip
from . import div_transform
from . import div_transition_trigger
from . import div_visibility
from . import div_visibility_action


# Container. It contains other elements and is responsible for their location. It
# is used to arrange elements vertically, horizontally, and with an overlay in a
# certain order, simulating the third dimension.
class DivContainer(BaseDiv):

    def __init__(
        self, *,
        items: typing.List[div.Div],
        type: str = 'container',
        accessibility: typing.Optional[div_accessibility.DivAccessibility] = None,
        action: typing.Optional[div_action.DivAction] = None,
        action_animation: typing.Optional[div_animation.DivAnimation] = None,
        actions: typing.Optional[typing.List[div_action.DivAction]] = None,
        alignment_horizontal: typing.Optional[div_alignment_horizontal.DivAlignmentHorizontal] = None,
        alignment_vertical: typing.Optional[div_alignment_vertical.DivAlignmentVertical] = None,
        alpha: typing.Optional[float] = None,
        background: typing.Optional[typing.List[div_background.DivBackground]] = None,
        border: typing.Optional[div_border.DivBorder] = None,
        column_span: typing.Optional[int] = None,
        content_alignment_horizontal: typing.Optional[div_alignment_horizontal.DivAlignmentHorizontal] = None,
        content_alignment_vertical: typing.Optional[div_alignment_vertical.DivAlignmentVertical] = None,
        doubletap_actions: typing.Optional[typing.List[div_action.DivAction]] = None,
        extensions: typing.Optional[typing.List[div_extension.DivExtension]] = None,
        focus: typing.Optional[div_focus.DivFocus] = None,
        height: typing.Optional[div_size.DivSize] = None,
        id: typing.Optional[str] = None,
        layout_mode: typing.Optional[DivContainerLayoutMode] = None,
        longtap_actions: typing.Optional[typing.List[div_action.DivAction]] = None,
        margins: typing.Optional[div_edge_insets.DivEdgeInsets] = None,
        orientation: typing.Optional[DivContainerOrientation] = None,
        paddings: typing.Optional[div_edge_insets.DivEdgeInsets] = None,
        row_span: typing.Optional[int] = None,
        selected_actions: typing.Optional[typing.List[div_action.DivAction]] = None,
        tooltips: typing.Optional[typing.List[div_tooltip.DivTooltip]] = None,
        transform: typing.Optional[div_transform.DivTransform] = None,
        transition_change: typing.Optional[div_change_transition.DivChangeTransition] = None,
        transition_in: typing.Optional[div_appearance_transition.DivAppearanceTransition] = None,
        transition_out: typing.Optional[div_appearance_transition.DivAppearanceTransition] = None,
        transition_triggers: typing.Optional[typing.List[div_transition_trigger.DivTransitionTrigger]] = None,
        visibility: typing.Optional[div_visibility.DivVisibility] = None,
        visibility_action: typing.Optional[div_visibility_action.DivVisibilityAction] = None,
        visibility_actions: typing.Optional[typing.List[div_visibility_action.DivVisibilityAction]] = None,
        width: typing.Optional[div_size.DivSize] = None,
    ):
        super().__init__(
            type=type,
            accessibility=accessibility,
            action=action,
            action_animation=action_animation,
            actions=actions,
            alignment_horizontal=alignment_horizontal,
            alignment_vertical=alignment_vertical,
            alpha=alpha,
            background=background,
            border=border,
            column_span=column_span,
            content_alignment_horizontal=content_alignment_horizontal,
            content_alignment_vertical=content_alignment_vertical,
            doubletap_actions=doubletap_actions,
            extensions=extensions,
            focus=focus,
            height=height,
            id=id,
            items=items,
            layout_mode=layout_mode,
            longtap_actions=longtap_actions,
            margins=margins,
            orientation=orientation,
            paddings=paddings,
            row_span=row_span,
            selected_actions=selected_actions,
            tooltips=tooltips,
            transform=transform,
            transition_change=transition_change,
            transition_in=transition_in,
            transition_out=transition_out,
            transition_triggers=transition_triggers,
            visibility=visibility,
            visibility_action=visibility_action,
            visibility_actions=visibility_actions,
            width=width,
        )

    type: str = Field(default='container')
    accessibility: typing.Optional[div_accessibility.DivAccessibility] = Field(description='Accessibility for disabled people.')
    action: typing.Optional[div_action.DivAction] = Field(description='One action when clicking on an element. Not used if the `actions` parameter isset.')
    action_animation: typing.Optional[div_animation.DivAnimation] = Field(description='Action animation. Web supports `fade`, `scale` and `set` only.')
    actions: typing.Optional[typing.List[div_action.DivAction]] = Field(min_items=1, description='Multiple actions when clicking on an element.')
    alignment_horizontal: typing.Optional[div_alignment_horizontal.DivAlignmentHorizontal] = Field(description='Horizontal alignment of an element inside the parent element.')
    alignment_vertical: typing.Optional[div_alignment_vertical.DivAlignmentVertical] = Field(description='Vertical alignment of an element inside the parent element.')
    alpha: typing.Optional[float] = Field(description='Sets transparency of the entire element: `0` — completely transparent, `1` —opaque.')
    background: typing.Optional[typing.List[div_background.DivBackground]] = Field(min_items=1, description='Element background. It can contain multiple layers.')
    border: typing.Optional[div_border.DivBorder] = Field(description='Element stroke.')
    column_span: typing.Optional[int] = Field(description='Merges cells in a column of the [grid](div-grid.md) element.')
    content_alignment_horizontal: typing.Optional[div_alignment_horizontal.DivAlignmentHorizontal] = Field(description='Default alignment of elements. Not used if the `alignment_horizontal` parameteris set from the element field.')
    content_alignment_vertical: typing.Optional[div_alignment_vertical.DivAlignmentVertical] = Field(description='Default alignment of elements. Not used if the `alignment_vertical` parameter isset from the element field.')
    doubletap_actions: typing.Optional[typing.List[div_action.DivAction]] = Field(min_items=1, description='Action when double-clicking on an element.')
    extensions: typing.Optional[typing.List[div_extension.DivExtension]] = Field(min_items=1, description='Extensions for additional processing of an element. The list of extensions isgiven in  [DivExtension](../../extensions.dita).')
    focus: typing.Optional[div_focus.DivFocus] = Field(description='Parameters when focusing on an element or losing focus.')
    height: typing.Optional[div_size.DivSize] = Field(description='Element height. For Android: if there is text in this or in a child element,specify height in `sp` to scale the element together with the text. To learn moreabout units of size measurement, see [Layout inside the card](../../layout.dita).')
    id: typing.Optional[str] = Field(min_length=1, description='Element ID. It must be unique within the root element. It is used as`accessibilityIdentifier` on iOS.')
    items: typing.List[div.Div] = Field(min_items=1, description='Nested elements.')
    layout_mode: typing.Optional[DivContainerLayoutMode] = Field(description='Method of placing elements. `wrap` value includes the transfer of elements to thenext line if they did not fit in the previous one. If the value is set to `wrap`,then a separate line will be allocated for all elements with a size value ofmatch_parent along the main axis.')
    longtap_actions: typing.Optional[typing.List[div_action.DivAction]] = Field(min_items=1, description='Action when long-clicking on an element.')
    margins: typing.Optional[div_edge_insets.DivEdgeInsets] = Field(description='External margins from the element stroke.')
    orientation: typing.Optional[DivContainerOrientation] = Field(description='Location of elements. `overlap` value overlays elements on top of each other inthe order of enumeration. The lowest is the zero element of an array.')
    paddings: typing.Optional[div_edge_insets.DivEdgeInsets] = Field(description='Internal margins from the element stroke.')
    row_span: typing.Optional[int] = Field(description='Merges cells in a string of the [grid](div-grid.md) element.')
    selected_actions: typing.Optional[typing.List[div_action.DivAction]] = Field(min_items=1, description='List of [actions](div-action.md) to be executed when selecting an element in[pager](div-pager.md).')
    tooltips: typing.Optional[typing.List[div_tooltip.DivTooltip]] = Field(min_items=1, description='Tooltips linked to an element. A tooltip can be shown by`div-action://show_tooltip?id=`, hidden by `div-action://hide_tooltip?id=` where`id` — tooltip id.')
    transform: typing.Optional[div_transform.DivTransform] = Field(description='Transformation of the element. Applies the passed transform to the element. Thecontent that does not fit into the original view will be cut off.')
    transition_change: typing.Optional[div_change_transition.DivChangeTransition] = Field(description='Change animation. It is played when the position or size of an element changes inthe new layout.')
    transition_in: typing.Optional[div_appearance_transition.DivAppearanceTransition] = Field(description='Appearance animation. It is played when an element with a new ID appears. Tolearn more about the concept of transitions, see [Animatedtransitions](../../interaction.dita#animation/transition-animation).')
    transition_out: typing.Optional[div_appearance_transition.DivAppearanceTransition] = Field(description='Disappearance animation. It is played when an element disappears in the newlayout.')
    transition_triggers: typing.Optional[typing.List[div_transition_trigger.DivTransitionTrigger]] = Field(min_items=1, description='Animation starting triggers. Default value: `[state_change, visibility_change]`.')
    visibility: typing.Optional[div_visibility.DivVisibility] = Field(description='Element visibility.')
    visibility_action: typing.Optional[div_visibility_action.DivVisibilityAction] = Field(description='Tracking visibility of a single element. Not used if the `visibility_actions`parameter is set.')
    visibility_actions: typing.Optional[typing.List[div_visibility_action.DivVisibilityAction]] = Field(min_items=1, description='Actions when an element appears on the screen.')
    width: typing.Optional[div_size.DivSize] = Field(description='Element width.')


class DivContainerLayoutMode(str, enum.Enum):
    NO_WRAP = 'no_wrap'
    WRAP = 'wrap'


class DivContainerOrientation(str, enum.Enum):
    VERTICAL = 'vertical'
    HORIZONTAL = 'horizontal'
    OVERLAP = 'overlap'


DivContainer.update_forward_refs()
