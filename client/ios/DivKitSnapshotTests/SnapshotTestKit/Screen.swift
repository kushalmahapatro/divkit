import CoreGraphics

struct Screen {
  let size: CGSize
  let scale: CGFloat

  static func makeForScale(_ scale: CGFloat) -> Screen {
    switch scale {
    case 2:
      return Screen(size: CGSize(width: 375, height: 667), scale: scale)
    default:
      return Screen(size: CGSize(width: 414, height: 736), scale: scale)
    }
  }
}
