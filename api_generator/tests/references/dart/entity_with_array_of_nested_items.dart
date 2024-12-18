// Generated code. Do not modify.

import 'package:equatable/equatable.dart';

import 'entity.dart';
import 'package:divkit/src/utils/parsing_utils.dart';


class EntityWithArrayOfNestedItems extends Resolvable with EquatableMixin  {
  const EntityWithArrayOfNestedItems({
    required this.items,
  });

  static const type = "entity_with_array_of_nested_items";
   // at least 1 elements
  final List<EntityWithArrayOfNestedItemsItem> items;

  @override
  List<Object?> get props => [
        items,
      ];

  EntityWithArrayOfNestedItems copyWith({
      List<EntityWithArrayOfNestedItemsItem>?  items,
  }) => EntityWithArrayOfNestedItems(
      items: items ?? this.items,
    );

  static EntityWithArrayOfNestedItems? fromJson(Map<String, dynamic>? json,) {
    if (json == null) {
      return null;
    }
    try {
      return EntityWithArrayOfNestedItems(
        items: safeParseObj(safeListMap(json['items'], (v) => safeParseObj(EntityWithArrayOfNestedItemsItem.fromJson(v),)!,),)!,
      );
    } catch (e, st) {
      return null;
    }
  }

  EntityWithArrayOfNestedItems resolve(DivVariableContext context) {
    return this;
  }
}


class EntityWithArrayOfNestedItemsItem extends Resolvable with EquatableMixin  {
  const EntityWithArrayOfNestedItemsItem({
    required this.entity,
    required this.property,
  });

  final Entity entity;
  final Expression<String> property;

  @override
  List<Object?> get props => [
        entity,
        property,
      ];

  EntityWithArrayOfNestedItemsItem copyWith({
      Entity?  entity,
      Expression<String>?  property,
  }) => EntityWithArrayOfNestedItemsItem(
      entity: entity ?? this.entity,
      property: property ?? this.property,
    );

  static EntityWithArrayOfNestedItemsItem? fromJson(Map<String, dynamic>? json,) {
    if (json == null) {
      return null;
    }
    try {
      return EntityWithArrayOfNestedItemsItem(
        entity: safeParseObj(Entity.fromJson(json['entity']),)!,
        property: safeParseStrExpr(json['property']?.toString(),)!,
      );
    } catch (e, st) {
      return null;
    }
  }

  EntityWithArrayOfNestedItemsItem resolve(DivVariableContext context) {
    entity.resolve(context);
    property.resolve(context);
    return this;
  }
}
