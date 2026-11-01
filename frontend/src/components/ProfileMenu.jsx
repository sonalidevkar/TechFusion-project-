
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Pencil,
  LogOut,
  Trash2,
  X,
  Camera,
  ChevronDown,
  ShieldCheck,
  Mail,
  Phone,
  BriefcaseBusiness,
  CalendarDays,
  Save,
} from "lucide-react";

const USER_KEY = "yojanaUser";
const USERS_KEY = "yojanaUsers";
const SESSION_KEY = "yojanaLoggedInUser";

const profileTypes = [
  { value: "entrepreneur", label: "Entrepreneur" },
  { value: "business-owner", label: "Small Business Owner" },
  { value: "student", label: "Student / Aspiring Entrepreneur" },
  { value: "self-employed", label: "Self Employed" },
  { value: "other", label: "Other" },
];

const getSavedUser = () => {
  try {
    const session = JSON.parse(
      localStorage.getItem(SESSION_KEY) || "null"
    );

    const registered = JSON.parse(
      localStorage.getItem(USER_KEY) || "null"
    );

    if (!session && !registered) return null;

    return {
      ...(registered || {}),
      ...(session || {}),
    };
  } catch (error) {
    console.error("Unable to read profile:", error);
    return null;
  }
};

const getUserTypeLabel = (value) => {
  return (
    profileTypes.find((item) => item.value === value)?.label ||
    value ||
    "Not specified"
  );
};

export default function ProfileMenu() {
  const navigate = useNavigate();

  const [user, setUser] = useState(getSavedUser);
  const [menuOpen, setMenuOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [profileType, setProfileType] = useState("");
  const [photo, setPhoto] = useState("");

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const syncUser = () => {
      setUser(getSavedUser());
    };

    window.addEventListener("storage", syncUser);
    window.addEventListener("focus", syncUser);

    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener("focus", syncUser);
    };
  }, []);

  const openEditProfile = () => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setMobile(user?.mobile || "");
    setProfileType(user?.profile || "");
    setPhoto(user?.profilePhoto || "");

    setMenuOpen(false);
    setEditOpen(true);
  };

  const saveProfile = (event) => {
    event.preventDefault();

    if (!name.trim() || !mobile.trim() || !profileType) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!/^[0-9+\-\s()]{7,15}$/.test(mobile.trim())) {
      alert("Please enter a valid mobile number.");
      return;
    }

    if (!user?.email) {
      alert("User account not found. Please login again.");
      return;
    }

    setSaving(true);

    const updatedUser = {
      ...user,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobile.trim(),
      profile: profileType,
      profilePhoto: photo,
      updatedAt: new Date().toISOString(),
    };

    const sessionUser = {
      name: updatedUser.name,
      email: updatedUser.email,
      mobile: updatedUser.mobile,
      profile: updatedUser.profile,
      profilePhoto: updatedUser.profilePhoto,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    };

    try {
      const registered = JSON.parse(
        localStorage.getItem(USER_KEY) || "null"
      );

      if (
        registered &&
        registered.email?.toLowerCase() === updatedUser.email
      ) {
        localStorage.setItem(
          USER_KEY,
          JSON.stringify({
            ...registered,
            ...updatedUser,
          })
        );
      } else if (!registered) {
        localStorage.setItem(
          USER_KEY,
          JSON.stringify(updatedUser)
        );
      }

      // Update the multi-user demo collection.
      const users = JSON.parse(
        localStorage.getItem(USERS_KEY) || "[]"
      );

      if (Array.isArray(users)) {
        const userExists = users.some(
          (item) =>
            item.email?.toLowerCase() === updatedUser.email
        );

        if (userExists) {
          const updatedUsers = users.map((item) =>
            item.email?.toLowerCase() === updatedUser.email
              ? { ...item, ...updatedUser }
              : item
          );

          localStorage.setItem(
            USERS_KEY,
            JSON.stringify(updatedUsers)
          );
        }
      }

      localStorage.setItem(
        SESSION_KEY,
        JSON.stringify(sessionUser)
      );

      setUser(sessionUser);
      setEditOpen(false);
      setMenuOpen(false);

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update failed:", error);
      alert("Unable to save profile. Please try a smaller image.");
    } finally {
      setSaving(false);
    }
  };

  const handlePhoto = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Please select an image smaller than 2 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result);
    };

    reader.onerror = () => {
      alert("Unable to read this image. Please try again.");
    };

    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);

    setUser(null);
    setMenuOpen(false);

    navigate("/login");
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your locally stored YojanaSathi account?"
    );

    if (!confirmed) return;

    try {
      const emailToDelete = user?.email?.toLowerCase();

      const users = JSON.parse(
        localStorage.getItem(USERS_KEY) || "[]"
      );

      if (Array.isArray(users)) {
        const remainingUsers = users.filter(
          (item) =>
            item.email?.toLowerCase() !== emailToDelete
        );

        localStorage.setItem(
          USERS_KEY,
          JSON.stringify(remainingUsers)
        );
      }

      const registered = JSON.parse(
        localStorage.getItem(USER_KEY) || "null"
      );

      if (
        registered?.email?.toLowerCase() === emailToDelete
      ) {
        localStorage.removeItem(USER_KEY);
      }

      localStorage.removeItem(SESSION_KEY);

      setUser(null);
      setMenuOpen(false);
      setEditOpen(false);

      navigate("/");
    } catch (error) {
      console.error("Account deletion failed:", error);
      alert("Unable to delete the local account.");
    }
  };

  // LOGIN / REGISTER BUTTONS
  if (!user) {
    return (
      <div className="ys-profile-auth">
        <Link to="/login" className="ys-profile-login">
          Login
        </Link>

        <Link to="/register" className="ys-profile-register">
          Register
        </Link>
      </div>
    );
  }

  const avatar = user.profilePhoto || "";

  return (
    <div className="ys-profile-container">
      {/* SMALL NAVBAR PROFILE BUTTON */}
      <button
        type="button"
        className="ys-profile-trigger"
        onClick={() => setMenuOpen((previous) => !previous)}
        aria-expanded={menuOpen}
        aria-label="Open profile menu"
      >
        <span className="ys-profile-small-avatar">
          {avatar ? (
            <img src={avatar} alt="Profile" />
          ) : (
            <UserRound size={18} />
          )}
        </span>

        <span className="ys-profile-trigger-name">
          {user.name || "My Profile"}
        </span>

        <ChevronDown size={15} />
      </button>

      {/* PROFILE DROPDOWN */}
      {menuOpen && (
        <div className="ys-profile-dropdown">
          <div className="ys-profile-info">
            <div className="ys-profile-avatar">
              {avatar ? (
                <img src={avatar} alt="Profile" />
              ) : (
                <UserRound size={30} />
              )}
            </div>

            <div className="ys-profile-details">
              <strong>{user.name || "User"}</strong>
              <span>{user.email || "No email available"}</span>

              <small>
                <ShieldCheck size={13} />
                YojanaSathi Member
              </small>
            </div>
          </div>

          {/* REGISTERED USER DETAILS */}
          <div className="ys-profile-extra">
            <div>
              <Mail size={15} />
              <span>{user.email || "Email not available"}</span>
            </div>

            <div>
              <Phone size={15} />
              <span>{user.mobile || "Mobile not added"}</span>
            </div>

            <div>
              <BriefcaseBusiness size={15} />
              <span>{getUserTypeLabel(user.profile)}</span>
            </div>

            <div>
              <CalendarDays size={15} />
              <span>
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "Registration date unavailable"}
              </span>
            </div>
          </div>

          {/* MENU ITEMS */}
          <div className="ys-profile-menu-items">
            <button type="button" onClick={openEditProfile}>
              <Pencil size={17} />
              Edit Profile
            </button>

            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
            >
              <UserRound size={17} />
              My Dashboard
            </Link>

            <button type="button" onClick={handleLogout}>
              <LogOut size={17} />
              Logout
            </button>

            <button
              type="button"
              className="ys-delete-account"
              onClick={handleDelete}
            >
              <Trash2 size={17} />
              Delete Account
            </button>
          </div>
        </div>
      )}

      {/* EDIT PROFILE MODAL */}
      {editOpen && (
        <div
          className="ys-profile-modal-overlay"
          onClick={() => setEditOpen(false)}
        >
          <div
            className="ys-profile-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="ys-profile-modal-heading">
              <div>
                <span>ACCOUNT SETTINGS</span>
                <h2>Edit Your Profile</h2>
                <p>Update your YojanaSathi account information.</p>
              </div>

              <button
                type="button"
                className="ys-modal-close"
                onClick={() => setEditOpen(false)}
                aria-label="Close"
              >
                <X size={21} />
              </button>
            </div>

            <form onSubmit={saveProfile}>
              {/* PROFILE PHOTO */}
              <div className="ys-edit-photo">
                <div className="ys-edit-avatar">
                  {photo ? (
                    <img src={photo} alt="Profile preview" />
                  ) : (
                    <UserRound size={38} />
                  )}
                </div>

                <label className="ys-upload-photo">
                  <Camera size={16} />
                  Change Photo

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhoto}
                    hidden
                  />
                </label>
              </div>

              {/* FULL NAME */}
              <label className="ys-edit-label">
                Full Name

                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              {/* EMAIL */}
              <label className="ys-edit-label">
                Email Address

                <div className="ys-profile-input-icon">
                  <Mail size={16} />

                  <input
                    type="email"
                    value={email}
                    disabled
                  />
                </div>

                <small>
                  Email editing is disabled in this version.
                </small>
              </label>

              {/* MOBILE */}
              <label className="ys-edit-label">
                Mobile Number

                <input
                  type="tel"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  placeholder="Enter your mobile number"
                  required
                />
              </label>

              {/* USER TYPE */}
              <label className="ys-edit-label">
                User Type

                <select
                  value={profileType}
                  onChange={(event) =>
                    setProfileType(event.target.value)
                  }
                  required
                >
                  <option value="">Select your profile</option>

                  {profileTypes.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              {/* SAVE CHANGES */}
              <button
                type="submit"
                className="ys-save-profile"
                disabled={saving}
              >
                <Save size={17} />
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
