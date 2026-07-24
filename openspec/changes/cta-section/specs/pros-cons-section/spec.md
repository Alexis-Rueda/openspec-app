## MODIFIED Requirements

### Requirement: Section uses alternating background

The ProsConsSection SHALL use the normal background (not the alternating dark background).

#### Scenario: Section renders with correct structure

- **WHEN** the home page loads
- **THEN** a section with eyebrow `"03 · Balance"` SHALL appear below the flow section
- **AND** a headline `"Ventajas y desventajas"` SHALL be visible
- **AND** a lead paragraph describing the trade-offs SHALL be visible
- **AND** two columns SHALL render side by side: "Ventajas" with green badge and "Desventajas" with red badge

#### Scenario: Section uses normal background

- **WHEN** ProsConsSection renders
- **THEN** the outer element SHALL have class `os-section` (without `os-section-alt`)
