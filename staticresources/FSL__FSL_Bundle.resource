<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>Field Service Bundle Permissions</label>
    <fieldPermissions>
        <editable>true</editable>
        <field>ServiceAppointment.IsBundle</field>
        <readable>true</readable>
    </fieldPermissions>
    <fieldPermissions>
        <editable>true</editable>
        <field>ServiceAppointment.IsBundleMember</field>
        <readable>true</readable>
    </fieldPermissions>
    <fieldPermissions>
        <editable>true</editable>
        <field>ServiceAppointment.IsManuallyBundled</field>
        <readable>true</readable>
    </fieldPermissions>
    <fieldPermissions>
        <editable>true</editable>
        <field>ServiceAppointment.RelatedBundleId</field>
        <readable>true</readable>
    </fieldPermissions>
    <pageAccesses>
        <apexPage>vf0008_BundlerDetailsLightBox</apexPage>
        <enabled>true</enabled>
    </pageAccesses>
    <fieldPermissions>
        <editable>false</editable>
        <field>ServiceTerritory.O2_Enabled__c</field>
        <readable>true</readable>
    </fieldPermissions>
</PermissionSet>
