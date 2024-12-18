// Generated code. Do not modify.

import 'package:divkit/src/schema/div_dimension.dart';
import 'package:divkit/src/utils/parsing_utils.dart';
import 'package:equatable/equatable.dart';

/// A point with fixed coordinates.
class DivPoint extends Resolvable with EquatableMixin {
  const DivPoint({
    required this.x,
    required this.y,
  });

  /// `X` coordinate.
  final DivDimension x;

  /// `Y` coordinate.
  final DivDimension y;

  @override
  List<Object?> get props => [
        x,
        y,
      ];

  DivPoint copyWith({
    DivDimension? x,
    DivDimension? y,
  }) =>
      DivPoint(
        x: x ?? this.x,
        y: y ?? this.y,
      );

  static DivPoint? fromJson(
    Map<String, dynamic>? json,
  ) {
    if (json == null) {
      return null;
    }
    try {
      return DivPoint(
        x: safeParseObj(
          DivDimension.fromJson(json['x']),
        )!,
        y: safeParseObj(
          DivDimension.fromJson(json['y']),
        )!,
      );
    } catch (e) {
      return null;
    }
  }

  @override
  DivPoint resolve(DivVariableContext context) {
    x.resolve(context);
    y.resolve(context);
    return this;
  }
}
