// Generated code. Do not modify.

import 'package:equatable/equatable.dart';

import 'package:divkit/src/utils/parsing_utils.dart';


class EntityWithOptionalComplexProperty extends Resolvable with EquatableMixin  {
  const EntityWithOptionalComplexProperty({
    this.property,
  });

  static const type = "entity_with_optional_complex_property";
  final EntityWithOptionalComplexPropertyProperty? property;

  @override
  List<Object?> get props => [
        property,
      ];

  EntityWithOptionalComplexProperty copyWith({
      EntityWithOptionalComplexPropertyProperty? Function()?  property,
  }) => EntityWithOptionalComplexProperty(
      property: property != null ? property.call() : this.property,
    );

  static EntityWithOptionalComplexProperty? fromJson(Map<String, dynamic>? json,) {
    if (json == null) {
      return null;
    }
    try {
      return EntityWithOptionalComplexProperty(
        property: safeParseObj(EntityWithOptionalComplexPropertyProperty.fromJson(json['property']),),
      );
    } catch (e, st) {
      return null;
    }
  }

  EntityWithOptionalComplexProperty resolve(DivVariableContext context) {
    property?.resolve(context);
    return this;
  }
}


class EntityWithOptionalComplexPropertyProperty extends Resolvable with EquatableMixin  {
  const EntityWithOptionalComplexPropertyProperty({
    required this.value,
  });

  final Expression<Uri> value;

  @override
  List<Object?> get props => [
        value,
      ];

  EntityWithOptionalComplexPropertyProperty copyWith({
      Expression<Uri>?  value,
  }) => EntityWithOptionalComplexPropertyProperty(
      value: value ?? this.value,
    );

  static EntityWithOptionalComplexPropertyProperty? fromJson(Map<String, dynamic>? json,) {
    if (json == null) {
      return null;
    }
    try {
      return EntityWithOptionalComplexPropertyProperty(
        value: safeParseUriExpr(json['value'])!,
      );
    } catch (e, st) {
      return null;
    }
  }

  EntityWithOptionalComplexPropertyProperty resolve(DivVariableContext context) {
    value.resolve(context);
    return this;
  }
}
