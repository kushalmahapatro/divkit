import CoreGraphics

import CommonCorePublic
import LayoutKit

public final class DivLastVisibleBoundsCache {
  private let lock = AllocatedUnfairLock()

  private var storage: [UIElementPath: Int] = [:]

  init() {}

  func lastVisibleArea(for path: UIElementPath) -> Int {
    lock.withLock {
      storage[path] ?? .zero
    }
  }

  func updateLastVisibleArea(for path: UIElementPath, area: Int) {
    lock.withLock {
      storage[path] = area
    }
  }

  func dropVisibleBounds(prefix: UIElementPath) {
    lock.withLock {
      for item in storage {
        if item.key.starts(with: prefix) {
          storage[item.key] = nil
        }
      }
    }
  }

  func reset() {
    lock.withLock {
      storage.removeAll()
    }
  }
}
