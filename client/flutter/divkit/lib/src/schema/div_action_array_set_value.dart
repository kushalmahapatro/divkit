// Generated code. Do not modify.

import 'package:divkit/src/schema/div_typed_value.dart';
import 'package:divkit/src/utils/parsing_utils.dart';
import 'package:equatable/equatable.dart';

/// Sets the value in the array by index.
class DivActionArraySetValue extends Resolvable with EquatableMixin {
  const DivActionArraySetValue({
    required this.index,
    required this.value,
    required this.variableName,
  });

  static const type = "array_set_value";
  final Expression<int> index;
  final DivTypedValue value;
  final Expression<String> variableName;

  @override
  List<Object?> get props => [
        index,
        value,
        variableName,
      ];

  DivActionArraySetValue copyWith({
    Expression<int>? index,
    DivTypedValue? value,
    Expression<String>? variableName,
  }) =>
      DivActionArraySetValue(
        index: index ?? this.index,
        value: value ?? this.value,
        variableName: variableName ?? this.variableName,
      );

  static DivActionArraySetValue? fromJson(
    Map<String, dynamic>? json,
  ) {
    if (json == null) {
      return null;
    }
    try {
      return DivActionArraySetValue(
        index: safeParseIntExpr(
          json['index'],
        )!,
        value: safeParseObj(
          DivTypedValue.fromJson(json['value']),
        )!,
        variableName: safeParseStrExpr(
          json['variable_name']?.toString(),
        )!,
      );
    } catch (e) {
      return null;
    }
  }

  @override
  DivActionArraySetValue resolve(DivVariableContext context) {
    index.resolve(context);
    value.resolve(context);
    variableName.resolve(context);
    return this;
  }
}
